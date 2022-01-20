<template>
  <div class="w-full bg-gray-200 p-4 rounded aspect-square relative">
    <button class="absolute top-2 right-3 w-4 h-4 z-10">
      <CogOutlined class="text-gray-600" />
    </button>
    <div class="text-center w-full font-bold">Device Name</div>
    <div>
      <LineChart v-bind="lineChartProps" class="aspect-square" />
    </div>
    <button
      class="rounded hover:bg-gray-300 text-bold w-full border border-gray-300 p-2 text-gray-600"
      v-on:click="activateAlarm"
      :class="{ 'text-red-500': alarmActive }"
    >
      {{ alarmActive ? "Click to Disarm" : "Click to Arm" }}
    </button>
  </div>
</template>

<script setup>
import { LineChart, useLineChart } from "vue-chart-3";
import { computed, ref } from "vue";
import CogOutlined from "../Icons/CogOutlined.vue";

const labels = ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"];
const data = [65, 59, 80, 81, 56, 55, 40];

const alarmActive = ref(false);

function activateAlarm() {
  alarmActive.value = !alarmActive.value;
}

const chartData = computed(() => ({
  labels: labels,
  datasets: [
    {
      label: "No of Tigger Events",
      data: data,
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
}));

const { lineChartProps } = useLineChart({
  chartData,
});
</script>
