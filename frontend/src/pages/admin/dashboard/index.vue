<template>
  <div class="">
    <h1 class="text-primary">Dashboard</h1>
    <VRow class="match-height">
      <VCol cols="12" md="4">
        <VCard elevation="4">
          <VCardText>
            <div class="mb-2">
              <h5 class="text-h6">
                Congratulations John! <span class="text-high-emphasis">🎉</span>
              </h5>
              <div class="text-body-2">Best seller of the month</div>
            </div>
            <h4 class="text-h4 text-primary">$42.8k</h4>
            <div class="text-body-1 mb-2">
              78% of target <span class="text-high-emphasis">🚀</span>
            </div>
            <VBtn size="small"> View Sales </VBtn>
          </VCardText>

          <!-- Trophy -->
          <VImg :src="trophy" class="trophy" />
        </VCard>
      </VCol>

      <VCol cols="12" md="8">
        <VCard title="Transactions" elevation="4">
          <template #subtitle>
            <p class="text-body-1 mb-0">
              <span class="d-inline-block font-weight-medium text-high-emphasis"
                >Total 48.5% Growth</span
              >
              <span class="text-high-emphasis">😎</span> this month
            </p>
          </template>

          <template #append>
            <IconBtn class="mt-n5">
              <VIcon color="high-emphasis" icon="mdi-dots-vertical" />
            </IconBtn>
          </template>

          <VCardText class="pt-10">
            <VRow>
              <VCol
                v-for="item in statistics"
                :key="item.title"
                cols="12"
                sm="6"
                md="3"
              >
                <div class="d-flex align-center ga-3">
                  <VAvatar
                    :color="item.color"
                    rounded
                    size="40"
                    class="elevation-2"
                  >
                    <VIcon size="24" :icon="item.icon" />
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <div class="text-body-1">
                      {{ item.title }}
                    </div>
                    <h5 class="text-h5">
                      {{ item.stats }}
                    </h5>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" md="4">
        <VCard elevation="4">
          <VCardItem>
            <VCardTitle>Weekly Overview</VCardTitle>

            <template #append>
              <div class="me-n3">
                <IconBtn>
                  <VIcon color="high-emphasis" icon="mdi-dots-vertical" />
                </IconBtn>
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <!-- <VueApexCharts
              type="bar"
              :options="options"
              :series="series"
              :height="200"
            /> -->

            <div class="d-flex align-center mb-5 gap-x-4">
              <h4 class="text-h4">45%</h4>
              <p class="mb-0">
                Your sales performance is 45%
                <span class="text-high-emphasis">😎</span> better compared to
                last month
              </p>
            </div>

            <VBtn block> Details </VBtn>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" md="4">
        <VCard elevation="4">
          <VCardItem>
            <VCardTitle>Total Earning</VCardTitle>

            <template #append>
              <div class="me-n3">
                <IconBtn>
                  <VIcon color="high-emphasis" icon="mdi-dots-vertical" />
                </IconBtn>
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <div class="d-flex align-center">
              <h3 class="text-h3">$24,895</h3>

              <VIcon size="24" icon="ri-arrow-up-s-line" color="success" />
              <div class="text-success">10%</div>
            </div>
            <div class="text-body-1 mb-12">Compared to $84,325 last year</div>

            <VList class="card-list">
              <VListItem v-for="earning in earnings" :key="earning.title">
                <template #prepend>
                  <VAvatar rounded :image="earning.avatar" variant="tonal" />
                </template>

                <VListItemTitle class="font-weight-medium">
                  {{ earning.title }}
                </VListItemTitle>
                <VListItemSubtitle class="text-body-1">
                  {{ earning.subtitle }}
                </VListItemSubtitle>

                <template #append>
                  <div>
                    <h6 class="text-h6 mb-2">
                      {{ earning.amount }}
                    </h6>
                  </div>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" md="4">
        <VRow class="match-height">
          <VCol cols="12" sm="6">
            <VCard elevation="4">
              <VCardText class="d-flex align-center">
                <VAvatar size="40" color="primary" class="elevation-2">
                  <VIcon icon="mdi-monitor" size="24" />
                </VAvatar>

                <VSpacer />

                <IconBtn class="mt-n5">
                  <VIcon color="high-emphasis" icon="mdi-dots-vertical" />
                </IconBtn>
              </VCardText>

              <VCardText>
                <h6 class="text-h6 mb-1">Total Profit</h6>

                <div class="d-flex align-center mb-1 flex-wrap">
                  <h4 class="text-h4 me-2">$25.6k</h4>
                  <div class="text-body-1 text-success">+42%</div>
                </div>
                <div class="text-body-2">Weekly Project</div>
              </VCardText>
            </VCard>
          </VCol>

          <VCol cols="12" sm="6">
            <VCard elevation="4">
              <VCardText class="d-flex align-center">
                <VAvatar size="40" color="primary" class="elevation-2">
                  <VIcon icon="mdi-monitor" size="24" />
                </VAvatar>

                <VSpacer />

                <IconBtn class="mt-n5">
                  <VIcon color="high-emphasis" icon="mdi-dots-vertical" />
                </IconBtn>
              </VCardText>

              <VCardText>
                <h6 class="text-h6 mb-1">Total Profit</h6>

                <div class="d-flex align-center mb-1 flex-wrap">
                  <h4 class="text-h4 me-2">$25.6k</h4>
                  <div class="text-body-1 text-success">+42%</div>
                </div>
                <div class="text-body-2">Weekly Project</div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" md="6">
        <VCard elevation="4">
          <VCardItem>
            <VCardTitle>Sales by Countries</VCardTitle>

            <template #append>
              <div class="me-n3">
                <IconBtn>
                  <VIcon color="high-emphasis" icon="mdi-dots-vertical" />
                </IconBtn>
              </div>
            </template>
          </VCardItem>

          <VCardText>
            <VList class="card-list">
              <VListItem v-for="data in salesByCountries" :key="data.country">
                <template #prepend>
                  <VAvatar :color="data.color" variant="tonal" size="40">
                    {{ data.abbr }}
                  </VAvatar>
                </template>

                <VListItemTitle class="mb-1 d-flex align-center">
                  <h6 class="text-h6">
                    {{ data.amount }}
                  </h6>
                  <VIcon
                    size="24"
                    :color="data.change.charAt(0) === '+' ? 'success' : 'error'"
                    class="mx-1"
                  >
                    {{
                      data.change.charAt(0) === "+"
                        ? "mdi-chevron-up"
                        : "mdi-chevron-down"
                    }}
                  </VIcon>
                  <div
                    :class="`${
                      data.change.charAt(0) === '+'
                        ? 'text-success'
                        : 'text-error'
                    }`"
                    class="text-body-1"
                  >
                    {{ data.change.slice(1) }}
                  </div>
                </VListItemTitle>

                <VListItemSubtitle class="text-body-1 me-2">
                  {{ data.country }}
                </VListItemSubtitle>

                <template #append>
                  <div>
                    <h6 class="text-h6 mb-1">
                      {{ data.sales }}
                    </h6>
                    <div class="text-body-2 text-disabled text-end">Sales</div>
                  </div>
                </template>
              </VListItem>
            </VList>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import trophy from "@images/misc/trophy.png";

const statistics = [
  {
    title: "Sales",
    stats: "245k",
    icon: "mdi-chart-arc",
    color: "primary",
  },
  {
    title: "Customers",
    stats: "12.5k",
    icon: "mdi-account-group",
    color: "success",
  },
  {
    title: "Product",
    stats: "1.54k",
    icon: "mdi-monitor",
    color: "warning",
  },
  {
    title: "Revenue",
    stats: "$88k",
    icon: "mdi-currency-usd",
    color: "info",
  },
];
import aviato from "@images/logos/aviato.png";
import bitbank from "@images/logos/bitbank.png";
import zipcar from "@images/logos/zipcar.png";

const earnings = [
  {
    avatar: zipcar,
    title: "Zipcar",
    subtitle: "Vuejs, React & HTML",
    amount: "$24,895.65",
    progress: "primary",
  },
  {
    avatar: bitbank,
    title: "Bitbank",
    subtitle: "Sketch, Figma & XD",
    amount: "$8,6500.20",
    progress: "info",
  },
  {
    avatar: aviato,
    title: "Aviato",
    subtitle: "HTML & Anguler",
    amount: "$1,2450.80",
    progress: "secondary",
  },
];
const salesByCountries = [
  {
    abbr: "US",
    amount: "$8,656k",
    country: "United states of america",
    change: "+25.8%",
    sales: "894k",
    color: "success",
  },
  {
    abbr: "UK",
    amount: "$2,415k",
    country: "United kingdom",
    change: "-6.2%",
    sales: "645k",
    color: "error",
  },
  {
    abbr: "IN",
    amount: "$865k",
    country: "India",
    change: "+12.4%",
    sales: "148k",
    color: "warning",
  },
  {
    abbr: "JA",
    amount: "$745k",
    country: "Japan",
    change: "-11.9%",
    sales: "86k",
    color: "secondary",
  },
  {
    abbr: "KO",
    amount: "$45k",
    country: "Korea",
    change: "+16.2%",
    sales: "42k",
    color: "error",
  },
];
</script>

<style lang="scss">
.v-card .trophy {
  position: absolute;
  inline-size: 4.188rem;
  inset-block-end: 1.25rem;
  inset-inline-end: 1.25rem;
}
</style>
