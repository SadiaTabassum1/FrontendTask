<template>
  <div class="w-full h-auto grid grid-cols-5 gap-20">
      <div class='col-span-2 bg-purpleText h-auto p-20 grid place-content-center gap-5 text-white font-sans'>
          <div class="font-semibold text-center text-xl">Ad Format</div>
          <div class="text-center text-xl">Explanation Graphic of Ad Format</div>
          <div class="text-center text-xl">(some Example text)</div>
      </div>
      <div class='col-span-3  flex flex-col justify-between  w-full text-xl'>
          <div class=" flex flex-col gap-5">
            <div class="font-sans text-orange uppercase">{{cardData.title}}</div>
            <div>{{cardData.description}}</div>  
          </div>
          <div class="place-self-end w-full text-purpleText">Learn More</div>
          </div>
               
        </div>
</template>

<script>
export default {
 props: {
     cardData: Object
 }
}
</script>

<style>

</style>