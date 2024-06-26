<template>
  <app-bar-view />
  <navigation-drawer-view />

  <v-main>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
</template>

<script setup>
import { useNavStore } from "@/stores/nav";

import NavigationDrawerView from "./components/NavigationDrawerView.vue";
import AppBarView from "./components/AppBarView.vue";
import { onMounted, watchEffect } from "vue";

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
