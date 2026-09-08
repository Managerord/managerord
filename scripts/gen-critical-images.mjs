import path from "node:path";
import sharp from "sharp";

// Variantes de las imágenes que se pintan above the fold. Son las que marcan el
// LCP, así que se sirven a la medida real de su contenedor en vez de mandar la
// versión de escritorio a todos los dispositivos.
const TARGETS = [
	{
		src: "public/images/01-hero-managero.avif",
		widths: [640, 800, 1024, 1440],
		suffix: (width) => `-${width}`,
		encode: (pipe) => pipe.avif({ quality: 60, effort: 9 }),
	},
	{
		// El logo se muestra a 250 px como máximo; 500 px cubre pantallas 2x.
		// La paleta de 16 colores es imperceptible en un logotipo plano.
		src: "public/images/logo.png",
		widths: [500],
		suffix: (width) => `-${width}`,
		encode: (pipe) =>
			pipe.png({
				palette: true,
				colours: 16,
				compressionLevel: 9,
				effort: 10,
			}),
	},
];

for (const { src, widths, suffix, encode } of TARGETS) {
	const { dir, name, ext } = path.parse(src);

	for (const width of widths) {
		const out = path.join(dir, `${name}${suffix(width)}${ext}`);
		const info = await encode(sharp(src).resize({ width })).toFile(out);
		console.log(`${out}: ${width}px, ${(info.size / 1024).toFixed(1)} KB`);
	}
}
