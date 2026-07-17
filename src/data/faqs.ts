// Preguntas frecuentes. También alimentan el schema FAQPage (rich results).
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: '¿Cómo instalar alarmas monitoreadas en Villa María?',
    a: 'Coordinamos una visita sin cargo en Villa María para evaluar tu hogar o comercio, diseñar el sistema a medida y realizar la instalación. El monitoreo queda activo las 24 hs los 365 días del año, con o sin comodato del equipo.',
  },
  {
    q: '¿Qué diferencia hay entre una alarma monitoreada y una sin monitoreo?',
    a: 'La alarma monitoreada está conectada a nuestra central, que recibe y gestiona cada evento en tiempo real. La alarma sin monitoreo (autónoma) da aviso local y notificaciones al celular, pero no cuenta con seguimiento de central.',
  },
  {
    q: '¿Instalan cámaras de seguridad en Villa María y la región?',
    a: 'Sí. Instalamos cámaras HD, domo, digitalizadas y robotizadas monitoreadas en Villa María y toda la región, con acceso en vivo desde tu celular.',
  },
  {
    q: '¿Ofrecen alarmas con comodato?',
    a: 'Sí, ofrecemos planes con y sin comodato del equipamiento. Te asesoramos sin cargo sobre la modalidad que mejor se adapte a tu hogar o comercio.',
  },
  {
    q: '¿Cuál es la zona de cobertura?',
    a: 'Brindamos servicio en Villa María y la región (Córdoba, Argentina), tanto para viviendas particulares como para comercios e instituciones.',
  },
  {
    q: '¿Hacen servicio técnico de alarmas y cámaras existentes?',
    a: 'Sí. Realizamos mantenimiento, reparación y actualización de alarmas y cámaras de distintas marcas, incluso si no fueron instaladas por nosotros.',
  },
];
