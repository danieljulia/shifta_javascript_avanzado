<!-- Lista de notas con persistencia en localStorage (funciona offline) -->
<template>
  <div>
    <!-- @submit.prevent = v-on:submit con el modificador .prevent,
         que evita que el formulario recargue la página -->
    <form class="add-note" @submit.prevent="addNote">
      <!-- v-model enlaza el input con la variable "text" en ambos sentidos -->
      <input
        v-model="text"
        type="text"
        placeholder="Escribe una nota..."
        autofocus
      />
      <button type="submit">Añadir</button>
    </form>

    <ul class="notes-list" v-if="notes.length">
      <!-- v-for pinta una nota por elemento; :key usa el id único de cada nota -->
      <li class="note-item" v-for="note in notes" :key="note.id">
        <span class="note-text">{{ note.text }}</span>
        <button class="delete-btn" @click="deleteNote(note.id)" title="Eliminar">🗑️</button>
      </li>
    </ul>

    <p class="empty" v-else>Sin notas. ¡Añade una aunque estés offline!</p>
  </div>
</template>

<script>
// Clave bajo la que guardamos el array de notas en localStorage
const STORAGE_KEY = 'pwa-notes'

// Options API de Vue 3: data, mounted y methods
export default {
  name: 'NotesList',
  data() {
    return {
      text: '',   // texto del input (enlazado con v-model)
      notes: []   // array reactivo de notas: { id, text }
    }
  },
  // mounted(): al cargar el componente recuperamos las notas guardadas
  mounted() {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) this.notes = JSON.parse(saved)
  },
  methods: {
    addNote() {
      const trimmed = this.text.trim()
      if (!trimmed) return // ignoramos notas vacías
      // Date.now() sirve como id único sencillo para el ejercicio
      this.notes.push({ id: Date.now(), text: trimmed })
      this.text = ''
      this.save()
    },
    deleteNote(id) {
      // filter devuelve un array nuevo sin la nota borrada; al reasignarlo
      // Vue detecta el cambio y actualiza la lista
      this.notes = this.notes.filter(n => n.id !== id)
      this.save()
    },
    // localStorage solo guarda strings, por eso serializamos con JSON.stringify
    save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes))
    }
  }
}
</script>
