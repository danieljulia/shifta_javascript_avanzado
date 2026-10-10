<!-- Vista de detalle de proyecto: se muestra con la ruta "/project/:id" -->
<template>
    <div>
      <!-- $route.params.id lee el parámetro dinámico :id de la URL.
           Por ejemplo, en /project/1 muestra "1" -->
      Project :-->{{ $route.params.id }}
    </div>
  </template>
