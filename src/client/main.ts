import "./main.css";
import { createApp } from "vue";
import App from "./app.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/:path(.*)*", redirect: "/" },
  ],
});

createApp(App).use(router).mount("#app");
