# Portafolio — Samuel Estrada, editor de video

Sitio responsive en HTML, CSS y JavaScript sin frameworks.

## Personalizar Instagram
En `script.js`, cambia `TU_USUARIO` por tu usuario real de Instagram, sin `@`.

## Añadir proyectos reales
Copia videos MP4 a `assets/videos/` con estos nombres:
- `proyecto-01.mp4` — TikTok y Reels
- `proyecto-02.mp4` — YouTube y streams
- `proyecto-03.mp4` — Motion graphics y efectos

Si usas otros nombres, cambia las rutas en `index.html`. Si no agregas videos, se muestran tarjetas de demostración. Reemplázalas por trabajos propios antes de presentar el portafolio. Publica solo videos que tengas permiso para mostrar.

## Editar contenido
- `index.html`: títulos, presentación, servicios y proyectos.
- `style.css`: colores, tipografía, distribución y animaciones.
- `script.js`: Instagram, filtros, menú móvil y animaciones de entrada.

## Probar
Abre `index.html` en el navegador. También puedes abrir la carpeta en VS Code y usar Live Server.

## Publicar gratis con GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `portafolio-samuel`.
2. Sube `index.html`, `style.css`, `script.js`, `README.md` y la carpeta `assets`.
3. En el repositorio entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
6. Espera la publicación. La dirección será parecida a `https://TU-USUARIO.github.io/portafolio-samuel/`.

GitHub Pages publica sitios estáticos; no necesitas servidor ni base de datos. En GitHub Free, el repositorio debe ser público para Pages.

### Formato de los videos

La galería detecta automáticamente las dimensiones del archivo cuando el navegador carga sus metadatos. Los videos verticales se muestran en proporción vertical y los horizontales en proporción horizontal; no se estiran ni se recortan. Para empezar la reproducción, haz clic sobre la vista previa; los controles del reproductor aparecen al iniciar.

Conserva estos nombres de archivo dentro de `assets/videos/`: `proyecto-01.mp4`, `proyecto-02.mp4` y `proyecto-03.mp4`. Puedes asignar cualquier orientación a cualquiera de las tres tarjetas.
