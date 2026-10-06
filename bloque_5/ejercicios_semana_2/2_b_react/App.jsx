// Componente raíz: JSX (marcado + lógica) y estilos importados
import { useState } from 'react'
import './App.css'

export default function App() {
  // Estado del componente: counter y su función para actualizarlo
  const [counter, setCounter] = useState(0)

  // Funciones que usa el marcado
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return (
    <div>
      <h1>Ejemplo React con Vite</h1>
      <p>{counter}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  )
}
