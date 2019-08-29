import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'   //   注意引用出错的
import myHeader from './components/myHeader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


// import echarts from 'echarts'
// Vue.prototype.echarts = echarts; 
Vue.use(ElementUI)
Vue.component('myHeader', myHeader)
Vue.config.productionTip = false;


// new Vue({ el: '#app' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')  //   返回一个vue实例
