<template>
  <div>
    <div
      class="grid place-items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <form
        @submit.prevent="register"
        class="m-4 space-y-4 md:p-4 md:shadow-lg md:rounded-lg md:bg-white w-full md:w-96"
      >
        <div class="flex justify-center w-full md:max-w-md">
          <img src="../../assets/logo.png" alt="logo" class="w-11 h-11" />
        </div>
        <h1 class="m-4 font-semibold text-white font-mono md:text-gray-600">
          Register
        </h1>
        <div class="relative m-4">
          <input
            id="username"
            v-model="username"
            type="text"
            required
            name="username"
            class="peer h-10 w-full border-b-2 border-gray-300 text-white md:text-gray-900 placeholder-transparent bg-transparent focus:outline-none valid:focus:border-blue-600"
            placeholder="username"
          />
          <label
            for="username"
            class="absolute left-0 -top-3.5 text-white md:text-gray-600 text-sm transition-all md:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 md:peer-focus:text-gray-600 peer-focus:text-gray-200 peer-focus:text-sm"
            >Username</label
          >
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
            required
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
          <PasswordStrengthIndicatorVue :score="passwordStrength" />
        </div>
        <div class="relative m-4">
          <input
            id="c_password"
            required
            v-model="confirmedPassword"
            type="password"
            name="c_password"
            class="peer h-10 w-full border-b-2 border-gray-300 text-white md:text-gray-900 placeholder-transparent bg-transparent focus:outline-none focus:border-blue-600"
            placeholder="Password"
          />
          <label
            for="c_password"
            class="absolute left-0 -top-3.5 text-white md:text-gray-600 text-sm transition-all md:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 md:peer-focus:text-gray-600 peer-focus:text-gray-200 peer-focus:text-sm"
            >Confirm Password</label
          >
        </div>
        <div class="flex justify-end m-4">
          <button
            type="submit"
            class="p-2 rounded-full pl-4 pr-4 border-blue-300 bg-white disabled:bg-blue-300 hover:bg-slate-300 disabled:md:bg-blue-300 md:bg-blue-600 md:hover:bg-blue-800 md:text-white"
          >
            Login
          </button>
        </div>
        <div
          class="p-2 border-2 border-red-500 bg-red-400 rounded shadow"
          v-if="getExceptions.length >= 1"
        >
          <p
            class="text-white flex"
            v-for="error in getExceptions"
            v-bind:key="error.id"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            {{ error }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PasswordStrengthIndicatorVue from "./PasswordStrengthIndicator.vue";
import zxcvbn from "zxcvbn";
import { useUser } from "../../store/userStore";
import { useAuth } from "../../store/authStore";
import exceptionFormatter from "../../helpers/exceptionFormatter";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmedPassword = ref("");

const exception = ref([]);

const user = useUser();
const auth = useAuth();

async function register() {
  exception.value = [];
  if (!(passwordStrength.value >= 3))
    exception.value.push(["Password must be stronger"]);
  if (!passwordsMatch.value) exception.value.push(["Passwords must match"]);
  if (exception.value.length >= 1) return;

  await auth
    .register(username.value, email.value, password.value)
    .then(async () => {
      if ((response.response.status = !undefined)) {
        exception.value.push([response.response.data.errors]);
        return;
      }
      await user.getUserInfo();
    });
}

const passwordStrength = computed(() => {
  return zxcvbn(password.value).score;
});

const passwordsMatch = computed(() => {
  return password.value === confirmedPassword.value;
});

const getExceptions = computed(() => {
  return exceptionFormatter(exception.value);
});
</script>
