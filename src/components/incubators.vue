<template>
    <div>
        <!--header-->
        <el-row :gutter="0">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img"   style="backgroundImage: url(../static/img/banner_sckj.png)">
                    <!-- <img src="../../static/img/banner_sckj.png" alt=""> -->
                </div>
            </el-col>
        </el-row>
        <!--双创空间展示-->
        <div class="container">
            <el-row :gutter="10" style="margin-bottom: 50px;">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="title" id="title-incubators">
                        <h1>双创空间展示</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                        <!-- <div class="r more_plus"></div> -->
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" class="incubators-show" v-for="(item,index) in incubator" :key="index">
                            <router-link :to="{ name: 'incubators_details', params: { id: item.id} }" style="position: relative">
                                <img :src="item['icon']" alt="">
                                <!-- <div class="img" :style="{backgroundImage: 'url('+'http://'+ item['icon'] + ')'}"  :key="index"></div> -->
                                <p>{{item.name}}</p>
                            </router-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!--职能部门展示-->
            <div v-if="false" style="background-color: #eee;padding-bottom: 40px;">
                <el-row :gutter="10">
                    <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                        <div class="title" id="title-department">
                            <h1>职能部门展示</h1>
                            <p>ENTREPRENEURIAL MENTOP</p>
                            <hr>
                            <span></span>
                            <div class="r more_plus"></div>
                        </div>
                        <div class="service_provider">
                            <el-row :gutter="10">
                                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                    <el-row class="office_wrap">
                                        <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in office" :key="index">
                                            <a class="service_provider_item rel" :href="item.redirect">
                                                <img :src="item.icon" alt="">
                                                <p class="tc">{{item.name}}</p>
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
        <!-- footer -->
    </div>
</template>

<script type="text/ecmascript-6">
    import api from "../axios/api.js";
    import Swiper from "../components/swiper.vue";
    export default {
        data() {
            return {
                incubators_details: false,
                incubator: '', //孵化器
                office: '', //双创办公室
            };
        },
        methods: {
            setTronsApi() {
                api.Get("/pub/trons").then(res => {
                    console.log(res);
                    this.incubator = res['incubator'];
                    this.office = res['office'];
                });
            },
            goIncubatorsDetails(id) {
				window.location.href='/incubators_details/'+id;
            }
        },
        created() {
            this.setTronsApi()
        },
        components: {
            commonSwiper: Swiper
        }
    };
</script>

<style>
    /*banner*/
    .banner_img img {
        width: 100%;
    }
    /*双创空间详情页*/
    .details-img img {
        width: 100%;
    }
    .details-title-img img {
        width: 100%;
        border: 1px solid #ddd;
    }
    .details-text h6 {
        font-size: 26px;
        color: #333;
    }
    .details-text {
        padding-left: 20px;
        margin-top: 2%;
    }
    .details-text h6 {
        font-size: 26px;
        color: #666;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .details-text p {
        line-height: 200%;
    }
    .details-text button {
        background-color: #f48100;
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-top: 30px;
    }
    /*双创空间展示*/
    .incubators-show {
        /* position: relative; */
        /* box-sizing: border-box; */
        /* margin:0 5px; */
    }
    .incubators-show img {
        width: 100%;
        height: 225px;
    }
    .incubators-show img:hover{
        box-shadow: 0 0 10px #999;
    }
    .incubators-show p {
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        width: 100%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding: 0;
    }
    /*定位*/
    #title-incubators {
        position: relative;
        box-sizing: border-box;
    }
    #title-incubators span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    /*职能部门展示*/
    #title-department {
        position: relative;
    }
    #title-department span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    /***********************title****************************/
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
        margin-top: -41px;
    }
</style>