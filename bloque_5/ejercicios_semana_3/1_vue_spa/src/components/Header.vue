<!-- Cabecera común con la navegación principal -->
<template>
    <header>
        <h1>My Vue SPA</h1>
        <nav>
        <!-- router-link navega dentro de la SPA sin recargar la página
             (a diferencia de un <a href>, que haría una petición al servidor) -->
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        </nav>
    </header>
</template>
