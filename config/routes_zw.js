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
import tutor from '../src/components/tutor.vue'
import service from '../src/components/service.vue'
import financing from '../src/components/financing.vue'
import college from '../src/components/college.vue'
import station from '../src/components/station.vue'
import position from '../src/components/position.vue'
import school_detail from '../src/components/school_detail.vue'
import research from '../src/components/research.vue'
import incubators_details from '../src/components/incubators_details.vue'
import enter from '../src/components/enter.vue'
import train from '../src/components/train.vue'
import provider from '../src/components/provider.vue'





Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index, name: 'Index'},
  {path: '/map', component: Map, name: 'Map'},
  {path: '/informationPara', component: InformationPara, name: 'InformationPara'},
  {path: '/activitys', component: Activitys, name: 'Activitys'},
  {path: '/activityPara/:id', component: ActivityPara, name: 'ActivityPara'},
  {path: '/service', component: service, name: 'service'},
  {path: '/register', component: Register, name: 'Register'},
  {path: '/login', component: Login, name: 'Login'},
  {path: '/forgetPassword', component: ForgetPassword, name: 'ForgetPassword'},
  {path: '/talent', component: Talent, name: 'Talent'},







//  罗长春
	{path: '/news', component: news},
	{path: '/incubators', component: incubators},
	{path: '/tutor', component: tutor},
	{path: '/service', component: service},
	{path: '/financing', component: financing},
	{path: '/research', component: research},
	{path: '/station', component: station},
	{path: '/college', component: college},
	{path: '/position', component: position},
	{path: '/school_detail', component: school_detail},
	{path: '/incubators_details/:id', component: incubators_details, name: 'incubators_details'},
	{path: '/enter', component: enter},
	{path: '/train', component: train},
	{path: '/provider/:id', component: provider},


]

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:routes
})
