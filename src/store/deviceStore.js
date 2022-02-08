import { defineStore } from "pinia";
import apiClient from "../api/api";

export const useDevice = defineStore("device", {
  state: () => ({
    devices: [],
  }),
  actions: {
    async getDevices() {
      try {
        await apiClient.get("/api/device").then((response) => {
          this.devices = response.data;
        });
      } catch (e) {
        return e;
      }
    },

    async createDevice(data) {
      try {
        await apiClient.post("/api/device", data).then((response) => {
          this.devices.push(response.data);
        });
      } catch (e) {
        return e;
      }
    },

    async updateDevice(id, data) {
      try {
        await apiClient.put("/api/device/" + id, data).then((response) => {
          const deviceFiltered = this.devices.filter((device) => {
            return device.id === response.data.id;
          });

          const index = this.devices.indexOf(deviceFiltered[0]);

          this.devices[index] = response.data;
        });
      } catch (e) {
        return e;
      }
    },

    async deleteDevice(id) {
      try {
        await apiClient.delete("/api/device/" + id).then((response) => {
          const deviceFiltered = this.devices.filter((device) => {
            return device.id === response.data.id;
          });

          const index = this.devices.indexOf(deviceFiltered[0]);

          this.devices.splice(index, 1);
        });
      } catch (e) {
        return e;
      }
    },
  },
});
