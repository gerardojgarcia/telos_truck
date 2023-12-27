<script setup lang="ts">
import truck6 from "/truck6.webp";
import truck7 from "/truck7.webp";
import truck8 from "/truck8.webp";
import truck4 from "/truck4.webp";
import truck11 from "/truck11.webp";
import truck1 from "/truck1.webp";

const images = ref(["/truck11.webp", "/truck9.webp", "/truck2.webp"]);

const activeIndex = ref(0);

const currentImage = computed(() => images.value[activeIndex.value]);

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
};
</script>

<template>
  <div
    id="hero"
    class="bg-white flex relative mt-16"
    data-aos="fade-in"
    data-aos-duration="1000"
  >
    <div
      class="hero__text bg-green-950 flex flex-col"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div class="hero__text-title z-6 bg-transparent">
        <h1
          class="text-7xl uppercase bg-transparent"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Telos
        </h1>
        <p
          class="text-8xl uppercase bg-transparent"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Urban
        </p>
        <p
          class="text-8xl uppercase bg-transparent"
          data-aos="fade-right"
          data-aos-duration="1400"
        >
          Adventure
        </p>
        <p
          class="text-8xl uppercase bg-transparent"
          data-aos="fade-right"
          data-aos-duration="1600"
        >
          Vehicles
        </p>
      </div>
      <div
        class="text-btns py-6 flex justify-center items-center self-end bg-transparent"
        data-aos="fade-left"
      >
        <button class="bg-transparent">
          <Icon name="ri:arrow-left-s-line" id="arrow-left" @click="prevImage" />
        </button>
        <button class="bg-transparent">
          <Icon name="ri:arrow-right-s-line" id="arrow-right" @click="nextImage" />
        </button>
        <div class="line-div"></div>
      </div>
    </div>

    <div class="hero__image">
      <nuxt-img
        preload
        :src="currentImage"
        sizes="sm:25vw md:50vw lg:100vw"
        width="1400px"
        height="1000px"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Sora&display=swap");

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

@media screen and (max-width: 800px) {
  .hero__text-title {
    transform: translateY(0rem) translateX(0rem);
  }
}
</style>
