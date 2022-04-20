<template>
  <div class="grid md:grid-cols-2 gap-2">
    <UpdateDeviceComponent :id="id" />
    <CreateTriggerComponent :id="id" />

    <div class="flex w-full col-span-2 items-center justify-between">
      <div class="flex col-span-2">
        <button
          v-on:click="updateSelection(1)"
          class="p-4 hover:border-b-2 hover:border-gray-300"
          :class="{ 'border-b-2 border-gray-300': selectedSection === 1 }"
        >
          Triggers
        </button>
        <button
          v-on:click="updateSelection(2)"
          class="p-4 hover:border-b-2 hover:border-gray-300"
          :class="{ 'border-b-2 border-gray-300': selectedSection === 2 }"
        >
          Logs
        </button>
        <button
          v-on:click="updateSelection(3)"
          class="p-4 hover:border-b-2 hover:border-gray-300"
          :class="{ 'border-b-2 border-gray-300': selectedSection === 3 }"
        >
          Log Graph
        </button>
      </div>

      <div class="flex" v-if="selectedSection === 2">
        <label class="relative flex justify-between items-center group p-2">
          Change trigger time to timestamp
          <input
            v-model="logTimeStamp"
            type="checkbox"
            class="absolute left-1/2 -translate-x-1/2 w-1/2 h-1/2 peer appearance-none rounded-md"
          />
          <span
            class="w-10 h-5 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 group-hover:after:translate-x-0"
          ></span>
        </label>
      </div>
    </div>

    <TriggerTableComponent :id="id" v-if="selectedSection === 1" />
    <TriggerLogTableComponent
      :id="id"
      :showTimeStamp="logTimeStamp"
      v-if="selectedSection === 2"
    />
    <TriggerLogGraphComponent :id="id" v-if="selectedSection === 3" />
  </div>
</template>

<script setup>
import UpdateDeviceComponent from "../Update/UpdateDeviceComponent.vue";
import CreateTriggerComponent from "../../Triggers/CreateTriggerComponent.vue";
import TriggerTableComponent from "../../Triggers/TriggerTableComponent.vue";
import TriggerLogGraphComponent from "../../Triggers/Logs/TriggerLogGraphComponent.vue";
import { ref } from "vue";
import TriggerLogTableComponent from "../../Triggers/Logs/TriggerLogTableComponent.vue";

const selectedSection = ref(1);
const logTimeStamp = ref(false);

function updateSelection(section) {
  selectedSection.value = section;
}

defineProps({
  id: String,
});
</script>

<style></style>
