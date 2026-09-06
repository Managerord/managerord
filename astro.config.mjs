import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import { getAllServices, servicesIndexPath } from "./src/data/services.ts";

const SITE = "https://managerord.com";

const abs = (path) => new URL(path, SITE).href;

const localeAlternates = () => {
	const pairs = [
		["/es/", "/en/"],
		["/es/hablemos/", "/en/lets-talk/"],
		[servicesIndexPath("es"), servicesIndexPath("en")],
		...getAllServices("es").map((service) => [
			service.href,
			service.alternatePath,
		]),
	];

	const map = new Map();

	for (const [es, en] of pairs) {
		const links = [
			{ lang: "es", url: abs(es) },
			{ lang: "en", url: abs(en) },

			{ lang: "x-default", url: abs(es) },
		];
		map.set(abs(es), links);
		map.set(abs(en), links);
	}

	return map;
};

const alternates = localeAlternates();

export default defineConfig({
	site: SITE,
	adapter: vercel(),
	integrations: [
		sitemap({
			namespaces: { news: false, video: false, image: false, xhtml: true },

			filter: (page) => page !== `${SITE}/`,

			serialize: (item) => ({ ...item, links: alternates.get(item.url) }),
		}),
	],
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
