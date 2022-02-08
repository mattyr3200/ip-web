<template>
  <div class="flex items-center justify-center p-4">
    <form
      @submit.prevent="attemptConnection"
      class="space-y-2 p-4 rounded md:border md:shadow w-{28rem}"
    >
      <p class="text-lg font-bold">WIFI Details</p>
      <div>
        <label for="ssid">Wifi Name/ SSID</label>
        <input
          type="text"
          placeholder="SSID"
          name="ssid"
          v-model="username"
          class="p-2 border rounded w-full"
        />
      </div>

      <div>
        <label for="password">Wifi Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          v-model="password"
          class="p-2 border rounded w-full"
        />
      </div>

      <div class="flex items-center justify-end">
        <svg
          v-if="waitingOnResponse"
          class="animate-spin mr-1 h-5 w-5 text-fuchsia-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <CrossOutline class="text-red-500" v-else-if="!validForm" />

        <!-- tick -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-green-300"
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

        <button
          type="submit"
          class="p-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 rounded"
          :disabled="!validForm"
        >
          Connect Device to Wifi
        </button>
      </div>
      <div
        v-if="wifiFailedConnection"
        class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
        role="alert"
      >
        <span class="font-medium">WIFI Connection failed!</span> Please update
        details and try again.
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import BLEResponseCommands from "../../../../enums/BLECommandsEnum";
import CrossOutline from "../../../Icons/CrossOutline.vue";

const props = defineProps({
  state: Object,
});

const username = ref("");
const password = ref("");

const emit = defineEmits(["attempt-connection"]);

const validForm = computed(() => {
  if (username.value != "") return true;
  else return false;
});

const waitingOnResponse = computed(() => {
  return props.state.isResponseLoading;
});

const wifiFailedConnection = computed(() => {
  props.state.lastBLEResponse;
  return props.state.lastBLEResponse === BLEResponseCommands.WIFI_ERROR;
});

function attemptConnection() {
  emit("attempt-connection", {
    username: username.value,
    password: password.value,
  });
}
</script>
