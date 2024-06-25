import vuetify from "./vuetify";
import router from "@/router";
import { createPinia } from "pinia";
import axios from "axios";
import { markRaw } from "vue";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

export function registerPlugins(app) {
  app.use(vuetify).use(pinia).use(router);
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;
  axios.defaults.baseURL = "http://localhost:8000";
}
