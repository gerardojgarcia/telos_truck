<script setup>
import AppLinkButton from "/components/AppLinkButton.vue";
</script>

<template>
  <header class="flex space-between bg-green-950 py-4 px-6">
    <p class="logo bg-transparent w-32">Telos</p>
    <nav class="flex space-x-6 space-evenly bg-transparent w-full">
      <NuxtLink to="/" class="nav-link">Size</NuxtLink>
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
}

nav {
  margin-left: 40rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}

#nav-link-btn {
  border-left: 1px solid gray;
  padding-left: 2em;
}
</style>
