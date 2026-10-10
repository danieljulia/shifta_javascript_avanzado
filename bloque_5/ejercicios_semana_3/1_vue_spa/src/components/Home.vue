<!-- Vista Home: se muestra cuando la ruta es "/" -->
<template>
    <div>
      <h2>Home Page</h2>

      <!-- CORREGIDO: en una SPA usamos router-link en lugar de <a href>.
           Un <a href="/project/1"> recargaría toda la página y perderíamos
           la ventaja del enrutado del lado del cliente -->
      <router-link to="/project/1">Project 1</router-link>
      
      <h3>Posibles mejoras a hacer en este ejemplo</h3>
      <ul>
        <li>Cargar un json con información de proyectos y mostrar un listado</li>
        <li>Crear un componente que muestra un proyecto en modo teaser</li>
        <li>Crear una ruta para un proyecto en concreto y mostrarlo con otro componente y más detalles</li>
        <li>Abrir un modal al pulsar sobre un botón</li>
        <li>Crear una lista to-do list y almacenarla en localstorage</li>
      
      </ul>
    </div>
  </template>
  