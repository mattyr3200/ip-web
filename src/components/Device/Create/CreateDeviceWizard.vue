<template>
  <div class="space-y-2">
    <StepCounterComponent :state="state" />

    <component
      :is="stepComponent"
      :state="state"
      @connect-device="connectBluetooth"
      @disconnect-device="manualDeviceDisconnect"
      @device-created="sendDeviceIdToDevice"
      @attempt-connection="connectBLEDeviceToWifi"
    />

    <div
      class="flex items-center justify-between"
      :class="{ hidden: state.step === 4 }"
    >
      <button
        class="p-2 border rounded flex items-center space-x-1 disabled:bg-gray-200"
        :disabled="state.step === 1"
        @click="previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <p>Previous</p>
      </button>
      <button
        class="p-2 border rounded flex items-center space-x-1 disabled:bg-gray-200"
        :disabled="stepDisabled"
        @click="next"
      >
        <p>Next</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, reactive } from "vue";
import sleep from "../../../helpers/sleep";
import decodeValue from "../../../helpers/decodeValue";
import encodeValue from "../../../helpers/encodeValue";
import BLEResponseCommands from "../../../enums/BLECommandsEnum";
import StepCounterComponent from "./StepCounterComponent.vue";

const state = reactive({
  step: 1,
  device: {},
  server: {},
  service: {},
  rxCharacteristic: {},
  isWifiConnected: false,
  isDeviceConfigured: false,
  isResponseLoading: false,
  lastBLEResponse: "",
});

const stepDisabled = computed(() => {
  if (state.step === 1 && state.device.id === undefined) return true;
  if (state.step === 2 && state.isWifiConnected) return true;
  if (state.step === 3 && state.isDeviceConfigured) return true;
  return false;
});

async function connectBLEDeviceToWifi(values) {
  state.isResponseLoading = true;

  await sendValueToDevice(
    JSON.stringify({
      ssid: values.username,
      password: values.password,
    }),
    true
  );

  const response = await sendValueToDevice(
    JSON.stringify({
      ssid: values.username,
      password: values.password,
    })
  );

  if (response == BLEResponseCommands.WIFI_CONNECTED) {
    state.isWifiConnected = true;
    next();
  } else {
    state.isWifiConnected = false;
  }

  state.isResponseLoading = false;
}

async function sendDeviceIdToDevice(deviceId) {
  state.isResponseLoading = true;

  const response = await sendValueToDevice(
    JSON.stringify({
      device_id: deviceId,
    }),
    true
  );

  if (response === BLEResponseCommands.DEVICE_CONFIGURED) {
    state.isDeviceConfigured = true;
    next();
  }

  state.isResponseLoading = false;
}

// sending message to bluetooth device
async function sendValueToDevice(value = "", requiresSleep = false) {
  if (!deviceConnected.value) return "";

  await state.rxCharacteristic.writeValueWithResponse(encodeValue(value));

  if (requiresSleep) {
    await sleep(5000); // required to ensure ample time for response from BLE device.
  }

  const response = await state.rxCharacteristic.readValue(); // Read the "response"

  state.lastBLEResponse = decodeValue(response);

  return state.lastBLEResponse;
}

// connecting browser to web device
async function connectBluetooth() {
  try {
    state.device = await navigator.bluetooth.requestDevice({
      filters: [
        {
          name: "vision-alarm",
        },
      ],
      optionalServices: ["bb5e55a3-7618-4029-bf6f-8469784f4737"],
    });

    await state.device.addEventListener("gattserverdisconnected", () => {
      console.log("> Bluetooth Device disconnected");
      state.device = {};
      state.server = {};
      state.service = {};
      state.rxCharacteristic = {};
      state.step = 1;
    });

    state.server = await state.device.gatt.connect();

    state.service = await state.server.getPrimaryService(
      "bb5e55a3-7618-4029-bf6f-8469784f4737"
    );

    state.rxCharacteristic = await state.service.getCharacteristic(
      "bb5e55a4-7618-4029-bf6f-8469784f4737"
    );

    await sendValueToDevice("MODE CREATE").then((response) => {
      if (response != "ACK MODE: CREATE") {
        manualDeviceDisconnect();
      }
    });
  } catch (error) {
    console.log(error);
  }
}

const deviceConnected = computed(() => {
  return state.device && state.device.gatt.connected;
});

async function manualDeviceDisconnect() {
  console.log("Disconnecting from Bluetooth Device...");
  if (deviceConnected.value) {
    await state.device.gatt.disconnect();
  }
  state.device = {};
}

const stepComponent = computed(() => {
  state.step;
  return defineAsyncComponent(() =>
    import(`./WizardSteps/WizardStep${state.step}.vue`)
  );
});

function next() {
  state.step++;
}

function previous() {
  state.step--;
}
</script>
