# 📅 Event Planner - Gestor de Eventos

Ejemplo educativo de Vite + Day.js para cursos de frontend. Aprende a integrar librerías npm en proyectos web modernos.

## 📚 Conceptos que aprenderás

### 1. **npm packages**
- Instalación de dependencias con `npm install`
- Importación de módulos ES6 desde `node_modules`
- Uso de plugins y extensiones de librerías

### 2. **Day.js** (Librería de fechas)
- Formateo de fechas y horas
- Cálculos de fechas (diferencias, sumar/restar días)
- Fechas relativas ("hace 2 días", "en 3 horas")
- Localización (español)
- Plugins (weekOfYear, relativeTime)

### 3. **Vite**
- Bundler moderno y rápido
- Hot Module Replacement (HMR)
- ES modules nativos
- Build optimizado para producción

### 4. **JavaScript Vanilla**
- Manipulación del DOM
- Event listeners
- LocalStorage para persistencia
- Funciones de renderizado dinámico

### 5. **CSS Vanilla**
- CSS Grid y Flexbox
- CSS Variables (custom properties)
- Responsive design
- Animaciones y transiciones

## 🚀 Instalación y uso

### Paso 1: Instalar dependencias
```bash
npm install
```

### Paso 2: Iniciar servidor de desarrollo
```bash
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

### Paso 3: Build para producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 🎯 Funcionalidades

### ✨ Características principales
- ✅ Añadir eventos con fecha y hora
- ✅ Ver información actual (fecha, día, semana del año)
- ✅ Listado de eventos futuros ordenados
- ✅ Contador relativo ("en 3 días", "mañana", "hoy")
- ✅ Alertas visuales según proximidad del evento
- ✅ Eliminar eventos
- ✅ Persistencia con LocalStorage
- ✅ Diseño responsive
- ✅ Notificaciones animadas

### 🎨 Indicadores visuales
- **Rojo**: Eventos de hoy
- **Naranja**: Eventos en los próximos 3 días
- **Azul**: Eventos más lejanos

## 📖 Ejemplos de uso de Day.js

El código incluye ejemplos prácticos en la consola:

```javascript
import dayjs from 'dayjs';

// Formateo básico
dayjs().format('DD/MM/YYYY');          // "19/02/2026"
dayjs().format('HH:mm:ss');            // "15:30:45"

// Operaciones con fechas
dayjs().add(7, 'day');                 // 7 días después
dayjs().subtract(3, 'day');            // 3 días antes

// Fechas relativas (con plugin)
dayjs().fromNow();                      // "hace unos segundos"
dayjs().add(2, 'day').fromNow();       // "en 2 días"

// Información útil
dayjs().week();                         // Número de semana del año
dayjs().format('dddd');                 // "miércoles"

// Comparaciones
const futuro = dayjs('2026-12-25');
futuro.isAfter(dayjs());               // true
futuro.diff(dayjs(), 'day');           // días hasta Navidad
```

## 🗂️ Estructura del proyecto

```
event-planner/
├── index.html          # HTML semántico
├── style.css           # Estilos con CSS moderno
├── main.js             # Lógica principal con Day.js
├── package.json        # Dependencias del proyecto
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 🔧 Tecnologías utilizadas

- **Vite** `^5.0.0` - Build tool
- **Day.js** `^1.11.10` - Manipulación de fechas
- **JavaScript ES6+** - Vanilla JS moderno
- **CSS3** - Grid, Flexbox, Variables
- **LocalStorage API** - Persistencia de datos

## 💡 Ejercicios propuestos

1. **Añadir categorías** a los eventos (trabajo, personal, estudio)
2. **Filtrar eventos** por categoría
3. **Editar eventos** existentes
4. **Exportar eventos** a formato JSON
5. **Añadir recordatorios** con notificaciones del navegador
6. **Vista de calendario** mensual
7. **Temas** (modo claro/oscuro)
8. **Búsqueda** de eventos por nombre

## 🌟 Ventajas de Day.js vs Date nativo

| Feature | Date nativo | Day.js |
|---------|-------------|--------|
| Tamaño | Incluido en JS | 2KB (muy ligero) |
| API | Compleja | Simple e intuitiva |
| Inmutable | No | Sí |
| Plugins | No | Sí |
| i18n | Limitado | Excelente |
| Chainable | No | Sí |

## 📚 Recursos adicionales

- [Documentación de Day.js](https://day.js.org/)
- [Documentación de Vite](https://vitejs.dev/)
- [MDN - LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 🎓 Para el instructor

### Puntos a destacar en clase:
1. **Importaciones ES6**: Diferencia entre imports de npm y archivos locales
2. **Plugins de Day.js**: Cómo extender funcionalidad
3. **Persistencia de datos**: LocalStorage vs SessionStorage vs Cookies
4. **Renderizado dinámico**: Template strings vs createElement
5. **Responsividad**: Mobile-first approach
6. **Optimización**: Build de Vite y tree-shaking

### Preguntas para discutir:
- ¿Por qué usar una librería de fechas en lugar de Date nativo?
- ¿Cuándo usar LocalStorage vs una base de datos?
- ¿Qué ventajas tiene Vite sobre webpack?
- ¿Cómo mejorarías el rendimiento de esta app?

---

**Licencia**: MIT - Libre para uso educativo
