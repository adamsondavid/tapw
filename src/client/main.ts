import { createApp } from "vue";
import App from "./app.vue";
import { initServer } from "./composables/server";

createApp(App).use(initServer()).mount("#app");
