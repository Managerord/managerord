import {
	type BusinessLocation,
	business,
	locationList,
	primaryLocation,
} from "@/data/locations";

export const ORGANIZATION_ID = "https://managerord.com/#organization";

export const ORGANIZATION_URL = "https://managerord.com/es/";

const compact = <T extends Record<string, unknown>>(input: T) =>
	Object.fromEntries(
		Object.entries(input).filter(([, value]) => value !== undefined),
	);

const postalAddress = (location: BusinessLocation) =>
	compact({
		"@type": "PostalAddress",
		streetAddress: location.address.streetAddress,
		addressLocality: location.address.addressLocality,
		addressRegion: location.address.addressRegion,
		postalCode: location.address.postalCode,
		addressCountry: location.address.addressCountry,
	});

const officeSchema = locationList.map((location) =>
	compact({
		"@type": "Place",
		"@id": `https://managerord.com/#office-${location.id}`,
		name: `${business.name} — ${location.address.addressLocality}`,
		address: postalAddress(location),
		telephone: location.phone.schema,
	}),
);

export const organizationSchema = compact({
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": ORGANIZATION_ID,
	name: business.name,
	alternateName: "Managero RD",
	url: ORGANIZATION_URL,
	logo: "https://managerord.com/images/logo.png",
	image: "https://managerord.com/images/og/default.jpg",
	email: business.email,

	telephone: primaryLocation.phone.schema,
	address: postalAddress(primaryLocation),
	location: officeSchema,
	areaServed: [
		{ "@type": "Country", name: business.countryName.es },
		{ "@type": "City", name: business.city },
		{ "@type": "Country", name: "United States" },
	],
	knowsLanguage: ["es", "en"],
	sameAs: [
		"https://www.instagram.com/managerord",
		"https://www.facebook.com/managerord",
		"https://www.linkedin.com/company/managero-rd",
	],
});
