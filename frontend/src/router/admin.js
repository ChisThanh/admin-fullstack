import authMiddleware from "@/middleware/auth";
const admin = [
  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/dashboard",
    component: () => import("@/layouts/LayoutAdmin.vue"),
    beforeEnter: authMiddleware,
    children: [
      {
        path: "dashboard",
        name: "admin-dashboard",
        component: () => import("@/pages/admin/dashboard/index.vue"),
      },
      {
        path: "profile",
        name: "admin-profile",
        component: () => import("@/pages/admin/profiles/index.vue"),
      },
      {
        path: "users",
        name: "admin-users",
        component: () => import("@/pages/admin/users/index.vue"),
      },
      {
        path: "orders",
        name: "admin-orders",
        component: () => import("@/pages/admin/users/index.vue"),
      },
      {
        path: "chats",
        name: "admin-chats",
        component: () => import("@/pages/admin/users/index.vue"),
      },
    ],
  },
];

export default admin;
