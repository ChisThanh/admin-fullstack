<template>
  <v-list-group :value="parentText">
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        :title="parentText"
        color="primary"
        rounded="shaped"
      >
        <template v-slot:prepend>
          <v-icon :icon="parentIcon"></v-icon>
        </template>
      </v-list-item>
    </template>

    <v-divider></v-divider>
    <v-list-item
      v-for="item in items"
      :key="item.text"
      :value="item.text"
      color="primary"
      rounded="shaped"
      style="padding-inline-start: 10px !important"
      :to="item.url ?? ''"
    >
      <v-list-item-title>{{ item.text }}</v-list-item-title>
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>
    </v-list-item>

    <v-divider></v-divider>
  </v-list-group>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  parentText: {
    type: String,
    required: true,
  },
  parentIcon: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>
