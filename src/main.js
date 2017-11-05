import Vue from 'vue'
import store from '../src/components/store/store'
import api from './axios/api'
import ElementUI from 'element-ui'
import '../static/css/reset.css'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/main.css'
import App from './App'
import router from './routes.js'

Vue.use(ElementUI)
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  api,
  render: h => h(App)
})
