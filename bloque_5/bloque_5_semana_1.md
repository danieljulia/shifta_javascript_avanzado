# Bloque 5. Semana 1. Desarrollo FrontEnd con Node.js, npm y Vite

## Índice
- [Node.js](#nodejs)
- [nvm y nvm-windows](#nvm-y-nvm-windows)
- [El gestor de paquetes npm](#el-gestor-de-paquetes-npm)
- [Dos maneras de cargar módulos](#dos-maneras-de-cargar-módulos)
- [Otros ejemplos con npm](#otros-ejemplos-con-npm)
- [Gestión de dependencias con npm](#gestión-de-dependencias-con-npm)
- [npx](#npx)
- [Vite - Servidor de desarrollo y empaquetador moderno](#vite---servidor-de-desarrollo-y-empaquetador-moderno)
- [Recursos](#recursos)
- [Tarea de la semana](#tarea-de-la-semana)

---

## Node.js

**Node.js es un entorno de ejecución de JavaScript del lado del servidor**. Esto significa que permite ejecutar código JavaScript fuera de un navegador web, por ejemplo, en un servidor o directamente en el terminal de nuestro PC.  
Esto lo convierte en una herramienta muy potente, ya que permite crear aplicaciones usando solo JavaScript (tanto en el servidor como en el cliente).

Una vez instalado, lo ejecutamos desde el terminal con la instrucción:

```bash
node
```

Instrucciones para la instalación de Node.js:  
[https://nodejs.org/en/download](https://nodejs.org/en/download)

> Al instalar Node.js también se instala automáticamente **npm** (del cual hablaremos más adelante).  
> En macOS también se puede instalar con **brew**.

Para saber la versión instalada:

```bash
node -v
```
(por ejemplo, `v20.7.0`)

Para ejecutar un archivo JavaScript:

```bash
node ejemplo.js
```

El archivo `ejemplo.js` puede contener:

```js
console.log("Hola Mundo");
```

A diferencia del JavaScript de los navegadores, Node.js permite cargar módulos con funcionalidades avanzadas que normalmente no existen en el entorno del navegador.  
Por ejemplo, el módulo `fs` permite trabajar con archivos (leer o escribir).

Ejemplo para leer un archivo externo (`ejemplo.txt`) y mostrarlo en consola:

```js
// Cargamos el módulo
const fs = require('fs');

// Leer el archivo ejemplo.txt
fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Es importante remarcar el carácter **asíncrono** de Node.js: las operaciones como leer un archivo no bloquean el programa, sino que se resuelven en segundo plano.

Node.js se puede usar tanto en **frontend** como en **backend**.  
En frontend se suelen usar herramientas llamadas **bundlers** que “traducen” y “empaquetan” el código para que funcione en todos los navegadores (ej. Webpack, Vite, Parcel).

---

## nvm y nvm-windows

Existen herramientas para manejar varias versiones de Node.js simultáneamente. Una de ellas es **nvm**:

```bash
nvm install 16.14.0   # Instala una versión específica
nvm use 16.14.0       # Cambia a esa versión
nvm list              # Muestra las versiones instaladas
```

---

## El gestor de paquetes npm

Una de las grandes ventajas de Node.js es su gestor de paquetes: **npm** (*Node Package Manager*).  
Es un repositorio inmenso (más de 2 millones de paquetes) que permite:

- Añadir funcionalidades creadas por la comunidad.
- Gestionar dependencias (un paquete puede depender de otros, que se instalan automáticamente).
- Administrar versiones y actualizaciones.

### Recursos
- [Repositorio oficial npm](https://www.npmjs.com/)
- [Documentación oficial de npm](https://docs.npmjs.com/)
- [Guía de inicio rápido de npm](https://docs.npmjs.com/cli/v7/commands/npm)

Los paquetes instalados se registran en un archivo llamado `package.json`.  
Para crearlo:

```bash
npm init
```

### Ejemplo: instalar **cowsay**

```bash
npm install cowsay
# o
npm i cowsay
```

Instalación global (para usar en múltiples proyectos):

```bash
npm i -g cowsay
```

Los paquetes locales se copian en la carpeta `node_modules`.  
Los instalados globalmente se almacenan en una carpeta del sistema (que podemos consultar con):

```bash
npm root -g
```

Para desinstalar:

```bash
npm uninstall cowsay
```

---

## Dos maneras de cargar módulos

En JavaScript (Node.js) existen dos sistemas diferentes (e incompatibles) de carga de módulos:

- **MJS (ES Modules)** — Usando `import` y `export`.  
  Es la manera moderna.  
  Requiere `"type": "module"` en `package.json` o usar la extensión `.mjs`.

- **CJS (CommonJS)** — Usando `require()` y `module.exports`.  
  Es la manera tradicional.  
  Se asume este formato cuando la extensión es `.cjs`.

---

## Otros ejemplos con npm

- Ejemplo con **ascii art** (dibuja con caracteres de texto).
- Ejemplo con **axios** (consulta la Wikipedia).
- Ejemplo con **chalk**.
- Ejemplo con **cowsay**.

---

## Gestión de dependencias con npm


- [Guía de package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

> Analizamos un ejemplo real:  
> `bloque_5/ejercicios_semana_1/ejemplos_packages/chalk/package.json`

```json
{
  "name": "chalk",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo "Error: no test specified" && exit 1"
  },
  "dependencies": {
    "chalk": "^5.6.0"
  }
}
```

- `"type": "module"` indica que se usará sintaxis **ES6** (`import/export`).  
- `"scripts"` permite ejecutar comandos desde el terminal.  
- `"dependencies"` muestra las dependencias que se instalarán con `npm install`.

### Dependencias

Una dependencia es cuando un módulo necesita otros para funcionar.  
Cuando instalamos uno, automáticamente se instalan también todos los que requiere.  

Actualizar librerías:

```bash
npm update
```

---

## npx

**npx** permite ejecutar paquetes de npm sin necesidad de instalarlos (aunque no todos lo permiten).  

Ejemplo:

```bash
npx cowsay "Hello, I'm a cow"
```

Otro ejemplo en este repositorio: usar `npx` con una librería para convertir archivos `.md` a `.pdf` (ubicado en el directorio `tools`).

---

## Vite - Servidor de desarrollo y empaquetador moderno

Cuando desarrollamos para navegador con dependencias de npm, necesitamos un **bundler** que:

- Traduzca código moderno a JS compatible con todos los navegadores.
- Optimice, minifique y gestione dependencias.
- Permita *hot reload* para ver cambios en tiempo real.

En este curso usaremos **Vite**, por ser rápido, moderno y sencillo.

### Crear un nuevo proyecto

```bash
npm create vite@latest
```

Elegimos nombre, framework (Vanilla, React, Vue, etc.) y variante (JavaScript o TypeScript).  
De momento: **Vanilla + JavaScript** siempre.

Entrar en el proyecto e instalar dependencias:

```bash
cd nombre-proyecto
npm install
```

### Scripts de desarrollo con Vite

En `package.json` se generan scripts como:

```json
{
  "scripts": {
    "dev": "vite",           // Inicia servidor de desarrollo
    "build": "vite build",   // Empaqueta para producción
    "preview": "vite preview" // Previsualiza la build
  }
}
```

Ejecutar servidor de desarrollo:

```bash
npm run dev
```

Esto levanta un servidor con recarga automática en [http://localhost:5173](http://localhost:5173).

### Ventajas de Vite
- Rápido: usa **esbuild** y compila casi al instante.  
- Hot Module Replacement: cambios visibles sin recargar toda la página.  
- Compatible con **ES Modules**.  
- Genera `/dist` optimizado para producción.

---

## Recursos

- [Documentación oficial de Vite](https://vite.dev/)  
- [Npm cheat sheet](https://media.jfrog.com/wp-content/uploads/2021/08/23165237/JFrog_NPM_CheatSheet_V4.pdf)  
- [Introducción a Node y npm](https://eloquentjavascript.net/20_node.html)  
- [Curso de Node.js desde cero (Midulive)](https://www.youtube.com/watch?v=yB4n_K7dZV8)  

---

## Tarea de la semana

Escoger alguna de estas 3 opciones y entregarlo en el aula

- Mejorar visualmente uno de los ejemplos de librerías npm para que funcione en el navegador usando Vite.  
- Crear una mini aplicación que consulte una API (ej. TheDogAPI o TheCatAPI) y muestre datos con estilos.  
- Usar una plantilla HTML/CSS de portfolio y leer datos desde un archivo JSON.  
