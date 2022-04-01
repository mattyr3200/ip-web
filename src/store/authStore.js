import { defineStore } from "pinia";
import apiClient from "../api/api";
import getCookie from "../api/csrf";
import router from "../router/routes";

export const useAuth = defineStore("auth", {
  actions: {
    async login(email, password) {
      try {
        await getCookie();
        await apiClient
          .post("/api/login", {
            email,
            password,
          })
          .then((response) => {
            // (response) => { console.log(response) },
            // (error) => { console.log(error) }
            localStorage.setItem("user_token", response.data.token);
            router.push({ name: "dashboard" });
          });
      } catch (error) {
        return error;
      }
    },

    async register(username, email, password) {
      await getCookie();
      await apiClient
        .post("/api/register", {
          username,
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem("user_token", response.data.token);
          router.push({ name: "dashboard" });
        })
        .catch((e) => {
          return e;
        });
    },

    // TODO: Implement logout on the API
    async logout() {
      await apiClient.get("/api/logout").catch((e) => {
        console.log(e);
      });
      localStorage.clear();
      router.push({ name: "home" });
    },
  },
});
