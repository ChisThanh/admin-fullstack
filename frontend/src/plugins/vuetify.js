import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components/VBtn";
import defaults from "./defaults";
import { themes } from "./theme";

export default function (app) {
  const vuetify = createVuetify({
    aliases: {
      IconBtn: VBtn,
    },
    defaults,
    theme: {
      defaultTheme: "light",
      themes,
    },
  });

  app.use(vuetify);
}
