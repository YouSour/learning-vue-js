<template>
  <div>Option Api (data) - {{ name }}</div>
  <div>Composition Api ref - {{ firstName }}</div>
  <div>Composition Api ref - {{ greet }}</div>
  <div>
    Composition Api reactive - Id: {{ state.id }} , Hero Name:
    {{ state.heroName }}
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "DataComponent",
  setup() {
    const firstName = ref("Bob");

    const greet = `Hello,${firstName.value}`;

    const state = reactive({
      id: 1,
      heroName: "Super Man",
    });

    return { firstName, greet, state };
  },
  data() {
    return {
      name: "wick",
    };
  },
};
</script>

<style scoped>
</style>