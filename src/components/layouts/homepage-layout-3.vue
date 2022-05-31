<template>
  <div class="p-10">
      <div class="flex justify-between pb-10">
        <div v-for="item,index in tabs" :key="index">
          <button class="buttonShadow rounded-full  h-10 w-auto  text-center px-14 font-sans text-xl"  :class="{'bg-orange text-white':tab==index}"  @click="changeTabdata(index)">{{item}}</button>
        </div>
      </div>
      <TabCard1 v-if="tab == 0" :cardData="cardData1" />
      <TabCard1 v-if="tab == 1" :cardData="cardData2" />
      <TabCard1 v-if="tab == 2" :cardData="cardData3" />
      <TabCard1 v-if="tab == 3" :cardData="cardData4" />
  </div>
</template>

<script>
import TabCard1 from '../Cards/TabCard1.vue'
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
   TabCard1
 },
 methods:{
   changeTabdata(index) {
     this.tab = index
   }
 }
}
</script>

<style>
.buttonShadow{
  box-shadow: 2px 2px 5px #949497;
}
</style>