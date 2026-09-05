export interface Service {
	title: string;
	description: string;
	tag: string;
	icon: string;
	image: string;
	class: string;
	overlay: boolean;
}

export const services: Service[] = [
	{
		title: "Branding",
		description: "Construimos identidades de marca sólidas y memorables.",
		tag: "Estrategia",
		icon: "sparkles",
		image: "/images/mockups/sudadera_divinas_beauty_salon.avif",
		class: "text-white",
		overlay: false,
	},
	{
		title: "Diseño Web",
		description: "Sitios web a medida enfocados en experiencia y conversión.",
		tag: "Diseño",
		icon: "layout",
		image: "/images/mockups/laptop_flotante_condo_hub.avif",
		class: "text-white",
		overlay: true,
	},
	{
		title: "Desarrollo",
		description:
			"Soluciones digitales escalables construidas con tecnología moderna.",
		tag: "Tecnología",
		icon: "code",
		image: "/images/mockups/pantallas_aplicacion_reciclaje.avif",
		class: "text-white",
		overlay: true,
	},
	{
		title: "Marketing Digital",
		description:
			"Estrategias que conectan tu marca con las personas correctas.",
		tag: "Estrategia",
		icon: "megaphone",
		image: "/images/mockups/laptop_y_movil_condo_hub.avif",
		class: "text-white",
		overlay: true,
	},
];
