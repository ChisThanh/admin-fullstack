<template>
  <v-navigation-drawer v-model="navStore.drawer">
    <v-list nav v-model:opened="open">
      <v-list-item
        v-for="item in navItems"
        :key="item.text + item.url"
        :value="item.text"
        color="primary"
        rounded="shaped"
        :title="item.text"
        :to="item.url ?? ''"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
      </v-list-item>

      <custom-list-group-item
        parent-text="Products"
        parent-icon="mdi-folder"
        :items="navProducts"
      />

      <custom-list-group-item
        parent-text="Brands"
        parent-icon="mdi-cart-arrow-down"
        :items="navBrands"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useNavStore } from "@/stores/nav";

import CustomListGroupItem from "./CustomListGroupItem.vue";

const navStore = useNavStore();

const open = ref([]);

const navItems = [
  { text: "Dashboard", icon: "mdi-view-dashboard", url: "/admin/dashboard" },
  { text: "Order", icon: "mdi-cart-arrow-right", url: "/admin/orders" },
  { text: "Users", icon: "mdi-account-multiple", url: "/admin/users" },
  { text: "Chats", icon: "mdi-chat", url: "/admin/chats" },
];

const navProducts = [
  { text: "View Products", icon: "mdi-information" },
  { text: "Create product", icon: "mdi-account-multiple" },
];

const navBrands = [
  { text: "My Files2", icon: "mdi-information" },
  { text: "Shared with me2", icon: "mdi-account-multiple" },
];
</script>

<style lang="scss" scoped></style>
