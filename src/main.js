import Vue from 'vue'
import ElementUI from 'element-ui'
import '../static/css/reset.css'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/main.css'
import App from './App'
import router from '../config/routes_zw.js'


Vue.use(ElementUI)

require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
