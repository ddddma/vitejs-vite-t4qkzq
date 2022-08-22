<template>
  <div class="relative mb-6">
    <div
      class="
        flex
        absolute
        inset-y-0
        left-0
        items-center
        pl-3
        pointer-events-none
      "
    >
      <!-- questionMarc -->
      <svg
        v-if="inputArg.length == 0"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <!-- svg check -->
      <svg
        v-if="inputArg.length > 0 && inputArg.length <= 10"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>

      <!-- SVG Cross -->

      <svg
        v-if="inputArg.length > 0 && inputArg.length > 10"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
    <input
      type="text"
      class="block pl-10 p-2.5 focus:outline-none w-44 min-w-full md:min-w-0"
      placeholder="Enter someth.."
      :value="inputArg"
      @input="update($event)"
      :class="{
        'border-green border-b': validateInput(inputArg) == true,
        'border-rose border-b': validateInput(inputArg) == false,
      }"
    />
  </div>
  {{ testVal }}
</template>

<script>
import validateInput from '../validate-input.js';
export default {
  name: 'InputField',
  props: ['inputArg'],
  data() {
    return {
      inputVal: '',
      validateInput,
    };
  },
  // computed:{
  //   calcutetState(){
  //     if (this.inputVal > 0 && this.inputVal) > 10 {
  //       return false
  //     }
  //     else true
  //   }
  // }
  methods: {
    update($event) {
      this.$emit('update:inputArg', $event.target.value);
    },
  },
};
</script>
