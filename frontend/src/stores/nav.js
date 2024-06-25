import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
  state: () => ({
    drawer: true,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
