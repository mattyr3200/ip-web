<template>
  <div
    class="grid place-items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 -z-10"
  >
    <div class="m-4 space-y-2">
      <div class="flex justify-center w-full">
        <img src="../assets/logo.png" alt="logo" class="w-11 h-11" />
      </div>
      <input
        class="border-2 border-gray-400 w-full rounded-lg p-3 text-lg"
        type="text"
        v-model="email"
        placeholder="email"
        name="email"
      />
      <input
        class="border-2 border-gray-400 w-full rounded-lg p-3 text-lg"
        type="password"
        v-model="password"
        placeholder="password"
        name="password"
      />
      <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "../api/api";
import getCookie from "../api/csrf";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login: async () => {
      await getCookie();
      axios
        .post("/api/login", {
          email: "nbosco@example.net",
          password: "password",
        })
        .then((response) => {
          localStorage.setItem("user_token", response.data.token);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
