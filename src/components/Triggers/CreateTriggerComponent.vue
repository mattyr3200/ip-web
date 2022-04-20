<template>
  <div class="border rounded p-6 space-y-2">
    <div>
      <label for="name">Trigger Name</label>
      <input
        class="border w-full p-2"
        type="text"
        name="name"
        id="name"
        v-model="triggerName"
      />
    </div>
    <div>
      <label for="description">Trigger Description</label>
      <input
        class="border w-full p-2"
        type="text"
        name="description"
        id="description"
        v-model="triggerDescription"
      />
    </div>
    <div>
      <label for="wire">Trigger wire</label>
      <input
        class="border w-full p-2"
        type="number"
        id="wire"
        name="wire"
        min="1"
        max="10"
        v-model="triggerWire"
      />
    </div>
    <div class="mt-2">
      <label class="inline-flex items-center">
        <input type="checkbox" v-model="triggerVoltage" />
        <span class="ml-2"
          >Trigger Voltage (Checked for High, default Low)</span
        >
      </label>
    </div>
    <div class="mt-2">
      <label class="inline-flex items-center">
        <input type="checkbox" v-model="emailNotification" />
        <span class="ml-2"
          >Receive Email Notifications (Only when alarm is armed)</span
        >
      </label>
    </div>
    <div class="flex justify-end items-center">
      <button
        v-on:click="createTrigger"
        class="px-2 py-1 bg-blue-300 hover:bg-blue-500 rounded"
      >
        Create Trigger
      </button>
    </div>
    <ExceptionViewer :exceptions="getExceptions" />
    <div
      class="w-full bg-green-300 p-4 rounded-lg flex items-center text-white ease-in-out"
      v-if="showSuccess.value"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      Trigger Created
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useTriggers } from "../../store/triggerStore";
import exceptionFormatter from "../../helpers/exceptionFormatter";
import ExceptionViewer from "../Exceptions/ExceptionViewer.vue";

const props = defineProps({
  id: String,
});
// 'name' => ['required'],
// 'description' => ['required'],
// 'wire' => ['required', 'gte:1', 'lte:10', 'integer'],
// 'trigger_voltage' => ['required'],
// 'device_id' => ['required'],

const triggerName = ref("");
const triggerDescription = ref("");
const triggerWire = ref(1);
const triggerVoltage = ref(false);
const showSuccess = ref(false);
const exception = ref([]);
const emailNotification = ref(false);

const triggerStore = useTriggers();

function createTrigger() {
  showSuccess.value = false;
  triggerStore
    .createTrigger(props.id, {
      name: triggerName.value,
      description: triggerDescription.value,
      wire: triggerWire.value,
      trigger_voltage: triggerVoltage.value,
      device_id: props.id,
      email_notify: emailNotification.value,
    })
    .then((response) => {
      if ((response.response.status = !undefined)) {
        exception.value = [response.response.data.errors];
        return;
      }
      showSuccess.value = true;
    });
}

const getExceptions = computed(() => {
  return exceptionFormatter(exception.value);
});
</script>

<style></style>
