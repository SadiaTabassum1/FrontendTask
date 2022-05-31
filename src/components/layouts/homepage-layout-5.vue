<template>
  <div class="p-10">
      <div class="grid grid-flow-col place-content-center gap-2 pb-10">
        <div v-for="item,index in tabs" :key="index">
          <button class="rounded-full  h-2   text-center border-b"  :class="{'bg-purpleText  w-10':tab==index, 'bg-gray-300 w-5':tab!=index}"  @click="changeTabdata(index)"></button>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-20">
          <TabCard2 />
          <TabCard2 />
      </div>
      <div class="grid place-content-center pt-10">
          <div class="flex gap-10">
              <div class="rounded-full w-14 h-14 circleShadow2 grid place-content-start">
                  <svg xmlns="http://www.w3.org/2000/svg" height="56" fill="#644F9C" width="56"><path d="M28.05 36 16 23.95 28.05 11.9 30.2 14.05 20.3 23.95 30.2 33.85Z"/></svg>
              </div>
              <div class="rounded-full w-14 h-14 circleShadow2 grid place-content-end">
                  <svg class="pt-3" xmlns="http://www.w3.org/2000/svg" height="56" width="56" fill="#644F9C"><path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z"/></svg>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TabCard2 from '../Cards/TabCard2.vue'
export default {
 data () {
     return {
         tabs: ['POP-UNDER', 'BANNER AD','NATIVE', 'SKIM'],
         tab: 0,
         cardData1: {images:[],
         title: 'POP-UNDER',
         description: 'This is one of the most popular ads. After user/’s click, this ad opens landing page in behind. So, the user experience is not hampered much.'},
         cardData2: {images:[],
         title: 'BANNER AD',
         description: 'Choose between the available banner formats. Highly effective ad for visibility.'},
         cardData3: {images:[],
         title: 'NATIVE',
         description: 'Ad format with the image and the title, that perfectly fits into the content of the site.Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.'},
         cardData4: {images:[],
         title: 'SKIM',
         description: 'SKIM" is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.'}
     }
 },
 components:{
   TabCard2
 },
 methods:{
   changeTabdata(index) {
     this.tab = index
   }
 }
}
</script>

<style>
.circleShadow2 {
box-shadow: 2px 2px 5px #a3a1c2;
}
</style>