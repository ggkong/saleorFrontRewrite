// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueI18n from 'vue-i18n'
// require styles
import 'swiper/css/swiper.css'
import store from './store'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh-CN',
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
   'zh-CN': require('./lang/zh'), // 中文语言包
   'en-US': require('./lang/en') // 英文语言包
  }
 })

// Vue.use(VueApollo);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
