<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="navStore.toggleDrawer()"
        class="d-lg-none d-block"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Admin Manager</v-app-bar-title>

    <v-btn icon color="primary">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon id="menu-profile" color="primary">
      <v-icon>mdi-home-account</v-icon>
    </v-btn>

    <v-menu activator="#menu-profile">
      <v-list>
        <v-list-item title="Profile" to="/admin/profile">
          <template v-slot:prepend>
            <v-icon icon="mdi-account"></v-icon>
          </template>
        </v-list-item>

        <template v-if="!authStore.authUser">
          <v-list-item title="Login" to="/login">
            <template v-slot:prepend>
              <v-icon icon="mdi-login"></v-icon>
            </template>
          </v-list-item>
          <v-list-item title="Register" to="/register">
            <template v-slot:prepend>
              <v-icon icon="mdi-account-plus"></v-icon>
            </template>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item title="Logout" @click="authStore.handleLogout()">
            <template v-slot:prepend>
              <v-icon icon="mdi-logout"></v-icon>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>

  <navigation-drawer-view />

  <v-main>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
</template>

<script setup>
import { useNavStore } from "@/stores/nav";

import { useAuthStore } from "@/stores/auth";

import NavigationDrawerView from "./components/NavigationDrawerView.vue";
import { onMounted, watchEffect } from "vue";

const authStore = useAuthStore();
const navStore = useNavStore();

onMounted(() => {
  if (window.innerWidth <= 1280) {
    navStore.drawer = false;
  } else {
    navStore.drawer = true;
  }
});

watchEffect(() => {
  if (window.innerWidth <= 1280) {
    navStore.drawer = false;
  } else {
    navStore.drawer = true;
  }
});

watchEffect;
</script>
