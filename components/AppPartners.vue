<script setup>
const partners = ref([
  {
    id: 1,
    logo: "/telos_logo.png",
    name: "telos",
  },
  {
    id: 2,
    logo: "/The_Wall_Street_Journal-Logo.wine.png",
    name: "Wall Street Journal",
  },
  {
    id: 2,
    logo: "/pngwing.com.png",
    name: "TechCrunch",

  }
]);
</script>
<template>
  <div class="flex space-x-4">
    <div class="partner flex items-center" v-for="partner in partners" :key="partner.id">
      <nuxt-img :src="partner.logo" sizes="sm:90vw lg:25vw" format="webp" :alt="partner.name"></nuxt-img>

    </div>
  </div>
</template>
