<template>
  <div>
    <form
      @submit.prevent="createDevice"
      class="p-4 border space-y-2 rounded m-3 md:border md:shadow"
    >
      <input
        class="p-2 border rounded w-full"
        type="text"
        v-model="formData.deviceName"
        placeholder="Device Name"
      />
      <input
        class="p-2 border rounded w-full"
        type="text"
        v-model="formData.deviceSite"
        placeholder="Device Site"
      />
      <div class="flex justify-end mt-2 items-center">
        <svg
          v-if="isLoading"
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

        <input
          :disabled="props.state.isDeviceConfigured"
          type="submit"
          value="Create Device"
          class="p-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 rounded"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue-demi";
import { useDevice } from "../../../../store/deviceStore";

const emit = defineEmits(["device-created"]);

const props = defineProps({
  state: Object,
});

const formData = reactive({
  deviceName: "",
  deviceSite: "",
  loading: false,
});

const deviceStore = useDevice();

const isLoading = computed(() => {
  return props.state.isResponseLoading;
});

async function createDevice() {
  formData.loading = !formData.loading;
  deviceStore
    .createDevice({
      name: formData.deviceName,
      site: formData.deviceSite,
    })
    .then(() => {
      emit(
        "device-created",
        deviceStore.devices[deviceStore.devices.length - 1].id
      );
    })
    .catch((e) => {
      console.log(e);
    });
  formData.loading = !formData.loading;
}
</script>
