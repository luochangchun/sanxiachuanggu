import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../src/Main.vue'
import Index from '../src/components/Index.vue'//首页
import Map from '../src/components/Map.vue'//地图
import InformationPara from '../src/components/InformationPara.vue'
import Activitys from '../src/components/Activitys.vue'//活动首页
import ActivityPara from '../src/components/ActivityPara.vue'//活动详情
import Register from '../src/components/register/register.vue'//注册页面
import Login from '../src/components/register/login.vue'//登录页面
import ForgetPassword from '../src/components/register/forgetPassword.vue'//忘记密码
import Talent from '../src/components/talent.vue'//创谷人才首页



//罗长春
import news from '../src/components/news.vue'
import incubators from '../src/components/incubators.vue'
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
import into from '../src/components/into.vue'
import need from '../src/components/need.vue'
import provider from '../src/components/provider.vue'
import question from '../src/components/question.vue'





Vue.use(VueRouter)
const routes = [
  {path: '/', component: Index, name: 'Index'},
  {path: '/map', component: Map, name: 'Map'},
  {path: '/activitys', component: Activitys, name: 'Activitys'},
  {path: '/activityPara/:id', component: ActivityPara, name: 'ActivityPara'},
  {path: '/service', component: service, name: 'service'},
  {path: '/register', component: Register, name: 'Register'},
  {path: '/login', component: Login, name: 'Login'},
  {path: '/forgetPassword', component: ForgetPassword, name: 'ForgetPassword'},
  {path: '/talent', component: Talent, name: 'Talent'},







//  罗长春
	{path: '/news', component: news, name: 'news'},//创谷资讯首页
	{path: '/incubators', component: incubators, name: 'incubators'},//双创空间首页
	{path: '/service', component: service, name: 'service'},//创谷企业首页
	{path: '/financing', component: financing, name: 'financing'},//投融资库首页
	{path: '/research', component: research, name: 'research'},//创谷研究首页
	{path: '/station', component: station, name: 'station'},//申请工位表单
	{path: '/college', component: college, name: 'college'},//创谷学院首页
	{path: '/position', component: position, name: 'position'},//申请职位表单
	{path: '/school_detail', component: school_detail, name: 'school_detail'},//学院详情
	{path: '/incubators_details/:id', component: incubators_details, name: 'incubators_details'},//双创空间详情页
	{path: '/enter', component: enter, name: 'enter'},//申请入驻表单
	{path: '/train', component: train, name: 'train'},//活动报名表单
	{path: '/provider', component: provider, name: 'provider'},//服务商详情页
	{path: '/provider/:id', component: provider, name: 'provider'},//服务商详情页
	{path: '/into', component: into, name: 'into'},//入孵企业详情页
	{path: '/need', component: need, name: 'need'},//服务需求
	{path: '/question', component: question, name: 'question'},//答疑解惑页面


]

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:routes
})
