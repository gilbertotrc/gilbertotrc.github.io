# gilbertotrc.github.io

Sitio de tarjeta de presentación digital + catálogo de modelos CHANGAN.

## Cómo publicarlo

1. Descarga y descomprime este paquete.
2. En tu repositorio `gilbertotrc.github.io` (ya creado, vacío), copia **todo** el contenido de esta carpeta a la raíz del repo — no dentro de una subcarpeta. La estructura debe quedar así:

   ```
   gilbertotrc.github.io/
     index.html
     modelos.html
     css/styles.css
     js/main.js
     images/hero-placeholder.svg
   ```

3. Sube los cambios (commit + push a la rama `main`).
4. En GitHub → Settings → Pages, confirma que la fuente sea la rama `main`, carpeta `/ (root)`. Con el nombre `gilbertotrc.github.io` ya debería activarse solo.
5. En un par de minutos el sitio estará en https://gilbertotrc.github.io

## Qué falta por tu parte

- **Fotos**: cada modelo tiene una tarjeta gris con la leyenda "Foto próximamente" — es un marcador de posición a propósito (para no usar imágenes de CHANGAN sin permiso). Cuando tengas fotos oficiales (kit de prensa / agencia), reemplaza en `modelos.html` cada bloque:

  ```html
  <div class="model-photo"><span>Foto próximamente</span></div>
  ```

  por:

  ```html
  <div class="model-photo"><img src="images/modelos/alsvin.jpg" alt="Changan Alsvin"></div>
  ```

  (sube las fotos a una carpeta `images/modelos/`).

- **Foto del hero** (portada de `index.html`): reemplaza `images/hero-placeholder.svg` por una foto tuya o de un vehículo, con el mismo nombre de archivo o actualizando la ruta en `index.html`.

- **Precios / fichas técnicas**: las descripciones de cada modelo son generales a propósito — no incluí precios ni datos técnicos exactos (caballos de fuerza, rendimiento, etc.) porque cambian seguido y prefiero que tú los confirmes con la información vigente de tu agencia antes de publicarlos.

- El botón "Cotizar por WhatsApp" de cada tarjeta ya abre un chat a tu número (871 219 07 22) con el nombre del modelo precargado — no necesita ajuste, pero revisa que el número sea el correcto para WhatsApp Business si usas uno distinto.

## Siguientes pasos posibles

- Agregar página de detalle por modelo (ficha completa con specs).
- Formulario de contacto en vez de solo WhatsApp.
- Sección de testimonios o autos entregados.

Dime cuál de estos quieres y seguimos por ahí.
