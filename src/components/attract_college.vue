<template>
    <div class="container min650">
        <!-- 双创 -->
        <el-row :gutter="10" style="margin-bottom: 50px;min-height:500px;">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="position:relative;">
                <el-breadcrumb separator="/" class="padder-vx bb">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/incubators' }">双创空间</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="type=='1'">招商信息列表</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="type=='2'">求租信息列表</el-breadcrumb-item>
                </el-breadcrumb>
                <!-- 跳到孵化器申请表单 -->
                <router-link v-if="type == 1" :to="{ name: 'attract_list', params: {categoryId:'3', type: type}}" class="zs">发布招商</router-link>
                <router-link v-if="type == 2" :to="{ name: 'attract_list', params: {categoryId:'3', type: type}}" class="zs">发布求租</router-link>
            </el-col>
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <p v-show="attractFlag1.length==0 && type == '1'" style="text-align:center;margin-top:15px;">暂无数据</p>
                <p v-show="attractFlag2.length==0 && type == '2'" style="text-align:center;margin-top:15px;">暂无数据</p>
                <el-row v-if="type=='1' && item['type'] == 1" :gutter="10" v-for="(item, index) in investData" :key="index" style="border-bottom:1px solid #ddd;padding: 10px 0;">
                    <router-link :to="{name:'attract_detail', params: {id:item['id']}}">
                        <!-- <el-col :xs="4" :sm="4" :md="4" :lg="4">
                            
                        </el-col> -->
                        <el-col :xs="21" :sm="21" :md="21" :lg="21" class="clearfix">
                            <div class="incubators_more_img l">
                                <img v-if="item['icon']" :src="item['icon']" alt="" style="width:100px;height:80px;margin-top: 12px;">
                                <img v-if="!item['icon']" src="../../static/img/zs.png" alt="" style="width:100px;height:80px;margin-top: 12px;">
                            </div>
                            <div class="incubators_more_introduce l" style="margin-left: 10px;">
                                <h2 v-if="!item['title']">招商</h2>
                                <h2 v-if="item['title']">{{item['title']}}</h2>
                                <p><span>地址：</span>{{item['address']}}</p>
                                <p><span>联系方式：</span>{{item['contact']}} &nbsp;&nbsp;{{item['phone']}}</p>
                            </div>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="3" :lg="3">
                            <div class="incubators_more_area">
                                <h3 class="b tr">{{item['price']}}{{item['unit']}}</h3>
                            </div>
                        </el-col>
                    </router-link>
                </el-row>
                <el-row v-if="type=='2' && item['type'] == 2" :gutter="10" v-for="(item, index) in investData" :key="index" style="border-bottom:1px solid #ddd;padding: 10px 0;">
                    <router-link :to="{name:'attract_detail', params: {id:item['id']}}">
                        <el-col :xs="21" :sm="21" :md="21" :lg="21">
                            <div class="incubators_more_introduce">
                                <h2 v-if="!item['title']">求租</h2>
                                <h2 v-if="item['title']">{{item['title']}}</h2>
                                <p><span>地址：</span>{{item['address']}}</p>
                                <p><span>联系方式：</span>{{item['contact']}} &nbsp;&nbsp;{{item['phone']}}</p>
                            </div>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="3" :lg="3">
                            <div class="incubators_more_area">
                                <h3 class="b tr">{{item['price']}}{{item['unit']}}</h3>
                            </div>
                        </el-col>
                    </router-link>
                </el-row>
            </el-col>
        </el-row>
        <!--分页-->
        <el-row :gutter="10" style="margin-bottom: 50px;" v-show="attractFlag1.length>0 || attractFlag2.length>0">
            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                <div class="block">
                    <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
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
                type: '',
                attractFlag1: [],
                attractFlag2: [],
                investData: "", //招商列表信息
                totalPages: ''
            };
        },
        created() {
            this.initRent();
            this.type = this.$route.params.type;
        },
        methods: {
            initRent() {
                var  url = "";
                this.type = this.$route.params.type;
                if(this.type == 1) {
                    url = "/qb/tenancy/3/1/" + '10' + '/1';
                } else if(this.type == 2){
                    url = "/qb/tenancy/3/2/" + '10' + '/1';
                }
                // let url = "/qb/tenancy/3/" + '10' + '/1';
                api.Get(url).then(res => {
                    if (res['data'].length > 0) {
                        this.investData = res['data'];
                        for (var i = 0; i < res['data'].length; i++) {
                            if (res['data'][i]['type'] == 1) {
                                this.attractFlag1.push(res['data'][i]['type']);
                            }
                            if (res['data'][i]['type'] == 2) {
                                this.attractFlag2.push(res['data'][i]['type']);
                            }
                        }
                    } else {
                        
                    }
                    this.totalPages = res['totalPages'] * 10;
                });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var  url = "";
                this.type = this.$route.params.type;
                if(this.type == 1) {
                    url = "/qb/tenancy/3/1/" + '10' + val;
                } else if(this.type == 2){
                    url = "/qb/tenancy/3/2/" + '10' + val;
                }
                // var url = '/qb/tenancy/3/' + '10' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.investData = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    })
            }
        },
        watch: {
            '$route' (to, from) {
                this.initRent();
                this.attractFlag = false;
                this.type = this.$route.params.type;
            }
        }
    };
</script>

<style>
    .bb {
        border-bottom: 3px solid #0089e3;
        position: relative;
    }
    .zs {
        background-color: #f48100;
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 80px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        position: absolute;
        right: 10px;
        top: 5px;
    }
    .incubators_more_img {
        overflow: hidden;
    }
    .incubators_more_img img {
        width: 80%;
    }
    .incubators_more_area img {
        width: 100%;
    }
    .incubators_more_introduce h2 {
        color: #0089e3;
        line-height: 26px;
        font-size: 16px;
        margin:8px  0;
    }
    .incubators_more_introduce p {
        line-height: 26px;
        color: #666;
    }
    .incubators_more_introduce a {
        width: 100px;
        line-height: 26px;
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