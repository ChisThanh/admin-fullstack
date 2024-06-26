<script setup>
import { useTheme } from "vuetify";
import logo from "@/assets/images/logo.svg?raw";
import authV1MaskDark from "@/assets/images/pages/auth-v1-mask-dark.png";
import authV1MaskLight from "@/assets/images/pages/auth-v1-mask-light.png";
import authV1Tree2 from "@/assets/images/pages/auth-v1-tree-2.png";
import authV1Tree from "@/assets/images/pages/auth-v1-tree.png";
import "@/styles/icons.css";

import { useAuthStore } from "@/stores/auth";
import { onUnmounted, ref } from "vue";

const authStore = useAuthStore();

const vuetifyTheme = useTheme();

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === "light"
    ? authV1MaskLight
    : authV1MaskDark;
});

const { global } = useTheme();

const authProviders = [
  {
    icon: "bxl-facebook",
    color: "#4267b2",
    colorInDark: "#4267b2",
  },
  {
    icon: "bxl-github",
    color: "#272727",
    colorInDark: "#fff",
  },
  {
    icon: "bxl-google",
    color: "#db4437",
    colorInDark: "#db4437",
  },
];

const isLoading = ref(false);
const formRef = ref(null);
const dialog = ref(false);
const form = ref("chisthanhdev@gmail.com");

const rules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];
const validate = async () => {
  isLoading.value = true;
  const { valid } = await formRef.value.validate();
  if (valid) {
    await authStore.handleForgotPassword(form.value);
    dialog.value = true;
  } else {
    console.log("Form is invalid");
  }

  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

onUnmounted(() => {
  authStore.authErrors = [];
});
</script>

<template>
  <v-app>
    <div class="layout-blank">
      <div class="auth-wrapper d-flex align-center justify-center pa-4">
        <VCard class="auth-card pa-4 pt-7" max-width="448">
          <VCardItem class="justify-center">
            <template #prepend>
              <div class="d-flex">
                <div v-html="logo" />
              </div>
            </template>

            <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
              Forgot Password
            </VCardTitle>
          </VCardItem>

          <VCardText class="pt-2">
            <h5 class="text-h5 font-weight-semibold mb-1">
              Welcome to the admin page! 👋🏻
            </h5>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent ref="formRef" validate-on="submit">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="form"
                    label="Email"
                    type="email"
                    :rules="rules.email"
                  />
                  <div
                    v-if="authStore.authErrors.email"
                    class="v-input__details"
                    style="padding: 6px 16px 0px"
                  >
                    <div class="v-messages__message text-error">
                      {{ authStore.authErrors.email[0] }}
                    </div>
                  </div>
                </VCol>
                <VCol cols="12">
                  <VBtn
                    block
                    type="submit"
                    @click="validate"
                    :loading="isLoading"
                  >
                    Send Mail
                  </VBtn>
                </VCol>
                <!-- create account -->
                <VCol cols="12" class="text-center text-base">
                  <span>New on our platform?</span>
                  <RouterLink class="text-primary ms-2" to="/register">
                    Create an account
                  </RouterLink>
                </VCol>

                <VCol cols="12" class="d-flex align-center">
                  <VDivider />
                  <span class="mx-4">or</span>
                  <VDivider />
                </VCol>

                <!-- auth providers -->
                <VCol cols="12" class="text-center">
                  <VBtn
                    v-for="link in authProviders"
                    :key="link.icon"
                    :icon="link.icon"
                    variant="text"
                    :color="
                      global.name.value === 'dark'
                        ? link.colorInDark
                        : link.color
                    "
                  />
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>

        <VImg
          class="auth-footer-start-tree d-none d-md-block"
          :src="authV1Tree"
          :width="250"
        />

        <VImg
          :src="authV1Tree2"
          class="auth-footer-end-tree d-none d-md-block"
          :width="350"
        />

        <!-- bg img -->
        <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
      </div>

      <v-dialog v-model="dialog" width="auto">
        <v-card
          color="success"
          max-width="400"
          prepend-icon="mdi-bell"
          text="We have emailed your password reset link."
          title="Notification"
        >
          <template v-slot:actions>
            <v-btn
              class="ms-auto"
              text="Ok"
              color="white"
              @click="dialog = false"
            ></v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
