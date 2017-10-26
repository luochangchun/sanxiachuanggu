<template>
    <div>
        <!--header-->
        <!--banner-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="service-banner">
                <el-row :gutter="10">
                    <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                        <el-row :gutter="10">
                            <el-col :lg="4" :md="6" :sm="6" :xs="24" style="background-color:#f9fafa">
                                <div class="service-nav">
                                    <img src="../../static/img/nav_1.png" alt="" style="margin-top: 3px;">
                                    <p>信息化服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_2.png" alt="">
                                    <p>物业服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_3.png" alt="">
                                    <p>设备维修服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_4.png" alt="">
                                    <p>投融资服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_5.png" alt="">
                                    <p>项目申报服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_6.png" alt="">
                                    <p>法律税收服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_7.png" alt="">
                                    <p>人才招聘/培训服务</p>
                                </div>
                                <div class="service-nav" style="border: none;">
                                    <img src="../../static/img/nav_8.png" alt="">
                                    <p>工商注册服务</p>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--服务商专区-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-service">
                    <h1>服务商专区</h1>
                    <p>SERVICE AREA</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="service-show" id="showone" v-for="(item, index) in normal" :key="index">
                        <router-link :to="{ name: 'provider', params: {id: item.id }}">
                            <img :src="item.icon" alt="">
                            <div class="service-opcity">
                                <h2>{{item.name}}</h2>
                                <p>{{item.intro}}</p>
                            </div>
                        </router-link>

                        <img :src="item.icon" alt="">
                        <div class="service-opcity">
                            <h2>{{item.name}}</h2>
                            <p>{{item.intro}}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!-- 服务商 -->
        <div class="service_provider">
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="l service_provider_title"></div>
                    <div class="r more_plus"></div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <el-row class="office_wrap">
                        <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in provider" :key="index">
                            <router-link :to="{name:'provider', params: { id: item.id }}" class="service_provider_item rel">
                                <img :src="item.icon" alt="">
                                <p class="tc">{{item.name}}</p>
                                <i class="tag abs white tc f14">{{item.service}}</i>
                            </router-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!--入孵企业专区-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-company">
                    <h1>入孵企业专区</h1>
                    <p>SERVICE AREA</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(item, index) in 4" :key="index">
                        <!--<router-link>-->
                        <div class="service_into">
                            <img src="../../static/img/servie01.png" alt="">
                            <p class="tc">火凤凰云计算基地</p>
                        </div>
                        <!--</router-link>-->
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!-- footer -->
    </div>
</template>

<script>
	import api from '../axios/api.js'
	import Swiper from '../components/swiper.vue'
	export default {
		data() {
			return {
				provider:'',
				normal:'',
			}
		},
		created() {
			this.researchApi()
		},
		methods: {
			researchApi() {
				api.Get('/enterprises')
					.then(res => {
						this.provider = res['provider'];
						this.normal = res['normal'];
					})
			}
		},
		components: {
			commonSwiper: Swiper
		},
			}
</script>

<style>
    /*banner*/
    .service-banner {
        background-image: url(../../static/img/service-banner_02.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width: 100%;
    }
    .service-nav {
        /*background-image: url(../../static/img/right.png);*/
        /*background-repeat: no-repeat;*/
        /*background-size: 8px;*/
        /*background-position: right;*/
        border-bottom: 1px solid #ddd;
    }
    .service-nav img {
        width: 17px;
        display: inline-block;
        margin-bottom: 0;
        margin-left: 8px;
        margin-right: 8px;
    }
    .service-nav p {
        height: 40px;
        line-height: 40px;
        display: inline-block;
        font-size: 14px;
    }
    /*服务商专区*/
    .title {
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .title h1 {
        color: #0089e3;
        font-size: 18px;
        font-weight: 600;
    }
    .title p {
        color: #ddd;
        font-size: 10px;
    }
    .title hr {
        width: 30%;
        border: 1px solid #454b60;
    }
    .title span {
        display: block;
        border: 2px solid #0089e3;
        width: 10%;
    }
    .title div {
        margin-top: -42px;
    }
    #title-service {
        position: relative;
        margin-top: 50px;
    }
    #title-service span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    /*图片上阴影字*/
    .service-opcity {
        width: 70%;
        background: rgba(255, 255, 255, 0.5);
        height: 70%;
    }
    #showone {
        position: relative;
    }
    #showone div {
        position: absolute;
        top: 15%;
        left: 15%;
    }
    .service-opcity h2 {
        text-align: center;
        margin-top: 15%;
        color: #666;
    }
    .service-opcity p {
        margin: 0 6px;
        text-align: center;
        margin-top: 5%;
        color: #999;
    }
    .service-show img {
        width: 100%;
    }
    /*服务商*/
    .service_provider_item img {
        margin-left: 20%;
    }
    /*入孵企业专区*/
    #title-company {
        position: relative;
    }
    #title-company span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    .service_into p{
        position: relative;
        bottom: 30px;
    }
</style>