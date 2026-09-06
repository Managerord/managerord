import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";
import { ui } from "@/i18n/content";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

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
			locale: z.enum(["es", "en"]).default("es"),
			name: z.string().min(1, "El nombre es requerido"),
			email: z.email("Correo electrónico inválido"),
			company: z.string().max(120).optional(),
			phone: z.string().max(40).optional(),
			service: z.enum(
				[
					"branding",
					"web",
					"content",
					"apps",
					"marketing",
					"maintenance",
					"seo",
					"graphic",
					"consulting",
				],
				{
					message: "Selecciona un servicio",
				},
			),
			budget: z.string().max(40).optional(),
			timeline: z.string().max(120).optional(),
			message: z.string().min(1, "El mensaje es requerido"),
		}),

		handler: async (input) => {
			const {
				locale,
				name,
				email,
				company,
				phone,
				service,
				budget,
				timeline,
				message,
			} = input;
			const isEnglish = locale === "en";
			const publicError = isEnglish
				? "We couldn't send your request. Please try again."
				: "No pudimos enviar tu solicitud. Inténtalo de nuevo.";

			if (!import.meta.env.RESEND_API_KEY) {
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: publicError,
				});
			}

			const safeName = escapeHtml(name);
			const safeEmail = escapeHtml(email);
			const safeCompany = escapeHtml(company);
			const safePhone = escapeHtml(phone);
			const safeService = escapeHtml(ui[locale].form.services[service]);
			const safeBudget = escapeHtml(budget);
			const safeTimeline = escapeHtml(timeline);
			const safeMessage = escapeHtml(message);
			const confirmationTitle = isEnglish
				? "We received your request!"
				: "¡Hemos recibido tu solicitud!";
			const confirmationBody = isEnglish
				? "Thank you for telling us about your project.<br /><br />Our team will review the details and get in touch with you as soon as possible.<br /><br /><strong>Meanwhile, we're already thinking about how to bring it to life.</strong>"
				: "Gracias por contarnos sobre tu proyecto.<br /><br />Nuestro equipo revisará los detalles y se pondrá en contacto contigo lo antes posible.<br /><br /><strong>Mientras tanto, ya estamos pensando en cómo hacerlo realidad.</strong>";

			const MESSAGE_CONFIRMATION = `
                <div style="font-family: 'Nunito', Arial, sans-serif; background-color: #f6f1e9; padding: 48px 20px; color: #201e1c;">
                    <div style="max-width: 640px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img
                                src="https:
                                alt="Managero"
                                style="height: 40px; width: auto; border: 0;"
                            />
                        </div>

                        <div style="background-color: #ffffff; border: 1px solid #e7e0d7; border-radius: 24px; box-shadow: 0 12px 36px rgba(54,43,31,0.06); overflow: hidden;">
                            <div style="height: 6px; background: #f25a0a;"></div>
                            <div style="padding: 32px;">
								<h2 style="color: #f25a0a; margin: 0 0 16px; font-size: 22px; font-weight: 800;">${confirmationTitle}</h2>
								<p style="color: #69635d; font-size: 15px; line-height: 1.7; margin: 0;">
									${confirmationBody}
                                </p>
                            </div>
                        </div>

                        <p style="text-align: center; color: #69635d; font-size: 12px; margin-top: 18px;">
							© ${new Date().getFullYear()} Managero. ${isEnglish ? "All rights reserved" : "Todos los derechos reservados"}
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
									${safeCompany ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Marca:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeCompany}</td></tr>` : ""}
									${safePhone ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Teléfono:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safePhone}</td></tr>` : ""}
									${safeBudget ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Presupuesto:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeBudget}</td></tr>` : ""}
									${safeTimeline ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7; color: #69635d;">Inicio:</td><td style="padding: 8px 0; border-bottom: 1px solid #e7e0d7;">${safeTimeline}</td></tr>` : ""}
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
						subject: isEnglish
							? "We received your request"
							: "Hemos recibido tu solicitud",
						html: MESSAGE_CONFIRMATION,
					}),
				]);

				const [adminEmail, userEmail] = data;

				if (adminEmail.error || userEmail.error) {
					throw new ActionError({
						code: "INTERNAL_SERVER_ERROR",
						message: publicError,
					});
				}

				return {
					success: true,
					message: isEnglish
						? "Request sent successfully. We'll be in touch soon."
						: "Solicitud enviada correctamente. Nos pondremos en contacto pronto.",
				};
			} catch (error) {
				if (error instanceof ActionError) {
					throw error;
				}

				console.error("Email sending error:", error);

				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: publicError,
				});
			}
		},
	}),
};
