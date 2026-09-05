import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
	branding: "Identidad visual",
	web: "Diseño web",
	content: "Contenido digital",
	development: "Apps y sistemas",
};

// Escape HTML to prevent XSS in email templates
const escapeHtml = (text: string | undefined): string => {
	if (!text) return "";
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};

export const server = {
	send: defineAction({
		accept: "form",
		input: z.object({
			name: z.string().min(1, "El nombre es requerido"),
			email: z.email("Correo electrónico inválido"),
			service: z.enum(["branding", "web", "content", "development"], {
				message: "Selecciona un servicio",
			}),
			message: z.string().min(1, "El mensaje es requerido"),
		}),

		handler: async (input) => {
			const { name, email, service, message } = input;

			if (!import.meta.env.RESEND_API_KEY) {
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Email service configuration is missing",
				});
			}

			const safeName = escapeHtml(name);
			const safeEmail = escapeHtml(email);
			const safeService = escapeHtml(SERVICE_LABELS[service] ?? service);
			const safeMessage = escapeHtml(message);

			const MESSAGE_CONFIRMATION = `
                <div style="font-family: 'Nunito', Arial, sans-serif; background-color: #f6f1e9; padding: 48px 20px; color: #201e1c;">
                    <div style="max-width: 640px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img
                                src="https://managerord.com/images/logo.png"
                                alt="Managero"
                                style="height: 40px; width: auto; border: 0;"
                            />
                        </div>

                        <div style="background-color: #ffffff; border: 1px solid #e7e0d7; border-radius: 24px; box-shadow: 0 12px 36px rgba(54,43,31,0.06); overflow: hidden;">
                            <div style="height: 6px; background: #f25a0a;"></div>
                            <div style="padding: 32px;">
                                <h2 style="color: #f25a0a; margin: 0 0 16px; font-size: 22px; font-weight: 800;">¡Hemos recibido tu solicitud!</h2>
                                <p style="color: #69635d; font-size: 15px; line-height: 1.7; margin: 0;">
                                    Gracias por contarnos sobre tu proyecto.<br />
                                    <br />
                                    Nuestro equipo revisará los detalles y se pondrá en contacto contigo lo antes posible.<br />
                                    <br />
                                    <span style="color: #201e1c; font-weight: 600;">Mientras tanto, ya estamos pensando en cómo hacerlo realidad.</span>
                                </p>
                            </div>
                        </div>

                        <p style="text-align: center; color: #69635d; font-size: 12px; margin-top: 18px;">
                            © ${new Date().getFullYear()} Managero. Todos los derechos reservados
                        </p>
                    </div>
                </div>
            `;

			const MESSAGE_RECEIVED = `
                <div style="font-family: 'Nunito', Arial, sans-serif; background-color: #f6f1e9; padding: 48px 20px; color: #201e1c;">
                    <div style="max-width: 640px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img
                                src="https://managerord.com/images/logo.png"
                                alt="Managero"
                                style="height: 40px; width: auto; border: 0;"
                            />
                        </div>

                        <div style="background-color: #ffffff; border: 1px solid #e7e0d7; border-radius: 24px; box-shadow: 0 12px 36px rgba(54,43,31,0.06); overflow: hidden;">
                            <div style="height: 6px; background: #f25a0a;"></div>
                            <div style="padding: 32px;">
                                <h2 style="color: #f25a0a; margin: 0 0 12px; font-size: 20px;">Nueva solicitud de contacto</h2>

                                <p style="color: #69635d; font-size: 14px; margin: 0 0 20px; line-height: 1.6;">
                                    <span style="display: inline-block; padding: 10px 14px; background: #f6f1e9; border: 1px solid #e7e0d7; border-radius: 999px; color: #201e1c; font-weight: 600;">
                                        De: ${safeName} • <a href="mailto:${safeEmail}" style="color: #f25a0a; text-decoration: none;">${safeEmail}</a>
                                    </span>
                                </p>

                                <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                                    <tr>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d; width: 30%;">Servicio:</td>
                                        <td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #201e1c; font-weight: 600;">${safeService}</td>
                                    </tr>
                                </table>

                                <div>
                                    <span style="display: block; color: #69635d; font-size: 12px; margin-bottom: 4px;">Mensaje:</span>
                                    <div style="color: #201e1c; background: #f6f1e9; padding: 12px; border-radius: 10px; border: 1px solid #e7e0d7; white-space: pre-wrap;">${safeMessage}</div>
                                </div>
                            </div>
                        </div>

                        <p style="text-align: center; color: #69635d; font-size: 12px; margin-top: 18px;">
                            © ${new Date().getFullYear()} Managero. Todos los derechos reservados
                        </p>
                    </div>
                </div>
            `;

			try {
				const data = await Promise.all([
					resend.emails.send({
						from: "Managero <hello@managerord.com>",
						to: "marias@managerord.com",
						subject: `Nueva solicitud de contacto: ${safeName}`,
						html: MESSAGE_RECEIVED,
					}),

					resend.emails.send({
						from: "Managero <hello@managerord.com>",
						to: email,
						subject: "Hemos recibido tu solicitud",
						html: MESSAGE_CONFIRMATION,
					}),
				]);

				const [adminEmail, userEmail] = data;

				if (adminEmail.error || userEmail.error) {
					throw new ActionError({
						code: "INTERNAL_SERVER_ERROR",
						message:
							adminEmail.error?.message ||
							userEmail.error?.message ||
							"Failed to send email",
					});
				}

				return {
					success: true,
					message:
						"Solicitud enviada correctamente. Nos pondremos en contacto pronto.",
				};
			} catch (error) {
				// If it's already an ActionError, re-throw it
				if (error instanceof ActionError) {
					throw error;
				}

				// Log the error for debugging (in production, use proper logging)
				console.error("Email sending error:", error);

				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message:
						error instanceof Error
							? error.message
							: "Failed to send email. Please try again later.",
				});
			}
		},
	}),
};
