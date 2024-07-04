import { createRouter, createWebHistory } from "vue-router";

import Exchange from "./pages/exchange/ExchangeCurrency.vue";
import Feedback from "./pages/feedback/FeedBack.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/exchange" },
    { path: "/exchange", component: Exchange },
    { path: "/feedback", component: Feedback },
  ],
});

export default router;
