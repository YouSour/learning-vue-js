<template>
  <form @submit.prevent="createPost">
    <label>User ID <input type="number" v-model="form.userId" /></label>
    <label>Title <input type="text" v-model="form.title" /></label>
    <label>Body <input type="text" v-model="form.body" /></label>
    <button>Create Post</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      form: {
        title: "",
        body: "",
        userId: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.form)
        .then((res) => {
          console.log(
            "🚀 ~ file: CreatePost.vue:28 ~ createPost ~ res:",
            res.data
          );
        })
        .catch((err) => {
          console.log("🚀 ~ file: CreatePost.vue:32 ~ createPost ~ err:", err);
        });
    },
  },
};
</script>

<style scoped>
</style>