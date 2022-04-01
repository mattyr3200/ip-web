<template>
  <div>
    <nav>
      <div
        class="space-y-1 md:space-y-0 shadow-lg md:shadow-none m-2 md:m-0 rounded-lg md:flex md:items-center md:justify-between md:py-2 p-4 md:px-6"
      >
        <!-- Mobile Menu -->
        <div class="w-full md:w-8 flex justify-between">
          <img src="../../assets/logo.png" class="h-8 w-8" alt="" />
          <button class="md:hidden" v-on:click="showNavList">
            <HamburgerOutlined :class="{ hidden: !navVisible }" />
            <CrossOutline :class="{ hidden: navVisible }" />
          </button>
        </div>

        <!-- Clickable Links
        <a
          href="#"
          :class="{ 'hidden md:block': navVisible }"
          class="block mt-2 md:mt-0 transition-colors duration-200 hover:bg-slate-300 p-4 rounded"
          >Home</a
        >
        <a
          href="#"
          :class="{ 'hidden md:block': navVisible }"
          class="block transition-colors duration-200 hover:bg-slate-300 p-4 rounded"
          >About</a
        >
        <a
          href="#"
          :class="{ 'hidden md:block': navVisible }"
          class="block transition-colors duration-200 hover:bg-slate-300 p-4 rounded"
          >Pricing</a
        >
        <a
          href="#"
          :class="{ 'hidden md:block': navVisible }"
          class="block transition-colors duration-200 hover:bg-slate-300 p-4 rounded"
          >Products</a
        > -->

        <!-- Login and Register Buttons -->
        <div
          :class="{ 'hidden md:flex': navVisible }"
          class="md:flex space-y-1 md:space-y-0 md:space-x-2 md:items-center"
        >
          <a
            href="/login"
            class="block p-4 md:p-2 rounded transition-colors duration-200 bg-slate-300 md:hover:bg-slate-300 md:bg-transparent hover:bg-slate-400"
            >Login</a
          >
          <a
            href="/register"
            class="block p-4 md:mt-0 md:p-3 text-white rounded transition-colors duration-200 hover:bg-blue-500 bg-blue-400"
            >Register</a
          >
        </div>
      </div>
    </nav>

    <div class="">
      <!-- Content Slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HamburgerOutlined from "../Icons/HamburgerOutlined.vue";
import CrossOutline from "../Icons/CrossOutline.vue";

const navVisible = ref(false);

function showNavList() {
  navVisible.value = !navVisible.value;
}
</script>
