# Canal público de colaboraciones

Página: https://flitzfa.vercel.app/partners

La página reutiliza Layout, Navbar, Footer y DemosSection. Mantiene la identidad
del portfolio y comunica derivación y trabajo bajo la marca del partner sin un
tarifario público ni porcentajes. El enlace “Colaboraciones” se incorpora en el pie
para conservar la prioridad de proyectos, servicios, demos y contacto en la home.

## Edición

- Contenido y estilos propios: `src/pages/partners.astro`.
- Demos compartidas: `src/components/DemosSection.astro`. Acepta nivel de título,
  texto introductorio y etiqueta del CTA; la home conserva sus valores por defecto.
- Navegación: Navbar acepta una lista opcional de enlaces y el logo vuelve a la home.
- Contacto: se reutilizan los datos de `src/data/siteConfig.ts`.
- Metadata: propia para la página, con la imagen OG existente. Sitemap actualizado.

## Verificación y deploy

```sh
npm run check
npm run build
npm test
git diff --check
```

`npm test` usa el build ya generado. Incluye contrato básico de la página y dos
pruebas que comprueban que el control de privacidad rechaza documentos internos.
El push a main activa el despliegue de Vercel. Verificar la URL pública y la home
después de cada cambio, incluyendo los enlaces entre ambas.

QA local realizado a 1440, 1024, 430 y 375 px: navegación desktop/móvil, cierre por
Escape, FAQ por teclado, dos demos públicas, contacto validado sin envío, metadata,
canonical, OG, sitemap, ausencia de desbordes y cero violaciones de axe en /partners.
Las capturas están fuera del source público. Esta comprobación automática no es
una certificación exhaustiva de accesibilidad.

## Kit comercial privado

El repositorio de este sitio es público. El kit se conserva en `docs/business/`
de la copia local, ignorado por Git y Vercel. No se incluye en el commit público.
Una copia nueva del repositorio requiere restaurar ese kit desde un respaldo privado.
Nunca forzar su inclusión con `git add -f` ni moverlo a `public/` o `src/pages/`.

El build ejecuta `scripts/check-public-build.mjs` y falla si detecta rutas conocidas
o el marcador de documentos internos en su salida. Además se comprobaron rutas
de documentación con respuesta 404. La privacidad del kit depende también de
mantener esas exclusiones y de guardar sus respaldos fuera de publicaciones públicas.
