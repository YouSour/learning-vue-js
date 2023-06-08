<template>
  <div>
    <h1>Using Method Optional Api</h1>
    <p>{{ name }}</p>
    <button @click="setName">Set Name</button>
    <h1>Using Method Composition Api</h1>
    <p>{{ compositionName }}</p>
    <button @click="setNameCompostionMethod">Set Name</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MethodCompostion",
  setup() {
    const compositionName = ref("unknown");
    //methods
    function setNameCompostionMethod() {
      compositionName.value = "wick";
    }
    return { compositionName, setNameCompostionMethod };
  },
  data() {
    return { name: "unknown" };
  },
  methods: {
    setName() {
      this.name = "wick";
    },
  },
};
</script>

<style scoped>
</style>