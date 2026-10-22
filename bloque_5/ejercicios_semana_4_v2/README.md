# Ejercicios — Semana 4 · Arte generativo con JavaScript

Un ejemplo ejecutable y comentado de cada técnica de la sesión. Todos son
archivos HTML autocontenidos: **ábrelos directamente en el navegador**
(doble clic) o sirve la carpeta con `python3 -m http.server` y visita
`http://localhost:8000`.

Los ejercicios 06–10 cargan sus librerías (p5.js, D3, three.js) desde CDN,
así que necesitan conexión a internet la primera vez.

| # | Carpeta | Técnica | Qué muestra |
|---|---------|---------|-------------|
| 01 | `01_canvas_basico` | Canvas 2D | Los tres pasos (lienzo → contexto → dibujar) y los primitivos: rect, arc, path, Bézier, texto |
| 02 | `02_flow_field` | Flow field | 600 agentes dibujando estelas siguiendo un campo de ruido de valor |
| 03 | `03_particulas` | Sistemas de partículas | Nacimiento, física (gravedad + fricción), decaimiento y muerte; haz clic para lanzar chorros |
| 04 | `04_ruido_perlin` | Ruido Perlin | El mismo caminante con `random()` y con `ruido()`: azar brusco frente a azar orgánico |
| 05 | `05_trazo_fisicas` | Trazo con físicas | Cadena de puntos con resorte que persigue el ratón: el gesto deforma la obra |
| 06 | `06_p5_boceto` | p5.js básico | `setup()`/`draw()`, ratón y `noise()` con la API de p5 |
| 07 | `07_p5_interactivo` | p5.js interactivo | La práctica de la sesión: 150 agentes + ruido Perlin + paleta reactiva a `mouseX` |
| 08 | `08_svg_generativo` | SVG generativo | JavaScript construye un SVG: geometría viva en el DOM, regenerable con clic |
| 09 | `09_d3_datos` | D3.js | El patrón join (enter/update/exit): los datos deciden posición, tamaño y color |
| 10 | `10_threejs` | three.js | Escena + cámara + renderizador, luces y un torus knot procedural; órbita con el ratón |
| 11 | `11_shader` | Shaders (GLSL) | WebGL crudo: un fragment shader pinta la pantalla entera con una fórmula |

## Sugerencia de uso en clase

1. Empieza por el 01 y sube en orden: cada carpeta es una técnica de la presentación.
2. En cada archivo, los comentarios explican primero la *idea* y luego la *implementación*.
3. El ejercicio 07 es el punto de partida del brief de la sesión: modifica una sola regla
   (velocidad, escala del ruido, paleta) y observa cómo cambia la obra.

## Recursos de la sesión

- p5.js — https://p5js.org/es · editor online — https://editor.p5js.org
- three.js — https://threejs.org · D3 — https://d3js.org
- The Book of Shaders — https://thebookofshaders.com
- Ejemplos de shaders — https://webgl-shaders.com/index.html
- Comunidad — https://openprocessing.org
- MAGBa · Mostra d'Art Generatiu de Barcelona — https://magba.art
