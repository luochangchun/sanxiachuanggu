<template>
    <div>
        <!--header-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img">
                    <img src="../../static/img/banner_cgyj.png" alt="">
                </div>
            </el-col>
        </el-row>
        <!--院校展示-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-school">
                    <h1>院校展示</h1>
                    <p>ENTREPRENEURIAL MENTOP</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10">
                    <router-link :to="{name:'school_detail', params: {id:item.id} }" v-for="(item, index) in university" :key="index">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" class="schoolList">
                            <img :src="item.icon" alt="" style="border:1px solid #ddd;">
                            <p>{{item.name}}</p>
                        </el-col>
                    </router-link>
                </el-row>
            </el-col>
        </el-row>
        <!--创业导师团-->
        <div style="background-color: #eee;padding-bottom: 50px;">
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-teacher">
                        <h1>创业导师团</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                        <div class="r more_plus"></div>
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in mentor" :key="index">
                            <div class="research-teacher">
                                <img :src="item.photo" alt="">
                                <div>
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.title}}</p>
                                </div>
                                <div>
                                    <router-link :to="{name:'tutorDetail', params: {id:item.id} }">
                                        查看更多>>
                                    </router-link>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!--校园人才-->
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-talents">
                    <h1>校园人才</h1>
                    <p>ENTREPRENEURIAL MENTOP</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10" style="margin-bottom: 50px;">
                    <el-col :lg="12" :md="12" :sm="12" :xs="24" v-for="(item, index) in talented" :key="index" style="margin-bottom: 20px;">
                        <el-row>
                            <el-col :lg="6" :md="6" :sm="6" :xs="24">
                                <div class="research-teacher-img">
                                    <img :src="item.photo" alt="">
                                </div>
                            </el-col>
                            <el-col :lg="17" :md="17" :sm="17" :xs="24" :offset="1">
                                <p class="research-name">{{item.name}}</p>
                                <p class="research-school">{{item.university}}</p>
                                <p class="research-text">{{item.title}}</p>
                            </el-col>
                        </el-row>
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
                university: '', //院校
                mentor: '', //导师
                talented: '', //校园人才
            }
        },
        created() {
            this.researchApi()
        },
        methods: {
            researchApi() {
                api.Get('/pub/research')
                    .then(res => {
                        this.university = res['university'];
                        this.mentor = res['mentor'];
                        this.talented = res['talented'];
                        if (res['talented'].length == 0) {}
                    })
            }
        },
        components: {
            commonSwiper: Swiper
        },
    }
</script>

<style>
    /*院校展示*/
    .schoolList {
        position: relative;
    }
    .schoolList p {
        position: absolute;
        bottom: 20px;
        font-size: 14px;
        text-align: center;
        width: 100%;
    }
    .schoolList img {
        width: 100%;
    }
    /*定位*/
    #title-school {
        position: relative;
    }
    #title-school span {
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
        margin-top: -42px;
    }
    /*定位*/
    #title-teacher {
        position: relative;
    }
    #title-teacher span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    /*创业导师团*/
    .research-teacher {
        background-color: #0068b7;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 30px;
    }
    .research-teacher img {
        border-radius: 50%;
        width: 40%;
        margin-right: auto;
        margin-left: auto;
        display: block;
    }
    .research-teacher div {
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
        color: #fff;
        margin-top: 10px;
    }
    .research-teacher div h3 {
        font-size: 14px;
        font-weight: normal;
        line-height: 30px;
    }
    .research-teacher div p {
        font-size: 12px;
        font-weight: normal;
        line-height: 20px;
    }
    .research-teacher a {
        width: 100px;
        line-height: 26px;
        border-radius: 4px;
        background-color: #f48100;
        color: #fff;
        font-size: 14px;
        border: none;
        margin: 30px auto;
    }
    /*校园人才*/
    .research-teacher-img img {
        border-radius: 50%;
        width: 100px;
    }
    .research-name {
        font-size: 16px;
        color: #666;
        line-height: 30px;
    }
    .research-school {
        font-size: 14px;
        color: #666;
        line-height: 20px;
    }
    .research-text {
        font-size: 12px;
        color: #999;
        line-height: 20px;
    }
    /*定位*/
    #title-talents {
        position: relative;
    }
    #title-talents span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
</style>