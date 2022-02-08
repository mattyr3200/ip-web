<template>
  <div class="flex items-center justify-center p-4">
    <button
      v-on:click="connectToDevice"
      class="border shadow rounded p-4 hover:bg-gray-200"
      v-if="props.state.device.id === undefined"
    >
      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-60 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
      <div class="flex items-center justify-center">
        Click here to connect to device.
      </div>
    </button>
    <div v-else class="flex h-fulljustify-center p-4 border rounded m-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-60 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
      <div>
        <div class="block">
          <p class="font-medium">Device Details:</p>
          <p>
            Name:
            <span class="text-gray-400">{{
              props.state.device.name ?? "Unknown"
            }}</span>
          </p>
          <p>
            Device Connection Status:
            <span class="text-green-300">Connected</span>
          </p>
        </div>
        <div class="flex justify-end items-end mt-4">
          <button
            class="p-2 px-4 bg-red-300 rounded hover:bg-red-500"
            v-on:click="disconnectFromDevice"
          >
            Disconnect Device
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  state: Object,
});

const emit = defineEmits(["connect-device", "disconnect-device"]);

function connectToDevice() {
  emit("connect-device");
}

function disconnectFromDevice() {
  emit("disconnect-device");
}
</script>
