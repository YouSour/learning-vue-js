<template>
  <div>Say: {{ greeting }}</div>
  <button @click="sendEvent">Emit Call Heroes</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "GreetComponent",
  props: {
    heroName: String,
  },
  emits: ["callHeroes"],
  setup(props, context) {
    const greeting = computed(() => {
      return `hi, i'm [${props.heroName}]`;
    });

    const emitData = computed(() => {
      return `Call Heroes [${props.heroName}] Right Now.`;
    });

    function sendEvent() {
      context.emit("callHeroes", emitData.value);
    }
    return { greeting, sendEvent };
  },
};
</script>

<style scoped>
</style>