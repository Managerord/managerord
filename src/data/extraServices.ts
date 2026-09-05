import type { Locale } from "@/i18n/content";

interface LocalizedService {
	slug: string;
	title: string;
	description: string;
	seoDescription: string;
	intro: string;
	capabilities: string[];
	imageAlt: string;
}

export interface ExtraService {
	id: "maintenance" | "seo" | "graphic" | "consulting";
	image: string;
	cardImage: string;
	locales: Record<Locale, LocalizedService>;
}

export const extraServices: ExtraService[] = [
	{
		id: "maintenance",
		image: "/images/07-mantenimiento-web.avif",
		cardImage: "/images/mockups/laptop_flotante_condo_hub.avif",
		locales: {
			es: {
				slug: "mantenimiento-web",
				title: "Mantenimiento web",
				description:
					"Cuidamos tu sitio para que se mantenga seguro, actualizado y funcionando al 100%.",
				seoDescription:
					"Servicio de mantenimiento web para mantener tu sitio seguro, actualizado, rápido y disponible con soporte técnico continuo de Managero.",
				intro:
					"Un sitio web necesita atención después de publicarse. Nos ocupamos de su salud técnica para que tu equipo pueda concentrarse en el negocio.",
				capabilities: [
					"Actualizaciones técnicas y de contenido",
					"Monitoreo de funcionamiento y seguridad",
					"Corrección de errores y soporte continuo",
					"Optimización periódica de rendimiento",
				],
				imageAlt: "Sitio web administrado desde una computadora portátil",
			},
			en: {
				slug: "web-maintenance",
				title: "Web maintenance",
				description:
					"We keep your website secure, current and working at its best.",
				seoDescription:
					"Web maintenance services to keep your site secure, updated, fast and available with ongoing technical support from Managero.",
				intro:
					"A website needs attention after launch. We take care of its technical health so your team can stay focused on the business.",
				capabilities: [
					"Technical and content updates",
					"Performance and security monitoring",
					"Bug fixes and ongoing support",
					"Recurring speed optimization",
				],
				imageAlt: "Website managed from a laptop computer",
			},
		},
	},
	{
		id: "seo",
		image: "/images/08-seo-optimizacion.avif",
		cardImage: "/images/mockups/laptop_y_movil_plataformas.avif",
		locales: {
			es: {
				slug: "seo-optimizacion",
				title: "SEO y optimización",
				description:
					"Mejoramos tu visibilidad en buscadores para atraer tráfico relevante y mejores oportunidades.",
				seoDescription:
					"Estrategia SEO y optimización técnica para mejorar la visibilidad, experiencia y rendimiento orgánico de tu sitio web con Managero.",
				intro:
					"Alineamos contenido, estructura y rendimiento técnico para que buscadores y personas entiendan mejor el valor de tu sitio.",
				capabilities: [
					"Auditoría SEO técnica y de contenido",
					"Investigación de búsquedas relevantes",
					"Optimización on-page y metadatos",
					"Medición y recomendaciones de mejora",
				],
				imageAlt: "Análisis de posicionamiento y optimización de un sitio web",
			},
			en: {
				slug: "seo-optimization",
				title: "SEO and optimization",
				description:
					"We improve search visibility to attract relevant traffic and better opportunities.",
				seoDescription:
					"SEO strategy and technical optimization to improve your website's visibility, experience and organic performance with Managero.",
				intro:
					"We align content, structure and technical performance so search engines and people can better understand your website's value.",
				capabilities: [
					"Technical and content SEO audit",
					"Relevant search research",
					"On-page and metadata optimization",
					"Measurement and improvement recommendations",
				],
				imageAlt: "Website search positioning and optimization analysis",
			},
		},
	},
	{
		id: "graphic",
		image: "/images/09-diseno-grafico.avif",
		cardImage: "/images/mockups/cintas_portacredenciales_marcas.avif",
		locales: {
			es: {
				slug: "diseno-grafico",
				title: "Diseño gráfico",
				description:
					"Creamos piezas que comunican con claridad y fortalecen la identidad de tu marca.",
				seoDescription:
					"Diseño gráfico para marcas: piezas digitales e impresas coherentes, funcionales y alineadas con tu identidad visual junto a Managero.",
				intro:
					"Traducimos la esencia de tu marca a piezas visuales consistentes, desde una publicación digital hasta materiales impresos para una campaña.",
				capabilities: [
					"Piezas para redes y campañas",
					"Materiales editoriales y corporativos",
					"Diseño de papelería y aplicaciones",
					"Adaptación de sistemas visuales",
				],
				imageAlt: "Aplicaciones impresas de diferentes identidades de marca",
			},
			en: {
				slug: "graphic-design",
				title: "Graphic design",
				description:
					"We create pieces that communicate clearly and strengthen your brand identity.",
				seoDescription:
					"Graphic design for brands: coherent, functional digital and print pieces aligned with your visual identity, created by Managero.",
				intro:
					"We translate your brand essence into consistent visual pieces, from a digital post to printed campaign materials.",
				capabilities: [
					"Social media and campaign assets",
					"Editorial and corporate materials",
					"Stationery and brand applications",
					"Visual system adaptation",
				],
				imageAlt: "Printed applications for different brand identities",
			},
		},
	},
	{
		id: "consulting",
		image: "/images/10-consultoria-digital.avif",
		cardImage: "/images/mockups/laptop_y_movil_condo_hub.avif",
		locales: {
			es: {
				slug: "consultoria-digital",
				title: "Consultoría digital",
				description:
					"Te ayudamos a tomar decisiones estratégicas para hacer crecer tu negocio en digital.",
				seoDescription:
					"Consultoría digital para definir prioridades, mejorar canales y convertir objetivos de negocio en una hoja de ruta clara junto a Managero.",
				intro:
					"Analizamos tu contexto, identificamos oportunidades y convertimos objetivos amplios en decisiones digitales priorizadas y accionables.",
				capabilities: [
					"Diagnóstico de presencia digital",
					"Definición de prioridades y objetivos",
					"Hoja de ruta de canales y contenidos",
					"Acompañamiento para tomar decisiones",
				],
				imageAlt: "Planificación de una estrategia digital multiplataforma",
			},
			en: {
				slug: "digital-consulting",
				title: "Digital consulting",
				description:
					"We help you make strategic decisions to grow your business digitally.",
				seoDescription:
					"Digital consulting to define priorities, improve channels and turn business goals into a clear roadmap with Managero.",
				intro:
					"We analyze your context, identify opportunities and turn broad goals into prioritized, actionable digital decisions.",
				capabilities: [
					"Digital presence assessment",
					"Priority and goal definition",
					"Channel and content roadmap",
					"Decision-making support",
				],
				imageAlt: "Planning a multi-platform digital strategy",
			},
		},
	},
];

export const getExtraServices = (locale: Locale) =>
	extraServices.map((service) => ({
		...service,
		...service.locales[locale],
		href: `/${locale}/${locale === "es" ? "servicios" : "services"}/${service.locales[locale].slug}/`,
	}));
