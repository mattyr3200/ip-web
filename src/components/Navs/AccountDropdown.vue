<template>
  <div>
    <!-- Account Box -->
    <button
      class="flex items-center space-x-2 px-4 bg-gray-100 hover:bg-gray-200 py-2 mx-2 rounded"
      v-on:click="changeShowDropdown"
    >
      <img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        class="h-10 w-10 rounded-full"
        alt=""
      />
      <p>{{ user.username === "" ? "Loading..." : user.username }}</p>
      <CheveronDown />
    </button>

    <!-- Drop Down -->
    <div
      class="transform origin-top-right translate-y-2 scale-95 mr-2"
      :class="{ 'opacity-0 hidden': showDropdown }"
    >
      <div
        class="absolute right-0 w-56 bg-white border border-gray-200 rounded shadow"
      >
        <div class="px-4 py-3">
          <p class="text-sm leading-5">Signed in as</p>
          <p class="text-sm font-medium leading-5 text-gray-900 truncate">
            {{ user.email === "" ? "Loading..." : user.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUser } from "../../store/userStore";
import CheveronDown from "../Icons/CheveronDown.vue";

const user = useUser();

user.getUserInfo();

const showDropdown = ref(true);

function changeShowDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>
