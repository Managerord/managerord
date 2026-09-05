import type { Locale } from "@/i18n/content";

export interface Service {
	title: string;
	description: string;
	tag: string;
	icon: string;
	image: string;
	class: string;
	overlay: boolean;
}

const servicesByLocale: Record<Locale, Service[]> = {
	es: [
		{
			title: "Branding",
			description: "Construimos identidades de marca sólidas y memorables.",
			tag: "Estrategia",
			icon: "sparkles",
			image: "/images/mockups/sudadera_divinas_beauty_salon.avif",
			class: "text-white",
			overlay: true,
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
	],
	en: [
		{
			title: "Branding",
			description: "We build strong, memorable brand identities.",
			tag: "Strategy",
			icon: "sparkles",
			image: "/images/mockups/sudadera_divinas_beauty_salon.avif",
			class: "text-white",
			overlay: true,
		},
		{
			title: "Web Design",
			description: "Custom websites focused on experience and conversion.",
			tag: "Design",
			icon: "layout",
			image: "/images/mockups/laptop_flotante_condo_hub.avif",
			class: "text-white",
			overlay: true,
		},
		{
			title: "Development",
			description: "Scalable digital solutions built with modern technology.",
			tag: "Technology",
			icon: "code",
			image: "/images/mockups/pantallas_aplicacion_reciclaje.avif",
			class: "text-white",
			overlay: true,
		},
		{
			title: "Digital Marketing",
			description: "Strategies that connect your brand with the right people.",
			tag: "Strategy",
			icon: "megaphone",
			image: "/images/mockups/laptop_y_movil_condo_hub.avif",
			class: "text-white",
			overlay: true,
		},
	],
};

export const getServices = (locale: Locale) => servicesByLocale[locale];
