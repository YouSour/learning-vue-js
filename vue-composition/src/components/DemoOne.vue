 <template>
  <div>
    {{ name }}
  </div>
</template>
 
 <script>
import { ref } from "vue";
export default {
  name: "DemoOne",
  setup() {
    let name = ref("sour");

    setTimeout(() => {
      name.value = "kaiju";
    }, 2000);
    return { name };
  },
};
</script>
 
 <style scoped>
</style>