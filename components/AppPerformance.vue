<script setup>
const performance = ref({
  speed: 4,
  range: 350,
  power: 500,
});
</script>
<template>
  <div id="performance" class="py-32">
    <div>
      <h3 class="text-black text-4xl">Designed to do more with less</h3>
      <p class="text-gray-400">
        Standard crew-cab 5-seat, 5-foot bed capacity with a configurable mid-partition
        that either increases bed size to accomodate 4' x 8' plywood sheets with the
        tailgate up, or allows for additional seating for up to 8 passengers.
      </p>
    </div>
    <div>
      <nuxt-img src="/truck7.webp"></nuxt-img>
      <div class="performance-details grid grid-cols-3 bg-gray-600 text-white py-16">
        <div class="speed bg-transparent">
          <p class="text-white text-4xl bg-transparent">{{ performance.speed }}s</p>
          <p class="text-green-300 bg-transparent">0-60</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#performance {
  background-color: white;
}
</style>
