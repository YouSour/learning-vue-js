<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="inputStyle"
      required
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
.inputStyle {
  background: chocolate;
}
</style>