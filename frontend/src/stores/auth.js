import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      this.getToken();
      const { data } = await axios.get("/api/user");
      this.authUser = data;
    },
    async handleLogin(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/login", data);
        this.router.push("/admin/dashboard");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },

    async handleRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/register", data);
        this.router.push("/admin/dashboard");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
      this.router.push("/login");
    },

    async handleForgotPassword(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/forgot-password", {
          email: data,
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handlePasswordReset(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/reset-password", data);
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
  },
});
