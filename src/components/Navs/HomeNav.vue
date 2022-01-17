<template>
  <div>
    <nav class="">
      <div
        class="shadow-lg md:shadow-none m-2 md:m-0 rounded-lg md:flex md:items-center md:justify-evenly md:py-2 p-4 md:px-6"
      >
        <div class="w-full md:w-8 flex justify-between">
          <img src="../../assets/logo.png" class="h-8 w-8" alt="" />
          <button class="md:hidden" v-on:click="showNavList">
            <HamburgerOutlined :class="{ hidden: !navVisible }" />
            <CrossOutline :class="{ hidden: navVisible }" />
          </button>
        </div>
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
        >
        <div class="hidden md:flex md:items-center">
          <a
            href="/login"
            class="rounded py-2 px-2 transition-colors duration-200 hover:bg-slate-300"
            >Login</a
          >
          <a
            href="/register"
            class="text-white py-3 px-3 rounded transition-colors duration-200 hover:bg-blue-500 bg-blue-400"
            >Register</a
          >
        </div>
      </div>
    </nav>

    <div>
      {{ navVisible }}
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
