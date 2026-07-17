# MotoGo Tulum — Landing (Next.js)

Landing de MotoGo en **Next.js 15 (App Router)**, lista para desplegar en **Vercel**. La conversión es 100% vía WhatsApp / llamada.

## Requisitos
- Node.js 18.18+ (recomendado 20+)

## Desarrollo
```bash
npm install
npm run dev
# http://localhost:3000
```

## Producción (local)
```bash
npm run build
npm start
```

## Desplegar en Vercel
1. Sube esta carpeta (`motogo-next/`) a un repo de GitHub/GitLab.
2. En Vercel → **New Project** → importa el repo.
3. Vercel detecta Next.js solo. No hace falta configurar nada (framework preset: Next.js, build: `next build`).
4. Deploy. Listo.

> Si el repo tiene la landing en una subcarpeta, en Vercel pon **Root Directory = `motogo-next`**.

Alternativa por CLI: `npm i -g vercel && vercel` dentro de esta carpeta.

## Estructura
```
motogo-next/
├── app/
│   ├── layout.jsx      ← fuentes (next/font), <head>/metadata, wrapper
│   ├── page.jsx        ← compone las secciones en orden
│   └── globals.css     ← reset, media queries (responsive), estilos FAQ y nav
├── components/
│   ├── Nav.jsx         ← client component (menú hamburguesa con useState)
│   └── sections.jsx    ← Hero, Servicios, Aliados, Cobertura, Zonas, FAQ, etc.
├── lib/
│   └── data.js         ← número de WhatsApp/teléfono + arrays de aliados y FAQs
└── public/assets/      ← logos e isotipo
```

## Dónde editar cosas comunes
- **Número de WhatsApp / teléfono:** `lib/data.js` (constantes `WHATSAPP_PEDIDO`, `PHONE_*`). Cambia una vez y se actualiza en toda la página.
- **Aliados (logos):** array `aliados` en `lib/data.js`. Agrega `{ name, src, bg }` y pon el logo en `public/assets/logos/`.
- **FAQs:** array `faqs` en `lib/data.js`.
- **Precios / zonas:** `Zones` en `components/sections.jsx`.
- **Responsive:** todo en `app/globals.css` (breakpoints 1024px y 640px).

## Notas
- **Fuentes** (Bricolage Grotesque + Space Grotesk) se cargan con `next/font/google`: se auto-hospedan en el build, sin llamadas externas en runtime (mejor rendimiento y privacidad).
- **Mascota "Ron":** pendiente en el Hero, donde hoy va el mockup del teléfono (ver comentario en `components/sections.jsx`).
- **App Store / Google Play:** botones "próximamente", sin enlace real todavía.
- Cuando exista la Fase 2 (app de pedidos), solo se cambian los enlaces de WhatsApp por los de la app. Ver `PLAN-FASE-2.md`.
