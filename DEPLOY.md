# 🚀 Guía de despliegue — AMG Seguridad en Hostinger con GitHub

Paso a paso para publicar y actualizar este sitio (Astro estático) en Hostinger,
con **auto-deploy en cada `git push`** vía GitHub Actions + FTPS.

> Esta guía documenta exactamente el método que ya dejamos funcionando.
> Sirve como referencia para siempre (y como plantilla para otros sitios).

---

## 📌 Resumen del funcionamiento

```
git push a main  ──►  GitHub Actions  ──►  npm run build (genera dist/)  ──►  sube dist/ por FTPS  ──►  Hostinger /public_html
```

- El sitio es **estático** (HTML/CSS/JS). No necesita Node ni PHP corriendo en el servidor.
- Hostinger solo hospeda los archivos ya compilados de la carpeta `dist/`.
- GitHub Actions compila y sube **solo lo que cambió** en cada push.

---

## 🔧 Configuración inicial (se hace UNA sola vez)

### 1. Crear el sitio en Hostinger

1. Panel de Hostinger → **`+ Añadir sitio web`**.
2. Elegí **`Sitio web PHP/HTML`** (NO "App web de Node.js" — esa es para servidores Node; la nuestra es estática).
3. Asigná un **dominio temporal** de Hostinger (te dan una URL tipo
   `xxxxx.hostingersite.com`). Más adelante se puede cambiar al dominio real.
4. Terminá la creación. Esto genera una carpeta `public_html` propia para este sitio.

> ⚠️ Cada sitio debe ser su **propia instancia**. No subas un sitio dentro del
> `public_html` de otro (ej. el de webzone.com.ar), o se mezclan.

### 2. Obtener los datos FTP

En el panel de **ese** sitio → **Archivos → Cuentas FTP**. Anotá:

| Dato | Ejemplo (instancia actual de AMG) |
|------|-----------------------------------|
| **IP / Host FTP** | `45.151.120.84` |
| **Usuario FTP** | `u551500546.azure-ant-447026.hostingersite.com` |
| **Contraseña FTP** | *(la que definiste / reseteás desde "Cambiar la contraseña de FTP")* |
| **Puerto** | `21` |
| **Carpeta** | `public_html` |
| **URL temporal** | `https://azure-ant-447026.hostingersite.com` |

### 3. Cargar las credenciales como *secrets* en GitHub

En el repo (`github.com/WebzoneJs/amg-seguridad-web`) →
**Settings → Secrets and variables → Actions → New repository secret**.

Creá estos 3 secrets:

| Nombre | Valor |
|--------|-------|
| `FTP_HOST` | la IP/host FTP (ej. `45.151.120.84`) |
| `FTP_USERNAME` | el usuario FTP completo |
| `FTP_PASSWORD` | la contraseña FTP |

> 💡 También se pueden cargar por consola con GitHub CLI:
> ```bash
> printf '45.151.120.84' | gh secret set FTP_HOST --repo WebzoneJs/amg-seguridad-web
> printf 'usuario_ftp'   | gh secret set FTP_USERNAME --repo WebzoneJs/amg-seguridad-web
> printf 'contraseña'    | gh secret set FTP_PASSWORD --repo WebzoneJs/amg-seguridad-web
> ```

### 4. El workflow (ya está en el repo)

Archivo: **`.github/workflows/deploy.yml`**. Puntos clave:

- Corre en cada push a `main` (y a mano desde la pestaña *Actions*).
- Usa **FTPS** (`protocol: ftps`), porque **Hostinger bloquea el FTP sin cifrar
  desde las IPs de GitHub** (el FTP plano da "Timeout").
- Sube el contenido de `dist/` a la carpeta `server-dir: /public_html/`.

No hay que tocarlo salvo que cambie la carpeta destino (ver más abajo).

---

## 🔄 Uso diario (actualizar el sitio)

Cada vez que quieras publicar un cambio:

```bash
# 1. Editás lo que sea en el proyecto
# 2. Commit y push:
git add -A
git commit -m "Descripción del cambio"
git push origin main
```

Listo. GitHub Actions compila y despliega solo. Podés ver el progreso en:
**repo → pestaña `Actions`**. En ~1–2 minutos está online.

### Disparar el deploy a mano (sin cambiar código)

Repo → **Actions → "Build y Deploy a Hostinger" → Run workflow**.
O por consola:
```bash
gh workflow run deploy.yml --repo WebzoneJs/amg-seguridad-web
```

---

## 🖥️ Deploy manual por FTP (opción de respaldo)

Si necesitás subir sin pasar por GitHub (ej. una prueba rápida):

```bash
npm run build          # genera dist/
```

Luego subís **el contenido de `dist/`** (no la carpeta en sí) a `public_html` con:
- **FileZilla / SmartFTP**: conectás con host/usuario/contraseña, puerto 21,
  modo **FTPS explícito**, y arrastrás los archivos a `public_html`.
- O el **Administrador de archivos** de Hostinger: subís el zip de `dist/` y
  lo extraés dentro de `public_html`.

> El `index.html` tiene que quedar **directo en `public_html`**, no dentro de una subcarpeta.

---

## 🌐 Pasar al dominio real (amgseguridad.com.ar)

Cuando el sitio esté aprobado en el dominio temporal:

1. En Hostinger, en **este mismo sitio**, cambiá/agregá el dominio
   `amgseguridad.com.ar` (Dominios → conectar dominio).
2. Apuntá el DNS del dominio a Hostinger (nameservers o registro A a la IP).
3. Activá **SSL** (Hostinger lo hace gratis con Let's Encrypt).
4. No hay que tocar el código: las imágenes usan rutas relativas (`/img/...`).
   El `canonical` y el `og:image` ya apuntan a `https://amgseguridad.com.ar`
   (definido en `src/consts.ts` → `SITE_URL`).

---

## 🆘 Problemas comunes

| Síntoma | Causa / Solución |
|---------|------------------|
| Actions falla con **"Timeout (control socket)"** o "are you sure your server works via FTP?" | Hostinger bloquea FTP plano desde runners. Asegurate de que el workflow use `protocol: ftps` y `port: 21`. |
| El deploy funciona pero **no veo el sitio** | No hay dominio apuntando a ese `public_html`. Asigná un dominio (temporal o real) a **ese** sitio en Hostinger. |
| Subí y **aparece otro sitio** / se mezcla | Estás usando el FTP de otra instancia. Verificá que el usuario FTP sea el de la instancia correcta. |
| **Imágenes rotas** | Las imágenes están en `public/img/` y se sirven locales. Si ves rutas a `wp-content`, alguien revirtió la localización. |
| Cambié credenciales FTP | Actualizá los 3 secrets en GitHub (paso 3). |
| Quiero cambiar la carpeta destino | Editá `server-dir` en `.github/workflows/deploy.yml` (ej. `/domains/dominio.com/public_html/`). |

---

## 📁 Estructura relevante

```
.github/workflows/deploy.yml   → workflow de auto-deploy (build + FTPS)
src/consts.ts                  → datos del negocio + SITE_URL (dominio final)
dist/                          → salida compilada (NO se commitea; se genera con npm run build)
public/img/                    → imágenes locales (logo, hero, clientes)
```

## 🔗 Datos de referencia (instancia actual)

- **Repo GitHub:** `github.com/WebzoneJs/amg-seguridad-web`
- **Hosting:** Hostinger — "Servidor Grande 1"
- **Instancia AMG:** usuario FTP `u551500546.azure-ant-447026.hostingersite.com`
- **URL temporal:** `https://azure-ant-447026.hostingersite.com`
- **Dominio final previsto:** `https://amgseguridad.com.ar`
