<template>
  <div>
    <div v-if="dashboardRoute">
      <DashboardNav>
        <router-view />
      </DashboardNav>
    </div>
    <div v-else-if="loginOrRegisterRoute">
      <router-view />
    </div>
    <div v-else>
      <HomeNav>
        <router-view />
      </HomeNav>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "./router/routes";
import DashboardNav from "./components/Navs/DashboardNav.vue";
import HomeNav from "./components/Navs/HomeNav.vue";

const dashboardRoute = computed(() => {
  if (router.currentRoute.value.meta.requiresAuth) return true;
  else return false;
});

const loginOrRegisterRoute = computed(() => {
  if (["login", "register"].includes(router.currentRoute.value.name))
    return true;
  else return false;
});
</script>
