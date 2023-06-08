<template>
  <CreatePost />
  <PostList />
  <Parent></Parent>
  <RefComponent></RefComponent>
  <ClickCounter></ClickCounter>
</template>

<script>
import CreatePost from "./components/CreatePost.vue";
import PostList from "./components/PostList.vue";
import Parent from "./components/Parent.vue";
import RefComponent from "./components/RefComponent.vue";
import ClickCounter from "./components/ClickCounter.vue";
export default {
  name: "App",
  components: {
    CreatePost,
    PostList,
    Parent,
    RefComponent,
    ClickCounter,
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
