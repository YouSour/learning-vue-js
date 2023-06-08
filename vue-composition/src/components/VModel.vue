<template>
  <div>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
    <input type="text" placeholder="Hero Name" v-model="heroName" />
    {{ firstName }} - {{ lastName }} - {{ heroName }}
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "VModel",
  setup() {
    const state = reactive({ firstName: "", lastName: "" });
    const heroName = ref("");
    return { ...toRefs(state), heroName };
  },
};
</script>

<style scoped>
</style>