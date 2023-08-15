<script setup>
const images = ref([
  "/truck6.webp",
  "/truck7.webp",
  "/truck8.webp",
  "/truck4.webp",
  "/truck6.webp",
  "/truck11.webp",
  "/truck1.webp",
]);

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
  <section
    id="gallery"
    class="flex flex-col items-center justify-center py-24"
    data-aos="fade-up"
  >
    <h6 class="text-black text-6xl mt-16 self-start ml-32">Gallery</h6>

    <div class="flex py-32">
      <div
        class="text-btns py-6 flex justify-center items-center self-end bg-transparent"
        data-aos="fade-left"
      >
        <button class="bg-transparent" @click="prevImage">
          <Icon name="LeftArrowIcon" id="arrow-left" />
        </button>
        <button class="bg-transparent" @click="nextImage">
          <Icon name="RightArrowIcon" id="arrow-right" />
        </button>
        <div class="line-div"></div>
      </div>

      <div
        class="image-container overflow-hidden flex duration-200"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <nuxt-img
          preload
          :src="currentImage"
          sizes="sm:100vw md:50vw lg:55vw"
          id="features-img-1"
          class="duration-150"
        ></nuxt-img>
      </div>
    </div>

    <div class="self-end mr-52">
      <NuxtLink
        class="features-link uppercase font-bold cursor-pointer text-2xl text-black"
        >Reserve Yours</NuxtLink
      >
    </div>
  </section>
</template>

<style media="screen" scoped>
@import url("https://fonts.googleapis.com/css2?family=Sora&display=swap");

* {
  background-color: #eeefee;
}

h6 {
  font-family: "Sora", sans-serif;
}

.line-div {
  background-color: grey;
  height: 1px;
  width: 17rem;
}

.image-container {
  max-width: 45vw;
  max-height: 60vh;
  object-fit: contain;
}

.text-btns {
  margin-top: 15vh;
}

#arrow-left {
  width: 3em;
  height: 3em;

  background-color: transparent;
}

#arrow-right {
  width: 3em;
  height: 3em;

  background-color: transparent;
}

.features-link {
  border-bottom: 0.2em solid #56bc5a;

  padding-bottom: 0.3rem;
}
</style>
