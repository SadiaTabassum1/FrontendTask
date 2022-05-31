<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import HomeLayout1 from './components/layouts/homepage-layout-1.vue'
import HomeLayout2 from './components/layouts/homepage-layout-2.vue'
import HomeLayout3 from './components/layouts/homepage-layout-3.vue'
import HomeLayout4 from './components/layouts/homepage-layout-4.vue'
import HomeLayout5 from './components/layouts/homepage-layout-5.vue'
export default {
  data () {
    return {
      tab:0,
     tabs : ['HOME', 'ADVERTISERS', 'PUBLISHERS', 'INFLUENCERS', 'AD', 'FORMATS', 'BLOG', 'CONTACT', 'US']  
    }
  },
  components: {
    Header,
    Footer,
    HomeLayout1,
    HomeLayout2,
    HomeLayout3,
    HomeLayout4,
    HomeLayout5
  }
}
</script>

<template>
<div>
  <Header />
  <div class="flex justify-between bg-background p-3  gap-40">
  <div class="w-full p-5  flex  justify-around font-sans font-regular text-md  uppercase">
    <button v-for="t,index in tabs" :key="index" class="text-purpleText " :class="{'text-orange':tab==index}" @click="tab=index">{{t}}</button>
  </div>
  <div class=" buttonShadow font-sans text-md rounded-full w-auto h-14 bg-white flex gap-3   pl-8 pr-3 py-3">
    <div class="place-self-center uppercase">Login</div>
    <div class="buttonShadow rounded-full w-24 bg-orange text-center text-white uppercase pt-1 ">Sign Up</div>
  </div>
</div>
 <div class="p-20 bg-background">
   <HomeLayout1 />
   <HomeLayout2 />
   <HomeLayout3 />
 </div>
 <div class="bg-background">
   <HomeLayout4 />
 <HomeLayout5 />
 </div>
 <Footer />
</div>

</template>

<style>

</style>
