import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePages/HomePage.vue";
import LoginScreen from "../components/Auth/LoginScreen.vue";
import RegisterScreen from "../components/Auth/RegisterScreen.vue";
import DashboardScreen from "../components/Dashboard/DashboardScreen.vue";
import CreateDeviceScreen from "../components/Device/Create/CreateDeviceScreen.vue";

import DeviceSettingsScreen from "../components/Device/settings/DeviceSettingsScreen.vue";
import isAuthenticated from "../helpers/authenticated";

/**
 * requiresAuth: Determine whether a user should be logged in to access the route
 */
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    component: LoginScreen,
    name: "login",
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    component: RegisterScreen,
    name: "register",
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    component: DashboardScreen,
    name: "dashboard",
    meta: { requiresAuth: true },
  },
  {
    path: "/create/device",
    component: CreateDeviceScreen,
    name: "createDevice",
    meta: { requiresAuth: true },
  },
  {
    path: "/device/:id/settings",
    component: DeviceSettingsScreen,
    name: "deviceSettings",
    meta: { requiresAuth: true },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if ((to.meta?.requiresAuth ?? false) && !isAuthenticated())
    next({ name: "home" });
  else if (["login", "register"].includes(to.name) && isAuthenticated())
    next({ name: from?.name ?? "dashboard" });
  else next();
});

export default router;
