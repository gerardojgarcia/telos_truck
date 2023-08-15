<script setup>
import AppLinkButton from "/components/AppLinkButton.vue";
</script>

<template>
  <header class="flex space-between bg-green-950 px-4 items-center fixed w-full top-0 z-10">
    <nuxt-img src="/TELOS_logo_small.png" sizes="sm:50vw lg:5vw" class="bg-transparent"></nuxt-img>


    <nav class="sm:hidden md:flex space-x-6 space-evenly items-center bg-transparent md:w-full ">
      <NuxtLink to="#specs" class="nav-link duration-200">Size</NuxtLink>
      <NuxtLink to="/" class="nav-link">Performance </NuxtLink>
      <NuxtLink to="/" class="nav-link">Configurations</NuxtLink>
      <NuxtLink to="/" class="nav-link">Features</NuxtLink>
      <NuxtLink to="/" class="nav-link">Team</NuxtLink>
      <NuxtLink to="/" class="nav-link">Gallery</NuxtLink>
      <NuxtLink to="/" class="nav-link">Specs</NuxtLink>

      <AppLinkButton id="nav-link-btn" />
    </nav>
  </header>
</template>

<style lang="css" scoped>
.nav-link {
  background-color: #052e16;
  padding: 1rem;
  transition: all 200ms;
}

.nav-link:hover {
  color: #22c55e;
}

nav {
  margin-left: 41rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}

#nav-link-btn {
  border-left: 1px solid gray;
  padding-left: 2em;
}
</style>
