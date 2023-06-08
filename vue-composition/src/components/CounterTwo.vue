<template>
  <div>
    <button @click="increasementCount">Count</button>
    <H3>{{ count }}</H3>
  </div>
</template>
  
  <script>
import userCounter from "../composables/useCounter";
export default {
  name: "CounterTwo",
  setup() {
    const { count, increasementCount } = userCounter();
    return { count, increasementCount };
  },
};
</script>
  
  <style scoped>
</style>