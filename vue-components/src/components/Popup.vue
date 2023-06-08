<template>
  <div>
    <h1>This is a Pop up</h1>
    <button @click="$emit('closePopup', data)">close</button>
  </div>
</template>

<script>
export default {
  name: "PopupDailog",
  data() {
    return {
      data: {
        name: "wick",
        gender: "male",
      },
    };
  },
  // emits: ["closePopup"],
  emits: {
    closePopup(data) {
      if (JSON.stringify(data) === "{}") {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
</style>