import { defineStore } from "pinia";
import apiClient from "../api/api";

export const useTriggers = defineStore("trigger", {
  state: () => ({
    triggers: [],
  }),
  actions: {
    async createTrigger(deviceId, data) {
      try {
        await apiClient.post("/api/trigger", data).then((response) => {
          this.triggers[deviceId].push(response.data);
        });
      } catch (e) {
        return e;
      }
    },
    async getTriggers(deviceId) {
      await apiClient.get(`/api/${deviceId}/triggers`).then((response) => {
        this.triggers[deviceId] = response.data;
      });
    },
    async deleteTrigger(triggerId, deviceId) {
      await apiClient.delete(`/api/trigger/${triggerId}`).then(() => {
        this.triggers[deviceId] = this.triggers[deviceId].filter((trigger) => {
          return trigger.id !== triggerId;
        });
      });
    },
  },
});
