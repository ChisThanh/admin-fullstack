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

const isPasswordVisible = ref(false);

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
const form = ref({
  email: "chisthanhdev@gmail.com",
  password: "12345678",
  remember: true,
});

const rules = {
  email: [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  password: [
    (v) => !!v || "Password is required",
    (v) => (v && v.length >= 8) || "Password must be greater than 8 characters",
  ],
};

const validate = async () => {
  isLoading.value = true;
  const { valid } = await formRef.value.validate();
  if (valid) {
    await authStore.handleLogin(form.value);
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
              Login
            </VCardTitle>
          </VCardItem>

          <VCardText class="pt-2">
            <h5 class="text-h5 font-weight-semibold mb-1">
              Welcome to the admin page! 👋🏻
            </h5>
            <p class="mb-0">
              Please sign-in to your account and start the adventure
            </p>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent ref="formRef" validate-on="submit">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.email"
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

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.password"
                    label="Password"
                    :rules="rules.password"
                    placeholder="············"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="
                      isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'
                    "
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                  <div
                    v-if="authStore.authErrors.password"
                    class="v-input__details"
                  >
                    <div
                      class="v-messages__message text-error"
                      style="padding: 6px 16px 0px"
                    >
                      {{ authStore.authErrors.password[0] }}
                    </div>
                  </div>
                  <!-- remember me checkbox -->
                  <div
                    class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
                  >
                    <VCheckbox v-model="form.remember" label="Remember me" />

                    <router-link
                      to="/forgot-password"
                      class="ms-2 mb-1 text-primary"
                    >
                      Forgot Password?
                    </router-link>
                  </div>

                  <!-- login button -->
                  <VBtn
                    block
                    type="submit"
                    @click="validate"
                    :loading="isLoading"
                  >
                    Login
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
    </div>
  </v-app>
</template>
