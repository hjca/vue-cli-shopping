const Mock = require('mockjs');
import mockData from "./xuData";
//轮播图数据
Mock.mock( '/api/swiperData',(req,res) => {
  return {
    swiperData:mockData.swiperData
  }
})
//大客户专区
Mock.mock( '/api/swiperZone',(req,res) => {
  return {
    swiperZone:[{
      imgUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2795357114,121696106&fm=27&gp=0.jpg",
      shopId:"zone1"
    },
      {
        imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1722726560,2657394884&fm=27&gp=0.jpg",
        shopId:"zone2"
      },{
        imgUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3714552854,3573728250&fm=27&gp=0.jpg",
        shopId:"zone3"
      },
      {
        imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4282075405,2826240723&fm=27&gp=0.jpg",
        shopId:"zone4"
      }]
  }
})
//热门商品
Mock.mock( '/api/swiperHot',(req,res) => {
  return {
    swiperHot:[{
      imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1807822526,2075352977&fm=27&gp=0.jpg",
      shopId:"hot1"
    },
      {
        imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2928642337,371199138&fm=27&gp=0.jpg",
        shopId:"hot2"
      },{
        imgUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2277847282,2767638118&fm=27&gp=0.jpg",
        shopId:"hot3"
      },
      {
        imgUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3195708159,1656796882&fm=27&gp=0.jpg",
        shopId:"hot4"
      },
      {
        imgUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3147621329,1428756933&fm=27&gp=0.jpg",
        shopId:"hot5"
      }]
  }
})

/* post提交数据 */
Mock.mock( '/api/shopItem',(req,res) => {
  let shopIds = window.sessionStorage.getItem("shopItem");
  let afterData = mockData.swiperData.filter((item) => {
    return item.shopId == shopIds;
  })
  return afterData[0];
})
