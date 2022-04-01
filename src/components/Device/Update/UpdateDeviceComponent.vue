<template>
  <div class="border rounded p-6 space-y-2 h-full">
    <div>
      <label for="name">Device Name</label>
      <input
        class="border p-2 w-full"
        type="text"
        name="name"
        id="name"
        v-model="deviceName"
      />
    </div>
    <div>
      <label for="name">Device Site</label>
      <input
        class="border p-2 w-full"
        type="text"
        name="site"
        id="site"
        v-model="deviceSite"
      />
    </div>
    <div class="flex justify-end items-end">
      <button
        v-on:click="updateDevice"
        class="px-2 py-1 bg-blue-300 hover:bg-blue-500 rounded"
      >
        Update Device
      </button>
    </div>
    <div
      class="w-full bg-green-300 p-4 rounded-lg flex items-center text-white ease-in-out"
      v-if="showSuccess"
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
      Device Updated!
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDevice } from "../../../store/deviceStore";

const props = defineProps({
  id: String,
});
const deviceStore = useDevice();

const deviceFiltered = deviceStore.devices.filter((device) => {
  return device.id === props.id;
});

const deviceName = ref(
  deviceFiltered.length === 0 ? "" : deviceFiltered[0].name
);
const deviceSite = ref(
  deviceFiltered.length === 0 ? "" : deviceFiltered[0].site
);
const showSuccess = ref(false);

async function updateDevice() {
  showSuccess.value = false;
  await deviceStore
    .updateDevice(props.id, {
      name: deviceName.value,
      site: deviceSite.value,
    })
    .then(() => {
      showSuccess.value = true;
    });
}
</script>

<style></style>
