<template>
  <h3>Calculator</h3>
  <form v-on:submit.prevent="add">
    <input type="number" v-model="num5" />
    <input type="number" v-model="num2" />
    <button type="submit">Add</button>
  </form>
  <p>Result: {{ sum }}</p>
</template>
<script>
import { ref } from 'vue';
import useAddition from '../modules/use-addition';
import useApi from '../modules/use-api';

export default {
  setup() {
    const { num5, num2, sum } = useAddition();
    // const { fact } = useApi(sum);

    return {
      num5,
      num2,
      sum,
    };
  },
};
</script>
