<script setup></script>
<template>
  <div id="specs" class="bg-black pt-32 pb-64   flex flex-col">
    <div class="specs__title px-16 w-1/2 self-center text-center pb-16">
      <h3 class="text-center text-5xl text-gray-700">Tacoma capacity</h3>
      <p class="subtitle text-5xl text-gray-700">in the footprint of a MINI Cooper</p>
    </div>

    <div class="truck-size flex self-end space-x-8">
      <div class="text-box-left w-1/3">
        <p class="text-2xl text-black font-bold">4 Doors/5 Adults</p>
        <p class="text-gray-400">
          Same interior space as a Toyota Tacoma in the lengt of a MINI Cooper SE
        </p>
        <div class="doors p-4"></div>
      </div>
      <div class="text-box-right w-1/3">
        <p class="text-2xl text-black font-bold">60"</p>
        <p class="text-gray-400">
          Same truck bed length as a Tacoma. Larger than a Rivian R1T.
        </p>
        <div class="bed p-4"></div>
      </div>
    </div>

    <div class="truck-specs-img flex px-64">
      <NuxtImg
        src="/truck_comparison.png"
        format="webp"
        sizes="lg:60vw"
        class="ml-auto"
      ></NuxtImg>
    </div>

    <div
      class="dimensions grid grid-cols-3 place-items-center m-auto mt-32 border-8 border-white mx-72"
    >
      <div class="length flex flex-col justify-center items-center w-full">
        <p class="text-black text-5xl">152in</p>
        <p class="text-green-700 font-bold text-center">Length</p>
      </div>
      <div class="width flex flex-col justify-center items-center w-full">
        <p class="text-black text-5xl">73in</p>
        <p class="text-green-700 font-bold text-center">Width</p>
      </div>
      <div class="height flex flex-col justify-center items-center w-full">
        <p class="text-black text-5xl">66in</p>
        <p class="text-green-700 font-bold text-center">Height</p>
      </div>
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

.bed {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  height: 1rem;
  margin-right: 1.5rem;
}

.length {
  border-right: 2px solid white;
  height: 15vh;
}

.width {
  border-right: 2px solid white;
  height: 15vh;
}

.truck-size {
  max-width: 75rem;
}
</style>
