<template>
  <div>
    <h1>Hello, {{ name }} {{ job }}</h1>
  </div>
</template>

<script>
export default {
  name: "GreetWord",
  props: ["name", "job"],
};
</script>

<style scoped>
</style>