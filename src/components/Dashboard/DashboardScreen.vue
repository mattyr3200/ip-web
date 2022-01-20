<template>
  <div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      <DeviceCardComponent />
    </div>
    <DashboardFooterComponentVue />
  </div>
</template>

<script setup>
import DashboardFooterComponentVue from "./DashboardFooterComponent.vue";
import DeviceCardComponent from "./DeviceCardComponent.vue";
</script>
