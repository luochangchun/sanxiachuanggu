import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/Main.vue'
import Index from '../src/components/Index.vue'
import Map from '../src/components/map.vue'//地图组件

Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index},
  {path: '/map', component: Map}
]

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:routes
})
