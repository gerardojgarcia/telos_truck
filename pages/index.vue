<script setup>
import AppHero from "/components/AppHero.vue";
import AppFeatures from "/components/AppFeatures.vue";
import AppSpecs from "/components/AppSpecs.vue";
import AppPerformance from "/components/AppPerformance.vue";
import AppConfiguration from "/components/AppConfiguration.vue";
import AppFlexibile from "/components/AppFlexible.vue";
import AppFooter from "/components/AppFooter.vue";
import AppGallery from "/components/AppGallery.vue";

import AppPartners from "/components/AppPartners.vue";
</script>

<template>
  <div>
    <AppHero />
    <AppFeatures />
    <AppSpecs />
    <AppPerformance />
    <AppConfiguration />
    <AppFlexibile />
    <AppPartners />
    <AppGallery />
    <AppFooter />
  </div>
</template>

<style scoped>
* {
  overflow: hidden;
}
</style>
