# Portafolio DesarroJoss

Responde siempre en español. Portafolio personal de la marca DesarroJoss (single-page).
Repo independiente: https://github.com/desarrojoss/Portafolio (rama `main`) · Producción: https://portafolio-xk85.vercel.app (Vercel, despliega Joss).

## Estructura
- Next.js 15 + TypeScript + Tailwind. Todo el contenido (proyectos, stack, enlaces) vive en [src/app/page.tsx](src/app/page.tsx).
- Componentes en `src/components/` (ProjectCard, CardCover, CursorGlow, ScrollProgress, icons). Imágenes de proyectos en `public/` (ej. `quotia-og.png`).
- Estética de marca: fondo oscuro, acento cian, logo `<DJ/>`, títulos monoespaciados.

## Cuándo se toca
- Cada proyecto nuevo de DesarroJoss que se shippee → agregar su card (título, descripción, stack, estado, demo, repo, imagen 1200x630).
- Cambios grandes en un proyecto existente (ej. Quotia v2) → actualizar su card.
- Nunca mostrar código, nombres internos ni detalles confidenciales de Ayesa/Promigas: los proyectos profesionales van generalizados.

## Reglas
- No desplegar: Joss despliega en Vercel.
- Commits pequeños en español, push a `origin main`.
- Es un repo independiente aunque viva en `DesarroJoss/proyectos/Portafolio`.
