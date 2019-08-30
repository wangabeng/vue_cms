import Vue from 'vue'
import App from './App.vue'
// 引入 router
import router from './router'
// 引入全局变量$
import $ from 'jquery'
// 导入bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import 'common/sass/index.scss'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
