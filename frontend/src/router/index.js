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
      component: () => import("@/pages/auth/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/pages/auth/Register.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("@/pages/auth/ForgotPassword.vue"),
    },
    { path: "/password-reset", redirect: "/login" },
    {
      path: "/password-reset/:token",
      name: "password-reset",
      component: () => import("@/pages/auth/PasswordReset.vue"),
    },
    ...admin,
  ],
});

export default router;
