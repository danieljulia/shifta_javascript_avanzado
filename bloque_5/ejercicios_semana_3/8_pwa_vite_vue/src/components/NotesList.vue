<template>
  <div>
    <form class="add-note" @submit.prevent="addNote">
      <input
        v-model="text"
        type="text"
        placeholder="Escribe una nota..."
        autofocus
      />
      <button type="submit">Añadir</button>
    </form>

    <ul class="notes-list" v-if="notes.length">
      <li class="note-item" v-for="note in notes" :key="note.id">
        <span class="note-text">{{ note.text }}</span>
        <button class="delete-btn" @click="deleteNote(note.id)" title="Eliminar">🗑️</button>
      </li>
    </ul>

    <p class="empty" v-else>Sin notas. ¡Añade una aunque estés offline!</p>
  </div>
</template>

<script>
const STORAGE_KEY = 'pwa-notes'

export default {
  name: 'NotesList',
  data() {
    return {
      text: '',
      notes: []
    }
  },
  mounted() {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) this.notes = JSON.parse(saved)
  },
  methods: {
    addNote() {
      const trimmed = this.text.trim()
      if (!trimmed) return
      this.notes.push({ id: Date.now(), text: trimmed })
      this.text = ''
      this.save()
    },
    deleteNote(id) {
      this.notes = this.notes.filter(n => n.id !== id)
      this.save()
    },
    save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes))
    }
  }
}
</script>
