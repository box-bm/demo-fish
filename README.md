# LA MAR — Demo de sitio web (Pesca del Puerto, Guatemala)

Demo estática, visualmente orientada a la temática de **pesca, mariscos y mar**, pensada para presentar a un cliente la posibilidad de tener presencia en internet.

## Contenido

- `index.html` — Página de inicio: propuesta de valor, confianza, resumen "sobre nosotros", productos destacados, proceso, testimonios y vista previa de redes sociales.
- `catalogo.html` — Catálogo de productos (pescados, mariscos, moluscos) con filtros y precios de referencia.
- `nosotros.html` — Historia, línea de tiempo, misión/visión/valores, proceso de pesca sostenible y certificaciones (contenido de ejemplo).
- `contacto.html` — Datos de contacto, redes sociales y formulario de cotización (simulado, sin backend).
- `assets/css/styles.css` — Sistema visual compartido (colores, tipografía, componentes).
- `assets/js/main.js` — Interacciones sin dependencias: menú móvil, filtro de catálogo, formulario simulado.
- `assets/img/logo-oficial.png` — Logo oficial del cliente, recortado a fondo transparente para usarse sobre header/hero/footer oscuros.
- `assets/img/favicon.png` — Versión del logo dentro de una placa circular clara, usada como ícono de pestaña.
- `assets/img/foto-1.jpeg`, `foto-2.jpeg`, `foto-3.jpeg` — Fotografías provistas por el cliente, optimizadas (redimensionadas/comprimidas) y usadas como fondos del hero, panel "sobre nosotros", historia, proceso sostenible y mapa de contacto.
- `assets/img/icons.svg` — Set de íconos náuticos/marinos en SVG (sprite reutilizable con `<use>`).

## Sobre las imágenes

El logo es el **archivo oficial del cliente** (se le quitó el fondo blanco original para que funcione sobre las secciones oscuras del sitio). Las 3 fotografías de ambiente también fueron provistas por el cliente. Íconos, olas y texturas decorativas son SVG/CSS original, sin bancos de imágenes externos.

## Cómo ver la demo localmente

Es un sitio 100% estático, no requiere build ni instalación. Basta con abrir `index.html` en un navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8080
# luego abrir http://localhost:8080
```

## Publicar en GitHub Pages

1. En el repositorio de GitHub, ir a **Settings → Pages**.
2. En "Build and deployment", elegir **Deploy from a branch**.
3. Seleccionar la rama `claude/fishing-company-demo-site-rm74t8` (o la rama principal donde se fusione este contenido) y la carpeta `/ (root)`.
4. Guardar. GitHub publicará la URL del sitio en la misma sección en unos minutos.

## Datos de la demo

Nombre de empresa, ubicación (Puerto San José, Escuintla), teléfono, correo, precios y testimonios son **datos de ejemplo** para ilustrar la propuesta. Deben reemplazarse por la información real del cliente antes de un lanzamiento definitivo.
