<template>
  <h3 v-for="name in names" :key="name">
    <!-- {{ name.firstName }} - {{ name.lastName }} -->
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script>
export default {
  name: "NameList",
  data() {
    return {
      names: [
        { firstName: "Jhon", lastName: "Wick" },
        { firstName: "Jhonny", lastName: "Cane" },
      ],
    };
  },
};
</script>

<style scoped>
</style>