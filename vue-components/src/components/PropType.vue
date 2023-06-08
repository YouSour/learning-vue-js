<template>
  <div>
    <p v-bind="$attrs">My name's {{ name }}</p>
    power : {{ power }} - status :
    {{ status ? "available" : "not available" }}
  </div>
</template>

<script>
export default {
  name: "PropType",
  props: {
    name: { type: String, required: true, default: "Default  Name Jhon" },
    power: Number,
    status: Boolean,
  },
  inheritAttrs: false,
};
</script>

<style scoped>
</style>