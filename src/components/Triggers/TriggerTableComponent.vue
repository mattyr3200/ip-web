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
            Trigger Wire
          </th>
          <th
            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Trigger Voltage
          </th>
          <th
            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
          >
            Delete
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
            {{ trigger.wire }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {{ trigger.trigger_voltage ? "High" : "Low" }}
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button
              class="rounded bg-red-300 px-4 py-2 hover:bg-red-500"
              v-on:click="deleteTrigger(trigger.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTriggers } from "../../store/triggerStore";

const props = defineProps({
  id: String,
});

const triggerStore = useTriggers();

triggerStore.getTriggers(props.id);

const deviceTriggers = computed(() => triggerStore.triggers[props.id]);

function deleteTrigger(id) {
  triggerStore.deleteTrigger(id, props.id);
}
</script>
