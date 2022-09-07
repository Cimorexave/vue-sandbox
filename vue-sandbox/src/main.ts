import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

//Environment Variables
import "dotenv/config";

createApp(App).use(store).use(router).mount("#app");
