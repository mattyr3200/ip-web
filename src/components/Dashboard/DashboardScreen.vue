<template>
  <div>
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 gap-2"
      v-for="device in deviceStore.devices"
      :key="device.id"
    >
      <DeviceCardComponent />
    </div>
    <div
      v-if="deviceStore.devices.length === 0"
      class="flex items-center justify-center"
    >
      :( No devices yet
    </div>
    <DashboardFooterComponentVue />
  </div>
</template>

<script setup>
import { useDevice } from "../../store/deviceStore";
import DashboardFooterComponentVue from "./DashboardFooterComponent.vue";
import DeviceCardComponent from "./DeviceCardComponent.vue";

const deviceStore = useDevice();

deviceStore.getDevices();
</script>
