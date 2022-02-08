<template>
  <div class="flex items-center w-full justify-center">
    <div class="sm:border-2 sm:border-gray-200 p-6 rounded sm:shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-72 aspect-square text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div class="flex items-center justify-center text-2xl text-green-400">
        Device Created!
      </div>
      <div class="flex items-center w-full justify-center">
        <button
          class="mt-3 p-3 rounded bg-gray-200 hover:bg-gray-300 text-gray-600"
          v-on:click="$router.push('/dashboard')"
        >
          Go To Dashboard
        </button>
      </div>
    </div>
  </div>
</template>
