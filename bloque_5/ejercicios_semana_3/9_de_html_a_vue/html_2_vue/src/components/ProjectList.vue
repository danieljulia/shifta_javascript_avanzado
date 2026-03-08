<template>

<div class="container">

<h1>Project List</h1>

<div class="project-list">

<ProjectCard
v-for="p in projects"
:key="p.id"
:project="p"
/>

</div>

</div>

</template>

<script setup>

import ProjectCard from "./ProjectCard.vue"
import { projects } from "../data/projects"

</script>