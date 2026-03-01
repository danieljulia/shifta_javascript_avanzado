# Ejemplos Vue 3 Sencillos con CDN

Esta carpeta contiene ejemplos básicos de Vue 3 utilizando el CDN (sin necesidad de instalación ni build tools).

## Diferencias principales entre Vue 2 y Vue 3

### Sintaxis de inicialización
- **Vue 2**: `new Vue({ ... })`
- **Vue 3**: `createApp({ ... }).mount('#app')`

### Hooks del ciclo de vida
- **Vue 2**: `beforeDestroy`, `destroyed`
- **Vue 3**: `beforeUnmount`, `unmounted`

### CDN
- **Vue 2**: `https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js`
- **Vue 3**: `https://unpkg.com/vue@3/dist/vue.global.js`

## Ejemplos incluidos

1. **contador.html** - Contador simple con botones de incremento y decremento
2. **contador_visitas.html** - Contador de visitas usando localStorage
3. **modal.html** - Modal básico con apertura y cierre
4. **reloj.html** - Reloj digital que se actualiza cada segundo
5. **imagenes_aleatorias.html** - Generador de imágenes aleatorias usando API

## Cómo usar

Simplemente abre cualquier archivo HTML en tu navegador. No se requiere instalación ni servidor local.

## Características de Vue 3

- Mejor rendimiento
- API de composición (opcional)
- Mejor soporte TypeScript
- Fragmentos (múltiples nodos raíz)
- Teleport
- Suspense

## Recursos

- [Documentación oficial de Vue 3](https://vuejs.org/)
- [Guía de migración de Vue 2 a Vue 3](https://v3-migration.vuejs.org/)
