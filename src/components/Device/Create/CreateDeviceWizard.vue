<template>
  <div class="space-y-2">
    <div class="flex justify-between rounded-full">
      <div class="w-full flex items-center">
        <div
          :class="{
            'bg-green-300': state.step > 1,
            'bg-blue-300': state.step === 1,
          }"
          class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
        >
          1
        </div>
        <span
          :class="{
            'bg-blue-300': state.step > 1 && state.step <= 2,
            'bg-green-300': state.step > 2,
          }"
          class="hidden md:flex h-2 w-[80%] bg-gray-300 mx-auto rounded-full"
        ></span>
      </div>
      <div class="w-full flex items-center">
        <div
          :class="{
            'bg-green-300': state.step > 2,
            'bg-blue-300': state.step === 2,
          }"
          class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
        >
          2
        </div>
        <span
          :class="{
            'bg-blue-300': state.step > 2 && state.step <= 3,
            'bg-green-300': state.step > 2,
          }"
          class="hidden md:flex h-2 w-[80%] bg-gray-300 mx-auto rounded-full"
        ></span>
      </div>
      <div class="w-full flex items-center">
        <div
          :class="{
            'bg-green-300': state.step > 3,
            'bg-blue-300': state.step === 3,
          }"
          class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
        >
          3
        </div>
        <span
          :class="{ 'bg-green-300': state.step === 4 }"
          class="hidden md:flex h-2 w-[80%] bg-gray-300 mx-auto rounded-full"
        ></span>
      </div>
      <div>
        <div
          :class="{ 'bg-green-300': state.step === 4 }"
          class="text-white w-10 h-10 rounded-full flex justify-center items-center bg-gray-300 shadow"
        >
          4
        </div>
      </div>
    </div>

    <component
      :is="stepComponent"
      :state="state"
      @connect-device="connectBluetooth"
      @disconnect-device="manualDeviceDisconnect"
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

const state = reactive({
  step: 1,
  device: {},
  server: {},
  service: {},
  rxCharacteristic: {},
  isWifiConnected: false,
  isResponseLoading: false,
  lastBLEResponse: "",
});

const stepDisabled = computed(() => {
  if (state.step === 1 && state.device.id === undefined) return true;
  if (state.step === 2) return true;
  if (state.step === 3) return true;
  return false;
});

async function connectBLEDeviceToWifi(values) {
  state.isResponseLoading = true;

  const response = await sendValueToDevice(
    JSON.stringify({
      ssid: values.username,
      password: values.password,
    }),
    true
  ); // this requires the code to "sleep" to allow the arduino to try and connect to WIFI

  console.log(response);
  console.log(state.lastBLEResponse);

  if (response == BLEResponseCommands.WIFI_CONNECTED) {
    console.log("YAY");
    state.isWifiConnected = true;
    next();
  } else {
    console.log("WIFI FAILed");
    state.isWifiConnected = false;
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
