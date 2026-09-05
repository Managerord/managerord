# Managero RD — Design System & Website Specification

> Especificación visual y funcional basada en el diseño aprobado de la página principal de Managero RD. Este documento debe utilizarse como fuente de verdad para diseño, desarrollo y generación asistida por IA.

## 1. Dirección creativa

Managero RD debe proyectarse como una agencia digital creativa, organizada y accesible. El diseño combina una base editorial clara y cálida con acentos naranjas en puntos estratégicos.

La interfaz debe sentirse:

- Moderna, limpia y profesional.
- Creativa sin parecer infantil.
- Elegante sin depender del negro.
- Cercana sin perder estructura.
- Visualmente dinámica, pero fácil de recorrer.

La proporción visual recomendada es:

- **75 %:** blanco cálido, crema y beige.
- **15 %:** negro y marrón oscuro, principalmente en texto e imágenes.
- **10 %:** naranja para acciones y énfasis.

El naranja dirige la atención; no funciona como fondo dominante. Si todo es naranja, nada es importante.

---

## 2. Principios de diseño

### Claridad antes que decoración

Cada bloque debe comunicar una idea concreta. Evitar elementos ornamentales que compitan con títulos, proyectos o llamadas a la acción.

### Creatividad con estructura

La página utiliza composiciones editoriales, fotografías de marca, mockups y módulos redondeados, pero mantiene una cuadrícula consistente.

### Contraste estratégico

El negro se limita principalmente a tipografía, pantallas de dispositivos y áreas contenidas dentro de fotografías. No debe utilizarse como fondo de secciones completas.

### El naranja como señal

Utilizar naranja en:

- Botones principales.
- Elemento activo de navegación o filtros.
- Flechas y controles relevantes.
- Una tarjeta destacada por grupo.
- Detalles de fotografías o mockups.
- Sección principal de contacto.

No utilizar naranja simultáneamente en todas las tarjetas o fondos.

### Experiencia visual real

Priorizar trabajos, mockups, interfaces y aplicaciones de marca. Evitar fotografías corporativas genéricas de personas señalando una laptop como si acabaran de descubrir Excel.

---

## 3. Paleta de colores

| Token | Valor | Uso |
|---|---:|---|
| `--color-orange-500` | `#F25A0A` | CTA principal, controles activos y acentos |
| `--color-orange-600` | `#D94800` | Hover y estados presionados |
| `--color-brand-beige` | `#B1A172` | Identidad secundaria, etiquetas y detalles de marca |
| `--color-sand-100` | `#E8DFD0` | Tarjetas y fondos alternos |
| `--color-cream-100` | `#F6F1E9` | Secciones y superficies principales |
| `--color-warm-white` | `#FCFAF7` | Fondo general y tarjetas claras |
| `--color-charcoal` | `#201E1C` | Títulos y texto principal |
| `--color-text-muted` | `#69635D` | Texto secundario |
| `--color-border` | `#E7E0D7` | Bordes suaves y divisores |
| `--color-white` | `#FFFFFF` | Texto sobre naranja y superficies elevadas |

> El naranja de producción puede ajustarse ligeramente para coincidir con los recursos oficiales de marca. Debe mantenerse cálido, vivo y más saturado que `#B1A172`.

### Distribución de color

- Fondo de página: `--color-warm-white`.
- Secciones alternas: `--color-cream-100`.
- Tarjetas: blanco cálido, crema o arena.
- Títulos: `--color-charcoal`.
- Texto secundario: `--color-text-muted`.
- CTA primario: naranja con texto blanco.
- CTA secundario: fondo beige o transparente con borde.
- Negro puro: evitar; usar carbón oscuro.

---

## 4. Tipografía

### Familia recomendada

- **Principal:** `Manrope`, `Inter` o una sans geométrica equivalente.
- **Fallback:** `Arial`, `Helvetica`, `sans-serif`.

Usar una sola familia tipográfica en toda la experiencia. La personalidad proviene del peso, la escala y la composición, no de mezclar cinco fuentes en una licuadora.

### Escala tipográfica

| Estilo | Escritorio | Móvil | Peso | Interlineado |
|---|---:|---:|---:|---:|
| Hero | `64–72px` | `42–48px` | `700–800` | `0.98–1.05` |
| H1 interior | `52–60px` | `38–44px` | `700–800` | `1.05` |
| H2 | `36–42px` | `30–34px` | `700` | `1.1` |
| H3 | `22–26px` | `20–22px` | `650–700` | `1.2` |
| Cuerpo grande | `18px` | `17px` | `400–500` | `1.55` |
| Cuerpo | `16px` | `16px` | `400` | `1.55–1.65` |
| Etiqueta | `13–14px` | `13px` | `600–700` | `1.2` |
| Botón | `14–16px` | `14–16px` | `700` | `1` |

### Reglas

- Títulos en estilo oración, no todo en mayúsculas.
- Limitar párrafos a `55–70ch`.
- Evitar pesos ligeros sobre fondos fotográficos.
- No justificar texto.
- Usar tracking ligeramente negativo en títulos grandes: `-0.02em`.

---

## 5. Cuadrícula y espaciado

### Contenedor

- Ancho máximo: `1440px`.
- Ancho de contenido recomendado: `1280–1360px`.
- Padding lateral escritorio: `40–56px`.
- Tablet: `24–32px`.
- Móvil: `16–20px`.

### Sistema de espaciado

Base de `8px`:

`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120px`.

### Separación vertical

- Secciones principales: `96–120px`.
- Encabezado a contenido de sección: `32–48px`.
- Entre tarjetas: `16–24px`.
- En móvil, reducir secciones a `64–80px`.

### Bordes redondeados

| Elemento | Radio |
|---|---:|
| Hero y secciones destacadas | `28–32px` |
| Tarjetas grandes | `20–24px` |
| Tarjetas pequeñas | `16–20px` |
| Botones y chips | `999px` |
| Campos de formulario | `10–12px` |

---

## 6. Elevación y bordes

El diseño debe sentirse plano y editorial, no como un catálogo de tarjetas flotantes.

- Bordes: `1px solid var(--color-border)` cuando se necesite separación.
- Sombra suave: `0 12px 36px rgba(54, 43, 31, 0.06)`.
- Hover de tarjeta: `0 16px 42px rgba(54, 43, 31, 0.10)`.
- Evitar sombras negras fuertes y múltiples capas de elevación.

---

## 7. Componentes

### 7.1 Encabezado

- Fondo blanco cálido.
- Logo a la izquierda, sin alterar colores ni proporción.
- Navegación centrada o alineada a la derecha.
- Enlaces: Inicio, Servicios, Proyectos, Nosotros y Contacto.
- CTA “Hablemos” en naranja, formato píldora.
- Altura inicial: `80–88px`.
- Al hacer scroll: `64–72px`, fondo con ligera transparencia y blur.
- En móvil: logo, CTA opcional y menú hamburguesa.

### 7.2 Botones

#### Primario

- Fondo naranja.
- Texto blanco.
- Forma píldora.
- Alto mínimo: `48px`.
- Padding horizontal: `22–28px`.
- Puede incluir flecha circular o ícono a la derecha.
- Hover: naranja oscuro, desplazamiento vertical de `-2px`.

#### Secundario

- Fondo crema o beige.
- Texto carbón.
- Borde opcional.
- Hover: fondo arena.

#### Terciario

- Solo texto e ícono/flecha.
- Usar para navegación dentro de tarjetas.

Todos los botones deben incluir estados `hover`, `focus-visible`, `active` y `disabled`.

### 7.3 Chips de servicios

- Forma píldora.
- Fondo crema.
- Ícono lineal a la izquierda.
- Texto centrado.
- Chip activo: fondo naranja con ícono/flecha en blanco.
- En móvil: scroll horizontal con `scroll-snap`.

### 7.4 Tarjetas de servicio

- Cuadrícula de cuatro columnas en escritorio.
- Fondo blanco, crema o arena.
- Una sola tarjeta puede destacarse en naranja.
- Título y descripción en la parte superior.
- Mockup o imagen ocupando la mitad inferior.
- Control circular con flecha en la esquina inferior derecha.
- Imagen con `object-fit: cover` y esquinas inferiores integradas.

### 7.5 Tarjetas horizontales

Utilizadas para mantenimiento web, SEO, diseño gráfico y consultoría.

- Composición 45/55 entre imagen y texto.
- Dos columnas en escritorio.
- Una columna en móvil.
- Flecha circular al extremo inferior derecho.
- Fondo crema muy claro.

### 7.6 Carrusel de proyectos

- Una pieza panorámica principal.
- Mockups de laptop y móvil dentro de un fondo fotográfico editorial.
- Controles circulares laterales.
- Flechas naranjas sobre fondo blanco.
- Indicadores visibles en móvil.
- No reproducir automáticamente; el usuario controla el avance.

### 7.7 Tarjetas de proceso

- Cuatro pasos: Conocemos, Definimos, Creamos y Entregamos.
- Número grande y ligero en la parte superior.
- Ícono lineal en la esquina inferior derecha.
- Fondos crema/blanco; el último paso puede tener un baño naranja muy suave.
- Igual altura dentro de la fila.

### 7.8 Formulario

- Contenedor blanco cálido.
- Campos con fondo blanco o gris cálido muy claro.
- Etiquetas siempre visibles; no depender solo del placeholder.
- Alto mínimo de controles: `48px`.
- Estado `focus`: borde naranja y halo suave.
- Botón de envío naranja.
- Mensajes de error debajo del campo, claros y específicos.

### 7.9 Bloque de contacto

- Fondo naranja sólido o degradado naranja muy sutil.
- Texto blanco.
- Esquinas de `24px`.
- Debe contener correo, teléfono, ubicación y redes.
- No sobrecargar con imágenes adicionales.

### 7.10 Íconos

- Estilo lineal y consistente.
- Trazo aproximado de `1.75–2px`.
- Tamaños: `18–24px` en controles; `28–36px` en tarjetas.
- No mezclar íconos outline con íconos 3D o rellenos.

---

## 8. Estructura de la página de inicio

### 1. Header

Logo, navegación principal y CTA “Hablemos”.

### 2. Hero

- Título: **“Convertimos ideas en experiencias digitales.”**
- Texto de apoyo: **“Diseño, estrategia y tecnología para marcas que quieren crecer.”**
- CTA: **“Iniciar proyecto”**.
- Composición fotográfica con branding, dispositivos y mockups.
- El texto ocupa aproximadamente 38–42 %; el collage visual, 58–62 %.
- Fondo claro con una zona fotográfica más oscura y contenida, nunca una masa negra completa.

### 3. Propuesta de valor

- Título centrado: **“Todo lo que tu marca necesita, en un solo lugar.”**
- Logos/marcas de proyectos alrededor, conectados por líneas orgánicas discretas.
- Chips de categorías debajo.

### 4. Soluciones principales

- Título: **“Creamos soluciones que funcionan”**.
- Cuatro tarjetas: Identidad visual, Sitios web, Contenido digital y Apps y sistemas.
- Identidad visual funciona como tarjeta destacada naranja.

### 5. Proyectos

- Título: **“Proyectos con intención”**.
- Carrusel panorámico con piezas reales y controles laterales.

### 6. Servicios complementarios

- Título: **“Más servicios para impulsar tu marca”**.
- Mantenimiento web, SEO y optimización, Diseño gráfico y Consultoría digital.
- Cuadrícula `2 × 2` en escritorio.

### 7. Proceso

- Título: **“Así trabajamos”**.
- Cuatro pasos numerados.
- Fondo crema con líneas orgánicas muy suaves.

### 8. Nosotros

- Título: **“Creatividad con estructura”**.
- Texto a la izquierda; mosaico de fotografías y mockups a la derecha.
- Chips: Estrategia, Diseño y Tecnología.
- Detalles naranja en objetos físicos: taza, libreta o papelería.

### 9. Contacto

- Bloque naranja con información a la izquierda.
- Formulario claro a la derecha.
- En móvil: primero la invitación y luego el formulario.

### 10. Footer

- Logo reducido.
- Navegación breve.
- Datos legales y derechos reservados.
- Fondo blanco cálido; sin bloque negro.

---

## 9. Fotografía y mockups

### Dirección visual

- Luz cálida y natural.
- Fondos crema, madera clara, gris cálido o negro contenido.
- Composiciones cenitales y editoriales.
- Dispositivos modernos con interfaces reales de proyectos.
- Materiales físicos: tarjetas, libretas, empaques, tazas y papelería.
- Acentos naranja presentes en uno o dos objetos por composición.

### Reglas

- Usar proyectos reales siempre que estén disponibles.
- No inventar clientes, métricas ni testimonios.
- Evitar bancos de imágenes corporativos genéricos.
- Mantener una temperatura de color consistente.
- Usar formatos WebP/AVIF con fallback cuando corresponda.
- Incluir texto alternativo descriptivo.

---

## 10. Movimiento e interacción

- Duración estándar: `180–260ms`.
- Curva: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Botones: elevación de `-2px` en hover.
- Tarjetas: leve elevación y aumento de sombra; no escalar más de `1.01`.
- Imágenes: zoom máximo de `1.03` dentro de contenedor con overflow oculto.
- Aparición al hacer scroll: desplazamiento vertical máximo de `16px` y fade.
- Respetar `prefers-reduced-motion`.
- Evitar animaciones automáticas largas o elementos que persigan el cursor.

---

## 11. Diseño responsive

### Breakpoints sugeridos

| Nombre | Rango |
|---|---:|
| Móvil | `< 640px` |
| Tablet | `640–1023px` |
| Escritorio | `1024–1439px` |
| Escritorio amplio | `≥ 1440px` |

### Comportamiento móvil

- Hero en una columna: texto primero, composición visual después.
- Títulos sin palabras huérfanas cuando sea posible.
- Tarjetas principales en carrusel horizontal o una columna.
- Servicios complementarios en una columna.
- Proceso en lista vertical de cuatro pasos.
- Mosaico de “Nosotros” reducido a dos columnas.
- Contacto y formulario apilados.
- Controles táctiles de al menos `44 × 44px`.
- No esconder contenido esencial para “hacer que quepa”.

### Tablet

- Hero puede conservar dos columnas con proporción `45/55`.
- Servicios principales en cuadrícula de dos columnas.
- Proceso en cuadrícula `2 × 2`.

---

## 12. Accesibilidad

- Cumplir WCAG 2.2 AA.
- Contraste mínimo de `4.5:1` para texto normal y `3:1` para texto grande.
- No comunicar estados únicamente mediante color.
- Indicador `focus-visible` de al menos `2px`.
- Navegación completa por teclado.
- Orden del DOM coherente con la lectura visual.
- Etiquetas asociadas a cada campo.
- Mensajes de error anunciados mediante `aria-live`.
- Texto alternativo para imágenes informativas; `alt=""` para decoración.
- Carrusel con botones accesibles y sin reproducción automática.

---

## 13. Tokens CSS recomendados

```css
:root {
  --color-orange-500: #f25a0a;
  --color-orange-600: #d94800;
  --color-brand-beige: #b1a172;
  --color-sand-100: #e8dfd0;
  --color-cream-100: #f6f1e9;
  --color-warm-white: #fcfaf7;
  --color-charcoal: #201e1c;
  --color-text-muted: #69635d;
  --color-border: #e7e0d7;
  --color-white: #ffffff;

  --font-sans: "Manrope", "Inter", Arial, sans-serif;

  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  --shadow-soft: 0 12px 36px rgba(54, 43, 31, 0.06);
  --shadow-hover: 0 16px 42px rgba(54, 43, 31, 0.1);

  --container-max: 1360px;
  --transition-standard: 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

# Tipografia

- Títulos grandes: Manrope ExtraBold (800)
- Títulos de secciones: Manrope Bold (700)
- Subtítulos y botones: Manrope SemiBold (600)
- Párrafos: Manrope Regular (400)

---

## 14. Reglas de contenido

- Tono cercano, directo y profesional.
- Hablar de resultados funcionales, no de grandeza abstracta.
- Evitar: “somos los mejores”, “revolucionamos”, “soluciones 360” sin explicación y otras especies del zoológico corporativo.
- Encabezados cortos y memorables.
- Descripciones de servicio entre 18 y 35 palabras.
- CTA específicos: “Iniciar proyecto”, “Ver proyectos”, “Conocer servicio”, “Hablemos”.
- No publicar precios, métricas, clientes o testimonios no confirmados.

---

## 15. Lo que no debe hacerse

- Grandes fondos negros en secciones completas.
- Uso excesivo de naranja.
- Interfaz completamente beige sin contraste.
- Gradientes intensos o neón.
- Sombras pesadas.
- Bordes rectos y rígidos en todos los componentes.
- Demasiadas animaciones.
- Íconos con estilos diferentes.
- Texto encima de fotografías sin capa de contraste suficiente.
- Cambiar, recolorear, estirar o reconstruir el logo.
- Utilizar imágenes genéricas que no representen el trabajo de Managero.
- Añadir secciones o estadísticas inventadas.

---

## 16. Criterios de aceptación visual

El diseño se considera correctamente implementado cuando:

1. La página se percibe clara y cálida antes que oscura.
2. El naranja conduce hacia las acciones principales sin dominar toda la interfaz.
3. `#B1A172` funciona como soporte de identidad, no como único acento.
4. Las secciones mantienen ritmo, aire y jerarquía consistentes.
5. Las tarjetas comparten radios, espaciado, iconografía y comportamiento.
6. Los proyectos y mockups son protagonistas reales.
7. La experiencia móvil conserva el contenido y la intención del escritorio.
8. Todos los estados interactivos son visibles y accesibles.
9. No se han inventado datos, clientes ni resultados.
10. El logo conserva su archivo, color, proporción y área de protección originales.

---

## 17. Resumen ejecutivo para implementación

Construir una web editorial, cálida y modular para Managero RD. Utilizar fondos blanco cálido y crema, tarjetas redondeadas, tipografía sans geométrica y fotografías de proyectos reales. Reservar el naranja para CTA y énfasis puntuales; utilizar `#B1A172` como soporte de marca. Mantener el negro limitado a texto y áreas contenidas en las imágenes. La página debe sentirse creativa, ordenada, responsive y preparada para convertir visitantes en solicitudes de proyecto.
