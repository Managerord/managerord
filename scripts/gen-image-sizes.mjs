import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
const OUT = "src/data/imageSizes.ts";
const EXTENSIONS = new Set([".avif", ".png", ".jpg", ".jpeg", ".webp"]);

const walk = async (dir) => {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) return walk(full);
			return EXTENSIONS.has(path.extname(entry.name).toLowerCase())
				? [full]
				: [];
		}),
	);
	return files.flat();
};

const files = (await walk(ROOT)).sort();
const rows = [];

for (const file of files) {
	const { width, height } = await sharp(file).metadata();
	const key = `/${path.relative("public", file).split(path.sep).join("/")}`;
	rows.push(`\t"${key}": { width: ${width}, height: ${height} },`);
}

const contents = `export interface ImageSize {
\twidth: number;
\theight: number;
}

export const imageSizes: Record<string, ImageSize> = {
${rows.join("\n")}
};

export const sizeOf = (src: string): ImageSize | undefined => imageSizes[src];
`;

await writeFile(OUT, contents);
console.log(`${OUT}: ${rows.length} imágenes`);
