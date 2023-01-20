import "@/assets/css/reset.css";

import App from "@/App.vue";
import "@/assets/css/animations.css";
import "@/assets/css/root.css";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import { createApp } from "vue";

createApp(App).use(store).use(router).mount("#app");
