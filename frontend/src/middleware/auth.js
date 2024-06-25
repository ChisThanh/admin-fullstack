import { useAuthStore } from "@/stores/auth";

let getUserCalled = false;

const authMiddleware = async (to, from, next) => {
  const authStore = useAuthStore();

  try {
    if (!getUserCalled || authStore.authUser === null) {
      await authStore.getUser();
      getUserCalled = true;
    }

    const isAuthenticated = authStore.authUser !== null;

    if (!isAuthenticated && to.path !== "/login") {
      next("/login");
    } else {
      next();
    }
  } catch (error) {
    console.error("Error in authMiddleware:", error);
    next("/login");
  }
};

export default authMiddleware;
