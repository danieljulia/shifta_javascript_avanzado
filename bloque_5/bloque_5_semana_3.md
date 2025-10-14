# Semana 3. Aplicaciones Web Progresivas (PWA). Mockapi para Almacenamiento y Base de Datos

## Índice

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
- [Otros aspectos de Firebase](#otros-aspectos-de-firebase)  
- [Tarea](#tarea)  

---

## Introducción a las SPA

Una SPA (Single Page Application) es una aplicación web o sitio web que interactúa con el usuario cargando una única página HTML inicial y actualizando dinámicamente su contenido a medida que el usuario interactúa, en lugar de cargar páginas completas nuevas desde el servidor. Toda la lógica y complejidad de la aplicación se gestiona en un único archivo HTML.  

**Ventajas:**  
- Navegación fluida  
- Carga asíncrona  
- Renderizado del lado del cliente  
- Menor carga en el servidor  

**Inconvenientes:**  
- Comparado con una aplicación móvil nativa, el rendimiento puede ser inferior debido al uso de tecnologías web.  

En Vue, se puede implementar utilizando `vue-router`.  

Veamos un ejemplo de SPA con dos opciones: Home y About (ver `vue_spa`).  
En el directorio del ejemplo se explica cómo se ha creado.  

**Ver ejemplo sencillo**  

---

## Introducción a las PWA

Las PWA (Progressive Web Apps) son aplicaciones web diseñadas para funcionar de manera similar a las aplicaciones nativas, pero con ventajas propias de la web. Combinan la accesibilidad de una página web con la experiencia de usuario de una app tradicional.  

**Características:**  
- Tienen apariencia de aplicación (sin los controles del navegador)  
- Funcionan sin conexión (offline)  
- Se pueden instalar en el dispositivo (aunque no en todos los navegadores y sistemas)  
- Son responsivas  
- Se actualizan automáticamente  
- Pueden usar notificaciones push  
- Son seguras (https)  

Son más ligeras y menos costosas que una app nativa, aunque no alcanzan el mismo rendimiento en aplicaciones con gráficos intensivos o juegos.  

En realidad, son una evolución de las páginas web tradicionales.  

**Video introductorio:**  
[https://www.youtube.com/watch?v=BByUknfLTuA&list=PLlrxD0HtieHjqO1pNqScMngrV7oFro-TY](https://www.youtube.com/watch?v=BByUknfLTuA&list=PLlrxD0HtieHjqO1pNqScMngrV7oFro-TY)  

Por ejemplo:  
- [https://airhorner.com/](https://airhorner.com/) funciona incluso sin conexión y se puede instalar en el móvil.  
- Manifest del ejemplo: [https://airhorner.com/manifest.json](https://airhorner.com/manifest.json)  

En el ejemplo `pwa_simple` se muestra una PWA muy sencilla que se puede instalar y usar offline.  

> Nota: Para que funcione una PWA es imprescindible un certificado SSL (https).  
> Prueba el ejemplo aquí: [https://pimpampum.net/tmp/pwa_simple/](https://pimpampum.net/tmp/pwa_simple/)  

---

## Progressive Web Applications. App manifest

El **manifest** es un archivo JSON (`manifest.json`) que debe colocarse en la raíz de la web.  

**Ejemplo:**

```json
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

En el inspector del navegador podemos ver todos sus campos (sección *Application*).  

Existen herramientas que generan el manifest automáticamente:  
- [https://progressier.com/pwa-manifest-generator](https://progressier.com/pwa-manifest-generator)  
- [https://app-manifest.firebaseapp.com/](https://app-manifest.firebaseapp.com/)  

Más información: [https://web.dev/articles/add-manifest](https://web.dev/articles/add-manifest)  

> Ejemplo: Convertimos nuestro portfolio en PWA añadiendo el `manifest.json` (`spa_pwa`).  

---

## Workbox

Uno de los aspectos más interesantes de las PWA es que pueden funcionar offline mediante los **service workers**.  
**Workbox** es una librería de Google que facilita esta funcionalidad.  

- Documentación: [https://developer.chrome.com/docs/workbox](https://developer.chrome.com/docs/workbox)  
- Instalación: `npm install --save-dev workbox-cli`  
- Comandos:  
  ```bash
  workbox --version
  workbox wizard
  workbox generateSW
  ```  

Otra forma de lanzar un servidor local:  
```bash
npx http-server -p 8080
```  

---

## Simulación de base de datos con .json

En proyectos frontend con JavaScript, a veces no necesitamos una base de datos real, solo simular datos para pruebas o desarrollo.  
Una forma sencilla es usar un archivo JSON que actúe como “base de datos”. Desde JavaScript podemos cargarlo mediante `fetch`, permitiendo trabajar como si tuviéramos una API.  

(ver ejemplos `/leer_json`)  

👉 Con esto, `data.json` funciona como nuestra “base de datos simulada” en el frontend.  

---

## Simulación de backend con localStorage

El **localStorage** permite guardar datos de forma persistente en pares clave-valor. A diferencia de las variables normales, los datos en localStorage no se pierden al recargar la página o cerrar el navegador.  

Es útil para simular un backend, ya que permite guardar y recuperar información como si fuese una pequeña base de datos local.  

- Guardar: `localStorage.setItem(clave, valor)`  
- Recuperar: `localStorage.getItem(clave)`  
- Para objetos y arrays: usar `JSON.stringify()` al guardar y `JSON.parse()` al leer.  

Ver ejemplos `/4_localstorage`  

---

## Mockapi

- Web: [https://mockapi.io/projects](https://mockapi.io/projects)  

Mockapi es un servicio gratuito de base de datos en la nube que permite crear endpoints para simular una API.  
Ejemplos de código: [https://github.com/mockapi-io/docs/wiki/Code-examples](https://github.com/mockapi-io/docs/wiki/Code-examples)  

En `5_ejemplos_mockapi` se muestra cómo visualizar datos de un `.json` partiendo de una plantilla de Vue vacía:  
```bash
npm create vue@latest
```  

Con Mockapi podemos crear y borrar datos desde el frontend (comando POST). Los datos son persistentes, a diferencia de localStorage.  

---

## Introducción a Firebase

Para aplicaciones reales necesitamos un backend más potente con lectura/escritura y otras funcionalidades.  

**Firestore** es un servicio de base de datos en la nube de Google (parte de Firebase).  
- Escala automáticamente  
- Gratuito si el uso es limitado  

Web: [https://firebase.google.com/](https://firebase.google.com/)  

Video introductorio: [https://www.youtube.com/watch?v=p9pgI3Mg-So&t=3s](https://www.youtube.com/watch?v=p9pgI3Mg-So&t=3s)  

Otros servicios:  
- **Realtime Database**: optimizado para velocidad  
- **Storage**: almacenar archivos  

Debemos crear una cuenta y activar Firestore (datos en JSON) y Storage (imágenes y archivos).  

---

## Backend de escritura

Firestore permite **leer y escribir** datos.  
Una aplicación natural sería un backoffice para gestionar los datos del portfolio.  

---

## Firebase storage para almacenar archivos

Permite almacenar archivos y manejar conceptos más avanzados de backend.  

---

## Otros aspectos de Firebase

- Gestión de autenticación  
- Acceso a estadísticas de uso  

---

## Bonus: Algunos ejemplos de servicios de Inteligencia Artificial

- Ver ejemplos en `/7_inteligencia_artificial`  
- **DeepAI**: generar imágenes a partir de texto: [https://deepai.org/](https://deepai.org/)  
- **Replicate**: llamar a modelos de IA para generar imágenes, texto, etc.: [https://replicate.com/](https://replicate.com/)  

---

## Tarea

A partir de la maquetación del portfolio, crear una **SPA/PWA** que tenga:  
- Página de inicio con todos los proyectos, cada uno enlazando a su detalle  
- Página de contacto  
- Menú de navegación: Inicio, Contacto  
- Funcionamiento como SPA  
- Página de cada proyecto con más información  
- Convertirla en PWA añadiendo `manifest.json`  

Vincular la app con la base de datos en Mockapi (u otro sistema equivalente) para poder editar los proyectos.  

> Se puede usar como punto de partida el ejemplo `vue_spa`.
