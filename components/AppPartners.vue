<script setup>
const partners = ref([
  {
    id: 1,
    logo: "/Medium-Logo.png",
    name: "Medium",
    duration: 1500,
  },
  {
    id: 2,
    logo: "/The_Wall_Street_Journal-Logo.wine.png",
    name: "Wall Street Journal",
    duration: 1900,
  },
  {
    id: 3,
    logo: "/pngwing.com.png",
    name: "TechCrunch",
    duration: 2100,
  },
  {
    id: 4,
    logo: "/substack_logo.png",
    name: "substack",
    duration: 2600,
  },
]);
</script>
<template>
  <section>
    <div class="flex space-x-4 px-16 items-center justify-center">
      <div
        class="partner flex items-center justify-center"
        v-for="partner in partners"
        :key="partner.id"
      >
        <nuxt-img
          :src="partner.logo"
          sizes="sm:90vw lg:25vw"
          format="webp"
          :alt="partner.name"
          data-aos="fade-up"
          :data-aos-duration="partner.duration"
        ></nuxt-img>
      </div>
    </div>
  </section>
</template>
