// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue.js的默认值
import Vue from 'vue'
//　引入App.vue的默认值
import App from './App'
//设置false以阻止vue在启用时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
