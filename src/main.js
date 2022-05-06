import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { projectAuth, onAuthStateChanged } from "./firebase/config";

let app;

onAuthStateChanged(projectAuth, () => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
