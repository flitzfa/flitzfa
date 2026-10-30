# Demos comerciales de flitzfa

Publicadas el 6 de octubre de 2026:

- Sistema de turnos: https://turnos.flitzfa.com.ar/
- Catálogo + WhatsApp: https://catalogo.flitzfa.com.ar/
- Web para gimnasio (Bloque Funcional): https://gimnasio.flitzfa.com.ar/ · repo `flitzfa/demo-gimnasio`
- Web para veterinaria (Veterinaria Trébol): https://veterinaria.flitzfa.com.ar/ · repo `flitzfa/demo-veterinaria`
- Acceso desde el portfolio: https://flitzfa.vercel.app/#demos

Son desarrollos propios con negocios ficticios, no trabajos para clientes.
El bloque está integrado en Servicios y reutiliza colores, tipografías y espaciado
del portfolio. La navegación incluye un enlace Demos. La metadata general conserva
su enfoque en desarrollo web, automatización y soluciones digitales.

## Actualización del portfolio

Editar `src/components/DemosSection.astro` para cambiar textos o enlaces.
Comprobar `npx astro check` y `npm run build` antes de commit y push a la rama principal.
El proyecto Vercel del portfolio es `flitzfa`, equipo `flitzfas-projects`.
Para publicar manualmente desde su raíz autenticada:

```sh
npx vercel@62.4.0 --project flitzfa --scope flitzfas-projects --prod --yes
```

## Actualización de las demos

Cada starter tiene su repositorio privado independiente y un comando `npm run deploy:demo`.
Consultar `docs/PUBLIC_DEMO.md` en cada uno. Ese comando publica exclusivamente
el build estático auditado; no subir la instalación real de Booking al proyecto demo.

## Verificación

Astro check: sin errores ni advertencias. Build estático correcto.
QA del bloque en Chromium a 1440, 1024, 430 y 375 px: sin desborde horizontal,
dos enlaces correctos, menú móvil operativo, sin errores JavaScript y sin
violaciones automáticas de accesibilidad en el bloque nuevo.
Capturas revisadas visualmente en escritorio, tablet y móvil.
