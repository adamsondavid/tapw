import "./main.css";
import { createApp } from "vue";
import App from "./app.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home-page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/:path(.*)*", redirect: "/" },
  ],
});

createApp(App).use(router).mount("#app");
