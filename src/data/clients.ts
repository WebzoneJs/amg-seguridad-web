// Clientes / logos. `alt` optimizado para SEO local.
const BASE = 'https://amgseguridad.com.ar/wp-content/uploads/';

const raw: [string, string][] = [
  ['2022/09/10-1.jpg', 'Iglesia Catedral de Villa María'],
  ['2022/09/8-1.jpg', 'AERCA'],
  ['2022/09/11-1.jpg', 'Banco Nación Argentina'],
  ['2022/09/3-1.jpg', 'Banco Santander'],
  ['2022/09/9-1.jpg', 'Centro Empleados de Comercio'],
  ['2022/09/2-1.jpg', 'Coca Cola'],
  ['2022/09/6-1.jpg', 'Héctor A. Bertone'],
  ['2022/09/12-1.jpg', 'Hiper Libertad'],
  ['2022/09/13-1.jpg', 'OCA'],
  ['2022/09/7-1.jpg', 'Industrias Cormetal S.A.'],
  ['2022/09/1-1.jpg', 'Roentgen'],
  ['2022/09/5-1.jpg', 'AGD Aceitera General Deheza'],
  ['2022/09/4-1.jpg', 'Aduana Argentina'],
  ['2024/10/leparc.jpg', 'Peugeot Le Parc'],
  ['2025/05/BH.jpg', 'Banco Hipotecario'],
  ['2023/05/ooopobrera.jpg', 'Cooperativa Obrera'],
  ['2023/06/tesis.jpg', 'Tesis Informática'],
  ['2023/06/srt.jpg', 'SRT'],
  ['2023/06/ranco.jpg', 'Ranco'],
  ['2023/06/lince.jpg', 'Lince'],
  ['2023/06/moderna.jpg', 'Moderna'],
  ['2023/07/aca.jpg', 'ACA'],
  ['2023/07/cpce.jpg', 'CPCE'],
  ['2023/10/patagonia-1.jpg', 'Banco Patagonia'],
  ['2024/01/vnsa.jpg', 'Villa Nueva S.A.'],
  ['2024/01/pizorno.png', 'López y Pizzorno'],
  ['2024/01/cepra.jpg', 'CEPRA'],
  ['2024/02/sport.jpg', 'Sport Social Club'],
];

export interface Client {
  src: string;
  alt: string;
}

export const clients: Client[] = raw.map(([p, name]) => ({
  src: BASE + p,
  alt: `${name} — cliente de AMG Seguridad en Villa María`,
}));
