const sharp = require('sharp');
const fs = require('fs');
const LOGO = 'public/img/logo-amg.jpg';

(async () => {
  // ---------- FAVICON (recorte "AMG" del logo) ----------
  const amg = await sharp(LOGO).extract({ left: 34, top: 24, width: 440, height: 172 }).png().toBuffer();
  const S = 512, pad = 66, inner = S - 2 * pad;
  const amgFit = await sharp(amg).resize({ width: inner, fit: 'inside' }).toBuffer();
  const m = await sharp(amgFit).metadata();
  const top = Math.round((S - m.height) / 2), left = Math.round((S - m.width) / 2);
  const frame = Buffer.from(`<svg width="${S}" height="${S}"><rect width="${S}" height="${S}" rx="96" fill="#ffffff"/><rect x="18" y="18" width="${S-36}" height="${S-36}" rx="76" fill="none" stroke="#1E1BA6" stroke-width="16"/></svg>`);
  const icon = await sharp(frame).composite([{ input: amgFit, top, left }]).png().toBuffer();
  fs.writeFileSync('public/icon-512.png', icon);
  await sharp(icon).resize(192, 192).png().toFile('public/icon-192.png');
  await sharp(icon).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(icon).resize(32, 32).png().toFile('public/favicon-32.png');
  // favicon.svg: envuelve un PNG 128 en base64 (nítido y liviano)
  const png128 = await sharp(icon).resize(128, 128).png().toBuffer();
  const b64 = png128.toString('base64');
  fs.writeFileSync('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><image href="data:image/png;base64,${b64}" width="128" height="128"/></svg>`);

  // ---------- OG IMAGE 1200x630 ----------
  const logoB64 = fs.readFileSync(LOGO).toString('base64');
  const W = 1200, H = 630, cw = 700, ch = 300, cx = (W - cw) / 2, cy = 118;
  const og = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><radialGradient id="g" cx="86%" cy="14%" r="62%">
      <stop offset="0%" stop-color="#EA6A1E" stop-opacity="0.30"/>
      <stop offset="60%" stop-color="#0B2A4A" stop-opacity="0"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="#0B2A4A"/>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="30" fill="#ffffff"/>
    <image href="data:image/jpeg;base64,${logoB64}" x="${cx+95}" y="${cy+58}" width="${cw-190}" height="${ch-116}" preserveAspectRatio="xMidYMid meet"/>
    <text x="${W/2}" y="${cy+ch+86}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="45" fill="#ffffff">Alarmas · Cámaras · Control de acceso</text>
    <text x="${W/2}" y="${cy+ch+140}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="30" fill="#AEBFD3">Villa María, Córdoba · Monitoreo 24 hs · 365 días</text>
  </svg>`;
  await sharp(Buffer.from(og)).jpeg({ quality: 88 }).toFile('public/img/og.jpg');

  console.log('OK: favicon + iconos + og.jpg generados');
})();
