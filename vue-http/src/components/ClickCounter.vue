<template>
  <div>
    <button @click="incCounter">Counter: {{ counter }}</button>
  </div>
</template>

<script>
import CounterMaxin from "../mixins/counter";
export default {
  name: "ClickCounter",
  mixins: [CounterMaxin],
};
</script>

<style scoped>
</style> 