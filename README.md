# AMG Seguridad — Sitio web

Sitio institucional de **AMG Seguridad** (Villa María, Córdoba): alarmas y cámaras
monitoreadas, control de acceso y servicio técnico. Réplica exacta del diseño de
Claude Design, construida con **Astro** para máxima performance y SEO local.

## Stack

- **[Astro](https://astro.build)** — salida 100% estática (HTML), cero JS por defecto.
- Islas de JavaScript vanilla mínimas para: menú mobile, acordeón FAQ,
  contador animado de estadísticas y formulario → WhatsApp.
- **@astrojs/sitemap** — `sitemap-index.xml` automático.
- Fuentes Google (Manrope + Inter).

## SEO (optimizado para Villa María)

- `<title>`, meta description y keywords orientados a la ciudad.
- Open Graph + Twitter Cards.
- `lang="es-AR"`, canonical, robots, meta `geo.*` / `ICBM`.
- **JSON-LD**: `SecuritySystemInstallationService` (LocalBusiness) con dirección,
  geo-coordenadas y `areaServed` (Villa María + Córdoba), y `FAQPage` para
  rich results.
- `robots.txt`, `site.webmanifest`, favicons e íconos generados.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (localhost:4321)
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve la build de producción localmente
```

## Estructura

```
src/
├─ consts.ts              # datos maestros: teléfono, WhatsApp, dirección, SEO
├─ data/                  # servicios, clientes, FAQs, medios de pago
├─ layouts/Base.astro     # <head> con SEO + JSON-LD + estilos globales
├─ components/            # secciones (Hero, Servicios, Clientes, Contacto, …)
└─ pages/
   ├─ index.astro         # landing principal
   └─ 404.astro           # página de error
public/                   # robots.txt, favicons, manifest
```

## Editar contenido

- **Contacto, redes, teléfono, WhatsApp** → `src/consts.ts`.
- **Servicios / Clientes / FAQs / Medios de pago** → `src/data/`.
- **Estadísticas** (alarmas, cámaras, años) → `src/components/Stats.astro`.

- **Horario de atención** y **WhatsApp** → `src/consts.ts` (`hoursDisplay`, `whatsappNumber`).

## Deploy

La build es estática (`dist/`), compatible con Netlify, Vercel, Cloudflare Pages
o GitHub Pages. El dominio de producción configurado es
`https://amgseguridad.com.ar` (ver `astro.config.mjs` / `src/consts.ts`).
