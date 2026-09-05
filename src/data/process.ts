import type { Locale } from "@/i18n/content";

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
	icon: "message" | "target" | "pencil" | "rocket";
}

const processByLocale: Record<Locale, ProcessStep[]> = {
	es: [
		{
			number: "01",
			title: "Conocemos",
			description:
				"Escuchamos tu idea, entendemos tu objetivo y analizamos tu negocio y tu audiencia.",
			icon: "message",
		},
		{
			number: "02",
			title: "Definimos",
			description:
				"Trazamos la estrategia, planeamos cada detalle y alineamos caminos al éxito.",
			icon: "target",
		},
		{
			number: "03",
			title: "Creamos",
			description:
				"Diseñamos, desarrollamos y damos vida a tu proyecto con calidad y creatividad.",
			icon: "pencil",
		},
		{
			number: "04",
			title: "Entregamos",
			description:
				"Probamos, optimizamos y entregamos una solución sólida para generar impacto.",
			icon: "rocket",
		},
	],
	en: [
		{
			number: "01",
			title: "Discover",
			description:
				"We listen to your idea, understand the goal and learn about your business and audience.",
			icon: "message",
		},
		{
			number: "02",
			title: "Define",
			description:
				"We shape the strategy, plan every detail and align the path to success.",
			icon: "target",
		},
		{
			number: "03",
			title: "Create",
			description:
				"We design, develop and bring your project to life with quality and creativity.",
			icon: "pencil",
		},
		{
			number: "04",
			title: "Deliver",
			description:
				"We test, optimize and deliver a solid solution designed to make an impact.",
			icon: "rocket",
		},
	],
};

export const getProcessSteps = (locale: Locale) => processByLocale[locale];
