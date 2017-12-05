<template>
    <div>
        <!--header-->
        <el-row :gutter="0">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="financing_banner">
                    <router-link :to="{name: 'financing_apply'}" class="financing_Btn db"></router-link>
                </div>
            </el-col>
        </el-row>
        <!--投资机构-->
        <el-row :gutter="0" style="margin-bottom:120px;">
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
                                <p class="tc white">投资机构</p>
                                <div class="line"></div>
                            </h2>
                            <div class="InvestmentList">
                                <router-link :to="{ name: 'provider', params: { id: item.id} }" class="item clearfix" v-for="(item, index) in investor" :key="index">
                                    <el-col :lg="4" :md="24" :sm="24" :xs="24">
                                        <img :src="item['icon']">
                                    </el-col>
                                    <el-col :lg="20" :md="24" :sm="24" :xs="24">
                                        <h1 class="text-ellipsis">{{item['name']}}</h1>
                                        <p class="text-ellipsis-muti text-ellipsis-2">{{item['intro']}}</p>
                                    </el-col>
                                </router-link>
                            </div>
                            <!-- <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                                    <div class="block">
                                                        <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                                        </el-pagination>
                                                    </div>
                                                </el-col> -->
                        </div>
                    </el-col>
                    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="pl1">
                        <div class="FinancingProject clearfix">
                            <h2 class="common_sub_title">
                                <p class="tc white">融资项目</p>
                                <div class="line"></div>
                            </h2>
                            <div class="ProjectList">
                                <router-link :to="{ name: 'financingDetail', params: { id: item.id} }" v-for="(item, index) in financing" :key="index" class="item clearfix">
                                    <h1 class="f14">{{item['name']}}</h1>
                                    <p class="text-ellipsis">{{item['intro']}}</p>
                                    <div class="info">
                                        <p class="pw270">融资金额：<span class="red b">{{item['financing']}}{{item['unit']}}</span></p>
                                        <p>发起人：<span>{{item['founder']}}</span></p>
                                    </div>
                                    <el-tag type="primary">行业领域：消费生活</el-tag>
                                    <el-tag type="success">融资状态：未完成融资</el-tag>
                                </router-link>
                            </div>
                            <!-- <el-col :lg="16" :md="16" :sm="24" :xs="24" :offset="8">
                                                    <div class="block">
                                                        <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                                        </el-pagination>
                                                    </div>
                                                </el-col> -->
                        </div>
                        <div class="FinancingNeeds">
                            <h2 class="common_sub_title">
                                <p class="tc white">融资需求</p>
                                <div class="line"></div>
                            </h2>
                            <div class="needList clearfix">
                                <p v-show="noData" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                <router-link :to="{ name: 'needDetail', params: { id: item.id} }" v-for="(item, index) in needData" :key="index" class="item clearfix">
                                    <h1 class="f14 text-ellipsis">{{item['needs']}}</h1>
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
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                investor: "", //投资机构
                financing: "", //融资项目
                needData: "", //融资需求
                noData: false,
                totalPages: "",
            };
        },
        created() {
            this.getFinance();
            let cid = 57;
            this.initServicesList(cid);
        },
        methods: {
            getFinance() {
                api.Get("/pub/financing").then(res => {
                    this.investor = res["investor"];
                    this.financing = res["financing"];
                });
            },
            initServicesList(cid) {
                var url = "/enterprise/apply/" + "10" + "/" + "1" + "?cid=" + cid;
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
                var url = "/enterprise/apply/" + "10" + "/" + val + "/" + + "?cid=" + "57";
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                    this.totalPages = res["page"]["totalPages"] * 10;
                });
            },
        }
    };
</script>

<style scoped>
    .financing_banner {
        width: 100%;
        height: 400px;
        background: url(../../static/img/banner_trzk.jpg) no-repeat center 100%;
        background-size: cover;
        overflow: hidden;
    }
    .financing_Btn {
        width: 200px;
        height: 50px;
        background: url(../../static/img/trzk_btn.png) no-repeat center 100%;
        background-size: contain;
        margin-left: auto;
        margin-right: auto;
        margin-top: 280px;
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