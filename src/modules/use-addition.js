import { ref, computed } from 'vue';

export default () => {
  const num5 = ref(0);
  const num2 = ref(0);
  const sum = computed(() => {
    console.log(num5.value);
    return parseInt(num5.value, 10) + parseInt(num2.value, 10);
  });

  return {
    num5,
    num2,
    sum,
  };
};
