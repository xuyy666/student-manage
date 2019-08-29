import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger';

// 引入模块
// import register from './modules/register.js';
import login from './modules/login'
import register from './modules/register'
console.log('login',login)
console.log('register',register)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    register, 
    login       // 登录
  },
  // state: {},
  // mutations: {},
  // actions: {},
  // plugins: [createLogger()]
})
