<template>
  <footer class="bg-transparent fixed inset-x-0 bottom-0 p-4">
    <!-- Positioning -->
    <div
      class="transform origin-bottom-right scale-110"
      :class="{ hidden: !showDropdown }"
    >
      <!-- Box -->
      <div
        class="absolute right-0 -bottom-full mb-1 border rounded shadow bg-white"
      >
        <!-- Items For the List -->
        <div class="space-y-3 p-2">
          <a
            href="/create/device"
            class="text-sm p-2 rounded flex items-center text-gray-600 space-x-1 hover:bg-gray-300 cursor-pointer"
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Add New Device</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Button to show buttons -->
    <div class="flex justify-end items-center">
      <button
        v-on:click="changeDropdown"
        class="text-white w-14 h-14 rounded-full flex justify-center items-center bg-blue-400 shadow"
      >
        <AddOutlined />
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import AddOutlined from "../Icons/AddOutlined.vue";

const showDropdown = ref(false);

function changeDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<style></style>
