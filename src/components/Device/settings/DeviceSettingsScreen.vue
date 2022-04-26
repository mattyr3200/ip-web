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
      <div class="flex items-center space-x-2" v-if="selectedSection === 3">
        <p>Select the Duration Of the Graph</p>
        <div class="relative inline-flex">
          <svg
            class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#648299"
              fill-rule="nonzero"
            />
          </svg>
          <select
            v-model="graphDuration"
            class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>
    </div>

    <TriggerTableComponent :id="id" v-if="selectedSection === 1" />
    <TriggerLogTableComponent
      :id="id"
      :showTimeStamp="logTimeStamp"
      v-if="selectedSection === 2"
    />
    <TriggerLogGraphComponent
      :id="id"
      :graphDuration="graphDuration"
      v-if="selectedSection === 3"
    />
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
const graphDuration = ref("week");

function updateSelection(section) {
  selectedSection.value = section;
}

defineProps({
  id: String,
});
</script>

<style></style>
