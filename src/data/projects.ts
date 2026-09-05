import type { Locale } from "@/i18n/content";

export interface Project {
	title: string;
	category: string;
	image: string;
}

const projectsByLocale: Record<Locale, Project[]> = {
	es: [
		{
			title: "Innovative",
			category: "Branding",
			image: "/images/mockups/gorra_y_taza_innovative.avif",
		},
		{
			title: "Maps for Mom & El Elyon",
			category: "Branding",
			image: "/images/mockups/botellas_marcas.avif",
		},
		{
			title: "Portafolio de marcas",
			category: "Identidad visual",
			image: "/images/mockups/bolsas_y_gorra_marcas.avif",
		},
		{
			title: "Aplicaciones de marca",
			category: "Diseño gráfico",
			image: "/images/mockups/textiles_y_taza_marcas.avif",
		},
	],
	en: [
		{
			title: "Innovative",
			category: "Branding",
			image: "/images/mockups/gorra_y_taza_innovative.avif",
		},
		{
			title: "Maps for Mom & El Elyon",
			category: "Branding",
			image: "/images/mockups/botellas_marcas.avif",
		},
		{
			title: "Brand portfolio",
			category: "Visual identity",
			image: "/images/mockups/bolsas_y_gorra_marcas.avif",
		},
		{
			title: "Brand applications",
			category: "Graphic design",
			image: "/images/mockups/textiles_y_taza_marcas.avif",
		},
	],
};

export const getProjects = (locale: Locale) => projectsByLocale[locale];
