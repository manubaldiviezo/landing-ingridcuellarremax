# Landing Page — Ingrid Cuellar | Inmobiliaria de Lujo

Landing premium para captar leads (Meta Ads) y enviarlos a WhatsApp.
Stack: **Next.js 14 + Tailwind CSS**. Lista para **Vercel**.

---

## 🚀 Cómo desplegar (GitHub → Vercel)

1. Subí esta carpeta a un repositorio nuevo en GitHub.
2. Entrá a [vercel.com](https://vercel.com) → **Add New → Project** → importá el repo.
3. Vercel detecta Next.js automáticamente. Click en **Deploy**. Listo.

Para desarrollar localmente:

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

---

## ⚙️ Lo PRIMERO que tenés que personalizar

### 1. Número de WhatsApp (obligatorio)
Archivo: `components/LeadForm.js` (arriba del todo)

```js
const WHATSAPP_NUMBER = "59100000000"; // ← poné el número real, con código país, sin + ni espacios
```

Ejemplo para Bolivia: `59171234567`

### 2. Conectar Go High Level (cuando lo tengas)
Mismo archivo, `components/LeadForm.js`:

```js
const GHL_WEBHOOK_URL = ""; // ← pegá acá la URL del webhook/inbound de GHL
```

El formulario **valida nombre y teléfono de forma obligatoria** antes de abrir
WhatsApp. Si pegás el webhook de GHL, además guarda el lead automáticamente.
Si lo dejás vacío, igual funciona y abre WhatsApp (no se pierde ningún lead).

### 3. Testimonios reales
Archivo: `app/page.js` → buscá `TESTIMONIOS`. Reemplazá los `[INSERTAR: ...]`
por testimonios reales de clientes (con nombre y resultado concreto).

### 4. Stat de "mercados internacionales"
Archivo: `app/page.js` → `STATS`. Ajustá el número `3` si corresponde.

---

## 🖼️ Imágenes (carpeta `public/img/`)

| Archivo | Uso | Reemplazar por |
|---|---|---|
| `ingrid-hero.jpg` | Foto principal del Hero | Foto pro de Ingrid en horizontal/vertical alta calidad |
| `ingrid-retrato.jpg` | Sección "Sobre Ingrid" | Retrato |
| `firma-gold.png` | Logo firma (nav + footer) | Ya procesado, transparente |
| `remax-globo.png` | Logo RE/MAX | Ya procesado, transparente |

Para cambiar una imagen: reemplazá el archivo manteniendo **el mismo nombre**.

---

## 🎨 Paleta de marca

| Color | HEX | Uso |
|---|---|---|
| Navy | `#0E1B2A` | Fondos oscuros |
| Cream | `#F4EFE6` | Fondos claros |
| Gold | `#C2A56E` | Acentos, CTAs |

Definidos en `tailwind.config.js`.
