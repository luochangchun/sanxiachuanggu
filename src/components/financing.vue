<template>
    <div>
        <!--header-->
        <el-row :gutter="0">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img" style="backgroundImage: url(../static/img/banner_trzk.jpg)">
                    <router-link :to="{name: 'financing_apply'}" class="financing_Btn db"></router-link>
                </div>
            </el-col>
        </el-row>
        <!--投资机构-->
        <el-row :gutter="0" style="margin-top:40px;margin-bottom:40px;">
            <div class="container">
                <el-row :gutter="0">
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl0">
                        <div class="InvestmentAgency clearfix">
                            <h2 class="common_sub_title">
                                <p class="tc white">投资机构</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList">
                                <router-link :to="{ name: 'provider', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in investor" :key="index">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <img v-if="item['icon'] !== ''" :src="item['icon']" alt="">
                                        <img v-if="item['icon'] == ''" src="../../static/img/incubatorBg.jpeg" alt="">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis-muti text-ellipsis-2">{{item['intro']}}</p>
                                    </el-col>
                                </router-link>
                            </div>
                            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                <div class="block">
                                    <el-pagination :current-page="1" :total="InvestPages" @current-change="hanleInvest" layout="prev, pager, next">
                                    </el-pagination>
                                </div>
                            </el-col>
                        </div>
                    </el-col>
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl1">
                        <div class="FinancingProject clearfix">
                            <h2 class="common_sub_title">
                                <p class="tc white">融资项目</p>
                                <div class="line"></div>
                            </h2>
                            <div class="ProjectList">
                                <p v-show="financing.length == 0" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                <router-link :to="{ name: 'financingDetail', params: { id: item.id} }" v-for="(item, index) in financing" :key="index" class="item clearfix">
                                    <h1 class="f14">{{item['name']}}</h1>
                                    <p class="text-ellipsis">{{item['intro']}}</p>
                                    <div class="info">
                                        <p class="pw270">融资金额：<span class="red b">{{item['financing']}}{{item['unit']}}</span></p>
                                        <p>发起人：<span>{{item['founder']}}</span></p>
                                    </div>
                                    <el-tag type="primary" v-for="n in service" :key="n" v-if="n['id'] == item['businessId']">行业领域：{{n['value']}}</el-tag>
                                    <el-tag type="success" v-if="item['archived'] < item['financing']">融资状态：未完成融资</el-tag>
                                    <el-tag type="success" v-if="item['archived'] >= item['financing']">融资状态：已完成融资</el-tag>
                                </router-link>
                            </div>
                            <el-col v-show="financing.length !== 0" :lg="16" :md="16" :sm="24" :xs="24" :offset="8">
                                <div class="block">
                                    <el-pagination :current-page="1" :total="FinancePages" @current-change="hanleFiance" layout="prev, pager, next">
                                    </el-pagination>
                                </div>
                            </el-col>
                        </div>
                        <div class="FinancingNeeds">
                            <h2 class="common_sub_title">
                                <p class="tc white">融资需求</p>
                                <div class="line"></div>
                            </h2>
                            <div class="needList clearfix">
                                <p v-show="needData.length == 0" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                <router-link :to="{ name: 'needDetail', params: { id: item.id} }" v-for="(item, index) in needData" :key="index" class="item clearfix">
                                    <h1 class="f14 text-ellipsis">{{item['needs']}}</h1>
                                    <p class="text-ellipsis">企业名称：{{item['enterprise']}}</p>
                                    <div class="info">
                                        <p class="pw270">联系人：<span style="margin-right:150px;">{{item['contact']}}</span></p>
                                        <p>联系方式：<span>{{item['phone']}}</span></p>
                                    </div>
                                </router-link>
                            </div>
                            <el-col v-show="needData.length !== 0" :lg="16" :md="16" :sm="24" :xs="24" :offset="8">
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
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                investor: "", //投资机构
                financing: "", //融资项目
                needData: "", //融资需求
                noData: false,
                totalPages: "",
                InvestPages: "", //投资机构分页
                FinancePages: "", //融资项目分页
                service: "", //分页字典
            };
        },
        created() {
            this.getInvest(); //投资机构
            this.getFinance(); //融资需求
            let cid = 54;
            this.initServicesList(cid);
            this.getService()
        },
        methods: {
            getService() {
                api.Get("/dict/business").then(res => {
                    this.service = res;
                });
            },
            //获取投资机构
            getInvest() {
                let url = '/enterprise/3' + '/' + '12' + '/' + '1';
                api.Get(url)
                    .then(res => {
                        this.investor = res["data"];
                        this.InvestPages = res['totalPages'] * 10;
                    });
            },
            hanleInvest(val) {
                let url = '/enterprise/3' + '/' + '12' + '/' + val;
                api.Get(url)
                    .then(res => {
                        this.investor = res["data"];
                        this.InvestPages = res['totalPages'] * 10;
                    });
            },
            // 获取融资项目
            getFinance() {
                let url = '/finance' + '/' + '5' + '/' + '1';
                api.Get(url)
                    .then(res => {
                        this.financing = res["data"];
                        this.FinancePages = res['totalPages'] * 10;
                    });
            },
            hanleFiance(val) {
                let url = '/finance' + '/' + '5' + '/' + val;
                api.Get(url)
                    .then(res => {
                        this.financing = res["data"];
                        this.FinancePages = res['totalPages'] * 10;
                    });
            },
            initServicesList(cid) {
                var url = "/enterprise/apply/" + "5" + "/" + "1" + "?cid=" + cid;
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
                var url = "/enterprise/apply/" + "5" + "/" + val + "/" + +"?cid=" + "54";
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                    this.totalPages = res["page"]["totalPages"] * 10;
                });
            },
        }
    };
</script>

<style scoped>
    .financing_Btn {
        width: 200px;
        height: 50px;
        background: url(../../static/img/trzk_btn.png) no-repeat center 100%;
        background-size: contain;
        margin-left: auto;
        margin-right: auto;
        margin-top: 200px;
        -webkit-animation: 0.8s 0s normal 2 pulse;
        animation: 0.8s 0s normal 2 pulse;
    }
    @keyframes pulse {
        from {
            transform: scale3d(1, 1, 1);
        }
        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }
        to {
            transform: scale3d(1, 1, 1);
        }
    }
    .invest_detail {
        width: 100%;
        display: block;
        height: 25px;
        position: absolute;
        bottom: 20%;
        text-align: center;
    }
    .banner_img button {
        border: none;
        background-color: #fada0b;
        border-radius: 4px;
        color: #fff;
        height: 25px;
        line-height: 25px;
        width: 80px;
    }
</style>