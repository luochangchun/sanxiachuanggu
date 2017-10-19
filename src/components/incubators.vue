<template>
    <div>
        <!--header-->
        <commonHeader></commonHeader>
        <commonSwiper></commonSwiper>
        <!--双创空间展示-->
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
                    <el-col :lg="6" :md="6" :sm="12" :xs="24" class="incubators-show"v-for="(item,index) in 5">
                        <img src="../../static/img/103.png" alt="">
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
                        <h1>创业导师团</h1>
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

        <!-- footer -->
        <commonFooter></commonFooter>
    </div>
</template>

<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	import Header from '../components/header.vue'
	import Swiper from '../components/swiper.vue'
	import Footer from '../components/footer.vue'
	export default {
		data() {
			return {}
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