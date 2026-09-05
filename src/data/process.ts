export interface ProcessStep {
	number: string;
	title: string;
	description: string;
	icon: "message" | "target" | "pencil" | "rocket";
}

export const processSteps: ProcessStep[] = [
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
];
