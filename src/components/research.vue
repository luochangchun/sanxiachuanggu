<template>
    <div>
        <!--header-->
        <el-row :gutter="0">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img" style="backgroundImage: url(../static/img/banner_cgyj.jpg)">
                    <!-- <img src="../../static/img/banner_cgyj.jpg" alt=""> -->
                </div>
            </el-col>
        </el-row>
        <!--院校展示-->
        <el-row :gutter="0" style="margin-top:40px;margin-bottom:40px;">
            <div class="container">
                <el-row :gutter="0">
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl0">
                        <!--大学院校-->
                        <div class="InvestmentAgency clearfix">
                            <h2 class="common_sub_title">
                                <p class="tc white">大学院校</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList CollegeList">
                                <router-link :to="{ name: 'school_detail', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in university" :key="index" v-if="index<4">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <!-- <img :src="item['icon']"> -->
                                        <img v-if="item.icon !== ''" :src="item.icon" alt="">
                                        <img v-if="item.icon == ''" src="../../static/img/moren.png" alt="">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis-muti text-ellipsis-2">{{item['intro']}}</p>
                                    </el-col>
                                </router-link>
                                <div class="pageNo clearfix">
                                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="padding-top:20px;">
                                        <el-pagination :current-page="1" :total="universityPage" @current-change="handleuniversity" layout="prev, pager, next">
                                        </el-pagination>
                                    </el-col>
                                </div>
                            </div>
                        </div>
                        <!--专家团队-->
                        <div class="InvestmentAgency clearfix ExpertTeam">
                            <h2 class="common_sub_title">
                                <p class="tc white">专家团队</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList CollegeList">
                                <p v-show="noData2" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                <router-link :to="{ name: 'tutorDetail', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in Exeprt" :key="index">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <!-- <img :src="item['photo']"> -->
                                        <img v-if="item.photo !== ''" :src="item.photo" alt="">
                                        <img v-if="item.photo == ''" src="../../static/img/moren.png" alt="">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis">{{item['intro']}}</p>
                                        <el-tag type="danger" style="margin-top: 5px;">研究方向：{{item['field'] | filterStr}}</el-tag>
                                    </el-col>
                                </router-link>
                                <div class="pageNo clearfix">
                                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="padding-top:20px;">
                                        <el-pagination :current-page="1" :total="ExeprtPages" @current-change="handleExeprt" layout="prev, pager, next">
                                        </el-pagination>
                                    </el-col>
                                </div>
                            </div>
                        </div>
                        <!--研究机构-->
                        <div class="InvestmentAgency clearfix ResearchInstitute">
                            <h2 class="common_sub_title">
                                <p class="tc white">研究机构</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList CollegeList">
                                <p v-show="noData5" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                <router-link :to="{ name: 'tutorDetail', params: { id: item.id} }"  class="item clearfix" v-for="(item, index) in ResearchInstitute" :key="index">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <img v-if="item.photo !== ''" :src="item.photo" alt="">
                                        <img v-if="item.photo == ''" src="../../static/img/moren.png" alt="">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis">{{item['intro']}}</p>
                                        <el-tag type="danger" style="margin-top: 5px;">研究方向：{{item['field'] | filterStr}}</el-tag>
                                    </el-col>
                                </router-link>
                                <div class="pageNo clearfix">
                                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="padding-top:20px;">
                                        <el-pagination :current-page="1" :total="ResearchPages" @current-change="handleResearch" layout="prev, pager, next">
                                        </el-pagination>
                                    </el-col>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl1">
                        <!--项目成果转化-->
                        <div class="FinancingProject clearfix result">
                            <h2 class="common_sub_title result-title">
                                <p class="tc white">项目成果转化</p>
                                <div class="line"></div>
                                <router-link to="/result_form" class="result-btn">
                                    发布
                                </router-link>
                            </h2>
                            <div class="ProjectList">
                                <!--<p v-show="financing.length == 0" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>-->
                                <router-link :to="{ name: 'result_detail', params: { id: item.id} }" v-for="(item, index) in resultList" :key="index" class="item clearfix" v-if="index<4">
                                    <h1 class="f14">{{ item.resultsName }}</h1>
                                    <p class="text-ellipsis">{{ item.describes }}</p>
                                    <div class="info">
                                        <p class="pw120 cr">{{  item.money }}万元</p>
                                        <p class="pw120">状态:
                                            <span v-if="item.state == true">
                                                <span>已转化</span>
                                            </span>
                                            <span v-if="item.state == false">
                                                <span>转化中</span>
                                            </span>
                                        </p>
                                        <p class="pw120">成熟度:
                                            <span v-if="item.mature == 3">
                                                <span>研发</span>
                                            </span>
                                            <span v-if="item.mature == 2">
                                                <span>中试</span>
                                            </span>
                                            <span v-if="item.mature == 1">
                                                <span>小试</span>
                                            </span>
                                            <span v-if="item.mature == 0">
                                                <span>其他</span>
                                            </span>
                                        </p>
                                        <p class="pw160">成果类别:
                                            <span v-if="item.resultsId == subItem.id" v-for="(subItem,index) in category" :key="index">
                                                {{ subItem.value }}
                                            </span>
                                        </p>
                                    </div>
                                    <el-tag type="primary" v-for="(upItem,index) in item.fieldId.split(',')" :key="index">
                                        <span  v-if="upItem == subItem.id" v-for="(subItem,index) in field" :key="index">
                                            {{ subItem.value }}
                                        </span>
                                    </el-tag>
                                    <el-tag type="success">{{ item.date | formatDate }}</el-tag>
                                </router-link>
                            </div>
                            <el-col :lg="16" :md="16" :sm="24" :xs="24" :offset="8">
                                <div class="block">
                                    <el-pagination :current-page="1" :total="resultPages" @current-change="handleResult" layout="prev, pager, next">
                                    </el-pagination>
                                </div>
                            </el-col>
                        </div>


                        <!--技术难题及需求-->
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
                                    <el-pagination :current-page="1" :total="consultPages" @current-change="handleCurrentChange" layout="prev, pager, next">
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
    import api from "../axios/api.js";
    import { formatDate } from "../../static/js/date.js";
    export default {
        data() {
            return {
                university: '', //院校
                universityPage: "", //院校分页
                mentor: '', //导师
                talented: '', //校园人才
                needData: "", //融资需求
                noData: false,
                noData2: false,
                noData5: false,
                totalPages: "",
                consultPages: "",
                Exeprt: "", //专家团队
                ExeprtPages: "",
                ResearchInstitute: "", //研究机构
                ResearchPages: "",
                resultList: "",//科技成果转化
                resultPages: "",//科技成果转化分页
                field: "",//应用领域字典
                category: ""//成果类别字典
            }
        },
        created() {
            this.researchApi();
            this.initServicesList();
            this.initExeprt();
            this.initResearch();
            this.initResult();
            this.initField();
            this.initCategory();
            },

        filters: {
            filterStr(input) {
                console.log(!input);
                if (!input) {
                    return ''
                } else {
                    if (input.length > 20) {
                        return input.substring(0, 20) + "...";
                    } else {
                        return input;
                    }
                }
            },
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, "yyyy-MM-dd hh:mm");
            }
        },
        methods: {
            researchApi() {
                api.Get('/pub/research')
                    .then(res => {
                        this.mentor = res['mentor'];
                    })
                api.Get('/university/4/1')
                    .then(res => {
                        this.university = res['data'];
                        this.universityPage = res["totalPages"] * 10;
                    })
            },
            handleuniversity(val) {
                api.Get('/university/4/' + val)
                    .then(res => {
                        this.university = res['data'];
                        this.universityPage = res["totalPages"] * 10;
                    })
            },
            initServicesList() {
                var url = "/consult/" + "15" + "/" + "1";
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                    if (this.needData.length == 0) {
                        this.noData = true;
                    } else if (this.needData.length > 0) {
                        this.noData = false;
                        this.needData = res["page"]["data"];
                        this.consultPages = res["page"]["totalPages"] * 10;
                    }
                });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = "/consult/" + "15" + "/" + val;
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                    this.consultPages = res["page"]["totalPages"] * 10;
                });
            },
            initExeprt() {
                //专家团队
                var url = "/indie/2/" + "4" + "/" + "1";
                api.Get(url).then(res => {
                    this.Exeprt = res["data"];
                    if (this.Exeprt.length == 0) {
                        this.noData2 = true;
                    } else if (this.Exeprt.length > 0) {
                        this.noData2 = false;
                        this.Exeprt = res["data"];
                        this.ExeprtPages = res["totalPages"] * 10;
                    }
                });
            },
            handleExeprt(val) {
                //专家团队
                var url = "/indie/2/" + "4" + "/" + val;
                api.Get(url).then(res => {
                    this.Exeprt = res["data"];
                    if (this.Exeprt.length == 0) {
                        this.noData2 = true;
                    } else if (this.Exeprt.length > 0) {
                        this.noData2 = false;
                        this.Exeprt = res["data"];
                        this.ExeprtPages = res["totalPages"] * 10;
                    }
                });
            },
            initResearch() {
                //研究机构
                var url = "/indie/5/" + "4" + "/" + "1";
                api.Get(url).then(res => {
                    this.ResearchInstitute = res["data"];
                    if (this.ResearchInstitute.length == 0) {
                        this.noData5 = true;
                    } else if (this.ResearchInstitute.length > 0) {
                        this.noData5 = false;
                        this.ResearchInstitute = res["data"];
                        this.ResearchPages = res["totalPages"] * 10;
                    }
                });
            },
            handleResearch(val) {
                //研究机构
                var url = "/indie/5/" + "4" + "/" + val;
                api.Get(url).then(res => {
                    this.ResearchInstitute = res["data"];
                    if (this.ResearchInstitute.length == 0) {
                        this.noData5 = true;
                    } else if (this.ResearchInstitute.length > 0) {
                        this.noData5 = false;
                        this.ResearchInstitute = res["data"];
                        this.ResearchPages = res["totalPages"] * 10;
                    }
                });
            },
            initResult() {
                var url = "/science/" + "8" + "/" + "1";
                api.Get(url).then(res => {
                    console.log(res);
                        this.resultList = res['data'];
                        this.resultPages = res["totalPages"] * 10;
                    })
            },
            handleResult() {
                var url = "/science/" + "8" + "/" + "1";
                api.Get(url).then(res => {
                        this.resultList = res['data'];
                        this.resultPages = res["totalPages"] * 10;
                    })
            },
            initField() {
                api.Get("/dict/application").then(res => {
                    this.field = res;
                });
            },
            initCategory() {
                api.Get("/dict/results").then(res => {
                    this.category = res;
                });
            }

        }
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
    .result-title p{
        display: inline-block;
    }
    .result-btn{
        display: inline-block;
        float:right;
        border:none;
        background-color: #f48100;
        color: #fff;
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        text-align: center;
        padding:0 15px;
    }
    .pw120{
        width:120px;
    }
    .pw160{
        width:160px;
    }
    .cr{
        color:#ff4949!important;
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
    .result{
        padding-bottom:70px;
    }
</style>