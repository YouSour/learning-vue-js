<template>
  <div>
    <!-- <button @click="getPosts">Load Posts</button> -->

    <h3 v-if="err">{{ err }}</h3>
    <template v-for="post in posts" :key="post.id">
      <h3>{{ post.id }} - {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostList",
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      err: "",
      newPost: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          this.err = err.message;
        });
    },
  },
  // watch: {
  //   posts: {
  //     handler(newValue) {
  //       if (newValue.length == 0) {
  //         this.getPosts();
  //       }
  //     },
  //     immediate: true,
  //   },
  // },
};
</script>

<style scoped>
</style>