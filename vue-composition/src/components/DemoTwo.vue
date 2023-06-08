<template>
  <div>{{ firstName }} - {{ lastName }} - {{ akaName }} - job ({{ job }})</div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "DemoTwo",
  setup() {
    const akaName = ref("J11");
    const state = reactive({ firstName: "jhon", lastName: "wick" });
    const state2 = reactive({ job: "killer" });
    setTimeout(() => {
      state.firstName = "bob";
      state.lastName = "li";
      state2.job = "student";
      akaName.value = "K11";
    }, 2000);

    return { ...toRefs(state), ...toRefs(state2), akaName };
  },
};
</script>

<style scoped>
</style>