// 引入vue实例
import Vue from 'vue/dist/vue.common.js'
// 引入ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入app组件
import App from './App'
// 引入router路由
import Router from 'vue-router'
// 引入自定义的路由组
import routes from './router/index.js'

const router = new Router({
  routes,
  mode: 'history'
})

Vue.use(Router)
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  Router,
  router
}).$mount('#app')
