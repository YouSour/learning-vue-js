<template>
  <div>
    <h1>Component C</h1>
    <p>props from App.vue component : {{ username }}</p>
  </div>
</template>

<script>
export default {
  name: "ComponentC",
  inject: ["username"],
};
</script>

<style scoped>
</style>