import { ref } from "vue";

export default function userCounter(initCount = 0, stepCount = 1) {
    const count = ref(initCount);
    function increasementCount() {
        count.value += stepCount;
    }
    return { count, increasementCount }
}