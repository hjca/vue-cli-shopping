<!-- 商品详情 -->
<template>
    <div id='shoppingDetail'>
      <welfareTitle :head-title="titleName"></welfareTitle>
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
      <!-- 商品详情下面的加入购物车、立即兑换等功能 -->
      <div class="addShopCart">
        <!-- 购物车 -->
        <router-link to="/cart" class="watchShopCart">
          <i class="icon-shoppingcart"></i>
          <span>购物车</span>
          <span class="cartNum" v-if="$store.state.shoppingCart.length > 0">{{ $store.state.shoppingCart.length }}</span>
        </router-link>
        <div class="addCart">
          <!-- 加入购物车 -->
          <div class="addShop" @click.stop="addShopCart(shopItemData.shopId)">加入购物车</div>
          <!-- 立即兑换 -->
          <div class="exchange">立即兑换</div>
        </div>
      </div>
    </div>
</template>

<style type='text/css' scoped>
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
  .addShopCart{
    width:100%;
    height: 1rem;
    background: #ffffff;
    position: fixed;
    left:0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
  }
  .watchShopCart{
    height:100%;
    width: 2rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  .watchShopCart .cartNum{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: #ff4f4f;
    position: absolute;
    top: .1rem;
    right: .6rem;
    border-radius: 50%;
    color: #ffffff;
    line-height: .3rem;
    text-align: center;
  }
  .watchShopCart span{
    display: inline-block;
    height:auto;
    font-size: .3rem;
    color: #999999;
  }
  .watchShopCart i{
    display: inline-block;
    height: .5rem;
    line-height: 1px;
  }
  .icon-shoppingcart:before{
    font-size: .5rem;
    color: #999999;
  }
  .addCart{
    height:100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .addShop,.exchange{
    height:100%;
    width:50%;
    line-height: .96rem;
    color: #ffffff;
    text-align: center;
    font-size: .4rem;
  }
  .addShop{
    background: #4285f4;
  }
  .exchange{
    background: #ff4f4f;
  }
</style>

<script type="text/javascript">
  import { Indicator,Toast } from 'mint-ui';
  import store from '../../store/store.js';
  import welfareTitle from "../../components/welfareHead/welfareHead.vue";
    export default {
      name: "shoppingDetail",
      components:{
        welfareTitle
      },
      data(){
          return {
            shopItemData:'',
            titleName:""
          }
      },
      mounted(){
          let shopItem = this.$route.params.shopId;
          window.sessionStorage.setItem("shopItem",shopItem)
          this.$http.post('/api/shopItem',{shopId:shopItem},{emulateJSON: true})
            .then((response)=>{
                this.shopItemData = response.data;
                this.titleName = response.data.shopName;
              },
              (error)=>{
                console.log(error);
              })
      },
      methods: {
          /* 添加购物车 */
        addShopCart(shopId){
          this.addShopCartAjax(shopId);
        },
        /* 添加购物车的数据接口 */
        addShopCartAjax(shopId){
          this.$http.post('/api/shopItem',{shopId:this.shopItemData},{
              emulateJSON: true,
              before:request => {
                Indicator.open('加载中...');
              }})
            .then((response)=>{
                Indicator.close();
                Toast({
                  message: '添加成功'
                });
                this.shopItemData["num"] = 1;
                store.commit('addShoppingCart', this.shopItemData);
              },
              (error)=>{
                Indicator.close();
                console.log(error);
              })
        }
      },
      store
    }
</script>
