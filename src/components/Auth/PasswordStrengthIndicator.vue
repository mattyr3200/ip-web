<template>
  <div class="w-full h-2 mt-3 grid grid-cols-3 gap-2">
    <span
      class="w-full h-full rounded-full"
      :class="{
        'bg-gray-300': score === 0,
        'bg-yellow-200': score === 1,
        'bg-green-300': score > 1,
      }"
    ></span>

    <span
      class="w-full h-full rounded-full"
      :class="{
        'bg-gray-300': score < 2,
        'bg-yellow-200': score === 2,
        'bg-green-300': score > 2,
      }"
    ></span>

    <span
      class="w-full h-full rounded-full"
      :class="{
        'bg-gray-300': score < 3,
        'bg-yellow-200': score === 3,
        'bg-green-300': score > 3,
      }"
    ></span>
  </div>
</template>

<script setup>
import { toRef } from "vue";

const props = defineProps({
  score: {
    type: Number,
    default: 0,
  },
});

const score = toRef(props, "score");
</script>
