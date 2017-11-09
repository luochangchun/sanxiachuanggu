import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../src/components/store/store'
import * as types from '../src/components/store/types'

import Main from '../src/Main.vue'
import Index from '../src/components/Index.vue'//首页
import Map from '../src/components/Map.vue'//地图
import Activitys from '../src/components/Activitys.vue'//活动首页
import ActivityPara from '../src/components/ActivityPara.vue'//活动详情
import article from '../src/components/article.vue'//活动详情
import Register from '../src/components/register/register.vue'//注册页面
import Login from '../src/components/register/login.vue'//登录页面
import ForgetPassword from '../src/components/register/forgetPassword.vue'//忘记密码
import Talent from '../src/components/talent.vue'//创谷人才首页
import TutorDetail from '../src/components/tutorDetail.vue'//创谷人才首页
import TrainList from '../src/components/trainList.vue'//创谷学院讲师列表
import TutorList from '../src/components/tutorList.vue'//
import FinancingDetail from '../src/components/financingDetail.vue'//创谷人才首页
import FinancingList from '../src/components/financingList.vue'//融资项目列表页面
import TopicList from '../src/components/topicList.vue'//今日头条列表页
import splendid_list from '../src/components/splendid_list.vue'//精彩瞬间列表页
import service_class from '../src/components/service_class.vue'//服务商分类列表页
import personalCenter from '../src/components/personalCenter/personalCenter.vue';//个人中心
import demand_comm_service01 from '../src/components/personalCenter/demand_comm_service01.vue';//个人中心--服务需求
import personalInformation from '../src/components/personalCenter/personalInformation.vue';//个人中心--个人资料
import passwordSetting from '../src/components/personalCenter/passwordSetting.vue';//个人中心--个人资料
import service_detail from '../src/components/personalCenter/service_detail.vue';//个人中心--个人服务详情
import service_apply from '../src/components/service_apply.vue';//服务企业入驻申请表
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
import train_Application from '../src/components/train_Application.vue'
import into from '../src/components/into.vue'
import need from '../src/components/need.vue'
import provider from '../src/components/provider.vue'
import question from '../src/components/question.vue'
//10.26
import train_detail from '../src/components/train_detail.vue'
import splendid_detail from '../src/components/splendid_detail.vue'
import activity_more from '../src/components/activity_more.vue'
import space_more from '../src/components/space_more.vue'
import incubator_more from '../src/components/incubator_more.vue'
//10.27
import into_more from '../src/components/into_more.vue'
import service_provider_more from '../src/components/service_provider_more.vue'
import invest_more from '../src/components/invest_more.vue'
import invest_detail from '../src/components/invest_detail.vue'
import financingDetail from '../src/components/financingDetail.vue'
//10.29
import problem from '../src/components/problem.vue'
import tutorProblem from '../src/components/tutorProblem.vue'
import service_needs from '../src/components/service_needs.vue'
//10.30
import attract from '../src/components/attract.vue'
import attract_college from '../src/components/attract_college.vue'
// import demand from '../src/components/demand.vue'
import financing_more from '../src/components/financing_more.vue'
import attract_detail from '../src/components/attract_detail.vue'
import demand_detail from '../src/components/demand_detail.vue'
import attract_list from '../src/components/attract_list.vue'
import demand_list from '../src/components/demand_list.vue'
//11.2
import office_list_window from '../src/components/office_list_window.vue'
import office_list_policy from '../src/components/office_list_policy.vue'
import office_list_detail from '../src/components/office_list_detail.vue'
//11.8
import talent_detail from '../src/components/talent_detail.vue'
//11.9
import employment from '../src/components/employment.vue'


Vue.use(VueRouter)

const routes = [
	{path: '/index', component: Index, name: 'Index'},
	{path: '/map', component: Map, name: 'Map'},
	{ path: '/activitys', component: Activitys, name: 'Activitys' },
	{ path: '/activityPara/:id', component: ActivityPara, name: 'ActivityPara' },
	{ path: '/article/:id', component: article, name: 'article' },
	{ path: '/service', component: service, name: 'service' },
	{ path: '/register', component: Register, name: 'Register' },
	{ path: '/login', component: Login, name: 'Login' },
	{ path: '/service_apply', component: service_apply, name: 'service_apply' },
	{ path: '/forgetPassword', component: ForgetPassword, name: 'ForgetPassword' },
	{ path: '/talent', component: Talent, name: 'Talent' },
	{ path: '/trainList', component: TrainList, name: 'trainList' },//培训讲师列表
	{ path: '/tutorDetail/:id', component: TutorDetail, name: 'tutorDetail' },//导师详情
	{ path: '/tutorList', component: TutorList, name: 'tutorList' },//导师列表
	{ path: '/financingDetail/:id', component: FinancingDetail, name: 'financingDetail' },//融资项目详情
	{ path: '/financingList', component: FinancingList, name: 'financingList' },//融资项目列表页面
	{ path: '/topicList', component: TopicList, name: 'topicList' },//融资项目详情
	{ path: '/service_class/:id', component: service_class, name: 'service_class' },//服务商分类列表页面
	{path: '/personalCenter', component: personalCenter, name: 'personalCenter', children: [
		{ path: '/demand_comm_service/:type', component: demand_comm_service01, name: 'demand_comm_service01', hidden: true,meta: {requireAuth: true,} },
		{ path: '/personalInformation', component: personalInformation, name: 'personalInformation' },
		{ path: '/passwordSetting', component: passwordSetting, name: 'passwordSetting' },
		{ path: '/service_detail/:id', component: service_detail, name: 'service_detail' },
		]},
	//个人中心
	//  罗长春
	{ path: '/news', component: news, name: 'news' },//创谷资讯首页
	{ path: '/incubators', component: incubators, name: 'incubators' },//双创空间首页
	{ path: '/service', component: service, name: 'service' },//创谷企业首页
	{ path: '/financing', component: financing, name: 'financing' },//投融资库首页
	{ path: '/research', component: research, name: 'research' },//创谷研究首页
	{path: '/station/:id', component: station, name: 'station', meta: {requireAuth: true,}},//申请工位表单
	{ path: '/college', component: college, name: 'college' },//创谷学院首页
	{ path: '/position', component: position, name: 'position' },//申请职位表单
	{ path: '/school_detail/:id', component: school_detail, name: 'school_detail' },//学院详情
	{ path: '/incubators_details/:id', component: incubators_details, name: 'incubators_details' },//双创空间详情页
	{path: '/enter/:id', component: enter, name: 'enter', meta: {requireAuth: true,}},//申请入驻表单
	{path: '/train_Application/:id', component: train_Application, name: 'train_Application', meta: {requireAuth: true,}},//活动报名表单
	{ path: '/provider/:id', component: provider, name: 'provider' },//服务商详情页
	{ path: '/into/:id', component: into, name: 'into' },//入孵企业详情页
	{ path: '/need', component: need, name: 'need' },//服务需求
	{ path: '/question', component: question, name: 'question' },//答疑解惑页面
	//10.26
	{ path: '/train_detail/:id', component: train_detail, name: 'train_detail' },//培训活动详情页
	{ path: '/splendid_detail/:id', component: splendid_detail, name: 'splendid_detail' },//精彩瞬间详情页
	{ path: '/splendid_list', component: splendid_list, name: 'splendid_list' },//精彩瞬间详情页
	{ path: '/activity_more', component: activity_more, name: 'activity_more' },//活动(more)
	{ path: '/space_more', component: space_more, name: 'space_more' },//双创空间(more)
	{ path: '/incubator_more', component: incubator_more, name: 'incubator_more' },//孵化器(more)
	//10.27
	{ path: '/invest_detail/:id', component: invest_detail, name: 'invest_detail' },//投资机构详情页
	{ path: '/invest_more', component: invest_more, name: 'invest_more' },//投资机构(more)
	{ path: '/into_more', component: into_more, name: 'into_more' },//入孵企业(more)
	{ path: '/service_provider_more', component: service_provider_more, name: 'service_provider_more' },//服务商(more)
	{ path: '/financingDetail', component: financingDetail, name: 'financingDetail' },//投资项目详情页
	//10.29
	{path: '/problem/:type', component: problem, name: 'problem', meta: {requireAuth: true,} },//发布企业难题表单
	{ path: '/tutorProblem/:businessId/:id', component: tutorProblem, name: 'tutorProblem', meta: {requireAuth: true,} },//向导师发布技术难题表单
	{ path: '/service_needs', component: service_needs, name: 'service_needs' },//服务需求发布表单
	//10.30
	{ path: '/attract/:type', component: attract, name: 'attract' },//招商/求租列表页
	{ path: '/attract_college/:type', component: attract_college, name: 'attract_college' },//创谷学院招商讯息页
	// { path: '/demand', component: demand, name: 'demand' },//求租讯息页
	{ path: '/financing_more', component: financing_more, name: 'financing_more' },//融资项目(more)
	{ path: '/attract_detail/:id', component: attract_detail, name: 'attract_detail' },//招商讯息详情
	{ path: '/demand_detail', component: demand_detail, name: 'demand_detail' },//求租讯息详情
	{path: '/attract_list/:categoryId/:type', component: attract_list, name: 'attract_list', meta: {requireAuth: true,} },//招商发布表单
	{ path: '/demand_list', component: demand_list, name: 'demand_list' },//求租发布表单
	//11.2
	{ path: '/office_list_window', component: office_list_window, name: 'office_list_window' },//双创办公室服务窗口列表
	{ path: '/office_list_policy', component: office_list_policy, name: 'office_list_policy' },//双创办公室优惠政策列表
	{ path: '/office_list_detail/:id', component: office_list_detail, name: 'office_list_detail' },//双创办公室详情
	// { path: '/financing_needs', component: financing_needs, name: 'financing_needs' },//融资需求表单
	{path: '*',redirect: '/index'},
	//11.8
	{path: '/talent_detail', component: talent_detail, name: 'talent_detail' },//招聘详情
	//11.9
	{ path: '/employment', component: employment, name: 'employment' },//招聘表单
];
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
	store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
if (window.localStorage.getItem('userinfo')) {
	store.commit(types.USERINFO, window.localStorage.getItem('userinfo'))
}
const router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'hash',
	base: __dirname,
	routes: routes
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(r => r.meta.requireAuth)) {
		if (store.state.token) {
			window.scrollTo(0, 0);
			next();
		}
		else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	}
	else {
		window.scrollTo(0, 0);
		next();
	}
})
export default router;
