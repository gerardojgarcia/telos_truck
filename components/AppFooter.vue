<script setup></script>

<template>
  <footer class="bg-green-950 footer-container py-16 grid grid-cols-4 pb-16 gap-4">
    <div class="footer-media flex flex-col items-center bg-green-950">
      <div class="bg-green-950">
        <nuxt-img
          src="/TELOS_logo_small.png"
          format="webp"
          class="bg-transparent"
        ></nuxt-img>
        <p>email: hi@telostruck.info</p>
        <p>phone: 323-450-3223</p>
      </div>
    </div>

    <div class="footer-media flex flex-col items-center bg-green-950">
      <div class="flex flex-col">
        <div class="mb-4"><strong class="text-3xl">Explore</strong></div>
        <NuxtLink to="#size">Size</NuxtLink>
        <NuxtLink to="#performance">Performance</NuxtLink>
        <p>Configurations</p>
        <p>Features</p>
      </div>
    </div>

    <div class="footer-media flex flex-col flex-start bg-green-950">
      <div>
        <strong class="text-3xl">Community</strong>
      </div>

      <ul class="footer-topics-links flex flex-col pt-4 bg-green-950">
        <NuxtLink to="reddit.com" class="hover:text-green-400 duration-150">
          <Icon name="ri:reddit-line" class="mr-2" /> Reddit
          <Icon name="ri:arrow-right-up-line" />
        </NuxtLink>
        <NuxtLink to="discord.com" class="hover:text-green-400 duration-150">
          <Icon name="ri:discord-line" class="mr-2" />Discord<Icon
            name="ri:arrow-right-up-line"
          />
        </NuxtLink>
        <NuxtLink to="youtube.com" class="hover:text-green-400 duration-150">
          <Icon name="ri:youtube-line" class="mr-2" />Youtube<Icon
            name="ri:arrow-right-up-line"
          />
        </NuxtLink>
        <NuxtLink to="instagram.com" class="hover:text-green-400 duration-150">
          <Icon name="ri:instagram-line" class="mr-2" />Instagram<Icon
            name="ri:arrow-right-up-line"
          />
        </NuxtLink>
      </ul>
    </div>

    <div class="contact flex flex-col shadow-2xl">
      <div class="self-start mb-8">
        <strong class="footer-strong text-5xl text-white">Pre-Order</strong>
      </div>

      <div class="flex w-full flex-col justify-center">
        <form action="submit ">
          <div class="flex flex-col mr-32">
            <input
              class="shadow-md form-name rounded-sm bg-white p-1 mb-4"
              type="text"
              v-model="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              class="shadow-md form-email rounded-sm bg-white p-1"
              type="text"
              v-model="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <button
            class="form-btn self-center text-white rounded-sm bg-green-400 duration-100 px-4 py-2 border-0 hover:text-white my-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>
<style scoped>
* {
  background-color: #052e16;
}

.form-btn {
  background-color: #4ade80;
}
</style>
