<template>
  <div>
    <h1>Component A</h1>
    <ComponentB></ComponentB>
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";
export default {
  name: "ComponentA",
  components: {
    ComponentB,
  },
};
</script>

<style scoped>
</style>