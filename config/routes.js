import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/Main.vue'
import Index from '../src/components/Index.vue'
import Map from '../src/components/Map.vue'
import news from '../src/components/news.vue'
import InformationPara from '../src/components/InformationPara.vue'


Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index},
  {path: '/map', component: Map},
  {path: '/news', component: news},
  {path: '/informationPara', component: InformationPara}
]

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:routes
})
