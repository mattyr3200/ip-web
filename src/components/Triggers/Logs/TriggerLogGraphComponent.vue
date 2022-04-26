<template>
  <div class="col-span-2 block box-border w-full">
    <WeeklyLogGraph
      :id="props.id"
      v-if="getGraphDuration == 'week'"
      :inheritClass="'col-span-2 block box-border w-full'"
    />
    <MonthlyLogGraph
      :id="props.id"
      v-if="getGraphDuration == 'month'"
      :inheritClass="'col-span-2 block box-border w-full'"
    />
    <YearlyLogGraph
      :id="props.id"
      v-if="getGraphDuration == 'year'"
      :inheritClass="'col-span-2 block box-border w-full'"
    />
  </div>
</template>

<script setup>
import WeeklyLogGraph from "./TriggerSummarys/WeeklyLogGraph.vue";
import MonthlyLogGraph from "./TriggerSummarys/MonthlyLogGraph.vue";
import YearlyLogGraph from "./TriggerSummarys/YearlyLogGraph.vue";
import { computed } from "vue-demi";

const props = defineProps({
  id: String,
  graphDuration: String,
});

const getGraphDuration = computed(() => {
  return props.graphDuration;
});
</script>
