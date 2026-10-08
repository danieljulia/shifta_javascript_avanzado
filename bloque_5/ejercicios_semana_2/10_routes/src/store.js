// Estado compartido (store mínimo). Todos los componentes importan este
// mismo objeto reactivo, así que comparten los datos sin necesidad de Pinia.
import { reactive } from 'vue'

export const state = reactive({
  site: { title: '', footer: '' },
  home: {},
  contact: {},
  projects: [],
  error: null // mensaje de error si falla la carga
})

// Descarga data/data.json y copia su contenido en el estado.
//
// El JSON vive en public/data/data.json. Vite copia public/ SIN procesar a dist/,
// así que en producción sigue siendo un fichero normal que se puede editar
// en el servidor (on the fly) sin volver a compilar.
export async function loadData() {
  try {
    // BASE_URL respeta la opción "base" de vite.config.js.
    // "?t=" + Date.now() evita la caché del navegador: los cambios se ven al recargar.
    const url = `${import.meta.env.BASE_URL}data/data.json?t=${Date.now()}`
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    Object.assign(state, await response.json())
    state.error = null
  } catch (e) {
    console.error('Error cargando data.json:', e)
    state.error = 'No se pudieron cargar los datos'
  }
}
