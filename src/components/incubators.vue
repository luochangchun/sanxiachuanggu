<template>
    <div>
        <!--header-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24"class="incubators-banner">
                <div class="incubators-nav">
                    <img src="../../" alt="">
                </div>
            </el-col>
        </el-row>
        <!--双创空间展示-->
        <div v-show="!incubators_details">
            <el-row :gutter="10"style="margin-bottom: 50px;">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-incubators">
                        <h1>双创空间展示</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                        <div class="r more_plus"></div>
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" class="incubators-show"v-for="(item,index) in 5" :key="item">
                            <img src="../../static/img/103.png" alt="" @click="incubators_details=true">
                            <span>清创</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!--职能部门展示-->
            <div style="background-color: #eee;padding-bottom: 40px;">
                <el-row :gutter="10">
                    <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                        <div class="title" id="title-department">
                            <h1>职能部门展示</h1>
                            <p>ENTREPRENEURIAL MENTOP</p>
                            <hr>
                            <span></span>
                            <div class="r more_plus"></div>
                        </div>
                        <div  class="service_provider">
                            <el-row :gutter="10">
                                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                    <el-row class="office_wrap">
                                        <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in 10" :key="item">
                                            <a class="service_provider_item rel">
                                                <img src="../../static/img/service01.png" alt="">
                                                <p class="tc">西陵区工商局</p>
                                            </a>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <!--双创空间详情页-->
        <el-row :gutter="10"style="margin-bottom: 50px;"v-show="incubators_details">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <el-row :gutter="10" style="margin-top: 50px;">
                    <el-col :lg="12" :md="12" :sm="24" :xs="24">
                        <div class="details-img"><img src="../../static/img/id_03.png" alt=""></div>
                        <el-row :gutter="10">
                            <el-col :lg="4" :md="4" :sm="4" :xs="4" v-for="(item,index) in 6" :key="item">
                                <div class="details-title-img">
                                    <img src="../../static/img/id_06.png" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :lg="11" :md="11" :sm="24" :xs="24":offset="1" class="details-text">
                        <h6>715文化创业园</h6>
                        <p>地址:湖北省宜昌市西陵区绿萝路43号</p>
                        <p>级别:市级</p>
                        <p>联系方式:李丽洁 13476854766</p>
                        <p>场地面积:24000平米</p>
                        <p>在孵企业数:61家</p>
                        <p>重点孵化类型:文化创意产业,科技企业</p>
                        <button>申请入驻</button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <!-- footer -->
    </div>
</template>

<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	import Header from '../components/header.vue'
	import Swiper from '../components/swiper.vue'
	import Footer from '../components/footer.vue'
	export default {
		data() {
			return {
				incubators_details:false
            }
		},
		methods: {

		},
		components: {
			commonHeader: Header,
			commonFooter: Footer,
			commonSwiper: Swiper
		},
		}
</script>

<style>
    /*双创空间详情页*/
    .details-img img{
        width:100%;

    }
.details-title-img img{
    width:100%;
    border:1px solid #ddd;
}
    .details-text h6{
        font-size: 26px;
        color:#333;
    }
    .details-text{
       padding-left: 20px;
        margin-top: 2%;
    }
    .details-text h6{
        font-size: 26px;
        color:#666;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .details-text p{
       line-height:200%;
    }
    .details-text button{
        background-color: #f48100;
        border:none;
        color:#fff;
        border-radius: 4px;
        width:90px;
        height:30px;
        text-align: center;
        line-height:30px;
        margin-top: 30px;
    }











    /*双创空间展示*/
    .incubators-show{
        position: relative;
    }
    .incubators-show img{
        width:100%;
    }
    .incubators-show span{
        position: absolute;
        background:rgba(0,0,0,.5);
        color: #fff;
        width: 97%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        bottom: 5px;
        left:0;
        margin-right:5px;
        margin-left: 5px;
    }
    /*定位*/
    #title-incubators{
        position:relative;
    }
    #title-incubators span{
        position: absolute;
        top: 48px;
        left:45%;
    }

/*职能部门展示*/
    #title-department{
        position:relative;
    }
    #title-department span{
        position: absolute;
        top: 48px;
        left:45%;
    }

    /***********************title****************************/
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
        margin-top: -41px;
    }
</style>