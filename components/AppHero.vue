<script setup lang="ts"></script>

<template>
  <div id="hero" class="bg-white flex relative">
    <div class="hero__text bg-green-950 flex flex-col isolate">
      <div class="hero__text-title z-6 bg-transparent">
        <h1 class="text-7xl uppercase bg-transparent">Telos</h1>
        <p class="text-8xl uppercase bg-transparent">Urban</p>
        <p class="text-8xl uppercase bg-transparent">Adventure</p>
        <p class="text-8xl uppercase bg-transparent">Vehicles</p>
      </div>
      <div class="text-btns py-6 bg-transparent h-32 w-32">
        <button class="p-6 h-32 w-32">
          <Icon name="ri:arrow-left-s-line" color="black" />
        </button>
      </div>
    </div>

    <div class="hero__image">
      <nuxt-img
        src="/truck11.webp"
        sizes="sm:100vw md:50vw lg:100vw"
        width="1400px"
        height="1000px"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.hero__image {
  height: 1000px;
  width: 1400px;
}
.hero__text {
  height: 80vh;
}

.hero__text-title {
  transform: translateY(20rem) translateX(15rem);
}

.text-btns {
  margin-top: 35vh;
}
</style>
