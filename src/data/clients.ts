// Clientes / logos. Imágenes locales en /public/img/clients. `alt` para SEO local.
const BASE = '/img/clients/';

const raw: [string, string][] = [
  ['10-1.jpg', 'Iglesia Catedral de Villa María'],
  ['8-1.jpg', 'AERCA'],
  ['11-1.jpg', 'Banco Nación Argentina'],
  ['3-1.jpg', 'Banco Santander'],
  ['9-1.jpg', 'Centro Empleados de Comercio'],
  ['2-1.jpg', 'Coca Cola'],
  ['6-1.jpg', 'Héctor A. Bertone'],
  ['12-1.jpg', 'Hiper Libertad'],
  ['13-1.jpg', 'OCA'],
  ['7-1.jpg', 'Industrias Cormetal S.A.'],
  ['1-1.jpg', 'Roentgen'],
  ['5-1.jpg', 'AGD Aceitera General Deheza'],
  ['4-1.jpg', 'Aduana Argentina'],
  ['leparc.jpg', 'Peugeot Le Parc'],
  ['BH.jpg', 'Banco Hipotecario'],
  ['ooopobrera.jpg', 'Cooperativa Obrera'],
  ['tesis.jpg', 'Tesis Informática'],
  ['srt.jpg', 'SRT'],
  ['ranco.jpg', 'Ranco'],
  ['lince.jpg', 'Lince'],
  ['moderna.jpg', 'Moderna'],
  ['aca.jpg', 'ACA'],
  ['cpce.jpg', 'CPCE'],
  ['patagonia-1.jpg', 'Banco Patagonia'],
  ['vnsa.jpg', 'Villa Nueva S.A.'],
  ['pizorno.png', 'López y Pizzorno'],
  ['cepra.jpg', 'CEPRA'],
  ['sport.jpg', 'Sport Social Club'],
];

export interface Client {
  src: string;
  alt: string;
}

export const clients: Client[] = raw.map(([p, name]) => ({
  src: BASE + p,
  alt: `${name} — cliente de AMG Seguridad en Villa María`,
}));
