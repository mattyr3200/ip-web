<template>
  <div>
    <div
      class="grid place-items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <form
        @submit.prevent="login()"
        class="m-4 space-y-4 md:p-4 md:shadow-lg md:rounded-lg md:bg-white w-full md:w-96"
      >
        <div class="flex justify-center w-full md:max-w-md">
          <img src="../../assets/logo.png" alt="logo" class="w-11 h-11" />
        </div>
        <div class="relative m-4">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            class="peer h-10 w-full border-b-2 invalid:border-red-500 invalid:text-red-500 border-gray-300 text-white md:text-gray-900 placeholder-transparent bg-transparent focus:outline-none valid:focus:border-blue-600"
            placeholder="Email"
          />
          <label
            for="email"
            class="absolute left-0 -top-3.5 text-white md:text-gray-600 text-sm transition-all md:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-invalid:text-red-500 peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 md:peer-focus:text-gray-600 peer-focus:text-gray-200 peer-focus:text-sm"
            >Email</label
          >
        </div>
        <div class="relative m-4">
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            class="peer h-10 w-full border-b-2 border-gray-300 text-white md:text-gray-900 placeholder-transparent bg-transparent focus:outline-none focus:border-blue-600"
            placeholder="Password"
          />
          <label
            for="password"
            class="absolute left-0 -top-3.5 text-white md:text-gray-600 text-sm transition-all md:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 md:peer-focus:text-gray-600 peer-focus:text-gray-200 peer-focus:text-sm"
            >Password</label
          >
        </div>
        <div class="flex justify-end m-4">
          <button
            type="submit"
            class="p-2 rounded-full pl-4 pr-4 border-blue-300 bg-white hover:bg-slate-300 md:bg-blue-400 md:hover:bg-blue-600 md:text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import router from "../../router/routes";
import { ref } from "vue";
import apiClient from "../../api/api";

const email = ref("");
const password = ref("");

function login() {
  apiClient
    .post("/api/login", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      localStorage.setItem("user_token", response.data.token);
      router.push({ name: "dashboard" });
    })
    .catch((e) => {
      console.log(e);
    });
}
</script>
