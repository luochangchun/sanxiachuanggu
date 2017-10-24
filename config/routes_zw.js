import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/Main.vue'
import Index from '../src/components/Index.vue'
import Map from '../src/components/Map.vue'
import InformationPara from '../src/components/InformationPara.vue'
import Activitys from '../src/components/Activitys.vue'
import ActivityPara from '../src/components/ActivityPara.vue'
import Register from '../src/components/register/register.vue'
import Login from '../src/components/register/login.vue'
import ForgetPassword from '../src/components/register/forgetPassword.vue'
import Talent from '../src/components/talent.vue'







//罗长春
import news from '../src/components/news.vue'
import incubators from '../src/components/incubators.vue'
import research from '../src/components/research.vue'
import service from '../src/components/service.vue'
import financing from '../src/components/financing.vue'
import college from '../src/components/college.vue'
import enter from '../src/components/enter.vue'
import incubators_details from '../src/components/incubators_details.vue'
import station from '../src/components/station.vue'






Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index},
  {path: '/map', component: Map},
  {path: '/informationPara', component: InformationPara},
  {path: '/activitys', component: Activitys},
  {path: '/activityPara', component: ActivityPara},
  {path: '/service', component: service},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/forgetPassword', component: ForgetPassword},
  {path: '/talent', component: Talent},







//  罗长春
	{path: '/news', component: news},
	{path: '/incubators', component: incubators},
	{path: '/research', component: research},
	{path: '/service', component: service},
	{path: '/financing', component: financing},
	{path: '/service', component: service},
	{path: '/college', component: college},
	{path: '/enter', component: enter},
	{path: '/incubators_details', component: incubators_details},
	{path: '/station', component: station}


]

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:routes
})
