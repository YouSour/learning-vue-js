<template>
  <div>
    <button @click="increasementCount">Count by 10</button>
    <H3>{{ count }}</H3>
  </div>
</template>

<script>
import userCounter from "../composables/useCounter";
export default {
  name: "CounterOne",
  setup() {
    const { count, increasementCount } = userCounter(0, 10);
    return { count, increasementCount };
  },
};
</script>

<style scoped>
</style>