// ─────────────────────────────────────────────────────────────
// Datos maestros de AMG Seguridad. Un único lugar para editar
// teléfono, WhatsApp, dirección, redes y textos SEO.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = 'https://amgseguridad.com.ar';

export const BUSINESS = {
  name: 'AMG Seguridad',
  legalName: 'AMG Seguridad',
  foundingDate: '2004',
  city: 'Villa María',
  region: 'Córdoba',
  country: 'AR',
  countryName: 'Argentina',
  postalCode: 'X5900',
  streetAddress: 'Bartolomé Mitre 874',
  geo: { lat: -32.4103, lng: -63.24 },
  priceRange: '$$',

  // Contacto
  phoneDisplay: '(0353) 4535544',
  phoneTel: '+543534535544',
  whatsappDisplay: '353 427-0504',
  whatsappNumber: '5493534270504',

  // Redes
  facebook: 'https://www.facebook.com/AMGSEGURIDAD',
  instagram: 'https://www.instagram.com/amg.seguridad/',

  // Imágenes (locales, servidas desde /public/img — sin dependencia del WP viejo).
  // ogImage usa URL absoluta porque Open Graph la requiere.
  logo: '/img/logo-amg.jpg',
  ogImage: `${SITE_URL}/img/hero.jpg`,
  heroImage: '/img/hero.jpg',
  marcaImage: '/img/marca.jpeg',
} as const;

// Mapa de Google (embed + link)
export const MAP_QUERY =
  'Bartolom%C3%A9%20Mitre%20874%2C%20X5900%20Villa%20Mar%C3%ADa%2C%20C%C3%B3rdoba';
export const MAP_LINK = `https://maps.google.com/maps?q=${MAP_QUERY}`;
export const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&t=m&z=15&output=embed&iwloc=near`;

// Helper para armar links de WhatsApp con mensaje precargado
export function wa(text: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// Metadatos SEO por defecto
export const SEO = {
  title:
    'AMG Seguridad | Alarmas y Cámaras Monitoreadas en Villa María, Córdoba',
  description:
    'AMG Seguridad: alarmas monitoreadas, cámaras de seguridad HD y control de acceso en Villa María, Córdoba. Empresa homologada con marca registrada, activa desde 2004. Presupuesto sin cargo.',
  keywords:
    'alarmas monitoreadas Villa María, cámaras de seguridad Villa María, control de acceso Villa María Córdoba, instalación de alarmas Villa María, seguridad electrónica Villa María',
  ogTitle: 'AMG Seguridad | Alarmas y Cámaras Monitoreadas en Villa María',
  ogDescription:
    'Seguridad monitoreada las 24 hs los 365 días del año en Villa María y la región.',
} as const;
