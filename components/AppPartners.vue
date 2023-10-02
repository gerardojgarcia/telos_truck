<script setup>
const partners = ref([
  {
    id: 1,
    logo: "/telos_logo.png",
    name: "telos",
  },
  {
    id: 2,
    logo: "/wall_street.webp",
    name: "telos",
  },
]);
</script>
<template>
  <div class="flex space-x-4">
    <div
      class="partner flex items-center"
      v-for="partner in partners"
      :key="partner.id"
    >
      <nuxt-img :src="partner.logo" sizes="sm:90vw lg:25vw"></nuxt-img
      ><strong class="partner-name text-black text-3xl">{{
        partner.name
      }}</strong>
    </div>
  </div>
</template>
