# Semana 2. Frameworks FrontEnd: Ventajas, Instalación, Comparación y Ejemplos con Vue.js

## Índice

- [Ventajas de los frameworks respecto a JavaScript puro](#ventajas-de-los-frameworks-respecto-a-javascript-puro)
- [Posibles maneras de usar Vue](#posibles-maneras-de-usar-vue)
- [Instalación y configuración de Vue](#instalación-y-configuración-de-vue)
- [Ejemplos básicos](#ejemplos-básicos)
- [Ejemplo con Vite](#ejemplo-con-vite)
- [Ejemplo de portfolio con Vue](#ejemplo-de-portfolio-con-vue)
- [Crear aplicación usando línea de comandos](#crear-aplicacion-usando-linea-de-comandos)
- [Curso de Vue 2](#curso-de-vue-2-la-mayoria-de-conceptos-sirven-para-vue-3-que-es-la-versión-actual)
- [Vue.js vs React](#vuejs-vs-react)
- [Referencias](#referencias)
- [Tarea propuesta con Vue](#tarea-propuesta-con-vue)

## Ventajas de los frameworks respecto a JavaScript puro

Vue.js y otros frameworks frontend ofrecen grandes ventajas frente a JavaScript puro, ya que simplifican y optimizan el desarrollo de aplicaciones web complejas.  
Estos frameworks proporcionan una estructura clara basada en **componentes reutilizables**, lo que facilita el mantenimiento y la escalabilidad del código.  

Además, incorporan **sistemas de reactividad automática** —como el **enlace de datos bidireccional** en Vue.js— que mantienen sincronizados los datos y la interfaz sin necesidad de manipular manualmente el DOM.  
Esto reduce errores y evita escribir código repetitivo.  

También incluyen herramientas integradas para la **gestión del estado**, el **enrutamiento** y la **optimización del rendimiento**, además de un amplio ecosistema de librerías y convenciones que aceleran el desarrollo.  

En cambio, con **JavaScript puro (Vanilla JavaScript)** es necesario crear soluciones personalizadas para cada funcionalidad.  
Los frameworks, en cambio, **estandarizan buenas prácticas**, permiten centrarse en la **lógica de negocio** y facilitan la **colaboración en equipo**, aumentando la productividad general.


La inversión en el estudio de este tipo de frameworks vale la pena, ya que una vez aprendidos, la programación de aplicaciones en JavaScript se vuelve mucho más sencilla y ágil.

Básicamente existen 3 frameworks reactivos:

- React
- Angular
- Vue.js  

Enseñaremos aquí Vue.js porque es el más sencillo y, una vez lo dominas, resulta más fácil aprender los demás.

Entre las ventajas más importantes de una aplicación desarrollada con esta filosofía encontramos:

- Solo se renderiza lo necesario, mejorando notablemente el rendimiento de las aplicaciones.
- Permiten dividir la interfaz en componentes reutilizables y mantenibles.
- Facilitan el desarrollo en equipo al poder trabajar en componentes diferentes.
- Promueven la reutilización de código.
- Disponen de gran cantidad de librerías y componentes.
- Proporcionan una estructura más organizada y predecible.
- Generan un código más limpio y modular.

## Posibles maneras de usar Vue

<https://vuejs.org/guide/extras/ways-of-using-vue>

- Como un script "standalone"
- Como un paquete de npm
- En Single-Page Applications (SPA)
- Fullstack / SSR (Server Side Rendering)
- Aplicaciones móviles con Ionic Vue
- Aplicaciones de escritorio con Electron

## Instalación y configuración de Vue

Introducción a Vue  
Video en el botón "Por qué Vue.js"  
<https://es.vuejs.org/>

Instalación de Vue  
<https://es.vuejs.org/v2/guide/installation>

Nosotros utilizaremos dos formas de instalarlo:

- Como script (CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
```

- Como paquete npm

```bash
npm install vue
```

- Utilizando vite (y escogiendo Vue en el asistente)
En la línea de comandos, Vue permite crear un esqueleto completo con funcionalidades extra respondiendo una serie de preguntas.  
Es un entorno muy completo, por ejemplo, para crear SPA.

```bash
npm create vite@latest
```


Introducción a Vue 3 de su creador  
<https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview>

## Ejemplos básicos

En "1_vue_sencillo" tenemos un ejemplo que usa la librería de Vue en CDN.  
No es necesario compilarla y funciona directamente.  

Analizar esta aplicación.

Se ejecuta con el siguiente comando (si antes hemos instalado Vite globalmente):

```bash
vite
```

## Ejemplo con Vite

En "2_vue_vite" tenemos una plantilla montada para funcionar con Vite, un poco más compleja y usando el paquete npm.  
Se debe compilar y el resultado se guarda en *dist* con el siguiente comando:

Para crear el proyecto
```bash
npm create vite@latest
```
Y a partir de aqui podemos ver el proyecto y hacer cambios

Podemos ver los cambios en tiempo real:

```bash
npm run dev
```

Finalment para crear la versión de producción

```bash
npm run build
```


## Ejemplo de portfolio con Vue 

En este ejemplo "3_portfolio" vemos una plantilla de un portfolio sencillo que se alimenta de un archivo JSON con los contenidos.


### Rutas absolutas y relativas

Vite asume por defecto que nuestro proyecto va a estar en la raiz del servidor
El problema es que si no es así, por ejemplo lo tenemos en una direccion parecida a  https://ejemplo.com/miaplicacion/ no encontrará los recursos (css, js etc)

Para solucionarlo hay que editar el archivo `vite.config.js` y añadir la siguiente línea:

```js
export default defineConfig({
  base: '/miaplicacion/'
})
```

o mejor 

```js
export default defineConfig({
  base: './'
})
```
## Otros ejemplos con vue

## Curso de Vue 2 (la mayoría de conceptos sirven para Vue 3, que es la versión actual)

Ver curso de Vue 2
<https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/>

## Vue.js vs React

Aunque la filosofía de base de Vue.js y React es similar, presentan algunas diferencias.

- Vue.js fue creado por Evan You, un exingeniero de Google, con el objetivo de tomar lo mejor de Angular y React.  
- React fue desarrollado por Facebook como una biblioteca de interfaz de usuario.  
- Vue tiene una curva de aprendizaje más suave y es considerado más accesible para principiantes.

Renderizado del Lado del Servidor:

- React usa Next.js  
- Vue usa Nuxt.js

## Referencias 

Introducción y documentación oficial de Vue:  
<https://vuejs.org/guide/introduction.html>

## Tarea propuesta con Vue

Crear un portfolio básico utilizando vue.js.
La aplicación debe tener las siguientes funcionalidades:
- Leer archivo json con los datos (como mínimo nombre proyecto, descripción e imagen)
- En la página de inicio se muestra un listado de todos los proyectos, cada uno de ellos con un enlace que te lleva a ver los detalles de un proyecto
- Página única de cada proyecto con más información

Se puede implementar usando vuejs a partir de un CDN o creando un proyecto con vite (esqueleto)
