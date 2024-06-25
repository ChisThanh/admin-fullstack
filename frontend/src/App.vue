<template>
  <v-layout>
    <router-view />
  </v-layout>
  <loading-view v-if="isLoading" />
</template>

<script setup>
import { useRouter } from "vue-router";
import LoadingView from "./layouts/components/LoadingView.vue";
const isLoading = ref(false);

const router = useRouter();

// router.afterEach(() => {
//   isLoading.value = true;
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 1000);
// });

router.beforeEach(() => {
  isLoading.value = true;
});

router.afterEach(async () => {
  const delayPromise = new Promise((resolve) => setTimeout(resolve, 1000));
  await Promise.all([delayPromise]);
  isLoading.value = false;
});
</script>
