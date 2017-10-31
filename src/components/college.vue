<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img">
                    <img src="../../static/img/cg.jpg" alt="">
                </div>
            </el-col>
        </el-row>
        <!--培训-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-college">
                    <h1>培训</h1>
                    <p>CULTVATE</p>
                    <hr>
                    <span></span>
                    <router-link :to="{ name: 'activity_more'}" class="r more_plus to"></router-link>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="6" :md="6" :sm="12" :xs="24" class="college-show" v-for="(item,index) in lecture" :key="index">
                        <router-link :to="{name:'train_detail', params: {id:item.id}}">
                            <img :src="item.icon" alt="">
                            <div>
                                <h6>{{item.name}}</h6>
                                <p>{{item.detail || '无'}}</p>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--优秀讲师-->
        <div style="background-color: #eee;padding-bottom: 50px;">
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-teacher">
                        <h1>优秀讲师</h1>
                        <p>GREAT SPEAKERS</p>
                        <hr>
                        <span></span>
                        <router-link :to="{ name: 'trainList'}" class="r more_plus to"></router-link>
                    </div>
                    <el-row :gutter="40">
                        <el-col :lg="12" :md="12" :sm="12" :xs="24" v-for="(item, index) in teacher" :key="index" v-if="item['type'] == 4">
                            <router-link :to="{name:'tutorDetail', params: {id:item.id} }" class="research-teacher">
                                <img :src="item.photo" alt="">
                                <div>
                                    <h4>指导老师:{{item.name}}</h4>
                                    <h3>{{item.title}}</h3>
                                    <p class="text-ellipsis-muti text-ellipsis-2">教师简介:{{item.intro}}</p>
                                </div>
                                <div>
                                    <button>讲师介绍</button>
                                </div>
                            </router-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <!--活动专区-->
        <el-row class="activitys">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-activitys">
                    <h1>活动专区</h1>
                    <p>ACTIVITYZONE </p>
                    <hr>
                    <span></span>
                    <router-link :to="{ name: 'activity_more'}" class="r more_plus to"></router-link>
                </div>
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" v-for="(item, index) in activity" :key="index">
                        <router-link :to="{name:'train_detail', params: {id:item.id} }" class="activitys_item">
                            <img :src="item.icon" alt="">
                            <div class="process abs">
                                <p class="white f16 tc text-ellipsis">{{item.name}}</p>
                                <p v-if="item.status==1" class="f16 tc tag">进行中</p>
                                <p v-if="item.status==2" class="f16 tc tag">已结束</p>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--精彩瞬间-->
        <div style="background-color: #eee;padding-bottom: 50px;">
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-splendid">
                        <h1>精彩瞬间</h1>
                        <p>SPLENDID MOMENT</p>
                        <hr>
                        <span></span>
                        <router-link :to="{ name: 'splendid_list'}" class="r more_plus to"></router-link>
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in teacher" :key="index">
                            <router-link :to="{name:'train_detail', params: {id:item.id} }" class="research-splendid">
                                <img :src="item.photo" alt="">
                            </router-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            </div>
            <!--footer-->
            </div>
</template>

<script>
    import api from "../axios/api.js";
    import Swiper from "../components/swiper.vue";
    export default {
        data() {
            return {
                lecture: "", //培训
                teacher: "", //优秀讲师
                activity: "", //活动专区
                highlight: "" //精彩瞬间
            };
        },
        methods: {
            setTronsApi() {
                api.Get("/pub/colleges").then(res => {
                    this.lecture = res["lecture"];
                    this.highlight = res["highlight"];
                    this.activity = res["activity"];
                    this.teacher = res["teacher"];
                });
            }
        },
        created() {
            this.setTronsApi();
        },
        components: {
            // commonHeader: Header,
            // commonFooter: Footer,
            commonSwiper: Swiper
        }
    };
</script>

<style>
    /*培训*/
    .college-show img {
        width: 100%;
    }
    .college-show div {
        box-shadow: 0 0 10px #ddd;
        /* margin-top: -5px; */
        padding: 5px;
    }
    .college-show div h6 {
        color: #666;
        font-size: 14px;
        line-height: 30px;
    }
    .college-show div p {
        color: #999;
        font-size: 12px;
        line-height: 20px;
    }
    .college-show {
        margin-bottom: 20px;
    }
    /*title*/
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
    .title a.to {
        margin-top: -41px;
    }
    #title-college {
        position: relative;
    }
    #title-college span {
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
        background-color: #2c2b32;
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
    .research-teacher button {
        width: 100px;
        line-height: 26px;
        border-radius: 12px;
        background-color: #f53436;
        color: #fff;
        font-size: 14px;
        border: none;
        margin: 20px auto;
    }
    /*活动专区*/
    #title-activitys {
        position: relative;
    }
    #title-activitys span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    .activitys_item img {
        width: 100%;
    }
    /*精彩瞬间*/
    #title-splendid {
        position: relative;
    }
    #title-splendid span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    .research-splendid {
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .research-splendid:hover {
        box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
    }
    .research-splendid img {
        width: 100%;
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