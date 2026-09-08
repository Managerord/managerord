import { sizeOf } from "@/data/imageSizes";

const SRC = "/images/01-hero-managero.avif";

// Anchos generados por `pnpm gen:critical-images`.
const VARIANTS = [640, 800, 1024, 1440];

const original = sizeOf(SRC);

if (!original) {
	throw new Error(`Falta ${SRC} en imageSizes.ts`);
}

const aspectRatio = original.width / original.height;

export const heroImage = {
	src: SRC,
	srcset: [
		...VARIANTS.map(
			(width) => `${SRC.replace(".avif", `-${width}.avif`)} ${width}w`,
		),
		`${SRC} ${original.width}w`,
	].join(", "),
	sizes: [
		"(min-width: 96rem) min(106.25rem, calc(100vw - 7rem))",
		`(min-width: 64rem) max(${35 * aspectRatio}rem, calc(100vw - 4rem))`,
		`(min-width: 40rem) max(${Math.ceil(520 * aspectRatio)}px, calc(100vw - 3rem))`,
		`max(${Math.ceil(360 * aspectRatio)}px, calc(100vw - 1rem))`,
	].join(", "),
	width: original.width,
	height: original.height,
};
