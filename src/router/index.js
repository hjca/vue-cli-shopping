import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';

//引用的界面
import indexWelfare from '@/page/index/index';    //员工福利领取的主页
import ShoppingClass from '@/page/shopClassification/shopClassification';    //商品分类
import ShoppingCart from '@/page/shoppingCart/shoppingCart';    //商品购物车
import UserShoppingInfo from '@/page/userShopInfo/userShopInfo';    //个人中心
import ShoppingDetail from '@/page/shopDetail/shopDetail';     //商品详情

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
    {
      path:"/index",
      name:'indexWelfare',
      component:indexWelfare
    },{
      path:"/detail/:shopId",
      name:"ShoppingDetail",
      component:ShoppingDetail
    }
  ]
})
