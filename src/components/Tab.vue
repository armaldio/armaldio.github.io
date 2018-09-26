<template>
  <v-tab-item>
    <v-card flat>
      <v-card-text>
        <v-layout row wrap>
          <Project v-for="(project, i) in projects" :id="`project-${i}`" :key="i" :project="project"></Project>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-tab-item>
</template>

<script>
  import Project from './Project';

  export default {
    name      : 'Tab',
    components: {
      Project,
    },
    props     : {
      projects: {
        type    : Array,
        required: true,
      },
    },
  };
</script>

<style scoped></style>
