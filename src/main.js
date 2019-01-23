// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//项目核心文件
import Vue from 'vue'
import router from './router/router.js'
import App from './App'
//阻止启动生产消息
Vue.config.productionTip = false
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
