<script setup></script>
<template>
  <div id="specs" class="bg-black py-32 flex flex-col">
    <div class="specs__title px-16 w-1/2 self-center text-center">
      <h3 class="text-center text-5xl text-gray-700">Tacoma capacity</h3>
      <p class="subtitle text-5xl text-gray-700">in the footprint of a MINI Cooper</p>
    </div>

    <div class="truck-size flex space-x-16 ">
      <div class="text-box-left w-1/3">
        <p class="text-2xl text-black font-bold">4 Doors/5 Adults</p>
        <p class="text-gray-400">
          Same interior space as a Toyota Tacoma in the lengt of a MINI Cooper SE
        </p>
        <div class="doors p-4"></div>
      </div>
      <div class="text-box-right w-1/3">
        <p class="text-2xl text-black font-bold">4 Doors/5 Adults</p>
        <p class="text-gray-400">
          Same interior space as a Toyota Tacoma in the lengt of a MINI Cooper SE
        </p>
        <div class="length"></div>
      </div>

      
    </div>

    <div class="truck-specs-img flex px-64">
      <NuxtImg
        src="/truck_comparison.png"
        format="webp"
        sizes="lg:50vw"
        class="ml-auto"
      ></NuxtImg>
    </div>
  </div>
</template>
<style scoped>
* {
  background-color: #efefef;
}

.doors {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  height: 1rem;
}

.length {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  height: 1rem;
}

.truck-size {
  max-width: 50rem;
}
</style>
