<template>
    <div>
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div style="position:relative;">
                    <el-breadcrumb separator=">" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '>' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>创谷企业</el-breadcrumb-item>
                        <el-breadcrumb-item>服务窗口入口列表</el-breadcrumb-item>
                    </el-breadcrumb>
                    <router-link class="zs" :to="{ name: 'financingDetail'}">申请为服务商</router-link>
                </div>
                <div>
                    <el-row :gutter="10" style="margin-bottom: 10px;" class="into_more_header">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12">
                            <h2>服务商</h2>
                        </el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4">
                            <h2 class="tc">服务类别</h2>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="3" :lg="3">
                            <h2>联系人</h2>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5">
                            <h2>联系方式</h2>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" v-for="(item, index) in provider_list" :key="index" class="into_more_list">
                        <router-link :to="{ name: 'provider', params: { id: item.id} }" style="color:#f48100">
                            <el-col :xs="12" :sm="12" :md="12" :lg="12" class="into_more_img">
                                <el-row :gutter="10">
                                    <el-col :xs="8" :sm="4" :md="4" :lg="4">
                                        <div>
                                            <img :src="item['icon']" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :xs="16" :sm="16" :md="16" :lg="16">
                                        <h1>{{item['name']}}</h1>
                                        <p>{{item['intro']}}</p>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                <h1 class="tc">{{item['service']}}</h1>
                            </el-col>
                            <el-col :xs="3" :sm="3" :md="3" :lg="3">
                                <h2 class="tc">{{item['contact'] || '暂无数据'}}</h2>
                            </el-col>
                            <el-col :xs="5" :sm="5" :md="5" :lg="5">
                                <h2 class="tc">{{item['phone'] || '暂无数据'}}</h2>
                            </el-col>
                        </router-link>
                    </el-row>
                    <!--分页-->
                    <el-row :gutter="10" style="margin-bottom: 50px;">
                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                            <div class="block">
                                <el-pagination :current-page="1" :total="totalPages" @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                provider_list: '',
                totalPages: ''
            }
        },
        created() {
            this.getTopList()
        },
        methods: {
            getTopList() {
                api.Get('/enterprise/2/10/1')
                    .then(res => {
                        this.provider_list = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/enterprise/' + '2' + '/' + '10' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.provider_list = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    })
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm')
            }
        }
    };
</script>

<style>
    .zs {
        background-color: #f48100;
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 100px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        position: absolute;
        right: 0px;
        top: 5px;
    }
    .into_more_header h2 {
        color: #666;
        background-color: #f1f1f1;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
    }
    .into_more_header {
        background-color: #f1f1f1;
        height: 40px;
        line-height: 40px;
    }
    .into_more_img img {
        width: 100%;
    }
    .into_more_list {
        border: 1px solid #ddd;
        margin-bottom: 10px;
        padding: 20px 5px;
        margin-top: -10px;
        border-top: none;
    }
    .into_more_list h1 {
        color: #0089e3;
        font-size: 16px;
        font-weight: normal;
        line-height: 30px;
    }
    .into_more_list p {
        color: #999;
        font-size: 10px;
        font-weight: normal;
        line-height: 20px;
    }
    .into_more_list h2 {
        width: 100%;
        text-align: center;
        color: #666;
        font-size: 16px;
        font-weight: normal;
        /* margin-left: 40px; */
    }
</style>