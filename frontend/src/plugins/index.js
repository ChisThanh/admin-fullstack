import vuetify from "./vuetify";
import router from "@/router";
import axios from "axios";
import i18n from "@/i18n";

import { createPinia } from "pinia";
import { markRaw } from "vue";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

export function registerPlugins(app) {
  app.use(vuetify).use(pinia).use(router).use(i18n);
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  axios.defaults.baseURL = "http://localhost:8000";
}
