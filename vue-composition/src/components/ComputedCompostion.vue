<template>
  <div>
    <h3>Computed Composition</h3>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h2>FullName: {{ fullName }}</h2>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  name: "ComputedCompostion",
  setup() {
    const state = reactive({ fName: "", lName: "" });
    const fullName = computed({
      get: () => `${state.fName} ${state.lName}`,
      set: (newValue) => {
        var names = newValue.split(" ");
        state.fName = names[0];
        state.lName = names[1];
      },
    });
    fullName.value = "jhon wick";

    return { ...toRefs(state), fullName };
  },
};
</script>

<style scoped>
</style>