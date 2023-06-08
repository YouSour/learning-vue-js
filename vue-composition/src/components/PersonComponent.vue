<template>
  <div>
    <h1>Props & Composition Api</h1>
    <input type="text" placeholder="Hero Name" v-model="heroName" />
    <GreetComponent
      :heroName="heroName"
      @callHeroes="getEmitData"
    ></GreetComponent>
  </div>
</template>

<script>
import { ref } from "vue";
import GreetComponent from "./GreetComponent.vue";
export default {
  name: "PersonComponent",
  components: { GreetComponent },
  setup() {
    const heroName = ref("");
    function getEmitData(data) {
      alert(data);
    }
    return { heroName, getEmitData };
  },
};
</script>

<style scoped>
</style>