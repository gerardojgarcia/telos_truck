<script setup></script>

<template>
  <div id="features" class="py-16">
    <div class="px-52 flex flex-col">
      <h2 class="features-title text-5xl text-gray-400 w-">
        TELOS trucks makes the world's most efficient EV pickup for urban living and
        weekend adventuring
      </h2>

      <div class="features__list flex py-16 w-3/4 bg-transparent">
        <div class="list-line border-b-2 w-1/2 self-start mx-16 pt-4"></div>
        <div class="list-text space-y-8 w-1/2">
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
          <p class="pb-8">
            Meeting the need for a highly functional and powerful EV pickup equally suited
            to navigating downtown adn hauling people adn gear out of town.
          </p>
          <NuxtLink class="features-link uppercase font-bold cursor-pointer"
            >Reserve Yours</NuxtLink
          >
        </div>
      </div>
      <div
        class="features__images flex flex-col md:flex-row items-center justify-center pt-24 w-3/4 self-center"
      >
        <nuxt-img
          src="/truck2.webp"
          sizes="sm:100vw md:50vw lg:35vw"
          id="features-img-1"
        ></nuxt-img>
        <nuxt-img
          src="/truck9.webp"
          sizes="sm:100vw md:50vw lg:35vw"
          id="features-img-2"
        ></nuxt-img>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  color: black;
}

.features-link {
  border-bottom: 0.2em solid #56bc5a;

  padding-bottom: 0.3rem;
}

.list-line {
  background-color: transparent;
}

#features-img-1 {
  transform: translateY(-5rem);
  z-index: 2;
}

#features-img-2 {
  transform: translateY(2rem) translateX(-5rem);
}
</style>
