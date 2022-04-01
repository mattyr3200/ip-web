import { defineStore } from "pinia";
import apiClient from "../api/api";

export const useTriggerLogs = defineStore("trigger_log", {
  state: () => ({
    triggerLogs: [],
    triggerWeeklySummary: [],
  }),
  actions: {
    async getTriggerLogs(deviceId) {
      await apiClient.get(`/api/${deviceId}/trigger/log`).then((response) => {
        this.triggerLogs[deviceId] = response.data;
      });
    },
    async getWeeklyTriggerSummary(deviceId) {
      await apiClient.get(`/api/${deviceId}/log/week`).then((response) => {
        this.triggerWeeklySummary[deviceId] = response.data;
      });
    },
  },
});
