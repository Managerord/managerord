import type { Locale } from "@/i18n/content";

export type LocationId = "do" | "us";

export interface BusinessLocation {
	id: LocationId;
	label: Record<Locale, string>;
	phone: {
		display: string;
		href: string;
		schema: string;
	};
	address: {
		streetAddress?: string;
		addressLocality: string;
		addressRegion?: string;
		postalCode?: string;
		addressCountry: string;
	};
}

export const locations: Record<LocationId, BusinessLocation> = {
	do: {
		id: "do",
		label: { es: "Santo Domingo, RD", en: "Santo Domingo, DR" },
		phone: {
			display: "(809) 719-1911",
			href: "+18097191911",
			schema: "+1-809-719-1911",
		},
		address: {
			addressLocality: "Santo Domingo",
			addressRegion: "Distrito Nacional",
			addressCountry: "DO",
		},
	},
	us: {
		id: "us",
		label: { es: "93 Major St, Lincoln, DE", en: "93 Major St, Lincoln, DE" },
		phone: {
			display: "302-430-2566",
			href: "+13024302566",
			schema: "+1-302-430-2566",
		},
		address: {
			streetAddress: "93 Major St",
			addressLocality: "Lincoln",
			addressRegion: "DE",

			addressCountry: "US",
		},
	},
};

export const locationList: BusinessLocation[] = [locations.do, locations.us];

export const primaryLocation = locations.do;

export const business = {
	name: "Managero",
	email: "marias@managerord.com",
	city: primaryLocation.address.addressLocality,
	region: primaryLocation.address.addressRegion,
	country: primaryLocation.address.addressCountry,
	countryName: { es: "República Dominicana", en: "Dominican Republic" },
} as const;

export const US_TIME_ZONES = [
	"America/New_York",
	"America/Detroit",
	"America/Chicago",
	"America/Menominee",
	"America/Denver",
	"America/Boise",
	"America/Phoenix",
	"America/Los_Angeles",
	"America/Anchorage",
	"America/Juneau",
	"America/Sitka",
	"America/Metlakatla",
	"America/Yakutat",
	"America/Nome",
	"America/Adak",
	"Pacific/Honolulu",
	"America/Indianapolis",
	"America/Louisville",
	"America/Fort_Wayne",
	"America/Knox_IN",
	"America/Shiprock",
	"Pacific/Johnston",
	"Navajo",
];

export const US_TIME_ZONE_PREFIXES = [
	"America/Indiana/",
	"America/North_Dakota/",
	"America/Kentucky/",
	"US/",
];
