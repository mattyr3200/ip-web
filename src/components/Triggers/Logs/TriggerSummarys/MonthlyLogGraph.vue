<template>
  <div>
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script setup>
import { LineChart, useLineChart } from "vue-chart-3";
import { computed } from "vue";
import { useTriggerLogs } from "../../../../store/triggerLogStore";

const props = defineProps({
  id: String,
  inheritClass: String,
});

const triggerLogStore = useTriggerLogs();

triggerLogStore.getMonthlyTriggerSummary(props.id).then(() => {
  triggerLogStore.triggerMonthlySummary[props.id].map;
});

const date = computed(() => {
  const array = [];
  if (triggerLogStore.triggerMonthlySummary[props.id]) {
    for (
      let i = 0;
      i < triggerLogStore.triggerMonthlySummary[props.id].length;
      i++
    ) {
      array.push(triggerLogStore.triggerMonthlySummary[props.id][i][0]);
    }
  }
  return array;
});

const total = computed(() => {
  const array = [];
  if (triggerLogStore.triggerMonthlySummary[props.id]) {
    for (
      let i = 0;
      i < triggerLogStore.triggerMonthlySummary[props.id].length;
      i++
    ) {
      array.push(triggerLogStore.triggerMonthlySummary[props.id][i][1]);
    }
  }
  return array;
});

const chartData = computed(() => ({
  labels: date.value,
  datasets: [
    {
      label: "No of Trigger Events",
      data: total.value,
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
