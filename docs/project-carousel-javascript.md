# Cómo funciona el carrusel de proyectos (`ProjectCarousel.astro`)

Este documento explica, en cristiano, qué hace el JavaScript del carrusel y para qué sirven los `data-*` que le pusimos al HTML. La idea es que puedas leer el componente de nuevo en unos meses y entenderlo sin tener que desarmarlo.

## 1. ¿Qué es un `data-*` attribute?

Es un atributo HTML que **tú inventas** para marcar un elemento. El navegador no le hace nada especial (no cambia el estilo, no cambia el comportamiento), simplemente lo deja ahí para que JavaScript (o CSS) lo lea.

```html
<button data-carousel-next>Siguiente</button>
```

`data-carousel-next` no existe en el estándar HTML, es un nombre que nos inventamos nosotros. Podría llamarse `data-boton-siguiente`, da igual — lo importante es que sea único y descriptivo.

**¿Por qué no usar clases (`class="..."`) para esto?**

Porque las clases son para **estilos** (Tailwind, CSS). Si usamos una clase como "gancho" para JavaScript y luego alguien cambia esa clase por temas de diseño, el JavaScript se rompe sin que sea obvio por qué. Separar las dos cosas dejando `class` solo para CSS y `data-*` solo para JS hace que el código sea más fácil de mantener: puedes cambiar el diseño sin miedo a romper el comportamiento.

## 2. Mapa de los `data-*` que usamos

| Atributo | Dónde vive | Para qué sirve |
|---|---|---|
| `data-carousel` | El `<div>` que envuelve todo el carrusel | Marca "aquí empieza un carrusel". El script busca todos los elementos con este atributo para inicializarlos. |
| `data-carousel-track` | El `<div>` que contiene las imágenes en fila | Es la "cinta transportadora" que se mueve hacia la izquierda o derecha para mostrar una imagen a la vez. |
| `data-title` / `data-category` | Cada `<a>` (cada slide) | Guardan el título y la categoría de ese proyecto, para poder leerlos con JS cuando ese slide se vuelve el activo. |
| `data-carousel-prev` / `data-carousel-next` | Los botones de flecha | Identifican cuál botón retrocede y cuál avanza. |
| `data-carousel-dot` | Cada punto indicador (arriba de la imagen) | Marca los puntitos que muestran en qué slide estás y permiten saltar directo a uno. |
| `data-index` | Cada punto indicador | Guarda el número de slide al que corresponde ese punto (0, 1, 2, 3...). |
| `data-carousel-title` / `data-carousel-category` | Los `<p>` debajo del carrusel | Son el "cartelito" que muestra el título/categoría del slide activo. El script actualiza su texto cada vez que cambias de slide. |

## 3. La estructura en resumen

```
<div data-carousel>                     ← el carrusel completo
  <div class="relative">                ← ancla para los "absolute" de abajo
    <div data-carousel-track>           ← la cinta con las 4 imágenes en fila
      <a data-title="..." data-category="...">imagen 1</a>
      <a data-title="..." data-category="...">imagen 2</a>
      ...
    </div>

    <button data-carousel-prev>‹</button>   ← flotan encima con "absolute"
    <button data-carousel-next>›</button>

    <button data-carousel-dot data-index="0">
    <button data-carousel-dot data-index="1">
    ...
  </div>

  <p data-carousel-title>...</p>        ← cartelito que se actualiza con JS
  <p data-carousel-category>...</p>
</div>
```

## 4. El script, línea por línea

```js
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
```
Busca **todos** los elementos con `data-carousel` en la página (por si algún día hay más de un carrusel) y repite toda la lógica de abajo para cada uno. Así el mismo componente sirve aunque lo pongas dos veces en una página.

```js
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-track] > a"));
  const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
  const titleEl = carousel.querySelector("[data-carousel-title]");
  const categoryEl = carousel.querySelector("[data-carousel-category]");
```
Guarda referencias a las piezas que vamos a mover/leer: la cinta, la lista de slides (imágenes), la lista de puntos, y los dos textos del cartelito.

`Array.from(...)` convierte el resultado de `querySelectorAll` (que no es un array normal) en un array de verdad, para poder usar `.map`, `.forEach` con índice, etc.

```js
  if (!track || slides.length === 0) return;
```
Si por algún motivo no hay cinta o no hay slides, no seguimos (evita errores si el HTML cambia).

```js
  let index = 0;
```
Esta es la "memoria" del carrusel: en qué slide estamos parados ahora mismo. Empieza en `0` (el primer proyecto).

```js
  const goTo = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.setAttribute("aria-current", String(i === index)));
    if (titleEl) titleEl.textContent = slides[index].dataset.title ?? "";
    if (categoryEl) categoryEl.textContent = slides[index].dataset.category ?? "";
  };
```
Esta es la función que hace **todo el trabajo** cuando cambias de slide. Por partes:

1. **`(nextIndex + slides.length) % slides.length`** — el truco para que el carrusel dé la vuelta. Si tienes 4 proyectos (índices 0,1,2,3) y estás en el 0 y le das "anterior" (`nextIndex = -1`), esta cuenta te devuelve `3` (el último) en vez de un número negativo raro. Si estás en el 3 y le das "siguiente" (`nextIndex = 4`), te devuelve `0` (vuelve al principio). Es como un reloj: después de las 12 vuelve a la 1.
2. **`track.style.transform = translateX(-${index * 100}%)`** — mueve la cinta hacia la izquierda un 100% de su ancho por cada slide de avance. Si `index = 2`, mueve la cinta `-200%`, dejando visible solo la tercera imagen. Esto es lo que logra que **se vea una sola imagen a la vez** aunque las 4 estén ahí dentro.
3. **`dots.forEach(...)`** — le pone `aria-current="true"` al punto que corresponde al slide activo (y `"false"` a los demás). El CSS usa esto (`aria-current:w-6 aria-current:bg-orange-500`) para pintar el punto activo más grande y naranja. Usamos `aria-current` en vez de una clase propia porque es un atributo de accesibilidad real: los lectores de pantalla también entienden "este es el elemento actual".
4. **Las dos últimas líneas** — leen `data-title` y `data-category` del slide que ahora está activo (recordá que los guardamos ahí en el paso 2) y los escriben en el cartelito de abajo. Así el texto se mantiene sincronizado con la imagen que se ve.

```js
  carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => goTo(index - 1));
  carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
});
```
Conecta los clics:
- Botón "anterior" → `goTo(index - 1)`.
- Botón "siguiente" → `goTo(index + 1)`.
- Cada punto → `goTo(i)`, donde `i` es su posición en la lista (0, 1, 2, 3), para saltar directo a ese slide.

El `?.` (optional chaining) evita un error si por algún motivo el botón no existiera en el HTML.

## 5. Por qué el `<a>` de cada slide no dejaba hacer clic (y cómo se arregló)

El `<a href={project.href}>` que envuelve cada imagen es el link que debería llevarte al proyecto. El problema: el `<div>` de los botones tiene `absolute inset-0`, lo que lo estira al **100% del ancho y alto** de la imagen — no solo donde se ven los círculos. Como ese `<div>` va después en el HTML, el navegador lo pinta encima del link, y por defecto **cualquier `<div>` "roba" los clics en toda su caja**, incluso en el espacio vacío entre los dos botones. Lo mismo pasaba con la franja de los puntos arriba.

La solución es la propiedad CSS `pointer-events`:

```html
<div class="pointer-events-none absolute inset-0 flex items-center justify-between">
  <button class="pointer-events-auto ...">‹</button>
  <button class="pointer-events-auto ...">›</button>
</div>
```

- `pointer-events-none` en el contenedor grande le dice al navegador "hacé como si este `<div>` no existiera para los clics, dejalos pasar hacia abajo".
- `pointer-events-auto` en cada botón (y cada punto) los "reactiva" individualmente, porque `pointer-events-none` normalmente se hereda a los hijos también.

Resultado: donde hay un botón o un punto, hacés clic en el botón/punto. Donde no hay nada (el resto de la imagen), el clic atraviesa el contenedor invisible y llega al `<a>` de abajo.

## 6. Por qué el contenedor de las imágenes es `relative`

Los botones y los puntos usan `class="absolute ..."`. En CSS, un elemento con `position: absolute` se posiciona en relación al ancestro más cercano que tenga `position: relative` (o similar). Por eso el `<div>` que envuelve la cinta de imágenes tiene `class="relative overflow-hidden rounded-3xl ..."` — es el "marco de referencia" para que los botones queden pegados a los bordes **de la imagen**, y no se vayan a pegar a los bordes de toda la página.
