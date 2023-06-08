<template>
  <div>
    <h1>Child B</h1>
    <p>Child UserName: {{ childUserName }}</p>
    <p>Child Count: {{ childCount }}</p>
    <p>Child FullName: {{ fName }} {{ lName }}</p>
    <button @click="childIncCountMethod">Increase Count By Child</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ChildB",
  setup() {
    const childUserName = inject("username", "Default Username");
    const childCount = inject("count", 0);
    const childFullName = inject("stateFullName", {});
    const childIncCountMethod = inject("incCountMethod");
    return {
      childUserName,
      childCount,
      ...toRefs(childFullName),
      childIncCountMethod,
    };
  },
};
</script>

<style scoped>
</style>