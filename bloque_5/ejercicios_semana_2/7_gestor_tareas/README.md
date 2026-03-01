# Gestor de Tareas

Aplicación sencilla de gestión de tareas creada con Vite + Vue.js 3.

## Características

- ✅ Añadir nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- ✅ Filtrar por estado (todas, pendientes, completadas)
- ✅ Persistencia en localStorage
- ✅ Estadísticas de tareas

## Estructura de componentes

```
App.vue
├── TaskForm.vue      → Formulario para añadir tareas
├── TaskFilters.vue   → Botones de filtrado
├── TaskItem.vue      → Cada tarea individual
└── TaskStats.vue     → Estadísticas
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
