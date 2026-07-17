// Servicios de AMG Seguridad. `icon` es el SVG completo tal cual el diseño.
export interface Service {
  title: string;
  desc: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Alarmas monitoreadas',
    desc: 'Monitoreo las 24 hs los 365 días del año, con o sin comodato. Respuesta inmediata ante cualquier evento.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7"><path d="M10.3 3.7a2.4 2.4 0 0 1 3.4 0l6.6 6.6a2.4 2.4 0 0 1 0 3.4l-6.6 6.6a2.4 2.4 0 0 1-3.4 0l-6.6-6.6a2.4 2.4 0 0 1 0-3.4z"/><circle cx="12" cy="12" r="2.6"/></svg>',
  },
  {
    title: 'Alarmas sin monitoreo',
    desc: 'Sistemas de alarma autónomos para el hogar y el comercio, con aviso local y notificaciones al celular.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  },
  {
    title: 'Cámaras de seguridad',
    desc: 'Cámaras HD, domo, digitalizadas y robotizadas monitoreadas. Vea su propiedad en tiempo real desde el celular.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7h3l2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/><circle cx="13" cy="12" r="4"/></svg>',
  },
  {
    title: 'Control de acceso',
    desc: 'Gestione y controle el ingreso de personas y vehículos a su propiedad, empresa o edificio.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="12" height="16" rx="2"/><circle cx="9" cy="12" r="1.6"/><path d="M18 8v8M21 10v4"/></svg>',
  },
  {
    title: 'Portero inteligente',
    desc: 'Atienda y controle el acceso a su domicilio desde el teléfono, esté donde esté.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 6h4"/><circle cx="12" cy="17" r="1"/></svg>',
  },
  {
    title: 'Cerco perimetral',
    desc: 'Protección perimetral electrificada que refuerza la seguridad de todo el perímetro de su propiedad.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5M4 5h13l-2 4 2 4H4"/></svg>',
  },
  {
    title: 'Servicio técnico',
    desc: 'Mantenimiento, reparación y actualización de alarmas y cámaras existentes de cualquier marca.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4z"/></svg>',
  },
];
