export type Locale = "es" | "en";

export const localePath = (locale: Locale) => `/${locale}/`;
export const talkPath = (locale: Locale) =>
	locale === "es" ? "/es/hablemos/" : "/en/lets-talk/";

export const ui = {
	es: {
		seo: {
			homeTitle: "Agencia de branding, diseño web y desarrollo | Managero",
			homeDescription:
				"Creamos marcas, sitios web, aplicaciones y estrategias digitales que convierten ideas en experiencias claras, útiles y memorables.",
		},
		nav: {
			links: [
				{ label: "Servicios", hash: "servicios" },
				{ label: "Proyectos", hash: "proyectos" },
				{ label: "Nosotros", hash: "nosotros" },
				{ label: "Contacto", hash: "contacto" },
			],
			talk: "Hablemos",
			home: "Inicio",
			open: "Abrir menú",
			close: "Cerrar menú",
			mainLabel: "Navegación principal",
			mobileLabel: "Navegación móvil",
			footerLabel: "Navegación del pie de página",
			backHome: "Volver al inicio",
			language: "Seleccionar idioma",
		},
		hero: {
			title: "Convertimos ideas en experiencias digitales.",
			description:
				"Diseño, estrategia y tecnología para marcas que quieren crecer.",
			cta: "Iniciar proyecto",
			alt: "Collage de proyectos y aplicaciones de marca creadas por Managero",
		},
		universe: {
			title: "Todo lo que tu marca necesita, en un solo lugar",
			description:
				"Desde la estrategia hasta la ejecución, construimos un sistema de marca coherente en cada punto de contacto.",
			filterLabel: "Filtrar trabajos por disciplina",
			resultsLabel: "Trabajos relacionados",
			close: "Volver a la vista inicial",
			categories: ["Branding", "Diseño Web", "Redes Sociales", "Aplicaciones"],
		},
		services: {
			title: "Creamos soluciones que funcionan",
			description:
				"Un equipo multidisciplinario que combina estrategia, diseño y tecnología.",
		},
		projects: {
			title: "Proyectos con intención",
			description:
				"Marcas que confiaron en nosotros para dar el siguiente paso.",
			previous: "Proyecto anterior",
			next: "Proyecto siguiente",
			goTo: "Ir a",
		},
		extraServices: {
			title: "Más servicios para impulsar tu marca",
			description: "Complementa tu estrategia con soluciones adicionales.",
			view: "Conocer el servicio",
		},
		processTitle: "Así trabajamos",
		about: {
			titleTop: "Creatividad",
			titleBottom: "con estructura",
			description:
				"Somos un equipo apasionado por el diseño, la tecnología y las buenas ideas. Combinamos creatividad y metodología para crear soluciones que conectan marcas con personas.",
			specialties: "Especialidades",
			items: ["Estrategia", "Diseño", "Tecnología"],
			partner: "de soluciones digitales a la medida.",
			gallery: "Muestra de proyectos de Managero",
			alts: [
				"Colección de aplicaciones de marca creadas por Managero",
				"Identidad visual de Innovative aplicada en una botella",
				"Identidades visuales aplicadas en botellas reutilizables",
				"Diseños de marca aplicados en cintas portacredenciales",
				"Identidades visuales aplicadas en una colección de tazas",
			],
		},
		contact: {
			titleTop: "Hablemos de",
			titleBottom: "tu proyecto",
			description: "Cuéntanos tu idea y juntos la haremos realidad.",
			location: "Santo Domingo, RD",
		},
		form: {
			name: "Nombre",
			email: "Correo",
			emailPlaceholder: "Correo electrónico",
			company: "Empresa o marca",
			phone: "Teléfono",
			service: "Servicio",
			selectService: "Selecciona un servicio",
			budget: "Presupuesto estimado",
			selectBudget: "Selecciona un rango",
			timeline: "¿Cuándo te gustaría comenzar?",
			message: "Mensaje",
			messagePlaceholder:
				"Cuéntanos qué tienes en mente y lo construimos juntos...",
			submit: "Enviar solicitud",
			error: "Ocurrió un error. Inténtalo de nuevo.",
			services: {
				branding: "Identidad visual",
				web: "Diseño web",
				content: "Contenido digital",
				development: "Apps y sistemas",
				marketing: "Marketing digital",
				maintenance: "Mantenimiento web",
				seo: "SEO y optimización",
				graphic: "Diseño gráfico",
				consulting: "Consultoría digital",
			},
		},
		talk: {
			eyebrow: "Hablemos",
			title: "Tu próximo proyecto empieza con una buena conversación.",
			description:
				"Cuéntanos dónde está tu marca y hacia dónde quieres llevarla. Te responderemos con preguntas claras, ideas concretas y un camino para comenzar.",
			brandsTitle: "Marcas e ideas que ya hemos acompañado",
			brandsDescription:
				"Hemos convertido estrategia y creatividad en identidades, productos digitales y piezas que viven en el mundo real.",
			formTitle: "Cuéntanos un poco más",
			formDescription:
				"Mientras más contexto compartas, más útil será nuestra primera conversación.",
			seoTitle: "Hablemos de tu proyecto | Managero",
			seoDescription:
				"Conversemos sobre tu próximo proyecto de branding, diseño web, desarrollo o marketing digital. Completa el formulario de Managero.",
		},
		servicePage: {
			eyebrow: "Servicio",
			back: "Servicios",
			helpTitle: "Cómo podemos ayudarte",
			includedTitle: "Lo que podemos trabajar juntos",
			ctaTitle: "Convirtamos este reto en tu próximo avance.",
			ctaDescription:
				"Cuéntanos qué necesitas y diseñaremos una ruta ajustada a tu marca.",
			cta: "Hablemos de tu proyecto",
		},
		notFound: {
			eyebrow: "Error 404",
			title: "Esta página no existe",
			description:
				"Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio o cuéntanos tu proyecto.",
			cta: "Volver al inicio",
			secondaryCta: "Hablemos de tu proyecto",
			seoTitle: "Página no encontrada | Managero",
			seoDescription: "La página que buscas no existe o fue movida.",
		},
	},
	en: {
		seo: {
			homeTitle: "Branding, web design and development agency | Managero",
			homeDescription:
				"We create brands, websites, applications and digital strategies that turn ideas into clear, useful and memorable experiences.",
		},
		nav: {
			links: [
				{ label: "Services", hash: "services" },
				{ label: "Projects", hash: "projects" },
				{ label: "About", hash: "about" },
				{ label: "Contact", hash: "contact" },
			],
			talk: "Let's talk",
			home: "Home",
			open: "Open menu",
			close: "Close menu",
			mainLabel: "Main navigation",
			mobileLabel: "Mobile navigation",
			footerLabel: "Footer navigation",
			backHome: "Back to home",
			language: "Select language",
		},
		hero: {
			title: "We turn ideas into digital experiences.",
			description: "Design, strategy and technology for brands ready to grow.",
			cta: "Start a project",
			alt: "Collage of brand projects and applications created by Managero",
		},
		universe: {
			title: "Everything your brand needs, in one place",
			description:
				"From strategy to execution, we build a coherent brand system across every touchpoint.",
			filterLabel: "Filter work by discipline",
			resultsLabel: "Related work",
			close: "Return to the initial view",
			categories: ["Branding", "Web Design", "Social Media", "Applications"],
		},
		services: {
			title: "We create solutions that work",
			description:
				"A multidisciplinary team combining strategy, design and technology.",
		},
		projects: {
			title: "Projects with purpose",
			description: "Brands that trusted us to take their next step.",
			previous: "Previous project",
			next: "Next project",
			goTo: "Go to",
		},
		extraServices: {
			title: "More services to move your brand forward",
			description:
				"Complete your strategy with focused, complementary solutions.",
			view: "Explore the service",
		},
		processTitle: "How we work",
		about: {
			titleTop: "Creativity",
			titleBottom: "with structure",
			description:
				"We are a team passionate about design, technology and strong ideas. We combine creativity and method to build solutions that connect brands with people.",
			specialties: "Specialties",
			items: ["Strategy", "Design", "Technology"],
			partner: "for tailor-made digital solutions.",
			gallery: "A selection of Managero projects",
			alts: [
				"Collection of brand applications created by Managero",
				"Innovative visual identity applied to a bottle",
				"Visual identities applied to reusable bottles",
				"Brand designs applied to badge lanyards",
				"Visual identities applied to a mug collection",
			],
		},
		contact: {
			titleTop: "Let's talk about",
			titleBottom: "your project",
			description: "Tell us your idea and together we'll make it real.",
			location: "Santo Domingo, DR",
		},
		form: {
			name: "Name",
			email: "Email",
			emailPlaceholder: "Email address",
			company: "Company or brand",
			phone: "Phone",
			service: "Service",
			selectService: "Select a service",
			budget: "Estimated budget",
			selectBudget: "Select a range",
			timeline: "When would you like to start?",
			message: "Message",
			messagePlaceholder:
				"Tell us what you have in mind and we'll build it together...",
			submit: "Send request",
			error: "Something went wrong. Please try again.",
			services: {
				branding: "Visual identity",
				web: "Web design",
				content: "Digital content",
				development: "Apps and systems",
				marketing: "Digital marketing",
				maintenance: "Web maintenance",
				seo: "SEO and optimization",
				graphic: "Graphic design",
				consulting: "Digital consulting",
			},
		},
		talk: {
			eyebrow: "Let's talk",
			title: "Your next project starts with a good conversation.",
			description:
				"Tell us where your brand is and where you want to take it. We'll respond with clear questions, concrete ideas and a path to get started.",
			brandsTitle: "Brands and ideas we have already supported",
			brandsDescription:
				"We have turned strategy and creativity into identities, digital products and pieces that live in the real world.",
			formTitle: "Tell us a little more",
			formDescription:
				"The more context you share, the more useful our first conversation will be.",
			seoTitle: "Let's talk about your project | Managero",
			seoDescription:
				"Let's discuss your next branding, web design, development or digital marketing project. Complete Managero's project form.",
		},
		servicePage: {
			eyebrow: "Service",
			back: "Services",
			helpTitle: "How we can help",
			includedTitle: "What we can work on together",
			ctaTitle: "Let's turn this challenge into your next step forward.",
			ctaDescription:
				"Tell us what you need and we'll design a path around your brand.",
			cta: "Let's talk about your project",
		},
		notFound: {
			eyebrow: "Error 404",
			title: "This page doesn't exist",
			description:
				"The link might be broken or the page may have moved. Head back home or tell us about your project.",
			cta: "Back to home",
			secondaryCta: "Let's talk about your project",
			seoTitle: "Page not found | Managero",
			seoDescription: "The page you're looking for doesn't exist or was moved.",
		},
	},
} as const;
