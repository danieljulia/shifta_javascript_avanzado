<template>

<div class="container">

<router-link to="/">← Back</router-link>

<h1>{{ project.title }}</h1>

<p>{{ project.description }}</p>

</div>

</template>

<script setup>

import { useRoute } from "vue-router"
import { projects } from "../data/projects"

const route = useRoute()

const project = projects.find(
p => p.id == route.params.id
)

</script>