# Canvas y Generación Visual (p5.js, SVG, Three.js y JS para generación de imágenes)

## Objetivo
Introducción breve a las tecnologías usadas en los ejemplos de `/canvas` para crear, animar y generar imágenes dinámicamente en el navegador.

---

## 1. p5.js
Librería pensada para artistas y educación (derivada de Processing). Simplifica dibujo 2D, interacción y exportación.

Ventajas:
- API muy sencilla (setup() + draw()).
- Rápida iteración creativa.
- Fácil capturar frames o exportar lienzo.

Ejemplo mínimo:
```js
function setup() {
  createCanvas(600, 400);
  noStroke();
}
function draw() {
  background(20);
  fill(255, 120, 0, 120);
  ellipse(mouseX, mouseY, 80);
}
```

Uso típico en generación:
- Ruido Perlin (`noise()`) para patrones orgánicos.
- Sistemas de partículas.
- Exportar imágenes (canvas.toDataURL()) para datasets.

---

## 2. SVG (Scalable Vector Graphics)
Formato declarativo basado en XML para gráficos vectoriales (líneas, curvas, texto). Escalable sin pérdida.

Ventajas:
- Perfecto para formas geométricas limpias.
- Manipulable con DOM + CSS.
- Exportable directamente a impresión o herramientas vectoriales.

Limitaciones:
- Menos eficiente para miles de nodos dinámicos.
- No apto para efectos complejos de pixel / shaders.

Ejemplo mínimo:
```html
<svg width="300" height="200">
  <circle cx="80" cy="80" r="50" fill="#ff8800" />
  <rect x="150" y="40" width="100" height="100" fill="royalblue" />
</svg>
```

Generación procedural:
- Crear elementos con `document.createElementNS`.
- Aplicar transformaciones y gradientes.
- Exportar como archivo `.svg`.

---

## 3. Three.js
Librería para gráficos 3D sobre WebGL simplificando cámaras, materiales y geometrías.

Ventajas:
- Shaders personalizados.
- Materiales físicos (PBR).
- Exportación a imágenes o vídeo (captura frame).

Flujo básico:
```js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const geo = new THREE.BoxGeometry();
const mat = new THREE.MeshStandardMaterial({ color: 0xff6600 });
scene.add(new THREE.Mesh(geo, mat));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 3, 4);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

Uso en generación:
- Escenas paramétricas (geometrías procedurales).
- Generación de texturas (render targets).
- Captura de variaciones para datasets.

---

## 4. JavaScript “puro” para generación de imágenes
Uso directo de `<canvas>` 2D o WebGL sin librerías para control total y rendimiento.

Canvas 2D básico:
```js
const c = document.querySelector('canvas');
const ctx = c.getContext('2d');
for (let i = 0; i < 400; i++) {
  ctx.fillStyle = `hsl(${i},70%,55%)`;
  ctx.beginPath();
  ctx.arc(
    Math.random()*c.width,
    Math.random()*c.height,
    Math.random()*30,
    0, Math.PI*2
  );
  ctx.fill();
}
```

WebGL puro:
- Más complejo (requiere shaders).
- Máximo rendimiento / control.
- Útil si necesitas pipelines muy específicos.

---

## Comparativa rápida
| Tecnología | Mejor para | Nivel | Exportación |
|------------|-----------|-------|-------------|
| p5.js | Bocetos creativos 2D | Fácil | Simple (toDataURL) |
| SVG | Gráficos limpios / vector | Fácil | Nativo (archivo) |
| Three.js | 3D / luces / materiales | Medio | Captura frame |
| Canvas 2D / WebGL puro | Rendimiento / control | Avanzado | Manual |

---

## Técnicas comunes de generación
- Ruido (Perlin/Simplex) para distorsión orgánica.
- Random controlado (semillas → reproducibilidad).
- Paletas definidas (arrays) + interpolación HSL.
- Capas (composición) para profundidad visual.
- Exportación masiva: loop paramétrico + guardar cada frame.

---

## Exportar imágenes
```js
const url = canvas.toDataURL('image/png');
// Descargar
const a = document.createElement('a');
a.href = url;
a.download = 'salida.png';
a.click();
```

---

## Integración con IA (post-procesado)
- Generar patrones base (p5.js / Three.js) → usar como prompt image (img2img).
- Crear máscaras (SVG / canvas) para guiar modelos.
- Generar lotes variando parámetros → datasets sintéticos.

---

## Recomendaciones
- Separar “parámetros” en un objeto CONFIG.
- Usar `requestAnimationFrame`.
- Controlar seeds para reproducibilidad.
- Limitar DOM en SVG (merge / simplify).
- Vigilar overdraw en canvas (limpiar fondo cuando sea necesario).

---

## Próximos pasos
- Añadir GUI (lil-gui / dat.GUI) para controlar parámetros.
- Guardar presets en localStorage.
- Exportar secuencias (animaciones) frame a frame.

---
```# Canvas y Generación Visual (p5.js, SVG, Three.js y JS para generación de imágenes)

## Objetivo
Introducción breve a las tecnologías usadas en los ejemplos de `/canvas` para crear, animar y generar imágenes dinámicamente en el navegador.

---

## 1. p5.js
Librería pensada para artistas y educación (derivada de Processing). Simplifica dibujo 2D, interacción y exportación.

Ventajas:
- API muy sencilla (setup() + draw()).
- Rápida iteración creativa.
- Fácil capturar frames o exportar lienzo.

Ejemplo mínimo:
```js
function setup() {
  createCanvas(600, 400);
  noStroke();
}
function draw() {
  background(20);
  fill(255, 120, 0, 120);
  ellipse(mouseX, mouseY, 80);
}
```

Uso típico en generación:
- Ruido Perlin (`noise()`) para patrones orgánicos.
- Sistemas de partículas.
- Exportar imágenes (canvas.toDataURL()) para datasets.

---

## 2. SVG (Scalable Vector Graphics)
Formato declarativo basado en XML para gráficos vectoriales (líneas, curvas, texto). Escalable sin pérdida.

Ventajas:
- Perfecto para formas geométricas limpias.
- Manipulable con DOM + CSS.
- Exportable directamente a impresión o herramientas vectoriales.

Limitaciones:
- Menos eficiente para miles de nodos dinámicos.
- No apto para efectos complejos de pixel / shaders.

Ejemplo mínimo:
```html
<svg width="300" height="200">
  <circle cx="80" cy="80" r="50" fill="#ff8800" />
  <rect x="150" y="40" width="100" height="100" fill="royalblue" />
</svg>
```

Generación procedural:
- Crear elementos con `document.createElementNS`.
- Aplicar transformaciones y gradientes.
- Exportar como archivo `.svg`.

---

## 3. Three.js
Librería para gráficos 3D sobre WebGL simplificando cámaras, materiales y geometrías.

Ventajas:
- Shaders personalizados.
- Materiales físicos (PBR).
- Exportación a imágenes o vídeo (captura frame).

Flujo básico:
```js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 100);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const geo = new THREE.BoxGeometry();
const mat = new THREE.MeshStandardMaterial({ color: 0xff6600 });
scene.add(new THREE.Mesh(geo, mat));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 3, 4);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

Uso en generación:
- Escenas paramétricas (geometrías procedurales).
- Generación de texturas (render targets).
- Captura de variaciones para datasets.

---

## 4. JavaScript “puro” para generación de imágenes
Uso directo de `<canvas>` 2D o WebGL sin librerías para control total y rendimiento.

Canvas 2D básico:
```js
const c = document.querySelector('canvas');
const ctx = c.getContext('2d');
for (let i = 0; i < 400; i++) {
  ctx.fillStyle = `hsl(${i},70%,55%)`;
  ctx.beginPath();
  ctx.arc(
    Math.random()*c.width,
    Math.random()*c.height,
    Math.random()*30,
    0, Math.PI*2
  );
  ctx.fill();
}
```

WebGL puro:
- Más complejo (requiere shaders).
- Máximo rendimiento / control.
- Útil si necesitas pipelines muy específicos.

---

## Comparativa rápida
| Tecnología | Mejor para | Nivel | Exportación |
|------------|-----------|-------|-------------|
| p5.js | Bocetos creativos 2D | Fácil | Simple (toDataURL) |
| SVG | Gráficos limpios / vector | Fácil | Nativo (archivo) |
| Three.js | 3D / luces / materiales | Medio | Captura frame |
| Canvas 2D / WebGL puro | Rendimiento / control | Avanzado | Manual |

---

## Técnicas comunes de generación
- Ruido (Perlin/Simplex) para distorsión orgánica.
- Random controlado (semillas → reproducibilidad).
- Paletas definidas (arrays) + interpolación HSL.
- Capas (composición) para profundidad visual.
- Exportación masiva: loop paramétrico + guardar cada frame.

---

## Exportar imágenes
```js
const url = canvas.toDataURL('image/png');
// Descargar
const a = document.createElement('a');
a.href = url;
a.download = 'salida.png';
a.click();
```

---

## Integración con IA (post-procesado)
- Generar patrones base (p5.js / Three.js) → usar como prompt image (img2img).
- Crear máscaras (SVG / canvas) para guiar modelos.
- Generar lotes variando parámetros → datasets sintéticos.

---

## Recomendaciones
- Separar “parámetros” en un objeto CONFIG.
- Usar `requestAnimationFrame`.
- Controlar seeds para reproducibilidad.
- Limitar DOM en SVG (merge / simplify).
- Vigilar overdraw en canvas (limpiar fondo cuando sea necesario).

---

## Próximos pasos
- Añadir GUI (lil-gui / dat.GUI) para controlar parámetros.
- Guardar presets en localStorage.
- Exportar secuencias (animaciones) frame a frame.

---
```