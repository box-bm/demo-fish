# LA MAR — Demo de sitio web (Pesca del Puerto, Guatemala)

Demo estática, visualmente orientada a la temática de **pesca, mariscos y mar**, pensada para presentar a un cliente la posibilidad de tener presencia en internet.

## Contenido

- `index.html` — Página de inicio: propuesta de valor, confianza, resumen "sobre nosotros", productos destacados, proceso, testimonios y vista previa de redes sociales.
- `catalogo.html` — Catálogo de productos (pescados, mariscos, moluscos) con filtros y precios de referencia.
- `nosotros.html` — Historia, línea de tiempo, misión/visión/valores, proceso de pesca sostenible y certificaciones (contenido de ejemplo).
- `contacto.html` — Datos de contacto, redes sociales y formulario de cotización (simulado, sin backend).
- `assets/css/styles.css` — Sistema visual compartido (colores, tipografía, componentes).
- `assets/js/main.js` — Interacciones sin dependencias: menú móvil, filtro de catálogo, formulario simulado.
- `assets/img/logo.svg` — Emblema de marca en SVG.
- `assets/img/icons.svg` — Set de íconos náuticos/marinos en SVG (sprite reutilizable con `<use>`).

## Sobre las imágenes

Todo el arte visual (logo, íconos, texturas, olas) está hecho en **SVG/CSS original**, sin descargar imágenes de bancos externos. Esto evita problemas de licencias y hace que la demo cargue rápido y funcione 100% offline una vez publicada — ideal para un GitHub Pages sin dependencias rotas.

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
