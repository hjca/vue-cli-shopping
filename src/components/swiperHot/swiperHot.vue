<!-- 大客户专区 -->
<template>
  <div id='swiperZone'>
    <div class="zoneTitleArea">
      <div class="zoneTitleLine">
        <div class="zoneTitleName">热门商品</div>
      </div>
    </div>
    <div class="swiper">
      <swiper :options="swiperOptoin">
        <swiper-slide v-for="(item,index) in swiperHot" :key="index">
          <li><router-link :to="{path:'/detail/'+item.shopId}"><img :src="item.imgUrl" alt="" style="height: 3.4rem;"></router-link></li>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style type='text/css' scoped>
  #swiperZone{
    width:100%;
    height:auto;
  }
  .zoneTitleArea{
    width:100%;
    height: 1.2rem;
    padding: 0 .3rem;
    display: flex;
    align-items: center;
  }
  .zoneTitleLine{
    width:100%;
    height:0;
    border-top: 1px solid #e3e7ee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zoneTitleName{
    width: auto;
    height: auto;
    padding: 0 .2rem;
    font-size: .3rem;
    background: #f1f4f9;
    color: #4285f4;
  }
</style>

<script type="text/javascript">
  export default {
    name: "",
    props:['swiperHot'],
    data(){
      return {
        swiperOptoin:{
          slidesPerView : 3
        }
      }
    },
    mounted(){
    },
    methods: {}
  }
</script>
