# Transiciones Vue demo

Ejemplo muy sencillo del componente `<Transition>` de Vue 3 para animar elementos que aparecen y desaparecen.

## ¿Qué muestra?

- **Fade**: un cuadro que aparece/desaparece con fundido (`v-if` + `<Transition>`)
- **Slide**: una notificación que entra deslizándose y se oculta sola a los 2 segundos
- **mode="out-in"**: cambio entre dos vistas, esperando a que salga una antes de entrar la otra

## Conceptos

- `<Transition name="x">` envuelve UN elemento con `v-if` / `v-show` y le aplica clases CSS automáticamente
- Clases que Vue gestiona: `.x-enter-from`, `.x-enter-active`, `.x-leave-active`, `.x-leave-to`
- La animación se define en CSS (`transition`), Vue solo pone y quita las clases en el momento adecuado
- Con varios elementos dentro, cada uno necesita una `:key` distinta
- `mode="out-in"` evita que los dos elementos se animen a la vez

## Estructura

```
App.vue
├── FadeDemo.vue   → Transición "fade" (opacidad)
├── SlideDemo.vue  → Transición "slide" (opacidad + desplazamiento)
└── ModeDemo.vue   → Transición "zoom" con mode="out-in" y :key
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```
