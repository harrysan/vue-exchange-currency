// Supports weights 200-900
import "@fontsource-variable/mulish";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import router from "./router";
import store from "./store/index";

import BaseButton from "./components/ui/BaseButton.vue";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);

app.mount("#app");
