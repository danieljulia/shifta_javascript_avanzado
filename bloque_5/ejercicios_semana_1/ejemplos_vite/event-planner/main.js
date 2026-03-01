// Importamos Day.js desde npm
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

// Configuramos Day.js con plugins y español
dayjs.extend(weekOfYear);
dayjs.extend(relativeTime);
dayjs.locale('es');

// Estado de la aplicación
let events = [];

// Elementos del DOM
const eventForm = document.getElementById('event-form');
const eventNameInput = document.getElementById('event-name');
const eventDateInput = document.getElementById('event-date');
const eventTimeInput = document.getElementById('event-time');
const eventsContainer = document.getElementById('events-container');
const currentDatetime = document.getElementById('current-datetime');
const currentDay = document.getElementById('current-day');
const currentWeek = document.getElementById('current-week');

// Inicializar la aplicación
function init() {
  loadEventsFromStorage();
  updateCurrentInfo();
  renderEvents();
  
  // Actualizar la hora cada segundo
  setInterval(updateCurrentInfo, 1000);
}

// Actualizar información actual usando Day.js
function updateCurrentInfo() {
  const now = dayjs();
  
  currentDatetime.textContent = now.format('DD/MM/YYYY HH:mm:ss');
  currentDay.textContent = now.format('dddd, D [de] MMMM');
  currentWeek.textContent = `Semana ${now.week()} del año`;
}

// Manejar el envío del formulario
eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newEvent = {
    id: Date.now(),
    name: eventNameInput.value,
    date: eventDateInput.value,
    time: eventTimeInput.value,
    datetime: dayjs(`${eventDateInput.value} ${eventTimeInput.value}`)
  };
  
  events.push(newEvent);
  saveEventsToStorage();
  renderEvents();
  
  // Limpiar formulario
  eventForm.reset();
  
  // Mensaje de confirmación
  showNotification('Evento añadido correctamente');
});

// Renderizar eventos
function renderEvents() {
  const now = dayjs();
  
  // Filtrar solo eventos futuros y ordenar por fecha
  const upcomingEvents = events
    .filter(event => event.datetime.isAfter(now))
    .sort((a, b) => a.datetime - b.datetime);
  
  if (upcomingEvents.length === 0) {
    eventsContainer.innerHTML = '<p class="no-events">No hay eventos próximos. ¡Añade uno!</p>';
    return;
  }
  
  eventsContainer.innerHTML = upcomingEvents.map(event => {
    const timeFromNow = event.datetime.fromNow();
    const formattedDate = event.datetime.format('DD/MM/YYYY');
    const formattedTime = event.datetime.format('HH:mm');
    const daysUntil = event.datetime.diff(now, 'day');
    
    // Determinar clase según proximidad
    let urgencyClass = '';
    if (daysUntil === 0) urgencyClass = 'urgent-today';
    else if (daysUntil <= 3) urgencyClass = 'urgent-soon';
    
    return `
      <div class="event-card ${urgencyClass}">
        <button class="btn-delete" onclick="deleteEvent(${event.id})" aria-label="Eliminar evento">
          ✕
        </button>
        <h3>${event.name}</h3>
        <div class="event-details">
          <p class="event-date">
            <span class="icon">📅</span>
            ${formattedDate}
          </p>
          <p class="event-time">
            <span class="icon">🕐</span>
            ${formattedTime}
          </p>
          <p class="event-countdown">
            <span class="icon">⏰</span>
            ${timeFromNow}
          </p>
          ${daysUntil === 0 ? '<p class="today-badge">¡Hoy!</p>' : ''}
          ${daysUntil === 1 ? '<p class="tomorrow-badge">Mañana</p>' : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Eliminar evento
window.deleteEvent = function(eventId) {
  events = events.filter(event => event.id !== eventId);
  saveEventsToStorage();
  renderEvents();
  showNotification('Evento eliminado');
};

// Guardar eventos en LocalStorage
function saveEventsToStorage() {
  const eventsToSave = events.map(event => ({
    id: event.id,
    name: event.name,
    date: event.date,
    time: event.time
  }));
  
  localStorage.setItem('events', JSON.stringify(eventsToSave));
}

// Cargar eventos desde LocalStorage
function loadEventsFromStorage() {
  const stored = localStorage.getItem('events');
  
  if (stored) {
    const parsedEvents = JSON.parse(stored);
    events = parsedEvents.map(event => ({
      ...event,
      datetime: dayjs(`${event.date} ${event.time}`)
    }));
  }
}

// Mostrar notificación
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animación de entrada
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Iniciar la aplicación cuando el DOM esté listo
init();

// Ejemplos educativos en la consola
console.log('=== Ejemplos de Day.js ===');
console.log('Fecha actual:', dayjs().format('DD/MM/YYYY'));
console.log('Hora actual:', dayjs().format('HH:mm:ss'));
console.log('Hace 3 días:', dayjs().subtract(3, 'day').format('DD/MM/YYYY'));
console.log('En 7 días:', dayjs().add(7, 'day').format('DD/MM/YYYY'));
console.log('Semana del año:', dayjs().week());
console.log('Día de la semana:', dayjs().format('dddd'));
