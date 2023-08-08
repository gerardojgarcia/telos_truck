<script setup>
const performance = ref({
  speed: 4,
  range: 350,
  power: 500,
});
</script>
<template>
  <div id="performance" class="py-32 flex md:flex-row flex-col">
    <div class="w-1/2 px-16 pl-52">
      <h3 class="text-black text-5xl mt-16 w-1/2">Designed to do more with less</h3>
      <p class="text-gray-400 w-3/4  mt-12 text-xl">
        Standard crew-cab 5-seat, 5-foot bed capacity with a configurable mid-partition
        that either increases bed size to accomodate 4' x 8' plywood sheets with the
        tailgate up, or allows for additional seating for up to 8 passengers.
      </p>
    </div>
    <div class="w-1/2 -translate-y-52 -translate-x-32 shadow-sm">
      <nuxt-img src="/truck1.webp" sizes="lg:100vw"></nuxt-img>
      <div
        class="performance-details grid grid-cols-3 place-content-center bg-gray-700 text-white py-16"
      >
        <div class="speed bg-transparent m-auto text-center">
          <p class="text-white text-5xl bg-transparent">{{ performance.speed }}s</p>
          <p class="text-green-300 bg-transparent font-bold">0-60</p>
        </div>
        <div class="speed bg-transparent m-auto text-center">
          <p class="text-white text-4xl bg-transparent">{{ performance.range }}mi</p>
          <p class="text-green-300 bg-transparent font-bold">Range</p>
        </div>
        <div class="speed bg-transparent m-auto text-center">
          <p class="text-white text-4xl bg-transparent">{{ performance.power }}hp</p>
          <p class="text-green-300 bg-transparent font-bold">Power</p>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
#performance {
  background-color: white;
}
</style>
