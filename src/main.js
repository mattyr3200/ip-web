import { createApp } from "vue";
import App from "./App.vue";
import "./styles/app.css";
import router from "./router/routes";
import getCookie from "./api/csrf";
import { createPinia } from "pinia";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

getCookie();

createApp(App).use(router).use(createPinia()).mount("#app");
