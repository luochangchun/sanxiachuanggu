import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap';
import '../static/css/reset.css'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from '../config/routes.js'
require('./mock.js')

Vue.use(ElementUI)//引入element.ui

Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
