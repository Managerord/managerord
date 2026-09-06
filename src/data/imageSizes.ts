export interface ImageSize {
	width: number;
	height: number;
}

export const imageSizes: Record<string, ImageSize> = {
	"/images/01-hero-managero.avif": { width: 1672, height: 941 },
	"/images/02-identidad-visual.avif": { width: 1122, height: 1402 },
	"/images/03-diseno-web.avif": { width: 1003, height: 1568 },
	"/images/04-contenido-digital.avif": { width: 1122, height: 1402 },
	"/images/05-apps-sistemas.avif": { width: 1122, height: 1402 },
	"/images/06-proyectos-destacados.avif": { width: 1942, height: 809 },
	"/images/07-mantenimiento-web.avif": { width: 1499, height: 1000 },
	"/images/08-seo-optimizacion.avif": { width: 1500, height: 1000 },
	"/images/09-diseno-grafico.avif": { width: 1500, height: 1000 },
	"/images/10-consultoria-digital.avif": { width: 1500, height: 1000 },
	"/images/11-mosaico-pantallas.avif": { width: 1200, height: 975 },
	"/images/12-mosaico-papeleria.avif": { width: 1000, height: 1000 },
	"/images/13-mosaico-libreta.avif": { width: 1000, height: 1000 },
	"/images/14-mosaico-redes.avif": { width: 1000, height: 1000 },
	"/images/logo.png": { width: 1564, height: 429 },
	"/images/logo_m.avif": { width: 1080, height: 1081 },
	"/images/mockups/bolsas_y_gorra_marcas.avif": { width: 2304, height: 2560 },
	"/images/mockups/botella_innovative.avif": { width: 1708, height: 2560 },
	"/images/mockups/botellas_marcas.avif": { width: 2560, height: 1707 },
	"/images/mockups/cintas_portacredenciales_marcas.avif": {
		width: 2560,
		height: 1920,
	},
	"/images/mockups/coleccion_mockups_marcas.avif": {
		width: 2560,
		height: 2560,
	},
	"/images/mockups/gorra_y_taza_innovative.avif": { width: 2560, height: 1707 },
	"/images/mockups/laptop_flotante_condo_hub.avif": {
		width: 2560,
		height: 1707,
	},
	"/images/mockups/laptop_y_movil_condo_hub.avif": {
		width: 2560,
		height: 1707,
	},
	"/images/mockups/laptop_y_movil_plataformas.avif": {
		width: 1707,
		height: 2560,
	},
	"/images/mockups/pantallas_aplicacion_reciclaje.avif": {
		width: 2560,
		height: 1920,
	},
	"/images/mockups/sudadera_divinas_beauty_salon.avif": {
		width: 2560,
		height: 1707,
	},
	"/images/mockups/tazas_marcas.avif": { width: 2560, height: 1707 },
	"/images/mockups/textiles_y_taza_marcas.avif": { width: 2560, height: 1707 },
	"/images/og/apps.jpg": { width: 1200, height: 630 },
	"/images/og/branding.jpg": { width: 1200, height: 630 },
	"/images/og/consulting.jpg": { width: 1200, height: 630 },
	"/images/og/default.jpg": { width: 1200, height: 630 },
	"/images/og/graphic.jpg": { width: 1200, height: 630 },
	"/images/og/hablemos.jpg": { width: 1200, height: 630 },
	"/images/og/maintenance.jpg": { width: 1200, height: 630 },
	"/images/og/marketing.jpg": { width: 1200, height: 630 },
	"/images/og/seo.jpg": { width: 1200, height: 630 },
	"/images/og/web.jpg": { width: 1200, height: 630 },
};

export const sizeOf = (src: string): ImageSize | undefined => imageSizes[src];
