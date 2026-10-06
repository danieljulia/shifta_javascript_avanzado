// Punto de entrada de la aplicación
import { createRoot } from 'react-dom/client'   // React instalado con npm
import App from './App.jsx'                     // componente raíz

// Creamos la raíz sobre <div id="app"> y renderizamos el componente raíz
createRoot(document.getElementById('app')).render(<App />)
