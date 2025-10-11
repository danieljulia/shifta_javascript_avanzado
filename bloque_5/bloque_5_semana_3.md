# Semana 3. Aplicaciones Web Progresivas (PWA). Mockapi para Almacenamiento y Base de Datos

Índice

- [Introducción a las SPA](#introducción-a-las-spa)
- [Introducción a las PWA](#introducción-a-las-pwa)
- [Progressive Web Applications. App manifest](#progressive-web-applications-app-manifest)
- [Workbox](#workbox)
- [Simulación de base de datos con .json](#simulación-de-base-de-datos-con-json)
- [Simulación de backend con localStorage](#simulación-de-backend-con-localstorage)
- [Mockapi](#mockapi)
- [Introducción a Firebase](#introducción-a-firebase)
- [Backend de escritura](#backend-de-escritura)
- [Firebase storage para almacenar archivos](#firebase-storage-para-almacenar-archivos)
- [Otros aspectos de firebase](#otros-aspectos-de-firebase)
- [Tarea](#ejercicio)

## Introducción a las SPA

Una SPA es una aplicación web o sitio web que interactúa con el usuario cargando una única página HTML inicial y actualizando dinámicamente el contenido de esa página a medida que el usuario interactúa con la aplicación, en lugar de cargar páginas completas nuevas desde el servidor. Toda la complejidad de la aplicación se realiza sobre un único archivo HTML. 

Ventajas:

- Navegación fluida
- Carga asíncrona
- Renderizado del lado del cliente
- Menor carga del servidor

Inconvenientes:

- Comparado con una aplicación móvil nativa al utilizar tecnologías web, el rendimiento puede ser inferior.

En Vue se puede implementar utilizando vue-router

Veamos un ejemplo de una SPA con dos opciones, Home y About
(ver vue_spa)
En el directorio del ejemplo hay una explicación de cómo se ha creado


Ver ejemplo sencillo

## Introducción a las PWA

Las PWA (Progressive Web Apps) son aplicaciones web diseñadas para funcionar de manera similar a las aplicaciones nativas que instalas en tu teléfono o computadora, pero con ventajas únicas al estar basadas en tecnologías web. Combina lo mejor de ambos mundos: la accesibilidad de una página web y la experiencia de usuario de una app tradicional.

- Tienen apariencia de aplicación (no se visualizan los controles del navegador web)
- Pueden funcionar sin conexión (offline)
- Se pueden instalar (aunque la opción de instalación no funciona en todos los navegadores y sistemas operativos)
- Son responsivas
- Se actualizan automáticamente (como cualquier web)
- Pueden usar notificaciones push 
- Son seguras (https)  

Son más ligeras y menos costosas que una aplicación nativa
En contrapartida no tienen tanto rendimiento (sobre todo en juegos y aplicaciones con gráficos intensivos)

En realidad son una evolución de las páginas web tradicionales 

Video introductorio
https://www.youtube.com/watch?v=BByUknfLTuA&list=PLlrxD0HtieHjqO1pNqScMngrV7oFro-TY


Si entramos en este ejemplo
https://airhorner.com/
y desconectamos la conexión de internet veremos que sigue funcionando.
Además la podemos instalar en el móvil con su propio icono
https://airhorner.com/manifest.json

En el ejemplo pwa_simple vemos una PWA muy sencilla que se puede instalar y funcionar off-line.



Para que funcione una PWA es imprescindible que tenga un certificado ssl (https)
Se puede probar este ejemplo aquí
https://pimpampum.net/tmp/pwa_simple/

--> aqui 

## Progressive Web Applications. App manifest 

El manifest es un archivo json con el nombre manifest.json que hay que poner en la raiz de la web

Ejemplo

```
{
  "short_name": "Portfolio",
  "name": "Portfolio shifta",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

En el inspector del navegador podemos ver todos sus campos (en la sección application)

Existen herramientas que permiten crear el archivo manifest 
https://progressier.com/pwa-manifest-generator
https://app-manifest.firebaseapp.com/

Para saber más:
https://web.dev/articles/add-manifest


> Ejemplo. Convertimos nuestro portfolio en una PWA añadiendo en manifest (spa_pwa)

## Workbox

Uno de los temas más interesantes de las PWA es que pueden funcionar (opcionalmente) off-line. Esto se consigue mediante los "service workers"
Existe una libreria de google llamada Workbox que facilita mucho esta funcionalidad.

https://developer.chrome.com/docs/workbox

Es un package de npm
npm install --save-dev workbox-cli

workbox --version

workbox wizard

workbox generateSW

Nota: Otra manera de lanzar un servidor local con npx
npx http-server -p 8080

## Simulación de base de datos con .json 

En un proyecto frontend con JavaScript, a veces no necesitamos una base de datos real, sino solo simular datos para pruebas o desarrollo. Una forma sencilla es usar un archivo JSON que actúe como "base de datos". Este archivo contiene la información estructurada (objetos, listas, valores) y desde JavaScript podemos cargarlo mediante fetch. De esta manera, el JSON hace el papel de backend y nos permite trabajar como si tuviéramos una API.

(ver ejemplos /leer_json)

👉 Con esto, el archivo data.json funciona como nuestra "base de datos simulada" en el frontend.

## Simulación de backend con localStorage 

El localStorage es una herramienta del navegador que permite guardar datos de forma sencilla y persistente en pares de clave y valor. A diferencia de las variables normales, los datos almacenados en localStorage no se pierden al recargar la página o cerrar el navegador; permanecen disponibles hasta que se eliminan manualmente. Esto lo convierte en una opción muy útil para simular un backend en aplicaciones frontend, ya que podemos guardar y recuperar información como si fuese una pequeña base de datos local.
Con localStorage.setItem(clave, valor) almacenamos información, y con localStorage.getItem(clave) la recuperamos. Normalmente, para trabajar con objetos y arrays, utilizamos JSON.stringify() al guardarlos y JSON.parse() al leerlos.
 
Ver ejemplos /4_localstorage


## Mockapi

- https://mockapi.io/projects


En la web de mockapi hay ejemplos de código para consumir la api

https://github.com/mockapi-io/docs/wiki/Code-examples

Podemos ver un ejemplo en 5_ejemplos_mockapi donde se visualizan los datos que provienen de un .json
Se ha creado partiendo de la plantilla de vue vacia

```
npm create vue@latest
```

Usando mockapi incluso podemos hacer el frontend para crear o borrar datos (utilizando el comando POST)
(ejercicio avanzado propuesto, añadir en el ejemplo anterior una opción para añadir elementos, y otra para borrarlos)


-----------> hasta aqui actualizado 

## Introducción a Firebase

Para aplicaciones reales necesitamos un backend de lectura/escritura más potente y con otras funcionalidades.
Firestore es un servicio de base de datos de Google en la nube que forma parte de Firebase 
Una de sus ventajas es que tiene un ajuste de escala automático (adapta automáticamente los recursos a lo que necesita)
Es gratuito si el uso es limitado

https://firebase.google.com/

Video introducción a Firebase 
https://www.youtube.com/watch?v=p9pgI3Mg-So&t=3s

Realtime database es otro servicio de datos con otras características (mas pensado para optimizar la velocidad)

Storage sirve para almacenar archivos. 

Debemos crear una cuenta y activar los servicios Firestore database (para almacenar nuestros datos en json) y Storage (para poder subir las imágenes y archivos descargables).


## Backend de escritura 

Una de las ventajas de firestore es que no solo sirve para "leer" datos sino que también nos permite "escribir"
Una aplicación natural teniendo en cuenta esto seria crear un backoffice para gestionar los datos del portfolio.

## Firebase storage para almacenar archivos

Como almacenar archivos y conceptos más avanzados 

## Otros aspectos de firebase

- Permite gestionar la autenticación
- Permite acceso a estadísticas de uso

## Tarea

A partir de nuestra maquetación del portfolio crear una SPA/PWA de manera que además de la página de inicio tenga la página única de cada proyecto y una pàgina de contacto.
Vincularlo con la base de datos en mockapi (u otro sistema equivalente) de manera que podamos editar los proyectos ahi. 
Convertirla en PWA creando un manifest.json.
Más en concreto debe tener las siguientes funcionalidades:
- Página de inicio donde se muestran todos los proyectos, cada uno de ellos con un enlace que te lleva a ver los detalles
- Página de contacto
- Menú de navegación con las opciones: Inicio, Contacto
- Debe funcionar como una SPA
- Página de cada proyecto con más información
- Convertirlo en PWA (simplemente añadir un manifest.json)

(Se puede utilizar como punto de partida el ejemplo vue_spa)


