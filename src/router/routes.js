import { createRouter, createWebHashHistory } from "vue-router";
import TestComponent from "../components/TestComponent.vue";
import LoginScreen from "../components/Auth/LoginScreen.vue";
import RegisterScreen from "../components/Auth/RegisterScreen.vue";
import isAuthenticated from "../helpers/authenticated";

/**
 * requiresAuth: Determine whether a user should be logged in to access the route
 */

const routes = [
  {
    path: "/",
    component: TestComponent,
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
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if ((to.meta?.requiresAuth ?? false) && !isAuthenticated())
    next({ name: "home" });
  else if (to.name === "login" && isAuthenticated())
    next({ name: from?.name ?? "home" });
  else next();
});

export default router;
