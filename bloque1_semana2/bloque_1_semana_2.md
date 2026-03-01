# Bloque 1. Semana 2. Herramientas avanzadas

## Índice

1. [Control de versiones: Git / GitHub](#1-control-de-versiones-git--github)
   - [El terminal del sistema operativo](#el-terminal-del-sistema-operativo)
   - [Introducción a Git: conceptos básicos, instalación y configuración](#introducción-a-git-conceptos-básicos-instalación-y-configuración)
   - [¿Para qué sirve Git?](#para-qué-sirve-git)
   - [Clonar y trabajar con un repositorio](#clonar-y-trabajar-con-un-repositorio)
   - [Claves ssh en github](#claves-ssh-en-github)
   - [Creando nuestro repositorio y publicando contenido](#creando-nuestro-repositorio-y-publicando-contenido)
   - [Comandos esenciales de git](#comandos-esenciales-de-git)
   - [Repositorio de este curso](#repositorio-de-este-curso)
2. [Entorno/Herramientas de desarrollo: localhost](#2-entornoherramientas-de-desarrollo-localhost)
   - [Configuración de localhost](#configuración-de-localhost)
   - [Otros posibles entornos de desarrollo](#otros-posibles-entornos-de-desarrollo)
3. [Editores de código (IDE), inspector del navegador](#3-editores-de-código-ide-inspector-del-navegador)
   - [Editores de código (IDE)](#editores-de-código-ide)
   - [Inspector del navegador](#inspector-del-navegador)
4. [Principios básicos de accesibilidad y web semántica, SEO](#4-principios-básicos-de-accesibilidad-y-web-semántica-seo-desde-el-punto-de-vista-de-la-programación)
   - [Accesibilidad](#accesibilidad)
   - [Web semántica](#web-semántica)
   - [SEO desde el punto de vista de la programación](#seo-desde-el-punto-de-vista-de-la-programación)
   - [Herramientas](#herramientas)
5. [IA para la generación de código / GitHub Copilot](#5-ia-para-la-generación-de-código--github-copilot)
   - [Introducción a la IA en el desarrollo de software](#introducción-a-la-ia-en-el-desarrollo-de-software)
   - [GitHub Copilot](#github-copilot)
   - [Cursor: el IDE colaborativo para desarrollo](#cursor-el-ide-colaborativo-para-desarrollo)
   - [Otras herramientas de IA para programación](#otras-herramientas-de-ia-para-programación)
   - [Límites y potencial de la IA en la generación de código](#límites-y-potencial-de-la-ia-en-la-generación-de-código)

---

# 1. Control de versiones: Git / GitHub


### El terminal del sistema operativo

El terminal (command prompt) es una interfaz de línea de comandos (CLI) que permite interactuar directamente con el sistema operativo y gestionar archivos, automatizar tareas, instalar software, controlar procesos y facilitar el desarrollo de software ofreciendo control total sobre el sistema y acceso a funciones avanzadas.

Existen versiones más avanzadas del terminal "por defecto" en el sistema operativo, por ejemplo PowerShell en Windows o iTerm en Mac.

Git for windows por ejemplo incluye una versión de git y una terminal más avanzada. 
https://gitforwindows.org/

### Algunos comandos del terminal

| Comando                  | Descripción                                      | Notas / Ejemplo de uso                                  |
|--------------------------|--------------------------------------------------|---------------------------------------------------------|
| `pwd`                    | Muestra la ruta del directorio actual             | "Print Working Directory"                              |
| `ls`                     | Lista los archivos y carpetas del directorio      | `ls -l` para lista detallada, `ls -a` para ocultos      |
| `cd <ruta>`              | Cambia de directorio                             | `cd ..` sube un nivel                                   |
| `mkdir <nombre>`         | Crea un directorio                               | `mkdir -p carpeta/subcarpeta` crea varias a la vez      |
| `rmdir <nombre>`         | Elimina un directorio vacío                      | Para directorios con contenido usar `rm -r <nombre>`    |
| `rm <archivo>`           | Elimina un archivo                               | `rm -r <carpeta>` para carpetas con contenido           |
| `cp <origen> <destino>`  | Copia archivos o carpetas                        | `cp -r carpeta1 carpeta2` para copiar carpetas completas|
| `mv <origen> <destino>`  | Mueve o renombra archivos/carpeta                |                                                         |
| `touch <archivo>`        | Crea un archivo vacío                            | Útil para scripts o notas rápidas                       |
| `cat <archivo>`          | Muestra el contenido de un archivo                | `less <archivo>` para ver archivos grandes              |
| `echo "texto"`          | Muestra texto en pantalla                        | Útil para mensajes o scripts                            |
| `clear`                  | Limpia la pantalla                               | También `Ctrl+L`                                        |

###  Introducción a Git: conceptos básicos, instalación y configuración

Git es un sistema de control de versiones que funciona sobretodo en el terminal, aunque también hay aplicaciones gráficas.

Git se utiliza para rastrear y gestionar los cambios en el código fuente de un proyecto. Fue creado por Linus Torvalds en 2005 para gestionar el desarrollo del kernel de Linux, y desde entonces se ha convertido en la herramienta estándar para gestionar proyectos de software.

Instalación de git 
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Una vez instalado podemos probar si funciona 

````
git 
````
Este comando nos mostrará las ordenes disponibles. En general si escribimos una instrucción en el terminal sin especificar la orden (parámetros) nos mostrará las ordenes posibles.

```
git -v 
````

Nos muestra la versión instalada

### ¿Para qué sirve Git?

- Control de versiones: Git permite llevar un registro de los cambios realizados en los archivos a lo largo del tiempo. Esto facilita volver a versiones anteriores del código si es necesario, o comparar cambios.

- Colaboración: Con Git, múltiples desarrolladores pueden trabajar en el mismo proyecto simultáneamente, sin interferir con el trabajo de los demás. Cada contribuidor puede trabajar en su propia "rama" o "branch", y luego fusionar los cambios con el proyecto principal.

- Desarrollo distribuido: Al ser distribuido, cada desarrollador tiene una copia completa del historial del proyecto en su máquina. Esto significa que se puede trabajar sin estar conectado a un servidor central, lo que también mejora la robustez frente a fallos.

- Integración con plataformas como GitHub, GitLab o Bitbucket: Git se integra fácilmente con estas plataformas, lo que facilita compartir el código, gestionar colaboraciones y realizar revisiones de código.

### Clonar y trabajar con un repositorio 

Vamos a clonar el repositorio con el material del curso
Nos situamos en algún directorio en nuestro ordenador usando el terminal y escribimos la siguiente instrucción

```
git clone git@github.com:danieljulia/shifta_javascript_avanzado.git
```
Esto ejemplo clona  el repositorio que está en https://github.com/danieljulia/shifta_javascript_avanzado

De la misma manera podemos clonar cualquier repositorio publico.

Una vez clonada verificamos que tenemos los archivos del repositorio.
Entonces podemos empezar a trabajar y hacer cosas como

+ Añadir ficheros al "staging" con git add <nombre archivo>
+ Hacer un commit de los cambios, añadir los cambios al repositorio con 
git commit -m 'un comentario'

También podriamos subir los cambios al repositorio remoto con git push, pero para ello debemos registrar una clave en la configuración de github.


### Claves ssh en github 

Para poder publicar (hacer push) un proyecto en github ( y otros repositorios similares) necesitaremos crear una clave en nuestro ordenador y subir la clave pública en la configuración de github.

En la web de github está explicado como hacerlo

Como crear claves ssh en mi pc
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Como añadir la clave pública en github
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

### Creando nuestro repositorio y publicando contenido

Podemos crear un repositorio nuevo en Github y vincularlo con un directorio local en nuestro ordenador, partiendo de cero o con archivos que ya existen.

(instrucciones del web de github)

En el caso que partamos de cero, nos situamos en un directorio y ejecutamos los siguientes comandos 
```
echo "# shifta2024" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:nombreusuario@nombrerepositorio.git
git push -u origin main
````
(teniendo en cuenta que después de origin va el nombre de usuario y el nombre del repositorio que hemos creado)

O si los archivos ya existian y queremos convertirlo en un repositorio
```
git remote add origin git@github.com:nombreusuario@nombrerepositorio.git
git branch -M main
git push -u origin main
````

- Comandos esenciales de git:
  * `init`
  * `add`
  * `commit`
  * `push`
  * `pull`
  * `clone`
  
- Branching y merging:
  - Crear ramas
    git branch nombre_rama
  - Cambiar entre ramas
    git checkout nombre_rama
  - las dos cosas 
    git checkout -b nombre_rana 
  - Fusionar ramas
    git merge nombre_rama
- Resolución de conflictos
- Colaboración en equipo mediante GitHub
- Alternativas a Github, Gitlab, Bitbucket, Sourceforge, etc

### Repositorio de este curso 

Este curso está publicado en github.
https://github.com/danieljulia/shifta2024


> Git cheat sheet 
https://education.github.com/git-cheat-sheet-education.pdf

> Un resumen de las operaciones más importantes con git y lista de recursos para ampliar al final
https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners

> Video: Learn git in 15 minutes 
https://www.youtube.com/watch?v=USjZcfj8yxE&t=164s

## 2. Entorno/Herramientas de desarrollo: localhost

### Configuración de localhost

- MAMP
https://www.mamp.info/en/mac/
- XAMPP
https://www.apachefriends.org/es/index.html
- Soluciones nativas del sistema
Apache está incluido en el sistema en ordenadores Mac y Linux.
WSL en Windows
https://www.youtube.com/watch?v=L4f1XHrSJEg

Otros posibles entornos de desarrollo
- Máquinas virtuales: permiten simular sistemas completos para pruebas o desarrollo seguro.
- Docker (gestor de contenedores): facilita la creación de entornos reproducibles y portables.
- Entorno de desarrollo en un servidor remoto: útil para proyectos colaborativos o con necesidades de hardware específicas.
- Servicios en la nube: como GitHub Codespaces, Replit, Glitch, etc.

**Consejo:** Elige el entorno que mejor se adapte a tu flujo de trabajo y necesidades del proyecto.

## 3. Editores de código (IDE), inspector del navegador

### Editores de código (IDE)


- Existen muchas opciones
  - Visual Studio Code
  - Sublime Text
  - WebStorm
  - Cursor, orientado a IA

Vamos a usar Visual Studio Code (VSC)
VSC es de propiedad de Microsoft, igual que github.
Descargar Visual Studio Code
https://code.visualstudio.com/download

Ventajas de VSC (y otros editores)

- Se puede personalizar totalmente el aspecto
- Posibilidad de instalar extensiones para cualquier funcionalidad
- Compatible con muchos lenguajes de programación 
- Autocompletado inteligente 
- Control de versiones (git) integrado 
- Es ligero y rápido de ejecutar 
- Tiene la terminal integrada 
- Multiplataforma 
- Gratuito y de código abierto 

#### Consejos para elegir un editor
- Prueba varios y elige el que te resulte más cómodo.
- Aprovecha los atajos de teclado para ser más productivo.
- Instala extensiones útiles para tu stack de desarrollo.

### Inspector del navegador

- Herramientas de desarrollador en Chrome, Firefox, y Safari
- Pestañas del inspector
- Depuración de HTML, CSS y JavaScript
- Análisis de rendimiento y red

> Video recomendado, Overview de las chrome dev tools
https://developer.chrome.com/docs/devtools/overview

> Video. Las 15 mejores extensiones para VSC
https://www.youtube.com/watch?v=lv88bCi7eyg

> Atajos de teclado en VSC
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

#### Funcionalidades avanzadas del navegador para desarrollo

- Simulación de dispositivos móviles
- Análisis de accesibilidad
- Performance profiling
- Network throttling (simular conexiones lentas)

## 4. Principios básicos de accesibilidad y web semántica, SEO, desde el punto de vista de la programación

Estos 3 conceptos están muy relacionados. Si una web está bien hecha a nivel de SEO posiblemente también es accesible y utiliza etiquetado semántico.
Veamos primero estos 3 conceptos por separado. 


### Accesibilidad 

La accesibilidad web se refiere a la práctica de diseñar y desarrollar sitios web que puedan ser utilizados por personas con diversas capacidades, incluidas aquellas con discapacidades visuales, auditivas, cognitivas, de movilidad u otras limitaciones. Esto implica que las páginas web sean navegables con herramientas como lectores de pantalla, teclados alternativos, o subtítulos para el contenido multimedia. La accesibilidad es importante para asegurar que todas las personas puedan interactuar y obtener información en la web de manera equitativa, sin barreras.
En resumen tenemos que asegurarnos que nuestra web se puede navegar con el teclado (sin usar el ratón o el trackpad) y que los elementos están suficientemente etiquetados con texto (para que en el caso de los usuarios que no pueden ver puedan entender cada parte del documento)
El organismo w3.org ( World Wide Web Consortium) cita 10 pasos sencillos para hacer una web accesible 

https://www.w3.org/WAI/quicktips/

1. Imágenes y animaciones: Usa el atributo "alt" para describir la función de cada elemento visual.

2. Mapas de imagen: Emplea mapas del lado del cliente y proporciona texto para los puntos de acceso.

3. Multimedia: Proporciona subtítulos y transcripciones de audio, así como descripciones para los videos.

4. Enlaces de hipertexto: Usa texto que tenga sentido fuera de contexto. Por ejemplo, evita expresiones como "haz clic aquí".

5. Organización de la página: Utiliza encabezados, listas y una estructura consistente. Emplea CSS para el diseño y el estilo cuando sea posible.

etc

#### Buenas prácticas adicionales

- Usa colores con suficiente contraste https://app.contrast-finder.org/result.html?foreground=rgb%2870%2C136%2C71%29&background=%23DFF0D8&ratio=4.5&isBackgroundTested=false&algo=Rgb&lang=es

- Asegúrate de que los formularios sean navegables con teclado
- Añade descripciones a los enlaces y botones
- Utiliza etiquetas `<label>` asociadas a los campos de formulario
- etc

### Web semántica

Se refiere al uso apropiado de etiquetas HTML5 de manera que se pueda entender su función dentro de todo el documento.
Es posible construir un web entero usando solo etiquetas ```<div>``` pero una web semántica debe usar etiquetas con sentido como ``` header, nav, main, article, section, aside, footer, figure,``` etc 
Usar HTML semántico mejora la accesibilidad, facilita la indexación por motores de búsqueda y da una estructura más lógica al contenido de una página.

#### Ejemplo de estructura semántica
```html
<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <section>...</section>
  </article>
  <aside>...</aside>
</main>
<footer>...</footer>
```

### SEO desde el punto de vista de la programación

El SEO (Search Engine Optimization) es el conjunto de estrategias y técnicas que se aplican en un sitio web para mejorar su  posicionamiento en los resultados de búsqueda orgánicos (no pagados) de motores como Google. El objetivo principal del SEO es aumentar el tráfico de calidad al sitio, logrando que aparezca en los primeros lugares cuando los usuarios busquen términos relacionados con su contenido o servicios.

Existen 4 aspectos a tratar para conseguir un buen posicionamiento

1 - A nivel técnico etiquetar correctamente el html con encabezados, títulos explicativos, urls claras y descriptivas, etiquetas meta y en general HTML semántico.

2- Un contenido de calidad siempre será más relevante para los buscadores 

3 - A nivel técnico que la web se cargue rápido y las imágenes estén optimizadas, que el diseño responsive funcione bien, beneficia también al SEO

4 - Finalmente es bueno aumentar la reputación del sitio consiguiendo menciones de calidad (links) en otros sitios web

Un sitemap (un documento xml que describa la estructura de la web) también es bueno para posicionar nuestra web. 

> Más información. Guia SEO de google
https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es

#### Consejos extra

- Usa títulos únicos y descriptivos en cada página (`<title>`)
- Añade meta descripciones relevantes
- Optimiza imágenes con atributos `alt` y tamaños adecuados
- Utiliza URLs amigables y estructuradas, cada contenido relevante debe tener su propia url

### Herramientas 

- Google search console (para optimizar a partir de un sitemap)
https://search.google.com/search-console/about
- Google analytics (analitica web)
https://developers.google.com/analytics?hl=es
- Seoptimer (herramienta para auditar webs)
https://www.seoptimer.com/

## 5. IA para la generación de código / GitHub Copilot

### Introducción a la IA en el desarrollo de software


La inteligencia artificial en el desarrollo de software hace que el proceso sea mucho más ágil y eficiente. Ayuda a los desarrolladores generando fragmentos de código automáticamente y hasta automatizando pruebas, así que se pierde menos tiempo en tareas repetitivas. También es genial para optimizar el rendimiento de las aplicaciones, sugiriendo cambios que hacen que el software sea más rápido y use menos recursos.

Herramientas de IA como GitHub Copilot o ChatGPT  funcionan como “compañeros de equipo” virtuales, ayudando a los desarrolladores a resolver dudas o sugiriendo mejoras al código.

### GitHub Copilot

Existe una versión de educación de Github copilot para estudiantes 
https://education.github.com/discount_requests/application?type=student
También existe una versión de prueba de 30 dias 

- Instalación y configuración

https://code.visualstudio.com/docs/copilot/setup

- Video introducción a github copilot 
https://www.youtube.com/watch?v=2q0BoioYSxQ

#### Ejemplos de uso de Copilot
- Autocompletar funciones y fragmentos de código
- Generar tests automáticamente
- Sugerir documentación para funciones
- Refactorizar código existente

### Cursor: el IDE colaborativo para desarrollo

Cursor es un "fork" de Visual Studio Code pensado para desarrollo colaborativo y con inteligencia artificial integrada. Permite a varios desarrolladores editar, depurar y revisar código en tiempo real, desde cualquier lugar, de forma similar a cómo Google Docs permite la edición colaborativa de documentos.

**Características principales:**

- Trabaja en modo agente (vibe coding)
- Chat y comentarios integrados: facilita la comunicación y revisión de código dentro del propio IDE.
- Soporte para extensiones y plugins: compatible con muchas extensiones populares de Visual Studio Code.
- Integración con Git: gestión de ramas, commits y revisiones directamente desde la interfaz.

**Recursos:**

- [Web oficial de Cursor](https://cursor.com)
- [Guía de inicio rápido](https://docs.cursor.com/es/get-started/quickstart)

### Otras herramientas de IA para programación

- Chatgpt
https://chatgpt.com/
- Claude
https://claude.ai/new
- Google Gemini 
https://gemini.google.com/
- NotebookLM 
https://notebooklm.google/


