<template>
  <div class="w-full bg-gray-200 p-4 rounded aspect-square relative">
    <button
      class="absolute top-2 right-3 w-4 h-4 z-10"
      v-on:click="$router.push(`/device/${props.device.id}/settings`)"
    >
      <CogOutlined class="text-gray-600" />
    </button>
    <div class="text-center w-full font-bold">{{ props.device.name }}</div>
    <div>
      <LineChart v-bind="lineChartProps" class="aspect-square" />
    </div>
    <button
      class="rounded hover:bg-gray-300 text-bold w-full border border-gray-300 p-2 text-gray-600"
      v-on:click="activateAlarm"
      :class="{ 'text-red-500': props.device.is_armed }"
    >
      {{ props.device.is_armed ? "Click to Disarm" : "Click to Arm" }}
    </button>
  </div>
</template>

<script setup>
import { LineChart, useLineChart } from "vue-chart-3";
import { computed } from "vue";
import CogOutlined from "../Icons/CogOutlined.vue";
import { useTriggerLogs } from "../../store/triggerLogStore";
import { useDevice } from "../../store/deviceStore";

const props = defineProps({
  device: Object,
});

const triggerLogStore = useTriggerLogs();
const deviceStore = useDevice();

triggerLogStore.getWeeklyTriggerSummary(props.device.id).then(() => {
  triggerLogStore.triggerWeeklySummary[props.device.id].map;
});

const date = computed(() => {
  const array = [];
  if (triggerLogStore.triggerWeeklySummary[props.device.id]) {
    for (
      let i = 0;
      i < triggerLogStore.triggerWeeklySummary[props.device.id].length;
      i++
    ) {
      array.push(triggerLogStore.triggerWeeklySummary[props.device.id][i][0]);
    }
  }
  return array;
});

const total = computed(() => {
  const array = [];
  if (triggerLogStore.triggerWeeklySummary[props.device.id]) {
    for (
      let i = 0;
      i < triggerLogStore.triggerWeeklySummary[props.device.id].length;
      i++
    ) {
      array.push(triggerLogStore.triggerWeeklySummary[props.device.id][i][1]);
    }
  }
  return array;
});

function activateAlarm() {
  deviceStore.updateDeviceStatus(props.device.id, !props.device.is_armed);
}

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
