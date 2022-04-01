<template>
  <div class="col-span-2 w-full rounded border">
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th
            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Description
          </th>
          <th
            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Trigger Voltage
          </th>
          <th
            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Trigger Time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trigger in deviceTriggers" v-bind:key="trigger.id">
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ trigger.name }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ trigger.description }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ trigger.trigger_voltage }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ trigger.trigger_time }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// 'log_id', 'name', 'description', 'wire', trigger_voltage, trigger_time

import { computed } from "vue";
import { useTriggerLogs } from "../../../store/triggerLogStore";

const props = defineProps({
  id: String,
});

const triggerLogStore = useTriggerLogs();

triggerLogStore.getTriggerLogs(props.id);

const deviceTriggers = computed(() => triggerLogStore.triggerLogs[props.id]);
</script>
