# Pinia global demo

Ejemplo muy sencillo de Pinia para compartir datos globales entre dos componentes.

## ¿Qué muestra?

- Un contador global que puede incrementarse y decrementarse
- Un mensaje global editable desde otro componente
- Ambos componentes leen y escriben el mismo estado de Pinia

## Estructura

```
App.vue
├── CounterPanel.vue  → Lee y actualiza el contador
└── MessagePanel.vue  → Lee y actualiza el mensaje
stores/
└── globalStore.js     → Estado global de Pinia
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
