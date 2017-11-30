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
                    <div class="common_title">
                        <h1 class="tc">全面完善的服务商体系</h1>
                        <h1 class="tc">高效解决企业发展所需的各类服务</h1>
                    </div>
                </el-col>
                <el-row :gutter="0">
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl0">
                        <div class="InvestmentAgency clearfix">
                            <h2 class="common_sub_title">
                                <p class="tc white">大学院校</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList CollegeList">
                                <router-link :to="{ name: 'school_detail', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in university" :key="index">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <img :src="item['icon']">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis-muti text-ellipsis-2">{{item['intro']}}</p>
                                    </el-col>
                                </router-link>
                                <!-- <div class="pageNo clearfix">
                                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="padding-top:20px;">
                                        <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                        </el-pagination>
                                    </el-col>
                                </div> -->
                            </div>
                        </div>
                        <div class="InvestmentAgency clearfix ExpertTeam">
                            <h2 class="common_sub_title">
                                <p class="tc white">专家团队</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList CollegeList">
                                <router-link :to="{ name: 'tutorDetail', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in mentor" :key="index">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <img :src="item['photo']">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis">{{item['intro']}}</p>
                                        <el-tag type="danger" style="margin-top: 5px;">行业领域：消费生活</el-tag>
                                    </el-col>
                                </router-link>
                                <!-- <div class="pageNo clearfix">
                                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="padding-top:20px;">
                                        <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                        </el-pagination>
                                    </el-col>
                                </div> -->
                            </div>
                        </div>
                    </el-col>
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl1">
                        <div class="FinancingNeeds clearfix BusinessNeeds">
                            <h2 class="common_sub_title">
                                <p class="tc white">技术难题及需求</p>
                                <div class="line"></div>
                            </h2>
                            <div class="needList clearfix">
                                <p v-show="noData" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                <router-link :to="{ name: 'consultDetail', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in needData" :key="index">
                                    <h1 class="f14">{{item['title']}}</h1>
                                    <p class="text-ellipsis">企业名称：{{item['enterprise']}}</p>
                                    <div class="info">
                                        <p class="pw270">联系人：<span style="margin-right:150px;">{{item['contact']}}</span></p>
                                        <p>联系方式：<span>13972576207</span></p>
                                    </div>
                                </router-link>
                            </div>
                            <el-col :lg="16" :md="16" :sm="24" :xs="24" :offset="8">
                                <div class="block">
                                    <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                    </el-pagination>
                                </div>
                            </el-col>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-row>
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
                needData: "", //融资需求
                noData: false,
                totalPages: "",
            }
        },
        created() {
            this.researchApi()
            this.initServicesList()
        },
        methods: {
            researchApi() {
                api.Get('/pub/research')
                    .then(res => {
                        this.university = res['university'];
                        this.mentor = res['mentor'];
                    })
            },
            initServicesList() {
                var url = "/consult/" + "10" + "/" + "1";
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                    if (this.needData.length == 0) {
                        this.noData = true;
                    } else if (this.needData.length > 0) {
                        this.noData = false;
                        this.needData = res["page"]["data"];
                        this.totalPages = res["page"]["totalPages"] * 10;
                    }
                });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = "/consult/" + "10" + "/" + val;
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                    this.totalPages = res["page"]["totalPages"] * 10;
                });
            },
        },
    }
</script>

<style scoped>
    .CollegeList {
        background-color: #fafafa;
    }
    .InvestmentList img {
        border-radius: 0px;
        border: none;
        margin-left: auto;
    }
    .BusinessNeeds {
        margin-top: 0;
    }
    .ExpertTeam {
        margin-top: 40px;
    }
    .ExpertTeam img {
        padding: 1px;
    }
</style>