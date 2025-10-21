
<template>

    <div class="project-card">
     <div class="project-image">
            <img :src="project.image" :alt="project.name">
        </div>
        <div class="project-content">
            <h3 class="project-name">
                <router-link :to="`/project/${project.id}`">{{project.name}}</router-link>
            </h3>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Project',
    props: {
        project: Object
    }
}
</script>