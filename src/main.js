// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Screen from './util/sizerem';

import "./static/ressetCss/reset.css";
import "./static/font/style.css";
import 'swiper/dist/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//模拟数据
require('./util/mockData');

Vue.config.productionTip = false;

Screen()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
