import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  shoppingCart:[{
    imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528867984&di=7ff4892606a618917634250a2dbdd57e&imgtype=jpg&er=1&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F05%2F07%2FFs3TQq9SD4XSYdk8wk18KQ8YdxVX.jpg%21580x580.jpg",
    shopId:"shop1",
    shopName:"甜点",
    originalpPrice:29,
    nowPrice:20,
    num:1,
    shopInfo:"健康营养"

  },
    {
      imgUrl:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=650041796,2608356960&fm=27&gp=0.jpg",
      shopId:"shop2",
      shopName:"红酒",
      originalpPrice:1578,
      nowPrice:1326,
      num:1,
      shopInfo:"醇香酿造"
    }],
  shopTotalNum:0,
  shopTotalPrice:0
}

const mutations={
  addShoppingCart(state,value){
    //添加购物车信息
    if(state.shoppingCart.length){

      let afterCart = state.shoppingCart.filter((item) => {
        return item.shopId == value.shopId;
      });

      if(afterCart.length){
        for(let item of state.shoppingCart){
          if(item.shopId == value.shopId){
            item.num = parseInt(item.num) + 1;
            return;
          }
        }
      }else{
        state.shoppingCart.push(value);
      }
    }else{
      state.shoppingCart.push(value);
    }
  },

  /* 添加购物车数量 */
  addShoppingCartNum(state,id){
    for(let item of state.shoppingCart){
      if(item.shopId == id){
        item.num = parseInt(item.num) + 1;
        state.shopTotalPrice = item.nowPrice *item.num
        return;
      }
    }
  },
  /* 删除购物车数量 */
  minShoppingCartNum(state,id){
    for(let item of state.shoppingCart){
      if(item.shopId == id){
        item.num = parseInt(item.num) - 1;
        if(state.shopTotalPrice){
          state.shopTotalPrice -= item.nowPrice;
        }
        return;
      }
    }
  },
  /* 计算价格 */
  calculationmine(state,id){
    for(let item of state.shoppingCart){
      if(item.shopId == id){
        state.shopTotalPrice -= item.nowPrice * item.num;
        return;
      }
    }
  },
  calculationadd(state,id){
    for(let item of state.shoppingCart){
      if(item.shopId == id){
        state.shopTotalPrice += item.nowPrice * item.num;
        return;
      }
    }
  },
  /* 总价格的添加删除 */
  priceToalAdd(state){
    state.shopTotalPrice = 0;
    for(let item of state.shoppingCart){
      state.shopTotalNum += item.num
      state.shopTotalPrice += item.nowPrice * item.num;
    }
  },
  priceToalMine(state){
    state.shopTotalNum = 0;
    state.shopTotalPrice = 0;
  },

  /* 删除商品 */
  deleteShopItem(state,id){
    /*for(let item of state.shoppingCart){
      if(item.shopId == id){

        return;
      }
    }*/
    for(let item = 0; item < state.shoppingCart.length; item++){
      if(state.shoppingCart[item].shopId == id){
        state.shoppingCart.splice(item,1)
        return;
      }
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
