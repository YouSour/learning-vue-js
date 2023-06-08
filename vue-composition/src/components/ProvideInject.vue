<template>
  <div>
    <H1>Parent Provide & Inject</H1>
    <p>Parent Username: {{ username }}</p>
    <p>Parent Count: {{ count }}</p>
    <p>Parent FullName: {{ fName }} {{ lName }}</p>
    <button @click="incCount">Increase Count By Parent</button>
    <ChildA></ChildA>
  </div>
</template>

<script>
import { provide, ref, reactive, toRefs } from "vue";
import ChildA from "./ChildA.vue";
export default {
  name: "ProvideInject",
  components: {
    ChildA,
  },
  setup() {
    const username = "Jhon Wick";
    const count = ref(0);
    const state = reactive({ fName: "Bob", lName: "Cage" });
    //method
    function incCount() {
      count.value++;
    }
    //provide
    provide("username", username);
    provide("count", count);
    provide("stateFullName", state);
    provide("incCountMethod", incCount);

    return { username, count, ...toRefs(state), incCount };
  },
};
</script>

<style scoped>
</style>