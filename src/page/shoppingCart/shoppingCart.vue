<!-- 商品购物车 -->
<template>
    <div id='welfareShopCart'>
      <welfareTitle head-title="购物车"></welfareTitle>
      <shopItemInfo :shop-list-data="shopList"></shopItemInfo>
    </div>
</template>

<style scoped>
  #welfareShopCart{
    width:100%;
    height:100%;
  }
</style>

<script type="text/javascript">
  import shopItemInfo from "../../components/shopItem/shopItem.vue";
  import welfareTitle from "../../components/welfareHead/welfareHead.vue";
  import store from '../../store/store.js';
  import { Toast } from 'mint-ui';
  export default {
    name: "welfareShopCart",
    components:{
      shopItemInfo,
      welfareTitle
    },
    data(){
      return {
          shopList:""
      }
    },
    mounted(){
      this.$store.state.shoppingCart.length ?
        this.shopList = this.$store.state.shoppingCart :
        Toast('暂无商品');
    },
    methods: {},
    store
  }
</script>
