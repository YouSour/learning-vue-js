<template>
  <div>
    <h3>Watch Composition Ref</h3>
    <input type="text" placeholder="Name" v-model="name" />
    <input type="number" placeholder="Age" v-model="age" />
    Name: {{ name }} - Age: {{ age }}
  </div>
  <div>
    <h3>Watch Composition Reactive</h3>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <input type="text" placeholder="Hero Name" v-model="options.heroName" />
    FullName: {{ fName }} {{ lName }} | Hero Name: {{ options.heroName }}
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
import _ from "lodash";
export default {
  name: "WatchCompostion",
  setup() {
    const state = reactive({
      fName: "",
      lName: "",
      options: {
        heroName: "",
      },
    });
    //watch all props in obj
    watch(
      () => {
        return { ...state };
      },
      (newValue, oldValue) => {
        console.log(
          "🚀 ~ file: WatchComposition.vue:26 ~ watch ~ newValue:",
          newValue
        );
        console.log(
          "🚀 ~ file: WatchComposition.vue:26 ~ watch ~ oldValue:",
          oldValue
        );
      }
    );
    //watch a prop in obj
    watch(
      () => state.fName,
      (newValueFName, oldValueFName) => {
        console.log(
          "🚀 ~ file: WatchComposition.vue:50 ~ setup ~ oldValueFName:",
          oldValueFName
        );
        console.log(
          "🚀 ~ file: WatchComposition.vue:54 ~ setup ~ newValueFName:",
          newValueFName
        );
      }
    );

    // watch deep prop in obj
    watch(
      //     () => {
      //     return { ...state.options };
      //   },
      () => _.cloneDeep(state.options), //using lodash package
      (newValueHeroName, oldValueHeroName) => {
        console.log(
          "🚀 ~ file: WatchComposition.vue:63 ~ setup ~ oldValueHeroName:",
          oldValueHeroName
        );
        console.log(
          "🚀 ~ file: WatchComposition.vue:67 ~ setup ~ newValueHeroName:",
          newValueHeroName
        );
      },
      { deep: true }
    );

    const name = ref();
    const age = ref();
    watch(
      [name, age],
      (newValues, oldValues) => {
        console.log(
          "🚀 ~ file: WatchComposition.vue:16 ~ watch ~ newValue:",
          newValues
        );
        console.log(
          "🚀 ~ file: WatchComposition.vue:16 ~ watch ~ oldValue:",
          oldValues
        );
      },
      { immediate: false }
    );
    return { name, age, ...toRefs(state) };
  },
};
</script>

<style scoped>
</style>