import type { Locale } from "@/i18n/content";

export type ServiceId =
	| "branding"
	| "web"
	| "apps"
	| "marketing"
	| "maintenance"
	| "seo"
	| "graphic"
	| "consulting";

export interface ServiceDetailBlock {
	title: string;
	text: string;
}

export interface LocalizedService {
	slug: string;
	title: string;
	h1: string;
	seoTitle: string;
	description: string;
	seoDescription: string;
	intro: string;
	capabilities: string[];
	details: ServiceDetailBlock[];
	imageAlt: string;
}

export interface Service {
	id: ServiceId;
	featured: boolean;
	image: string;
	imageWidth: number;
	imageHeight: number;
	cardImage: string;
	ogImage: string;
	class?: string;
	overlay?: boolean;
	locales: Record<Locale, LocalizedService>;
}

export const services: Service[] = [
	{
		id: "branding",
		featured: true,
		image: "/images/02-identidad-visual.avif",
		imageWidth: 1122,
		imageHeight: 1402,
		cardImage: "/images/mockups/sudadera_divinas_beauty_salon.avif",
		ogImage: "/images/og/branding.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "branding",
				title: "Branding",
				h1: "Branding e identidad de marca",
				seoTitle: "Branding e identidad de marca en Santo Domingo | Managero",
				description: "Construimos identidades de marca sólidas y memorables.",
				seoDescription:
					"Agencia de branding en Santo Domingo: estrategia, naming, sistema visual y manual de marca para identidades coherentes. Conversemos con Managero.",
				intro:
					"Una marca no es solo un logo. Definimos qué dice, cómo se ve y cómo suena, para que se reconozca igual en una tarjeta, en una tienda o en una pantalla.",
				capabilities: [
					"Estrategia y posicionamiento de marca",
					"Naming y arquitectura de marca",
					"Diseño de logotipo y sistema visual",
					"Paleta cromática, tipografía e iconografía",
					"Manual de marca y guías de uso",
					"Aplicaciones en papelería, empaque y digital",
				],
				details: [
					{
						title: "Empezamos por la estrategia",
						text: "Antes de dibujar nada entendemos a quién le hablas, contra quién compites y qué te hace distinto en tu mercado. Esa base define el territorio visual y evita rediseños costosos seis meses después.",
					},
					{
						title: "Un sistema, no una pieza suelta",
						text: "Entregamos el sistema visual completo: logotipo y sus variantes, colores, tipografías, iconos y reglas de uso. Tu equipo puede crear piezas nuevas sin perder coherencia ni depender de nosotros para cada publicación.",
					},
					{
						title: "Probado en el mundo real",
						text: "Aplicamos la identidad donde va a vivir: rótulos, empaques, redes sociales, uniformes, facturas y tu sitio web. Si algo no funciona a tamaño pequeño o en blanco y negro, lo ajustamos antes de entregar.",
					},
				],
				imageAlt:
					"Sistema de identidad visual aplicado en papelería y empaques de marca",
			},
			en: {
				slug: "branding",
				title: "Branding",
				h1: "Branding and brand identity",
				seoTitle: "Branding and brand identity in Santo Domingo | Managero",
				description: "We build strong, memorable brand identities.",
				seoDescription:
					"Branding agency in Santo Domingo: strategy, naming, visual system and brand guidelines for coherent identities. Let's talk with Managero.",
				intro:
					"A brand is more than a logo. We define what it says, how it looks and how it sounds, so it is recognizable on a business card, in a store or on a screen.",
				capabilities: [
					"Brand strategy and positioning",
					"Naming and brand architecture",
					"Logo design and visual system",
					"Color palette, typography and iconography",
					"Brand guidelines and usage rules",
					"Stationery, packaging and digital applications",
				],
				details: [
					{
						title: "Strategy comes first",
						text: "Before drawing anything we map who you are talking to, who you compete against and what makes you different in your market. That foundation defines the visual territory and prevents costly redesigns six months later.",
					},
					{
						title: "A system, not a single piece",
						text: "You get the complete visual system: logo and its variants, colors, typefaces, icons and usage rules. Your team can create new pieces without losing consistency or depending on us for every post.",
					},
					{
						title: "Tested in the real world",
						text: "We apply the identity where it will live: signage, packaging, social media, uniforms, invoices and your website. If something breaks at small sizes or in black and white, we fix it before delivery.",
					},
				],
				imageAlt:
					"Visual identity system applied to brand stationery and packaging",
			},
		},
	},
	{
		id: "web",
		featured: true,
		image: "/images/03-diseno-web.avif",
		imageWidth: 1003,
		imageHeight: 1568,
		cardImage: "/images/mockups/laptop_flotante_condo_hub.avif",
		ogImage: "/images/og/web.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "diseno-web",
				title: "Diseño Web",
				h1: "Diseño web a medida",
				seoTitle: "Diseño web a medida en República Dominicana | Managero",
				description:
					"Sitios web a medida enfocados en experiencia y conversión.",
				seoDescription:
					"Diseño web a medida en República Dominicana: sitios rápidos, responsivos y pensados para convertir visitas en clientes. Conversemos con Managero.",
				intro:
					"Diseñamos el sitio alrededor de lo que tu negocio necesita que pase: que te escriban, que te llamen, que compren. Todo lo demás está al servicio de eso.",
				capabilities: [
					"Arquitectura de información y wireframes",
					"Diseño de interfaz a medida",
					"Maquetación responsiva para móvil y escritorio",
					"Optimización de velocidad y Core Web Vitals",
					"SEO técnico y metadatos desde el día uno",
					"Capacitación para que administres el contenido",
				],
				details: [
					{
						title: "Primero móvil, siempre",
						text: "La mayor parte del tráfico llega desde el celular. Diseñamos y probamos primero en pantallas pequeñas y después escalamos a escritorio, nunca al revés.",
					},
					{
						title: "Rápido no es un extra",
						text: "Un sitio lento pierde visitas antes de terminar de cargar. Trabajamos con imágenes optimizadas, tipografías controladas y el mínimo JavaScript necesario para que las páginas abran rápido incluso con conexión móvil irregular.",
					},
					{
						title: "Pensado para que te encuentren",
						text: "Cada página sale con su título, su descripción, su estructura de encabezados y sus datos estructurados en orden. No es un añadido posterior: viene desde la primera maqueta.",
					},
				],
				imageAlt: "Diseño de un sitio web responsivo en escritorio y móvil",
			},
			en: {
				slug: "web-design",
				title: "Web Design",
				h1: "Custom web design",
				seoTitle: "Custom web design in the Dominican Republic | Managero",
				description: "Custom websites focused on experience and conversion.",
				seoDescription:
					"Custom web design in the Dominican Republic: fast, responsive sites built to turn visits into customers. Let's talk with Managero.",
				intro:
					"We design the site around what your business needs to happen: that people write, call or buy. Everything else exists to serve that.",
				capabilities: [
					"Information architecture and wireframes",
					"Custom interface design",
					"Responsive layout for mobile and desktop",
					"Speed and Core Web Vitals optimization",
					"Technical SEO and metadata from day one",
					"Training so you can manage the content",
				],
				details: [
					{
						title: "Mobile first, always",
						text: "Most traffic arrives from a phone. We design and test on small screens first and then scale up to desktop, never the other way around.",
					},
					{
						title: "Fast is not an extra",
						text: "A slow site loses visitors before it finishes loading. We work with optimized images, controlled typefaces and the minimum JavaScript required so pages open quickly even on an unstable mobile connection.",
					},
					{
						title: "Built to be found",
						text: "Every page ships with its title, description, heading structure and structured data in order. It is not bolted on afterwards: it starts with the first wireframe.",
					},
				],
				imageAlt: "Responsive website design shown on desktop and mobile",
			},
		},
	},
	{
		id: "apps",
		featured: true,
		image: "/images/05-apps-sistemas.avif",
		imageWidth: 1122,
		imageHeight: 1402,
		cardImage: "/images/mockups/pantallas_aplicacion_reciclaje.avif",
		ogImage: "/images/og/apps.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "apps",
				title: "Apps y sistemas",
				h1: "Desarrollo de apps móviles y web a medida",
				seoTitle: "Desarrollo de apps móviles y web en RD | Managero",
				description:
					"Apps móviles y plataformas a medida, construidas para escalar.",
				seoDescription:
					"Desarrollo de apps móviles y web a medida en República Dominicana: producto, integraciones y plataformas que escalan, junto a Managero.",
				intro:
					"Cuando el proceso ya no cabe en una hoja de cálculo ni en una plantilla, construimos la app: móvil, web o las dos, alrededor de lo que tu operación necesita resolver.",
				capabilities: [
					"Apps móviles para iOS y Android",
					"Aplicaciones y plataformas web a medida",
					"Integraciones con APIs y servicios externos",
					"Paneles de administración y reportes",
					"Publicación en App Store y Google Play",
					"Despliegue, monitoreo y mantenimiento",
				],
				details: [
					{
						title: "Empezamos por el proceso, no por el código",
						text: "Antes de elegir tecnología mapeamos cómo trabaja hoy tu equipo y dónde se pierde el tiempo. Una app solo vale la pena si elimina trabajo manual real.",
					},
					{
						title: "Móvil y web, una sola marca",
						text: "La app hereda el sistema visual de tu identidad, así que se siente parte de la marca y no un producto aparte. Cuando el proyecto lo permite, trabajamos móvil y web sobre una base compartida.",
					},
					{
						title: "Entregas por partes",
						text: "Trabajamos en versiones cortas y funcionales para que pruebes la app con usuarios reales desde las primeras semanas y puedas corregir el rumbo antes de que sea caro hacerlo.",
					},
				],
				imageAlt: "Pantallas de una aplicación móvil desarrollada por Managero",
			},
			en: {
				slug: "apps",
				title: "Apps and systems",
				h1: "Custom mobile and web app development",
				seoTitle: "Mobile and web app development in the DR | Managero",
				description: "Custom mobile apps and platforms built to scale.",
				seoDescription:
					"Custom mobile and web app development in the Dominican Republic: product, integrations and platforms that scale, with Managero.",
				intro:
					"When the process no longer fits in a spreadsheet or a template, we build the app: mobile, web or both, around what your operation actually needs to solve.",
				capabilities: [
					"Mobile apps for iOS and Android",
					"Custom web applications and platforms",
					"API and third-party service integrations",
					"Admin dashboards and reporting",
					"App Store and Google Play publishing",
					"Deployment, monitoring and maintenance",
				],
				details: [
					{
						title: "We start with the process, not the code",
						text: "Before choosing any technology we map how your team works today and where time is lost. An app is only worth it if it removes real manual work.",
					},
					{
						title: "Mobile and web, one brand",
						text: "The app inherits the visual system from your identity, so it feels like part of the brand rather than a separate product. Where the project allows, we build mobile and web on a shared base.",
					},
					{
						title: "Delivered in increments",
						text: "We work in short, functional releases so you can test the app with real users from the first weeks and correct course before it gets expensive.",
					},
				],
				imageAlt: "Screens from a mobile application developed by Managero",
			},
		},
	},
	{
		id: "marketing",

		featured: false,
		image: "/images/04-contenido-digital.avif",
		imageWidth: 1122,
		imageHeight: 1402,
		cardImage: "/images/mockups/laptop_y_movil_condo_hub.avif",
		ogImage: "/images/og/marketing.jpg",
		class: "text-white",
		overlay: true,
		locales: {
			es: {
				slug: "marketing-digital",
				title: "Marketing Digital",
				h1: "Marketing digital para marcas",
				seoTitle: "Marketing digital para marcas en Santo Domingo | Managero",
				description:
					"Estrategias que conectan tu marca con las personas correctas.",
				seoDescription:
					"Marketing digital en Santo Domingo: contenido, campañas y medición para conectar tu marca con las personas correctas. Conversemos con Managero.",
				intro:
					"Publicar por publicar no mueve un negocio. Definimos a quién le hablas, qué le vas a decir y cómo vas a saber si funcionó.",
				capabilities: [
					"Estrategia de contenido y calendario editorial",
					"Gestión de redes sociales",
					"Campañas pagadas en Meta y Google",
					"Email marketing y automatizaciones",
					"Analítica, embudos y reportes mensuales",
					"Producción de piezas gráficas y audiovisuales",
				],
				details: [
					{
						title: "Una estrategia antes que un calendario",
						text: "Arrancamos definiendo objetivo, audiencia y mensaje. Sin eso, un calendario de publicaciones es solo trabajo constante sin dirección.",
					},
					{
						title: "Contenido que se parece a tu marca",
						text: "Las piezas salen del mismo sistema visual de tu identidad, así que campaña, sitio web y redes se ven como una sola marca y no como tres proveedores distintos.",
					},
					{
						title: "Medimos lo que importa",
						text: "Seguimos las métricas conectadas al negocio —solicitudes, mensajes, ventas— y no solo alcance o likes. Cada mes revisamos qué repetir y qué descartar.",
					},
				],
				imageAlt:
					"Piezas de contenido digital y campañas de marca en redes sociales",
			},
			en: {
				slug: "digital-marketing",
				title: "Digital Marketing",
				h1: "Digital marketing for brands",
				seoTitle: "Digital marketing for brands in Santo Domingo | Managero",
				description:
					"Strategies that connect your brand with the right people.",
				seoDescription:
					"Digital marketing in Santo Domingo: content, campaigns and measurement to connect your brand with the right people. Let's talk with Managero.",
				intro:
					"Posting for the sake of posting does not move a business. We define who you are talking to, what you will say and how you will know whether it worked.",
				capabilities: [
					"Content strategy and editorial calendar",
					"Social media management",
					"Paid campaigns on Meta and Google",
					"Email marketing and automation",
					"Analytics, funnels and monthly reporting",
					"Graphic and audiovisual asset production",
				],
				details: [
					{
						title: "Strategy before calendar",
						text: "We start by defining the goal, the audience and the message. Without that, a posting calendar is just constant work with no direction.",
					},
					{
						title: "Content that looks like your brand",
						text: "Every asset comes from the same visual system as your identity, so campaign, website and social feel like one brand instead of three different vendors.",
					},
					{
						title: "We measure what matters",
						text: "We track the metrics tied to the business — enquiries, messages, sales — not just reach or likes. Every month we review what to repeat and what to drop.",
					},
				],
				imageAlt: "Digital content assets and brand campaigns on social media",
			},
		},
	},
	{
		id: "maintenance",
		featured: false,
		image: "/images/07-mantenimiento-web.avif",
		imageWidth: 1499,
		imageHeight: 1000,
		cardImage: "/images/mockups/laptop_flotante_condo_hub.avif",
		ogImage: "/images/og/maintenance.jpg",
		locales: {
			es: {
				slug: "mantenimiento-web",
				title: "Mantenimiento web",
				h1: "Mantenimiento web y soporte técnico continuo",
				seoTitle: "Mantenimiento web y soporte técnico en RD | Managero",
				description:
					"Cuidamos tu sitio para que se mantenga seguro, actualizado y funcionando al 100%.",
				seoDescription:
					"Mantenimiento web en República Dominicana para mantener tu sitio seguro, actualizado, rápido y disponible, con soporte técnico continuo de Managero.",
				intro:
					"Un sitio web necesita atención después de publicarse. Nos ocupamos de su salud técnica para que tu equipo pueda concentrarse en el negocio.",
				capabilities: [
					"Actualizaciones técnicas y de contenido",
					"Monitoreo de funcionamiento y seguridad",
					"Copias de seguridad y plan de recuperación",
					"Corrección de errores y soporte continuo",
					"Optimización periódica de rendimiento",
					"Reporte mensual del estado del sitio",
				],
				details: [
					{
						title: "Un sitio no se termina el día que se publica",
						text: "Las dependencias se desactualizan, los certificados vencen y los formularios dejan de enviar sin avisar. Revisamos todo eso de forma periódica para que no te enteres por un cliente.",
					},
					{
						title: "Seguridad antes del incidente",
						text: "Mantenemos las dependencias al día, vigilamos los accesos y guardamos copias verificadas. Recuperar un sitio caído cuesta bastante más que prevenirlo.",
					},
					{
						title: "Siempre sabes qué se hizo",
						text: "Cada mes recibes un reporte con lo que se actualizó, lo que se corrigió y lo que recomendamos atender, sin lenguaje técnico innecesario.",
					},
				],
				imageAlt: "Sitio web administrado desde una computadora portátil",
			},
			en: {
				slug: "web-maintenance",
				title: "Web maintenance",
				h1: "Web maintenance and ongoing technical support",
				seoTitle: "Web maintenance and technical support in the DR | Managero",
				description:
					"We keep your website secure, current and working at its best.",
				seoDescription:
					"Web maintenance in the Dominican Republic to keep your site secure, updated, fast and available, with ongoing technical support from Managero.",
				intro:
					"A website needs attention after launch. We take care of its technical health so your team can stay focused on the business.",
				capabilities: [
					"Technical and content updates",
					"Performance and security monitoring",
					"Backups and a recovery plan",
					"Bug fixes and ongoing support",
					"Recurring speed optimization",
					"Monthly site health report",
				],
				details: [
					{
						title: "A site is not finished on launch day",
						text: "Dependencies fall behind, certificates expire and forms stop sending without warning. We check all of it on a schedule so you never hear about it from a client first.",
					},
					{
						title: "Security before the incident",
						text: "We keep dependencies current, watch access and store verified backups. Recovering a site that is already down costs considerably more than preventing it.",
					},
					{
						title: "You always know what was done",
						text: "Every month you get a report covering what was updated, what was fixed and what we recommend addressing, without unnecessary technical language.",
					},
				],
				imageAlt: "Website managed from a laptop computer",
			},
		},
	},
	{
		id: "seo",
		featured: false,
		image: "/images/08-seo-optimizacion.avif",
		imageWidth: 1500,
		imageHeight: 1000,
		cardImage: "/images/mockups/laptop_y_movil_plataformas.avif",
		ogImage: "/images/og/seo.jpg",
		locales: {
			es: {
				slug: "seo-optimizacion",
				title: "SEO y optimización",
				h1: "SEO y optimización web",
				seoTitle: "SEO y optimización web en República Dominicana | Managero",
				description:
					"Mejoramos tu visibilidad en buscadores para atraer tráfico relevante y mejores oportunidades.",
				seoDescription:
					"SEO en República Dominicana: auditoría técnica, investigación de búsquedas y optimización on-page para mejorar tu visibilidad orgánica con Managero.",
				intro:
					"Alineamos contenido, estructura y rendimiento técnico para que buscadores y personas entiendan mejor el valor de tu sitio.",
				capabilities: [
					"Auditoría SEO técnica y de contenido",
					"Investigación de búsquedas y competencia",
					"Optimización on-page, metadatos y encabezados",
					"SEO local y perfil de Google Business",
					"Core Web Vitals y velocidad de carga",
					"Medición en Search Console y reportes",
				],
				details: [
					{
						title: "Primero lo técnico",
						text: "Si Google no puede rastrear, entender o cargar tu sitio, ningún contenido lo va a salvar. Arrancamos por indexación, estructura, velocidad y datos estructurados.",
					},
					{
						title: "Búsquedas con intención real",
						text: "Priorizamos las búsquedas con intención de compra de tu mercado real, antes que términos genéricos donde compites contra medio continente.",
					},
					{
						title: "Resultados que puedes verificar",
						text: "Dejamos Search Console y la analítica configuradas, con un punto de partida medido, para que puedas comprobar tú mismo qué cambió y cuándo.",
					},
				],
				imageAlt: "Análisis de posicionamiento y optimización de un sitio web",
			},
			en: {
				slug: "seo-optimization",
				title: "SEO and optimization",
				h1: "SEO and web optimization",
				seoTitle:
					"SEO and web optimization in the Dominican Republic | Managero",
				description:
					"We improve search visibility to attract relevant traffic and better opportunities.",
				seoDescription:
					"SEO in the Dominican Republic: technical audit, keyword research and on-page optimization to improve your organic visibility with Managero.",
				intro:
					"We align content, structure and technical performance so search engines and people can better understand your website's value.",
				capabilities: [
					"Technical and content SEO audit",
					"Keyword and competitor research",
					"On-page, metadata and heading optimization",
					"Local SEO and Google Business Profile",
					"Core Web Vitals and load speed",
					"Search Console measurement and reporting",
				],
				details: [
					{
						title: "Technical foundations first",
						text: "If Google cannot crawl, understand or load your site, no amount of content will save it. We start with indexing, structure, speed and structured data.",
					},
					{
						title: "Searches with real intent",
						text: "We prioritize buying-intent searches from your actual market, over generic terms where you compete against half a continent.",
					},
					{
						title: "Results you can verify",
						text: "We leave Search Console and analytics configured, with a measured starting point, so you can check for yourself what changed and when.",
					},
				],
				imageAlt: "Website search positioning and optimization analysis",
			},
		},
	},
	{
		id: "graphic",
		featured: false,
		image: "/images/09-diseno-grafico.avif",
		imageWidth: 1500,
		imageHeight: 1000,
		cardImage: "/images/mockups/cintas_portacredenciales_marcas.avif",
		ogImage: "/images/og/graphic.jpg",
		locales: {
			es: {
				slug: "diseno-grafico",
				title: "Diseño gráfico",
				h1: "Diseño gráfico para marcas",
				seoTitle: "Diseño gráfico para marcas en Santo Domingo | Managero",
				description:
					"Creamos piezas que comunican con claridad y fortalecen la identidad de tu marca.",
				seoDescription:
					"Diseño gráfico en Santo Domingo: piezas digitales e impresas coherentes con tu identidad visual y listas para producción, junto a Managero.",
				intro:
					"Traducimos la esencia de tu marca a piezas visuales consistentes, desde una publicación digital hasta materiales impresos para una campaña.",
				capabilities: [
					"Piezas para redes y campañas",
					"Materiales editoriales y corporativos",
					"Papelería, empaques y señalética",
					"Presentaciones y documentos de marca",
					"Adaptación de sistemas visuales a nuevos formatos",
					"Archivos listos para imprenta y producción",
				],
				details: [
					{
						title: "Coherencia en cada pieza",
						text: "Trabajamos siempre desde tu sistema de marca: mismos colores, mismas tipografías, mismas reglas. Una campaña no debería parecer de otra empresa.",
					},
					{
						title: "Pensado para producción",
						text: "Entregamos los archivos en el formato que pide la imprenta o la plataforma: perfiles de color correctos, sangrados, resoluciones y versiones editables.",
					},
					{
						title: "Adaptado a cada formato",
						text: "Una misma idea no se ve igual en una valla, en una historia de Instagram y en una tarjeta de presentación. Ajustamos composición y jerarquía para cada soporte.",
					},
				],
				imageAlt: "Aplicaciones impresas de diferentes identidades de marca",
			},
			en: {
				slug: "graphic-design",
				title: "Graphic design",
				h1: "Graphic design for brands",
				seoTitle: "Graphic design for brands in Santo Domingo | Managero",
				description:
					"We create pieces that communicate clearly and strengthen your brand identity.",
				seoDescription:
					"Graphic design in Santo Domingo: digital and print pieces consistent with your visual identity and ready for production, created by Managero.",
				intro:
					"We translate your brand essence into consistent visual pieces, from a digital post to printed campaign materials.",
				capabilities: [
					"Social media and campaign assets",
					"Editorial and corporate materials",
					"Stationery, packaging and signage",
					"Presentations and brand documents",
					"Adapting visual systems to new formats",
					"Print-ready and production-ready files",
				],
				details: [
					{
						title: "Consistency in every piece",
						text: "We always work from your brand system: same colors, same typefaces, same rules. A campaign should never look like it came from another company.",
					},
					{
						title: "Made for production",
						text: "We deliver files in the format the printer or platform expects: correct color profiles, bleeds, resolutions and editable versions.",
					},
					{
						title: "Adapted to each format",
						text: "The same idea does not read the same on a billboard, in an Instagram story and on a business card. We adjust composition and hierarchy for each medium.",
					},
				],
				imageAlt: "Printed applications for different brand identities",
			},
		},
	},
	{
		id: "consulting",
		featured: false,
		image: "/images/10-consultoria-digital.avif",
		imageWidth: 1500,
		imageHeight: 1000,
		cardImage: "/images/mockups/laptop_y_movil_condo_hub.avif",
		ogImage: "/images/og/consulting.jpg",
		locales: {
			es: {
				slug: "consultoria-digital",
				title: "Consultoría digital",
				h1: "Consultoría digital para empresas",
				seoTitle: "Consultoría digital para empresas en RD | Managero",
				description:
					"Te ayudamos a tomar decisiones estratégicas para hacer crecer tu negocio en digital.",
				seoDescription:
					"Consultoría digital en República Dominicana: diagnóstico, prioridades y hoja de ruta para convertir objetivos de negocio en decisiones claras.",
				intro:
					"Analizamos tu contexto, identificamos oportunidades y convertimos objetivos amplios en decisiones digitales priorizadas y accionables.",
				capabilities: [
					"Diagnóstico de presencia digital",
					"Análisis de competencia y referentes",
					"Definición de prioridades y objetivos",
					"Hoja de ruta de canales y contenidos",
					"Selección de herramientas y proveedores",
					"Acompañamiento para tomar decisiones",
				],
				details: [
					{
						title: "Empezamos por dónde estás",
						text: "Revisamos tu sitio, tus canales, tus herramientas y tus datos. Muchas veces el problema no es falta de inversión, sino esfuerzo repartido en demasiados frentes.",
					},
					{
						title: "Prioridades, no una lista de deseos",
						text: "Ordenamos las oportunidades por impacto y esfuerzo, para que sepas qué hacer este trimestre y qué puede esperar sin costo real.",
					},
					{
						title: "Te queda el criterio, no la dependencia",
						text: "El entregable incluye el porqué de cada recomendación, para que tu equipo pueda decidir sin llamarnos cada vez.",
					},
				],
				imageAlt: "Planificación de una estrategia digital multiplataforma",
			},
			en: {
				slug: "digital-consulting",
				title: "Digital consulting",
				h1: "Digital consulting for companies",
				seoTitle: "Digital consulting for companies in the DR | Managero",
				description:
					"We help you make strategic decisions to grow your business digitally.",
				seoDescription:
					"Digital consulting in the Dominican Republic: assessment, priorities and a roadmap to turn business goals into clear decisions.",
				intro:
					"We analyze your context, identify opportunities and turn broad goals into prioritized, actionable digital decisions.",
				capabilities: [
					"Digital presence assessment",
					"Competitor and benchmark analysis",
					"Priority and goal definition",
					"Channel and content roadmap",
					"Tool and vendor selection",
					"Decision-making support",
				],
				details: [
					{
						title: "We start from where you are",
						text: "We review your site, your channels, your tools and your data. Often the problem is not lack of investment but effort spread across too many fronts.",
					},
					{
						title: "Priorities, not a wish list",
						text: "We rank opportunities by impact and effort, so you know what to do this quarter and what can wait at no real cost.",
					},
					{
						title: "You keep the judgment, not the dependency",
						text: "The deliverable includes the reasoning behind each recommendation, so your team can decide without calling us every time.",
					},
				],
				imageAlt: "Planning a multi-platform digital strategy",
			},
		},
	},
];

const segment = (locale: Locale) =>
	locale === "es" ? "servicios" : "services";

export const servicesIndexPath = (locale: Locale) =>
	`/${locale}/${segment(locale)}/`;

const localize = (service: Service, locale: Locale) => {
	const other: Locale = locale === "es" ? "en" : "es";
	return {
		...service,
		...service.locales[locale],
		href: `${servicesIndexPath(locale)}${service.locales[locale].slug}/`,
		alternatePath: `${servicesIndexPath(other)}${service.locales[other].slug}/`,
	};
};

export type LocalizedServiceEntry = ReturnType<typeof localize>;

export const getAllServices = (locale: Locale): LocalizedServiceEntry[] =>
	services.map((service) => localize(service, locale));

export const getServices = (locale: Locale): LocalizedServiceEntry[] =>
	getAllServices(locale).filter((service) => service.featured);

export const getExtraServices = (locale: Locale): LocalizedServiceEntry[] =>
	getAllServices(locale).filter((service) => !service.featured);

export const getRelatedServices = (
	locale: Locale,
	currentId: ServiceId,
	limit = 3,
): LocalizedServiceEntry[] =>
	getAllServices(locale)
		.filter((service) => service.id !== currentId)
		.slice(0, limit);
