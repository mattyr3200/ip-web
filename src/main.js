import { createApp } from "vue";
import App from "./App.vue";
import "./styles/app.css";
import router from "./router/routes";
import getCookie from "./api/csrf";

getCookie();

createApp(App).use(router).mount("#app");
