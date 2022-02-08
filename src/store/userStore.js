import { defineStore } from "pinia";
import apiClient from "../api/api";

export const useUser = defineStore("user", {
  state: () => ({
    id: "",
    username: "",
    email: "",
  }),
  actions: {
    async getUserInfo() {
      try {
        await apiClient.get("/api/user").then((response) => {
          this.username = response.data.username;
          this.email = response.data.email;
          this.id = response.data.id;
        });
      } catch (e) {
        return e;
      }
    },
  },
});
