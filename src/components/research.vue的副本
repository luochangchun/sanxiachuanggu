<template>
    <div>
        <!--header-->
        <el-row :gutter="0">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img">
                    <img src="../../static/img/banner_cgyj.png" alt="">
                </div>
            </el-col>
        </el-row>
        <!--院校展示-->
        <el-row :gutter="0" style="margin-bottom: 50px;">
            <div class="container">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="title" id="title-school">
                        <h1>院校展示</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                    </div>
                    <el-row :gutter="10">
                        <router-link :to="{name:'school_detail', params: {id:item['id']} }" v-for="(item, index) in university" :key="index">
                            <el-col :lg="6" :md="6" :sm="12" :xs="24" class="schoolList">
                                <img :src="item.icon" alt="" style="border:1px solid #ddd;">
                                <p style="color:#666;">{{item.name}}</p>
                            </el-col>
                        </router-link>
                    </el-row>
                </el-col>
            </div>
        </el-row>
        <!--创业导师团-->
        <div style="padding-bottom: 50px;background-color:#eee">
            <div class="container">
                <el-row :gutter="0">
                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                        <div class="title" id="title-teacher">
                            <h1>创业导师团</h1>
                            <p style="color:#fff;">ENTREPRENEURIAL MENTOP</p>
                            <hr>
                            <span></span>
                            <router-link :to="{ name: 'tutorList'}" class="r more_plus to" style="margin-top: -41px;"></router-link>
                        </div>
                        <el-row :gutter="40">
                            <el-col :lg="12" :md="12" :sm="12" :xs="24" v-for="(item, index) in mentor" :key="index">
                                <router-link :to="{name:'tutorDetail', params: {id:item.id} }" class="research-teacher">
                                    <img :src="item.photo" alt="">
                                    <div>
                                        <h4>指导老师:{{item.name}}</h4>
                                        <h3>{{item.title}}</h3>
                                        <p class="text-ellipsis-muti text-ellipsis-2">{{item.intro}}</p>
                                    </div>
                                    <div>
                                        <router-link :to="{name:'tutorDetail', params: {id:item.id} }">
                                            查看更多>>
                                        </router-link>
                                    </div>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--校园人才-->
        <!-- <el-row :gutter="10">
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
                    </el-row> -->
        <!-- footer -->
    </div>
</template>

<script>
    import api from '../axios/api.js'
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
    }
</script>

<style scoped>
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
        color: #000;
    }
    .schoolList img {
        padding: 20px 0;
        height: 232px;
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
    /*优秀讲师*/
    #title-teacher {
        position: relative;
    }
    #title-teacher span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    .research-teacher {
        background-color: #0068b7;
        padding-top: 20px;
        margin-top: 50px;
        position: relative;
        min-height: 220px;
    }
    .research-teacher img {
        width: 30%;
        margin-right: auto;
        margin-left: auto;
        display: block;
        position: absolute;
        top: -28px;
        left: -28px;
    }
    .research-teacher div {
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
        color: #fff;
        margin-top: 25px;
    }
    .research-teacher div h4 {
        font-size: 16px;
        font-weight: normal;
        line-height: 30px;
        margin-left: -70px;
    }
    .research-teacher div h3 {
        font-size: 14px;
        font-weight: normal;
        line-height: 30px;
        margin-left: -60px;
    }
    .research-teacher div p {
        font-size: 12px;
        font-weight: normal;
        line-height: 20px;
        margin-top: 10px;
        height: 40px;
    }
    .research-teacher a {
        width: 100px;
        line-height: 26px;
        border-radius: 12px;
        background-color: #f53436;
        color: #fff;
        font-size: 14px;
        border: none;
        margin: 20px auto;
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
    @media screen and (min-width: 992px) {
        .right div {
            float: right;
            height: 60px;
            width: 50px;
        }
    }
    @media screen and (max-width: 768px) {
        .arrows-splendid div {
            overflow: hidden;
            margin-top: 20%;
        }
        .right div {
            float: right;
            height: 60px;
            width: 28px;
        }
    }
</style>