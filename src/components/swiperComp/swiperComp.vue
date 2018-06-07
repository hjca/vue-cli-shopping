<!-- 轮播图组件 -->
<template>
    <div id='swiperComp'>
      <div class="swiper">
        <swiper :options="swiperOptoin">
          <swiper-slide v-for="(item,index) in swiperData" :key="index">
            <router-link :to="{path:'/detail/'+item.shopId}"><img :src="item.imgUrl" alt="" style="height: 3.4rem;"></router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<style type="text/css" scope>
  #swiperComp{
    width:100%;
    height: 3.4rem;
  }
  .bannerImg{
    width:100%;
    height:100%;
  }
</style>

<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default{
    name:"swiperComp",
    props:['swiperData'],
    components:{
        swiper,
        swiperSlide
    },
    data(){
      return{
        swiperOptoin:{
//          loop:true,
          autoplay:{
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction:false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          }
        }
      }
    },
    mounted(){

    }
  }
</script>
