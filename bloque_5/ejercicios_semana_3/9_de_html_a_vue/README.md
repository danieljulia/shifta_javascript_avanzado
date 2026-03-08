# De HTML/CSS a Vue (resumen rápido)

Este ejercicio muestra cómo convertir un sitio HTML/CSS estático en una **app Vue** con **componentes** y **router**.

## 1) Detecta las partes reutilizables

En tu HTML identifica bloques repetidos o secciones claras (header, cards, footer…). Cada bloque puede ser un **componente Vue**.

Ejemplo:
- `Header.vue`
- `Home.vue`
- `ProjectDetail.vue`

## 2) Divide el HTML en componentes

Cada componente tiene su plantilla en `<template>` y su lógica en `<script>`:

```vue
<template>
  <header>...</header>
</template>

<script setup>
// lógica del componente
</script>
```

## 3) Convierte datos estáticos en arrays

Si antes repetías tarjetas en HTML, pásalo a un array:

```js
export const projects = [
  { id: 1, title: 'Forest Generator', description: '...' },
  { id: 2, title: 'Delta Landscape', description: '...' }
]
```

Y usa `v-for` para renderizar:

```vue
<a v-for="p in projects" :key="p.id">{{ p.title }}</a>
```

## 4) Añade routing con Vue Router

Cuando el HTML tiene varias páginas, convierte cada una en **ruta**:

```js
const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: ProjectDetail }
]
```

## 5) Usa el parámetro de la ruta

En la página de detalle, lee el `id` y busca el proyecto:

```js
const project = computed(() => projects.find(p => p.id === Number(route.params.id)))
```

## 6) Monta todo en `App.vue`

`App.vue` es la base común y contiene:

```vue
<Header />
<router-view />
```

---

✅ Resultado: una app Vue con componentes reutilizables, datos dinámicos y navegación real.
