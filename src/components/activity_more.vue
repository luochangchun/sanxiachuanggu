<template>
    <div>
        <!--精彩瞬间详情-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <el-breadcrumb separator=">" class="padder-vx">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/college' }">创谷学院</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                </el-breadcrumb>
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(item, index) in activityList" :key="index">
                        <router-link :to="{name:'train_detail', params: {id:item.id} }" class="activitys_item">
                            <img :src="item.icon" alt="">
                            <div class="process abs">
                                <!--<p class="white f16 tc text-ellipsis">活动5</p>-->
                                <p class="f16 tc tag">进行中</p>
                                <p class="f16 tc tag">已结束</p>
                            </div>
                        </router-link>
                        <div class="splendid_detail_title">
                            <h1>{{item.name}}</h1>
                            <!-- <p>时间:2017年8月25 &nbsp;&nbsp;下午14:30-16:30</p> -->
                            <p>地点:{{item.location}}</p>
                            <!-- <p>邀请嘉宾:周丹,刘庆,王丽</p> -->
                            <!-- <p>人数:30</p> -->
                        </div>
                    </el-col>
                </el-row>
                <!--分页-->
                <el-row :gutter="10" style="margin-bottom: 50px;margin-top: 50px;">
                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                        <div class="block">
                            <el-pagination :current-page="1" :total="totalPages" @size-change="handleSizeChange" @current-change="getActivityList" layout="prev, pager, next">
                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                activityList: '',
                totalPages:''
            };
        },
        created() {
            this.initActivityList();
        },
        methods: {
            initActivityList() {
                var url = '/activity/' + '2' + '/' + '10' + '/' + 1
                api.Get(url)
                    .then(res => {
                        this.activityList = res['data'];
                        this.totalPages = res['totalPages']*10;
                    })
            },
            getActivityList(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/activity/' + '2' + '/' + '10' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.activityList = res['data'];
                        this.totalPages = res['totalPages']*10;
                    })
            }

        }
    };
</script>

<style>
    .process {
        background-color: transparent;
    }
    .process .tag {
        background-color: #93959a;
    }
    .splendid_detail_title h1 {
        color: #0089e3;
        font-size: 14px;
        font-weight: normal;
        line-height: 30px;
    }
    .splendid_detail_title p {
        color: #666;
        font-size: 14px;
        font-weight: normal;
        line-height: 25px;
    }
</style>