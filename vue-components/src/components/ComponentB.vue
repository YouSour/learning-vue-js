<template>
  <div>
    <h1>Component B</h1>
    <ComponentC></ComponentC>
  </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";

export default {
  name: "ComponentB",
  components: { ComponentC },
};
</script>

<style scoped>
</style>