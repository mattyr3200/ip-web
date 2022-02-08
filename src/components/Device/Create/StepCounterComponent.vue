<template>
  <div class="flex justify-between rounded-full">
    <div class="w-full flex items-center">
      <div
        :class="{
          'bg-green-300': props.state.step > 1,
          'bg-blue-300': props.state.step === 1,
        }"
        class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
      >
        1
      </div>
      <span
        :class="{
          'bg-blue-300': props.state.step > 1 && props.state.step <= 2,
          'bg-green-300': props.state.step > 2,
        }"
        class="hidden md:flex h-2 w-[80%] bg-gray-300 mx-auto rounded-full"
      ></span>
    </div>
    <div class="w-full flex items-center">
      <div
        :class="{
          'bg-green-300': props.state.step > 2,
          'bg-blue-300': props.state.step === 2,
        }"
        class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
      >
        2
      </div>
      <span
        :class="{
          'bg-blue-300': props.state.step > 2 && props.state.step <= 3,
          'bg-green-300': props.state.step > 2,
        }"
        class="hidden md:flex h-2 w-[80%] bg-gray-300 mx-auto rounded-full"
      ></span>
    </div>
    <div class="w-full flex items-center">
      <div
        :class="{
          'bg-green-300': props.state.step > 3,
          'bg-blue-300': props.state.step === 3,
        }"
        class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
      >
        3
      </div>
      <span
        :class="{ 'bg-green-300': props.state.step === 4 }"
        class="hidden md:flex h-2 w-[80%] bg-gray-300 mx-auto rounded-full"
      ></span>
    </div>
    <div>
      <div
        :class="{ 'bg-green-300': props.state.step === 4 }"
        class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
      >
        4
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  state: Object,
});
</script>
