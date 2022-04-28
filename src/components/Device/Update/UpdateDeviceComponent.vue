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
    <div class="flex justify-between items-end">
      <button
        v-on:click="toggleModal"
        class="px-2 py-1 bg-red-300 hover:bg-red-500 rounded"
      >
        Delete Device
      </button>
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

    <div v-if="showModal" class="w-full h-full">
      <div class="relative w-full h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            v-on:click="toggleModal"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="p-6 text-center">
            <svg
              class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Are you sure you want to delete this product?
            </h3>
            <button
              v-on:click="deleteDevice"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <button
              v-on:click="toggleModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
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
const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}

async function deleteDevice() {
  await deviceStore.deleteDevice(props.id);
}

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
