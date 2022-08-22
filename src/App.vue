<template>
  <router-view />
  {{ testVal }}
  <inputField v-model:inputArg="testVal" />
  <caluclator />
</template>

<script>
import inputField from './components/InputField.vue';
import caluclator from './components/Calculator.vue';
export default {
  name: 'App',
  components: {
    inputField,
    caluclator,
  },
  data() {
    return {
      testVal: '',
    };
  },
};
</script>

<style scoped></style>
