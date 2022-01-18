import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePages/HomePage.vue";
import LoginScreen from "../components/Auth/LoginScreen.vue";
import RegisterScreen from "../components/Auth/RegisterScreen.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if ((to.meta?.requiresAuth ?? false) && !isAuthenticated())
    next({ name: "home" });
  else if (to.name === "login" && isAuthenticated())
    next({ name: from?.name ?? "home" });
  else next();
});

export default router;
