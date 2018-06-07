<!-- 员工福利领取主页 -->
<template>
    <div id='welfareIndex'>
      <!-- 搜索框 -->
      <searchInp></searchInp>
      <!-- 轮播图 -->
      <swiperComp :swiper-data="swiperDatas"></swiperComp>
      <!-- 选择不同的功能菜单 -->
      <div class="optionsMenu">
        <!-- 商品分类 -->
        <div class="shoppingClassFiy">
          <i class="icon-classification"></i>
          <span>商品分类</span>
        </div>
        <!-- 购物车 -->
        <div class="shoppingCart">
          <i class="icon-shoppingcart"></i>
          <span>购物车</span>
        </div>
        <!-- 个人中心 -->
        <div class="shoppingUserCenter">
          <i class="icon-usercenter"></i>
          <span>个人中心</span>
        </div>
      </div>
      <!-- 引用大客户专区数据 -->
      <swiperZone :swiper-zone="swiperZone"></swiperZone>
      <!-- 热门数据 -->
      <swiperHot :swiper-hot="swiperHot"></swiperHot>
    </div>
</template>

<style scope>
  .optionsMenu{
    width:100%;
    height:auto;
    margin-top: .2rem;
    display: flex;
    justify-content: space-between;
  }
  .shoppingClassFiy,.shoppingCart,.shoppingUserCenter{
    width: 2.5rem;
    height: 2rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .shoppingClassFiy span,
  .shoppingCart span,
  .shoppingUserCenter span{
    font-size: .3rem;
    margin-top: .2rem;
  }
  .shoppingCart{
    border-left: 1px solid #f3f4f7;
    border-right: 1px solid #f3f4f7;
  }
</style>

<script type="text/javascript">
  /*引用头部搜索框组件*/
  import searchInp from "../../components/searchInput/searchInputPage.vue";
  /* 引用轮播图组件 */
  import swiperComp from "../../components/swiperComp/swiperComp.vue";
  /* 引用大客户专区数据 */
  import swiperZone from "../../components/swiperZone/swiperZone.vue";
  /*引用热门商品数据*/
  import swiperHot from "../../components/swiperHot/swiperHot.vue";

  export default{
    name:"welfareIndex",
    components:{
      searchInp,
      swiperComp,
      swiperZone,
      swiperHot
    },
    data(){
        return{
          swiperDatas:"",
          swiperZone:"",
          swiperHot:""
        }
    },
    mounted(){
        /* 获取轮播图数据 */
        this.$http.get('/api/swiperData')
          .then(response => {
              /* 成功 */
              this.swiperDatas = response.body.swiperData;
          },response => {
              /* 失败 */
            console.log(response)
          });
        /* 获取大客户专区数据 */
      this.$http.get('/api/swiperZone')
        .then(response => {
          /* 成功 */
          this.swiperZone = response.body.swiperZone;
        },response => {
          /* 失败 */
          console.log(response)
        });
        /* 获取热门商品数据 */
      this.$http.get('/api/swiperHot')
        .then(response => {
          /* 成功 */
          this.swiperHot = response.body.swiperHot;
        },response => {
          /* 失败 */
          console.log(response)
        });
    }
  }
</script>
