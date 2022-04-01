<template>
  <div class="grid md:grid-cols-2 gap-2">
    <UpdateDeviceComponent :id="id" />
    <CreateTriggerComponent :id="id" />

    <div class="flex w-full col-span-2 items-center">
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
    </div>

    <TriggerTableComponent :id="id" v-if="selectedSection === 1" />
    <TriggerLogTableComponent :id="id" v-if="selectedSection === 2" />
  </div>
</template>

<script setup>
import UpdateDeviceComponent from "../Update/UpdateDeviceComponent.vue";
import CreateTriggerComponent from "../../Triggers/CreateTriggerComponent.vue";
import TriggerTableComponent from "../../Triggers/TriggerTableComponent.vue";
import { ref } from "vue";
import TriggerLogTableComponent from "../../Triggers/Logs/TriggerLogTableComponent.vue";

const selectedSection = ref(1);

function updateSelection(section) {
  selectedSection.value = section;
}

defineProps({
  id: String,
});
</script>

<style></style>
