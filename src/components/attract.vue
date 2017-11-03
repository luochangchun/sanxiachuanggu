<template>
    <div>
        <!-- 招商列表 -->
        <el-row :gutter="10" style="margin-bottom: 50px;" v-if="!attractFlag">
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :offset="3" style="margin-top:15px;">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/map' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>招商信息列表</el-breadcrumb-item>
                    </el-breadcrumb>
            </el-col>
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" style="margin-top:15px;">
                <el-row :gutter="10" v-for="(item, index) in investData" :key="index" style="border:1px solid #ddd;margin-bottom: 10px;">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8">
                        <div class="incubators_more_img">
                            <img src="../../static/img/int1.png" alt="" style="margin-left: -5px;">
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :offset="1">
                        <div class="incubators_more_introduce">
                            <h2>{{item['title']}}</h2>
                            <p><span>地址：</span>{{item['address']}}</p>
                            <p><span>联系方式：</span>{{item['contact']}} &nbsp;&nbsp;{{item['phone']}}
                                <p><span>在孵企业数：</span>23家</p>
                                <router-link :to="{name:'attract_detail', params: {id:item['id']}}">
                                    查看详情>>
                                </router-link>
                        </div>
                    </el-col>
                    <el-col :xs="3" :sm="3" :md="3" :lg="3">
                        <div class="incubators_more_area">
                            <h3>{{item['area']}}平方米</h3>
                            <p>孵化总面积</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--分页-->
        <el-row :gutter="10" style="margin-bottom: 50px;" v-if="!attractFlag">
            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                <div class="block">
                    <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>

        <!-- 求租列表 -->
        <el-row :gutter="10" style="margin-bottom: 50px;" v-if="attractFlag">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" style="margin-top:30px;">
                <el-row :gutter="10" v-for="(item, index) in 6" :key="index" style="border:1px solid #ddd;margin-bottom: 10px;">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8">
                        <div class="incubators_more_img">
                            <img src="../../static/img/int1.png" alt="" style="margin-left: -5px;">
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :offset="1">
                        <div class="incubators_more_introduce">
                            <h2>西陵青年创业基地</h2>
                            <p><span>地址：</span>宜昌市西陵区西葫芦32号2号楼</p>
                            <p><span>联系方式：</span>吴江涛 &nbsp;&nbsp;18671768894
                                <p><span>在孵企业数：</span>23家</p>
                                <button>查看详情>></button>
                        </div>
                    </el-col>
                    <el-col :xs="3" :sm="3" :md="3" :lg="3">
                        <div class="incubators_more_area">
                            <h3>1700平方米</h3>
                            <p>孵化总面积</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--分页-->
        <el-row :gutter="10" style="margin-bottom: 50px;" v-if="attractFlag">
            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                <div class="block">
                    <el-pagination :current-page="1" :total="totalPages" @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                attractFlag:false,
                investData: "", //招商列表信息
                totalPages:''
            };
        },
        created() {
            let type = this.$route.params.type;
            if (type == "invest") {
                //调用招商列表数据
                this.initInvest();
            } else if (type == "rent") {
                //调用求租列表数据
            }
        },
        methods: {
            initInvest() {
                let url = "/qb/tenancy/2/" + '10' + '/1' ;
                api.Get(url).then(res => {
                    this.attractFlag = false;
                    this.investData = res['data'];
                    this.totalPages = res['totalPages']*10;
                });
            },
            // handleCurrentChange(val) {
            //     //获取到当前分页页码，获取当前页面数据
            //     var url = '/qb/tenancy/2/' + '10' + '/' + val
            //     api.Get(url)
            //         .then(res => {
            //             this.investData = res['data'];
            //             this.totalPages = res['totalPages']*10;
            //         })
            // }
        }
    };
</script>
<style>
    .incubators_more_area img {
        width: 100%;
    }
    .incubators_more_introduce h2 {
        color: #0089e3;
        font-weight: normal;
        line-height: 30px;
        font-size: 16px;
        margin-top: 20px;
    }
    .incubators_more_introduce p {
        line-height: 30px;
        color: #666;
    }
    .incubators_more_introduce a {
        width: 100px;
        line-height: 30px;
        border-radius: 4px;
        background-color: #f48100;
        color: #fff;
        font-size: 14px;
        border: none;
        margin-top: 5px;
        text-align: center;
    }
    .incubators_more_area h3 {
        color: #f48100;
        font-size: 14px;
        font-weight: normal;
        margin-top: 30px;
        margin-bottom: -30px;
    }
    .incubators_more_area p {
        color: #666;
        font-size: 10px;
        font-weight: normal;
        margin-top: 30px;
    }
</style>