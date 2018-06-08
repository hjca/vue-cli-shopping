<template>
    <div id='shopItem'>
      <div class="shopListItem" v-for="(item,index) in shopListData" @click.stop="choseShopItem(item.shopId)">
        <div class="parentNode" ref="parentNode">
          <!-- 按钮选择 -->
          <div class="checkInp">
            <img :src="shopImgs" v-if="shopSelect.indexOf(item.shopId)>=0">
            <span class="mockCheck" v-else></span>
          </div>
          <!-- 商品信息 -->
          <div class="shopItemInfo">
            <!-- 商品图片 -->
            <div class="shopItemImg">
              <img :src="item.imgUrl">
            </div>
            <!-- 详细信息 -->
            <div class="shopItemMeage">
              <p class="shopNamw">{{ item.shopName }}</p>
              <div class="price">
                <span class="shopPrie">{{item.nowPrice}}￥</span>
                <div class="addNum">
                  <span class="minus" @click.stop="minusNum(item.shopId,item.num)">-</span>
                  <span class="showNum">{{ item.num }}</span>
                  <span class="add" @click.stop="addNum(item.shopId)">+</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 删除按钮 -->
          <div class="deleteShopItem" @click="del(item.shopId)">删除</div>
        </div>
      </div>
      <div class="footer">
        <div class="checkInp" @click.stop="allChoose">
          <img :src="shopImgs" v-if="shopSelect.length == shopListData.length">
          <span class="mockCheck" v-else></span>
          <p class="allChoose">全选</p>
        </div>
        <div class="showPrice">
          <div class="priceTotal">合计：
            <span class="redPrice">{{$store.state.shopTotalPrice}}元</span>
          </div>
          <div class="gpPayPrice" @click.stop="payPrice">结算
            <!--<span class="jianshu" v-if="$store.state.shopTotalNum != 0">{{$store.state.shopTotalNum}}件</span>-->
          </div>
        </div>
      </div>
    </div>
</template>

<style type='text/css' scoped>
  .shopListItem{
    width:100%;
    height: 2.6rem;
    background: #ffffff;
    border-top:1px solid #f3f4f7;
    overflow: hidden;
  }
  .parentNode{
    width:120%;
    height:100%;
    display: flex;
    justify-content: space-between;
  }
  .down{
    animation: moveRects 0.5s ease-out 0s normal 1 forwards;
  }
  .checkInp{
    width: 10%;
    height:100%;
    /*float: left;*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .checkInp img{
    width:.4rem;
    height:.4rem;
  }
  .allChoose{
    font-size: 10px;
    width:auto;
    height:auto;
  }
  .mockCheck{
    display: inline-block;
    width:.4rem;
    height:.4rem;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    border: 1px solid #999999;
  }
  .shopItemInfo{
    /*float: left;*/
    width: 73%;
    display: flex;
    justify-content: space-between;
    padding-top: .24rem;
  }
  .shopItemImg{
    width: 2rem;
    height: 2rem;
    border: 1px solid #eeeeee;
    padding: .1rem;
  }
  .shopItemMeage{
    flex:1;
    height:2rem;
    padding: 0 .1rem;
    position: relative;
  }
  .shopNamw{
    font-size: 15px;
    font-weight: 500;
  }
  .price{
    width: 100%;
    height:auto;
    position: absolute;
    left:0;
    bottom: 0;
    padding: 0 .2rem 0 .1rem;
  }
  .shopPrie{
    font-size: 20px;
    color: #fa3c3c;
    float: left;
  }
  .addNum{
    width: 2rem;
    height:.5rem;
    float: right;
  }
  .minus,.showNum,.add{
    display: inline-block;
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: .4rem;
    color: #999999;
    font-weight: 100;
    border: 1px solid #eeeeee;
    float: left;
    font-size: .6rem;
  }
  .showNum{
    width: 50%;
    font-size: .3rem;
    border: none;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
  }
  .footer{
    width:100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left:0;
    bottom: 0;
    background:#ffffff;
  }
  .showPrice{
    flex: 1;
    height:100%;
    display: flex;
    justify-content: space-between;
  }
  .priceTotal,.gpPayPrice{
    width:50%;
    height:100%;
    font-size: .3rem;
    font-weight: bold;
    text-align: center;
    line-height: 1rem;
  }
  .redPrice{
    font-size: .3rem;
    font-weight: bold;
    color: #fa3c3c;
  }
  .gpPayPrice{
    color: #ffffff;
    background: #4285f4;
  }
  .deleteShopItem{
    height:100%;
    width:16%;
    /*float: right;*/
    color: #ffffff;
    line-height: 2.6rem;
    text-align: center;
    background: #fa3c3c;
    font-size: .3rem;
  }
  .swipeleft{
    animation: moveRect 0.5s ease-out 0s normal 1 forwards;
  }
  .noBorderTop{
    border:none;
  }

  @keyframes moveRect{
    from{
      transform: translateX(0);
      -webkit-transform:translateX(0);
    }
    to{
      transform:translateX(-15%);
      -webkit-transform:translateX(-15%);
    }
  }
  @keyframes moveRects{
    from{
      transform:translateX(-15%);
      -webkit-transform:translateX(-15%);
    }
    to{
      transform: translateX(0);
      -webkit-transform:translateX(0);
    }
  }
</style>

<script type="text/javascript">
  import shopImg from "../../static/images/selected.png";
  import { Toast } from 'mint-ui';
  import store from '../../store/store.js';
    export default {
        name: "shopItem",
        props:['shopListData'],
        data(){
            return {
              shopImgs:shopImg,
              num:1,
              shopSelect:[]
            }
        },
        mounted(){
          this.$nextTick(function(){
            var $this=this;														//将$this保存 区分以下触发事件的this
            var container = document.querySelectorAll('.parentNode');
            for(var i = 0; i < container.length; i++){                          //为每个特定DOM元素绑定touchstart touchmove时间监听 判断滑动方向
              var x,  X;
              container[i].addEventListener('touchstart', function(event) {   //记录初始触控点横坐标
                x = event.changedTouches[0].pageX;
              });
              container[i].addEventListener('touchmove', function(event){
                X = event.changedTouches[0].pageX;                          //记录当前触控点横坐标
                if($this.expansion){                                       //判断是否展开，如果展开则收起
                  $this.expansion.className = "parentNode down";
                }
                if(X - x > 10){                                             //右滑
                  this.className = "parentNode down";                                    //右滑收起
                }
                if(x - X > 10){                                             //左滑
                  this.className = "parentNode swipeleft";                           //左滑展开
                  $this.expansion = this;
                }
              });
            }
          })
        },
        methods: {
            /* 删除数量数量 */
          minusNum(id,num){
            this.orShoppingId(id);
              num > 1 ?
                store.commit('minShoppingCartNum', id) :
                Toast("该商品1件起售")
          },
          /* 添加数量数量 */
          addNum(id){
            this.orShoppingId(id)
            store.commit('addShoppingCartNum', id);
          },
          /* 判断时候存在商品ID */
          orShoppingId(id){
            let idIndex = this.shopSelect.indexOf(id);
            if (idIndex < 0) {
              this.shopSelect.push(id)
            }
          },
          /* 选择商品 */
          choseShopItem(id){
            let idIndex = this.shopSelect.indexOf(id)
            if (idIndex >= 0) {
              // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
              this.shopSelect.splice(idIndex, 1);
              store.commit("calculationmine",id);
            } else {
              // 选中该checkbox
              this.shopSelect.push(id);
              store.commit("calculationadd",id);
            }
          },
          /* 全选 */
          allChoose(){
              if(this.shopSelect.length == this.shopListData.length){
                  this.shopSelect = [];
                store.commit("priceToalMine");
              }else{
                this.shopSelect = [];
                store.commit("priceToalAdd");
                this.shopListData.forEach(function (item) {
                  this.shopSelect.push(item.shopId)
                }, this)
              }
          },
          /* 结算 */
          payPrice(){
              this.shopSelect.length ?
                Toast("支付成功") :
                Toast("您还没有选择商品")
          },
          /* 删除 */
          del(id){
            store.commit("deleteShopItem",id);
          }
        },
      store
    }
</script>
