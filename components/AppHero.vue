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
      <div
        class="text-btns py-6 flex justify-center items-center self-end bg-transparent"
      >
        <button class="bg-transparent">
          <Icon name="ri:arrow-left-s-line" id="arrow-left" />
        </button>
        <button class="bg-transparent">
          <Icon name="ri:arrow-right-s-line" id="arrow-right" />
        </button>
        <div class="line-div"></div>
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
  transform: translateY(20rem) translateX(13rem);
}

.text-btns {
  margin-top: 35vh;
}

#arrow-left {
  width: 2em;
  height: 2em;

  background-color: transparent;
}

#arrow-right {
  width: 2em;
  height: 2em;

  background-color: transparent;
}
.line-div {
  background-color: grey;
  height: 1px;
  width: 17rem;
}
</style>
