// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import { store } from '@/Store/Store.js';
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(Vuex);
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false
Vue.use(VueCarousel)
Vue.directive('scroll', {
  bind (el, binding, vnode) {
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  methods: {
  }
})
