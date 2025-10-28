# Semana 4. Gestión y Despliegue de Aplicaciones Web: Netlify, Git y Métricas de Uso

## Índice
- [Gestión de servidores web](#gestión-de-servidores-web)
- [Publicar usando Netlify](#publicar-usando-netlify)
  - [Deploy manual](#deploy-manual)
  - [Deploy a través de git](#deploy-a-través-de-git)
- [Publicación usando GitHub Pages](#publicación-usando-github-pages)
- [Despliegue continuo](#despliegue-continuo)
- [Métricas de uso](#métricas-de-uso)
  - [Métricas técnicas (de rendimiento)](#métricas-técnicas-de-rendimiento)
  - [Métricas de experiencia de usuario (ux-metrics)](#métricas-de-experiencia-de-usuario-ux-metrics)
- [Ejemplo de integración con Google Analytics](#ejemplo-de-integración-con-google-analytics)
- [Tarea](#tarea)

---

## Gestión de servidores web

Aunque para desarrollar podemos trabajar en nuestro ordenador de manera fácil y gratuita, para publicar una web necesitamos un servidor web (hosting).  
Este puede ser infraestructura física (on-premise) o en la nube (cloud computing).  

De más barato a más caro, las opciones habituales son:

- Hosting compartido  
- Hosting VPS (Servidor privado virtual)  
- Hosting dedicado (en un servidor o servidores propios)  

Como caso especial está el hosting en la nube, donde se paga por uso (pay as you go).  

**Sistemas más comunes:**
- **Sistemas operativos:** Linux  
- **Servidores web:** Apache, Nginx, IIS  
- **Bases de datos:** MySQL, PostgreSQL, MongoDB, etc.  
- **Lenguajes de programación:** PHP, Node.js, Python, etc.  

**Servicios adicionales que suelen ofrecer las empresas de hosting:**
- Backups automáticos  
- Gestión de dominios  
- Acceso por FTP/SFTP/SSH  
- Certificados SSL/TLS  
- Control de accesos y autenticación  
- Implementación de caché  
- Análisis de logs  
- Instalación automática de aplicaciones web y CMS  

Generalmente, al contratar un hosting, se proporciona una interfaz de administración (como **cPanel**) para gestionar la web.  

Existen también opciones de alojamiento gratuito (con limitaciones):  
- [Vercel](https://vercel.com/)  
- [Railway](https://railway.com/)  
- [Netlify](https://www.netlify.com/)  

---

## Publicar usando Netlify 

Nosotros utilizaremos **Netlify**: [https://www.netlify.com/](https://www.netlify.com/)

Existen dos formas principales de publicar una web en Netlify:  
- Deploy manual  
- Deploy a través de Git  

### Deploy manual

Se sube una carpeta con todos los archivos. Es importante que el archivo principal se llame `index.html`.  
Netlify publicará la web en una dirección provisional, por ejemplo:  
`https://spiffy-concha-5999a1.netlify.app/`  

Luego podemos asignar un dominio propio en lugar del provisional.  

### Deploy a través de git

Ejemplo de pasos a seguir:
1. Crear un repositorio en GitHub (o usar uno existente).  
2. Descargar el repositorio y crear la aplicación web.  
3. En Netlify, crear un nuevo proyecto **“Add new site”** importando desde GitHub:  
   [https://app.netlify.com/start](https://app.netlify.com/start)  
   (En este paso pedirá autenticación para acceder a los repositorios).  
4. Configurar las opciones y hacer deploy.  
5. A partir de aquí, cada **push** en el repositorio actualizará automáticamente la web publicada.  

---

## Publicación usando GitHub Pages

GitHub incorpora un servicio gratuito llamado **GitHub Pages**:

- Solo permite páginas estáticas en HTML.  
- El repositorio debe ser público.  
- Se puede asignar un dominio propio.  
- Soporta **Jekyll**, un generador de sitios estáticos.  
- Acepta ficheros Markdown (.md) y HTML (.html).  

📖 Documentación: [GitHub Pages](https://docs.github.com/en/pages)  

---

## Despliegue continuo

El **despliegue continuo** se integra con metodologías ágiles y es ampliamente usado en el desarrollo de software.  

**Características:**
- Método flexible, sin calendario rígido.  
- Divide proyectos en partes pequeñas.  
- Permite cambios rápidos.  
- Enfocado en satisfacer al cliente.  

**Beneficios del despliegue continuo:**
- Automatización de lanzamientos.  
- Tests automáticos del código.  
- Actualización directa si todo funciona correctamente.  
- Reducción de errores humanos.  
- Entrega rápida de mejoras.  

Permite subir cambios de forma inmediata y segura, fomentando la mejora constante, la flexibilidad y el enfoque en resultados.  

---

## Métricas de uso

Existen dos tipos principales de métricas en una web:  
- **Técnicas (rendimiento)**  
- **De experiencia de usuario (visitas)**  

### Métricas técnicas (de rendimiento)


### LCP — *Largest Contentful Paint*
- **Qué mide:** el tiempo que tarda en mostrarse el elemento más grande visible en la pantalla (imagen, bloque de texto, video, etc.).
- **Por qué importa:** afecta directamente la **percepción de carga** de la página.
- **Objetivo:** que ocurra antes de **2.5 segundos**.
- **Cómo mejorar:**
  - Optimizar imágenes (usar formatos como WebP/AVIF).
  - Usar *lazy loading*.
  - Mejorar el tiempo de respuesta del servidor.
  - Evitar render-blocking (scripts o CSS pesados en el `<head>`).

---

###  FID — *First Input Delay*
- **Qué mide:** el tiempo entre que el usuario **interactúa** (clic, toque, tecla) y el navegador **responde**.
- **Por qué importa:** refleja la **interactividad** real.
- **Objetivo:** menos de **100 ms**.
- **Cómo mejorar:**
  - Dividir JavaScript en *chunks* más pequeños.
  - Evitar tareas largas que bloqueen el *main thread*.
  - Usar *web workers* para procesos pesados.
  - Implementar *code splitting* con herramientas como Webpack o Vite.

---

### Tiempo de renderizado
- **Qué mide:** el tiempo total que tarda el navegador en **pintar y renderizar** el contenido.
- **Por qué importa:** influye en la **suavidad y fluidez** de la experiencia.
- **Cómo mejorar:**
  - Minimizar el número de *reflows* y *repaints*.
  - Evitar cambios de estilo en bucles (`for`, `while`).
  - Usar `transform` y `opacity` para animaciones en lugar de `top`, `left` o `width`.
  - Reducir el tamaño y la complejidad del DOM.

---

## Herramientas para medir rendimiento

### Chrome DevTools
- **Dónde:** `Ctrl + Shift + I` → pestaña **Performance**.  
- **Qué permite hacer:**
  - Grabar el rendimiento en tiempo real.
  - Ver los tiempos de carga, renderizado y ejecución de scripts.
  - Identificar *frames* lentos, tareas largas o *layout shifts*.

---

### Lighthouse
- **Integrado en Chrome DevTools.**
- **Qué mide:** rendimiento, accesibilidad, SEO, buenas prácticas.
- **Cómo usarlo:**
  1. Abre DevTools → pestaña **Lighthouse**.
  2. Selecciona “Performance”.
  3. Genera el informe.
- **Ventajas:**
  - Da una puntuación del 0 al 100.
  - Muestra recomendaciones concretas (por ejemplo: “Elimina recursos que bloquean el renderizado”).

---

### PageSpeed Insights
- **URL:** [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- **Qué ofrece:**
  - Analiza el rendimiento en **móvil** y **escritorio**.
  - Muestra métricas reales (*field data*).
  - Proporciona sugerencias de optimización y diagnósticos.
- **Ideal para:** comparar resultados de producción y obtener datos de usuarios reales (CrUX).


### Métricas de experiencia de usuario (UX Metrics)

Entre las métricas más comunes:  
- Tasa de conversión  
- **Bounce Rate (Tasa de rebote):** porcentaje de usuarios que abandonan sin interactuar  
- Accesibilidad  

**Herramientas de medición:**  
- Google Analytics  
- Firebase Analytics  
- Mapas de calor y grabaciones de usuarios  

---

## Ejemplo de integración con Google Analytics 

Pasos principales:  
1. Crear una cuenta en [Google Analytics](https://analytics.google.com/).  
2. Crear una propiedad con zona horaria, moneda y estadísticas.  
3. Seleccionar **Web** como plataforma.  
4. Copiar el código de seguimiento proporcionado.  

Ejemplo (donde `XXX` es el código de seguimiento):  

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=XXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'XXX');
</script>
```

Una vez activado, se pueden comprobar los datos en tiempo real en el panel de Google Analytics.  

---

## Tarea

Como práctica, se propone:  
- Añadir analítica web a un proyecto web que tengáis hecho (portfolio con Vue.js o cualquier otro proyecto)
- Publicarlo en **Netlify**.  
- Comprobar que funciona el registro de visitas en tiempo real.  
- Entregar un documento con:  
  - La **URL de la web publicada**.  
  - Una **captura de pantalla** del panel de Google Analytics mostrando la información en tiempo real durante una visita.  
