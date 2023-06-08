<template>
  <DataComponent></DataComponent>
  <DemoOne></DemoOne>
  <DemoTwo></DemoTwo>
  <MethodComposition></MethodComposition>
  <VModel></VModel>
  <ComputedCompostion></ComputedCompostion>
  <WatchComposition></WatchComposition>
  <ProvideInject></ProvideInject>
  <TemplateRef></TemplateRef>
  <PersonComponent></PersonComponent>
  <CounterOne></CounterOne>
  <CounterTwo></CounterTwo>
</template>

<script>
import DataComponent from "./components/DataComponent.vue";
import DemoOne from "./components/DemoOne.vue";
import DemoTwo from "./components/DemoTwo.vue";
import MethodComposition from "./components/MethodComposition.vue";
import VModel from "./components/VModel.vue";
import ComputedCompostion from "./components/ComputedCompostion.vue";
import WatchComposition from "./components/WatchComposition.vue";
import ProvideInject from "./components/ProvideInject.vue";
import TemplateRef from "./components/TemplateRef.vue";
import PersonComponent from "./components/PersonComponent.vue";
import CounterOne from "./components/CounterOne.vue";
import CounterTwo from "./components/CounterTwo.vue";
export default {
  name: "App",
  components: {
    DataComponent,
    DemoOne,
    DemoTwo,
    MethodComposition,
    VModel,
    ComputedCompostion,
    WatchComposition,
    ProvideInject,
    TemplateRef,
    PersonComponent,
    CounterOne,
    CounterTwo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
