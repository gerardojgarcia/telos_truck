<script setup>

</script>

<template >
  <div id="configuration" class="configuration">
    <div class="configuration-title flex flex-col md:flex-row ">
<div class="">
  <h5 class="text-black">Built to handle everyting you need</h5>
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



      <nuxt-img
        src="/truck6.webp"
        sizes="sm:100vw md:50vw lg:40vw"
        id="features-img-1"
        class="grayscale hover:filter-none duration-150"
      ></nuxt-img>
    </div>




  </div>
</template>



<style lang="css" scoped>

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
