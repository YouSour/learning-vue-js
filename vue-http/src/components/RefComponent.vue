<template>
  <div>
    <input type="text" ref="refName" v-model="name" />
  </div>
</template>

<script>
export default {
  name: "RefComponent",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.$refs.refName.focus();
  },
};
</script>

<style scoped>
</style>