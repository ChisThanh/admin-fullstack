import { createRouter, createWebHistory } from "vue-router";
import Trans from "@/i18n/translation";
import adminRoutes from "./admin";

const routes = [
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
  {
    path: "/password-reset",
    redirect: "/login",
  },
  {
    path: "/password-reset/:token",
    name: "password-reset",
    component: () => import("@/pages/auth/PasswordReset.vue"),
  },
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  Trans.routeMiddleware(to, from, next);
});

export default router;
