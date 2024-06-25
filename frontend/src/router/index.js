import { createRouter, createWebHistory } from "vue-router/auto";
import admin from "./admin";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/admin",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/auth/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/pages/auth/register.vue"),
    },
    ...admin,
  ],
});

export default router;
