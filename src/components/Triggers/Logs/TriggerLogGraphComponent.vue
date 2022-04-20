<template>
  <LineChart
    v-bind="lineChartProps"
    class="col-span-2 block box-border w-full"
  />
</template>

<script setup>
import { LineChart, useLineChart } from "vue-chart-3";
import { computed } from "vue";

const chartData = computed(() => ({
  labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
  datasets: [
    {
      label: "No of Trigger Events",
      data: [30, 40, 60, 70, 5],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.2,
    },
  ],
}));

const { lineChartProps } = useLineChart({
  chartData,
});
</script>
