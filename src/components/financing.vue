<template>
    <div>
        <!--header-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img">
                    <img src="../../static/img/banner_trzk.png" alt="">
                    <a href="javascript:;" class="invest_detail">
                        <button>查看详情</button>
                    </a>
                </div>
            </el-col>
        </el-row>
        <!--投资机构-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-invest">
                    <h1>投资机构</h1>
                    <p>INVESTMENT ORGANIZATION</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <div  class="service_provider">
                    <el-row :gutter="10">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <el-row class="office_wrap">
                                <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in investor" :key="item">
                                    <a class="service_provider_item rel">
                                        <router-link :to="{ name: '',params: {id: item.id } }">
                                            <img :src="item.icon" alt="">
                                            <p class="tc">{{ item.name }}</p>
                                            <i class="tag abs white tc f14">{{item.intro}}</i>
                                        </router-link>
                                    </a>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <!--融资项目-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-financing">
                    <h1>投资机构</h1>
                    <p>INVESTMENT ORGANIZATION</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="12" :md="12" :sm="12" :xs="24" v-for="(item, index) in financing" :key="item">
                        <a class="Financing_item rel">
                            <router-link :to="{ name: '',params: {id: item.id } }">
                                <img :src='item.logo' alt="">
                            </router-link>
                            <div class="Financing_wrap">
                                <div class="Financing_info">
                                    <h1 class="f16">{{item.name}}</h1>
                                    <p class="text-ellipsis">{{item.intro}}</p>
                                </div>
                                <el-row type="flex" class="Financing_money">
                                    <el-col :span="6">
                                        <p class="f14">{{item.archived}}万<br/>已获得投资意向</p>
                                    </el-col>
                                    <el-col :span="6" :push="12">
                                        <p class="f14 tr">{{item.financing}}万<br/>预融资总额</p>
                                    </el-col>
                                </el-row>
                                <el-tag type="primary" style="margin-left:8px">行业领域:
                                    <span>消费生活</span>
                                </el-tag>
                                <el-tag type="success">已完成融资:
                                    <span>未完成融资</span>
                                </el-tag>
                                <p class="f14 pl10" style="margin-left:8px;">发起人:{{item.founder}}</p>
                            </div>
                        </a>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	import Swiper from '../components/swiper.vue'
	export default {
		data() {
			return {
				investor: '', //投资机构
				financing: '', //融资项目
			};
		},
		methods: {
			setFinancingApi() {
				api.Get("/financing").then(res => {
					console.log(res);
					this.investor = res['investor'];
					this.financing = res['financing'];
				});
			},
		},
		created() {
			this.setFinancingApi()
		},
		components: {

		}
	};
</script>

<style>
    .banner_img img{
        width:100%;
    }
    .invest_detail{
        width:100%;
        display: block;
        height:25px;
        position: absolute;
        bottom: 20%;
        text-align: center;
    }
    .banner_img button{
        border:none;
        background-color: #fada0b;
        border-radius: 4px;
        color:#fff;
        height: 25px;
        line-height: 25px;
        width: 80px;
    }
    /*title*/
    .title{
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .title h1{
        color:#0089e3;
        font-size:18px;
        font-weight:600;
    }
    .title p{
        color:#ddd;
        font-size: 10px;
    }
    .title hr{
        width:30%;
        border:1px solid #454b60;
    }
    .title span{
        display: block;
        border:2px solid #0089e3;
        width:10%;
    }
    .title div{
        margin-top: -42px;
    }
    /*投资机构*/
    #title-invest{
        position:relative;
        margin-top: 50px;
    }
    #title-invest span{
        position: absolute;
        top: 48px;
        left:45%;
    }
    /*融资项目*/
    #title-financing{
        position:relative;
        /*margin-top: 50px;*/
    }
    #title-financing span{
        position: absolute;
        top: 48px;
        left:45%;
    }
</style>