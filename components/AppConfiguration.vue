<script setup>



const images = ref([
 '/truck6.webp',
'/truck7.webp',
 '/truck8.webp',

])

const activeIndex = ref(0)

const currentImage = computed(() => images.value[activeIndex.value])

const prevImage = ( ) => {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length
}

const nextImage = () => {

  activeIndex.value = (activeIndex.value + 1) % images.value.length
}

</script>

<template >
  <div id="configuration" class="configuration flex flex-col py-32 ">
    <div class="configuration-title flex flex-col md:flex-row justify-center ">
<div class="configuration-title-text ml-52 w-1/4">
  <h5 class="text-black text-5xl">Built to handle everything you need</h5>
  <div
    class="text-btns py-6 flex justify-center items-center self-end bg-transparent"
  >
    <button class="bg-transparent" @click="prevImage">
      <Icon name="LeftArrowIcon" id="arrow-left"  />
    </button>
    <button class="bg-transparent" @click="nextImage">
      <Icon name="RightArrowIcon"  id="arrow-right" />
    </button>
    <div class="line-div"></div>
  </div>
</div>





<div class="image-container overflow-hidden flex duration-200">
  <nuxt-img
    :src="currentImage"
    sizes="sm:100vw md:50vw lg:55vw"
    id="features-img-1"
    class="grayscale hover:filter-none duration-150 "
  ></nuxt-img>


</div>


    </div>

<div class="configuration-description text-gray-400 w-1/2 self-center space-y-12 mt-16 pl-64">

  <p class="text-gray-400 text-xl">TELOS offers a 60 degree truck bed that, when extended into bacskeat thanks to an innovative midgate, an accomamodate 4' x 8' plywood sheets or a 8' surboard while the tailgate is up. </p>
  <p class="text-gray-400 text-xl ">TELOS' specially designed storage tunnel under the bed doubles asa footwel lfor a thrid row of seats, enabling TELOS to accommodate up to eigh pasengers. Belongings are safely secured by the tonneau cover, makeing TELOS teh perfcet vehicle to safely store work items and weekend gear while on the go.</p>

<div >
  <NuxtLink class="features-link uppercase font-bold cursor-pointer text-black "
    >Reserve Yours</NuxtLink>
</div>



</div>



  </div>
</template>



<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');

* {
  background-color: #EEEFEE;
}


h5 {
  font-family: 'Sora', sans-serif;
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


.image-container {
  max-width: 45vw;
  object-fit: contain;
}

.features-link {
  border-bottom: 0.2em solid #56bc5a;

  padding-bottom: 0.3rem;
}
</style>
