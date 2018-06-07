<!-- 商品详情 -->
<template>
    <div id='shoppingDetail'>
      <!-- 展示商品图片 -->
      <div class="showShopImg">
        <img :src="shopItemData.imgUrl" alt="">
      </div>
      <!-- 显示商品信息 -->
      <div class="showShopItemInfo">
        <!-- 商品名称 -->
        <p class="shopName">{{shopItemData.shopName}}</p>
        <!-- 商品介绍 -->
        <p class="shopInfo">{{shopItemData.shopInfo}}</p>
        <!-- 商品价格 -->
        <p class="shopItemPrice">{{shopItemData.nowPrice}}元</p>
      </div>
    </div>
</template>

<style type='text/css' scope>
  .showShopImg{
    width: 100%;
    height:4.8rem;
  }
  .showShopImg img{
    width:100%;
    height:100%;
  }
  .showShopItemInfo{
    width:100%;
    height:auto;
    background: #ffffff;
    padding: .3rem;
  }
  .shopName,.shopInfo,.shopItemPrice{
    font-size: .4rem;
    line-height: .5rem;
  }
  .shopInfo{
    color: #4285f4;
    margin-top: .2rem;
  }
  .shopItemPrice{
    color: #ff8877;
    margin-top: .2rem;
  }
</style>

<script type="text/javascript">
  import shopItemImg from "../../static/images/timg.jpg";
    export default {
        name: "shoppingDetail",
        data(){
            return {
                showImg:shopItemImg,
              shopItemData:''
            }
        },
        mounted(){
            let shopItem = this.$route.params.shopId;
            window.sessionStorage.setItem("shopItem",shopItem)
            this.$http.post('/api/shopItem',{shopId:shopItem},{emulateJSON: true})
              .then((response)=>{
                  this.shopItemData = JSON.parse(response.bodyText);
                  console.log(response);
                  console.log(this);
                },
                (error)=>{
                  console.log(error);
                })
        },
        methods: {}
    }
</script>
