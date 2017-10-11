import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/Main.vue'
import Index from '../src/components/Index.vue'


Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index}
]

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:routes
})
