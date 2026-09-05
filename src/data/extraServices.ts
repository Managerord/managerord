export interface ExtraService {
	title: string;
	description: string;
	icon: string;
	image: string;
}

export const extraServices: ExtraService[] = [
	{
		title: "Mantenimiento web",
		description:
			"Nos encargamos del cuidado técnico de tu sitio para que siempre esté seguro, actualizado y funcionando al 100%.",
		icon: "monitor",
		image: "/images/mockups/laptop_flotante_condo_hub.avif",
	},
	{
		title: "SEO y optimización",
		description:
			"Mejoramos tu visibilidad en buscadores y optimizamos tu sitio para atraer más tráfico y mejores resultados.",
		icon: "search",
		image: "/images/mockups/laptop_y_movil_plataformas.avif",
	},
	{
		title: "Diseño gráfico",
		description:
			"Piezas gráficas que comunican tu mensaje con claridad y refuerzan la identidad de tu marca.",
		icon: "share",
		image: "/images/mockups/cintas_portacredenciales_marcas.avif",
	},
	{
		title: "Consultoría digital",
		description:
			"Te ayudamos a tomar decisiones estratégicas basadas en datos para hacer crecer tu negocio en digital.",
		icon: "compass",
		image: "/images/mockups/laptop_y_movil_condo_hub.avif",
	},
];
