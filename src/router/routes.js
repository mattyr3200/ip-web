import { createRouter, createWebHistory } from "vue-router";
import TestComponent from "../components/TestComponent.vue";
import LoginScreen from "../screens/LoginScreen.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TestComponent,
    },
    {
      path: "/login",
      component: LoginScreen,
    },
  ],
});
