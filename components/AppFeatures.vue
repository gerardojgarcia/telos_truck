<script setup></script>

<template>
  <div id="features" class="py-16" data-aos="fade-up">
    <div class="px-52 flex flex-col" data-aos="fade-up" data-aos-duration="1500" >
      <h2 class="features-title text-5xl text-gray-400 " data-aos="fade-right" data-aos-duration="1900">
        TELOS trucks makes the world's most efficient EV pickup for urban living and
        weekend adventuring
      </h2>

      <div class="features__list flex py-16 w-3/4 bg-transparent" data-aos="fade-left" data-aos-duration="1900">
        <div class="list-line border-b-2 w-1/2 self-start mx-16 pt-4"></div>
        <div class="list-text space-y-8 w-1/2 text-gray-400">
          <p>
            We redesigned the EVtruck footprint wand function fomr the ground up by
            marrying the state of the art in electrification and advanced safety
            technology.
          </p>
          <p>
            With Toyota tacoma capability, Tesla-like range and efiiciency, in the
            footprint of a MINI Cooper, TELOS is the most compact, practical and
            technically advanced truck.
          </p>
          <p class="pb-32">
            Meeting the need for a highly functional and powerful EV pickup equally suited
            to navigating downtown adn hauling people adn gear out of town.
          </p>
          <NuxtLink class="features-link uppercase font-bold cursor-pointer"
            >Reserve Yours</NuxtLink
          >
        </div>
      </div>
      <div
        class="features__images flex flex-col md:flex-row items-center justify-center pt-12 w-3/4 self-center"
      >
        <nuxt-img
          src="/truck2.webp"
          sizes="sm:100vw md:50vw lg:40vw"
          id="features-img-1"
          class="grayscale hover:filter-none duration-150"
          data-aos-duration="1500"
          data-aos="fade-right"
        ></nuxt-img>
        <nuxt-img
          src="/truck9.webp"
          sizes="sm:100vw md:50vw lg:25vw"
          id="features-img-2"
          class="grayscale hover:filter-none duration-150"
          data-aos-duration="1500"
          data-aos="fade-left"
        ></nuxt-img>
      </div>
    </div>
  </div>
</template>
<style scoped>

 @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
* {
  color: black;
}

h2 {
  font-family: 'Sora', sans-serif;
}

.features-link {
  border-bottom: 0.2em solid #56bc5a;

  padding-bottom: 0.3rem;
}

.list-line {
  background-color: transparent;
}

#features-img-1 {
  transform: translateY(2rem) translateX(8rem);
}

#features-img-2 {
  transform: translateY(-7rem) translateX(4rem);
  z-index: 2;
}

.features__images {
  transform: translateY(-3rem);
  background-color: transparent;
}
</style>
