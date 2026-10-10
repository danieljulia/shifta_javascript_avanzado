<!-- Componente raíz: solo define la estructura común (cabecera + hueco de rutas).
     No necesita <script> porque no tiene lógica ni componentes propios -->
<template>

<header class="header">
  <!-- router-link navega a la home sin recargar la página -->
  <router-link to="/">
    <h1>Projects</h1>
  </router-link>
</header>

<!-- router-view pinta aquí el componente de la ruta actual
     (ProjectList, ProjectDetail...) según la URL -->
<router-view />


</template>
