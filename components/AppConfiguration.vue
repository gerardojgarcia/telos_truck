<script setup>

</script>

<template >
  <div id="configuration" class="configuration flex flex-col py-32ç">
    <div class="configuration-title flex flex-col md:flex-row justify-center ">
<div class="configuration-title-text ml-52 w-1/3">
  <h5 class="text-black text-5xl">Built to handle everyting you need</h5>
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
        sizes="sm:100vw md:50vw lg:65vw"
        id="features-img-1"
        class="grayscale hover:filter-none duration-150 2/3"
      ></nuxt-img>
    </div>

<div class="configuration-description text-gray-400 w-1/2 self-center pl-64">

  <p class="text-black">TELOS offers a 60 degree truck bed that, when extended into bacskeat thanks to an innovative midgate, an accomamodate 4' x 8' plywood sheets or a 8' surboard while the tailgate is up. </p>
  <p class="text-black">TELOS' specially designed storage tunnel under the bed doubles asa footwel lfor a thrid row of seats, enabling TELOS to accommodate up to eigh pasengers. Belongings are safely secured by the tonneau cover, makeing TELOS teh perfcet vehicle to safely store work items and weekend gear while on the go.</p>



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
