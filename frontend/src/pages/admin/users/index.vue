<script setup>
import avatar1 from "@/assets/images/avatars/avatar-1.png";
import avatar2 from "@/assets/images/avatars/avatar-2.png";
import avatar3 from "@/assets/images/avatars/avatar-3.png";
import avatar4 from "@/assets/images/avatars/avatar-4.png";
import avatar5 from "@/assets/images/avatars/avatar-5.png";
import avatar6 from "@/assets/images/avatars/avatar-6.png";
import avatar7 from "@/assets/images/avatars/avatar-7.png";
import avatar8 from "@/assets/images/avatars/avatar-8.png";

const headers = [
  {
    title: "User",
    key: "username",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Role",
    key: "role",
  },
  {
    title: "Status",
    key: "status",
  },
];

const userData = [
  {
    id: 1,
    fullName: "Galasasen Slixby",
    company: "Yotz PVT LTD",
    role: "editor",
    username: "gslixby0",
    country: "El Salvador",
    contact: "(479) 232-9151",
    email: "gslixby0@abc.net.au",
    currentPlan: "enterprise",
    status: "inactive",
    avatar: avatar1,
  },
  {
    id: 2,
    fullName: "Halsey Redmore",
    company: "Skinder PVT LTD",
    role: "author",
    username: "hredmore1",
    country: "Albania",
    contact: "(472) 607-9137",
    email: "hredmore1@imgur.com",
    currentPlan: "team",
    status: "pending",
    avatar: avatar2,
  },
  {
    id: 3,
    fullName: "Marjory Sicely",
    company: "Oozz PVT LTD",
    role: "maintainer",
    username: "msicely2",
    country: "Russia",
    contact: "(321) 264-4599",
    email: "msicely2@who.int",
    currentPlan: "enterprise",
    status: "active",
    avatar: avatar3,
  },
  {
    id: 4,
    fullName: "Cyrill Risby",
    company: "Oozz PVT LTD",
    role: "Admin",
    username: "crisby3",
    country: "China",
    contact: "(923) 690-6806",
    email: "crisby3@wordpress.com",
    currentPlan: "team",
    status: "inactive",
    avatar: avatar4,
  },
  {
    id: 5,
    fullName: "Maggy Hurran",
    company: "Aimbo PVT LTD",
    role: "subscriber",
    username: "mhurran4",
    country: "Pakistan",
    contact: "(669) 914-1078",
    email: "mhurran4@yahoo.co.jp",
    currentPlan: "enterprise",
    status: "pending",
    avatar: avatar5,
  },
  {
    id: 6,
    fullName: "Silvain Halstead",
    company: "Jaxbean PVT LTD",
    role: "author",
    username: "shalstead5",
    country: "China",
    contact: "(958) 973-3093",
    email: "shalstead5@shinystat.com",
    currentPlan: "company",
    status: "active",
    avatar: avatar6,
  },
  {
    id: 7,
    fullName: "Breena Gallemore",
    company: "Jazzy PVT LTD",
    role: "subscriber",
    username: "bgallemore6",
    country: "Canada",
    contact: "(825) 977-8152",
    email: "bgallemore6@boston.com",
    currentPlan: "company",
    status: "pending",
    avatar: avatar7,
  },
  {
    id: 8,
    fullName: "Kathryne Liger",
    company: "Pixoboo PVT LTD",
    role: "author",
    username: "kliger7",
    country: "France",
    contact: "(187) 440-0934",
    email: "kliger7@vinaora.com",
    currentPlan: "enterprise",
    status: "pending",
    avatar: avatar8,
  },
];

const resolveUserRoleVariant = (role) => {
  const roleLowerCase = role.toLowerCase();
  if (roleLowerCase === "subscriber")
    return {
      color: "success",
      icon: "mdi-account-circle",
    };
  if (roleLowerCase === "author")
    return {
      color: "error",
      icon: "mdi-monitor",
    };
  if (roleLowerCase === "maintainer")
    return {
      color: "info",
      icon: "mdi-clock-outline",
    };
  if (roleLowerCase === "editor")
    return {
      color: "warning",
      icon: "mdi-circle-edit-outline",
    };
  if (roleLowerCase === "admin")
    return {
      color: "primary",
      icon: "mdi-crown",
    };

  return {
    color: "success",
    icon: "mdi-account-circle-outline",
  };
};

const resolveUserStatusVariant = (stat) => {
  const statLowerCase = stat.toLowerCase();
  if (statLowerCase === "pending") return "warning";
  if (statLowerCase === "active") return "success";
  if (statLowerCase === "inactive") return "secondary";

  return "primary";
};
</script>

<template>
  <h1 class="text-primary">Users</h1>
  <VCard elevation="4">
    <VDataTable
      :headers="headers"
      :items="userData"
      item-value="id"
      class="text-no-wrap"
    >
      <!-- User -->
      <template #item.username="{ item }">
        <div class="d-flex align-center ga-4">
          <VAvatar
            size="34"
            :variant="!item.avatar ? 'tonal' : undefined"
            :color="
              !item.avatar ? resolveUserRoleVariant(item.role).color : undefined
            "
          >
            <VImg v-if="item.avatar" :src="item.avatar" />
          </VAvatar>

          <div class="d-flex flex-column">
            <div class="font-weight-medium user-list-name">
              {{ item.fullName }}
            </div>

            <span class="text-sm text-medium-emphasis"
              >@{{ item.username }}</span
            >
          </div>
        </div>
      </template>
      <!-- Role -->
      <template #item.role="{ item }">
        <div class="d-flex ga-4">
          <VIcon
            :icon="resolveUserRoleVariant(item.role).icon"
            :color="resolveUserRoleVariant(item.role).color"
            size="22"
          />
          <div class="text-capitalize text-high-emphasis">
            {{ item.role }}
          </div>
        </div>
      </template>
      <!-- Plan -->
      <template #item.plan="{ item }">
        <span class="text-capitalize text-high-emphasis">{{
          item.currentPlan
        }}</span>
      </template>
      <!-- Status -->
      <template #item.status="{ item }">
        <VChip
          :color="resolveUserStatusVariant(item.status)"
          size="small"
          class="text-capitalize"
        >
          {{ item.status }}
        </VChip>
      </template>

      <template #bottom />
    </VDataTable>
  </VCard>
</template>
