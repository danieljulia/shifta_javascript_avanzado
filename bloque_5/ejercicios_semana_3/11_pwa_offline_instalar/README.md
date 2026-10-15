# PWA: instalar, aviso offline y página offline

Ejemplo sencillo de **Progressive Web App** pensado para diseñadores.
Sin frameworks, sin build: solo HTML, CSS y un poco de JavaScript comentado.

## ¿Qué incluye?

| Feature | Dónde está |
|---|---|
| Manifest con iconos y colores | `manifest.json` |
| Botón "Instalar app" | `index.html` (evento `beforeinstallprompt`) |
| Aviso visible sin conexión | `index.html` (eventos `online` / `offline`) |
| Página offline personalizada | `offline.html` |
| Service worker con caché | `service-worker.js` |

## Cómo probarlo

Una PWA necesita servirse por HTTP (no funciona abriendo el archivo directamente):

```bash
cd 11_pwa_offline_instalar
python3 -m http.server 8080
```

Abre `http://localhost:8080` en Chrome.

1. **Instalar**: pulsa el botón "⬇ Instalar app" (también aparece un icono de instalar en la barra de direcciones).
2. **Aviso offline**: abre DevTools → pestaña *Network* → marca *Offline*, o quita el wifi. Aparecerá el aviso rojo.
3. **Página offline**: con la conexión cortada, recarga la página. Verás `offline.html` en vez del error del navegador.

## Ideas para clase

- Rediseñar `offline.html`: ilustración, colores de marca, microcopy propio.
- Cambiar `theme_color` e iconos en el manifest y ver el efecto en la splash screen (DevTools → *Application → Manifest*).
- Estilizar el aviso offline como una barra animada o un toast.
