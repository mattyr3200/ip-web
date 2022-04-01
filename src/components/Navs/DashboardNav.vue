<template>
  <div class="min-h-screen flex relative">
    <div
      class="z-10 absolute w-72 bg-slate-300 space-y-6 py-7 px-2 inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out"
      :class="{ '-translate-x-full': showSideBar }"
    >
      <!-- Top Logo -->
      <div class="flex items-center justify-between sticky top-4">
        <a
          href="/dashboard"
          class="text-gray-600 flex items-center space-x-2 px-4"
        >
          <img
            src="../../assets/logo.png"
            alt="Logo"
            lass="w-8 h-8"
            height="25"
            width="25"
          />
          <span class="text-2xl font-extrabold">Vision</span>
        </a>

        <!-- X -->
        <button v-on:click="updateShowSidebar" class="md:hidden">
          <CrossOutline />
        </button>
      </div>

      <!-- Links -->
      <nav class="sticky top-16 space-y-1">
        <!-- Home Button -->
        <a
          href="/dashboard"
          class="flex py-3 px-2 rounded hover:bg-gray-400 transition-colors duration-150 space-x-2"
          :class="{
            'bg-gray-400': $router.currentRoute.value.name === 'dashboard',
          }"
        >
          <HomeOutlined />
          <p>Home</p>
        </a>

        <!-- About Button -->
        <!-- <a
          href="/about"
          class="flex py-3 px-2 rounded hover:bg-gray-400 transition-colors duration-150 space-x-2"
          :class="{
            'bg-gray-400': $router.currentRoute.value.name === 'about',
          }"
        >
          <InfoOutlined />
          <p>About</p>
        </a> -->

        <!-- Settings Button -->
        <a
          href="#"
          class="flex py-3 px-2 rounded hover:bg-gray-400 transition-colors duration-150 space-x-2"
        >
          <CogOutlined />
          <p>Settings</p>
        </a>
      </nav>
    </div>

    <div class="w-full">
      <!-- Top Nav Bar -->
      <div
        class="z-20 h-16 w-full flex items-center justify-between md:justify-end md:sticky md:top-0"
      >
        <!-- Hamburger Icon -->
        <button class="px-2 md:hidden" v-on:click="updateShowSidebar">
          <HamburgerOutlined />
        </button>

        <div class="mt-4">
          <AccountDropdown />
        </div>
      </div>

      <div class="p-4">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AccountDropdown from "./AccountDropdown.vue";
import HomeOutlined from "../Icons/HomeOutlined.vue";
// import InfoOutlined from "../Icons/InfoOutlined.vue";
import CogOutlined from "../Icons/CogOutlined.vue";
import CrossOutline from "../Icons/CrossOutline.vue";
import HamburgerOutlined from "../Icons/HamburgerOutlined.vue";

const showSideBar = ref(false);

function updateShowSidebar() {
  showSideBar.value = !showSideBar.value;
}
</script>
