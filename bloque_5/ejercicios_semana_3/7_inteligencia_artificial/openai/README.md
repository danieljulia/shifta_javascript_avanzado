# Vue 3 (CDN) + OpenAI Chat Completions API — ejemplo

## Cómo obtener la clave de API (API key)

1. Entra en [platform.openai.com](https://platform.openai.com) y crea una cuenta o inicia sesión.
2. Ve a la sección **API keys** (menú lateral o directamente `platform.openai.com/api-keys`).
3. Pulsa **Create new secret key**, dale un nombre y cópiala (solo se muestra una vez).
4. Añade un método de pago en **Billing** — las claves nuevas no funcionan sin saldo/tarjeta configurada, aunque uses modelos baratos como `gpt-6-luna`.

## ⚠️ Cómo usar la clave de forma segura

**Nunca** pegues la clave directamente en el HTML ni la subas a git (ni siquiera a un repositorio privado): cualquiera con acceso al código fuente o al historial de git podría robarla y gastar tu saldo.

Dos formas seguras de usarla con este ejemplo:

- **Recomendada (producción y desarrollo normal):** crea un servidor proxy (ver el ejemplo de `server.js` comentado al final de `index.html`) y guarda la clave en la variable de entorno `OPENAI_API_KEY`. El servidor añade la cabecera `Authorization: Bearer <API_KEY>` y reenvía la llamada a OpenAI, así la clave nunca llega al navegador.
- **Solo para pruebas rápidas en tu propia máquina:** abre la consola del navegador en esta página y ejecuta:
  ```js
  window.UNSAFE_OPENAI_API_KEY = "sk-..."
  ```
  Esta variable se pierde al recargar la página y nunca debe escribirse en el código ni subirse a git.

## Modelos vigentes (actualizado 2026)

`gpt-3.5-turbo` está descatalogado/en vías de retirada. Usa modelos vigentes como:

- `gpt-6-luna` — barato, para tareas sencillas.
- `gpt-6.1-sol` — equilibrio precio/calidad.
- `gpt-6-astra` — máxima capacidad.

Consulta la lista actualizada en [platform.openai.com/docs/models](https://platform.openai.com/docs/models).
