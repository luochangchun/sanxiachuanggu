<template>
    <div class="container min650">
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <p style="font-size:14px;color:#666;line-height:40px;">您所在的位置 : <span style="color:#0089e3;">创谷企业</span> > 入孵企业列表</p>
                <div>
                    <el-row :gutter="10" style="margin-bottom: 10px;" class="into_more_header">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12">
                            <h2>公司名称</h2>
                        </el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4">
                            <h2 class="tc">所属孵化器</h2>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="3" :lg="3">
                            <h2 class="tc">联系人</h2>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5">
                            <h2 class="tc">联系方式</h2>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" v-for="(item, index) in into_list" :key="index" class="into_more_list">
                        <router-link :to="{ name: 'invest_detail', params: { id: item.id} }" style="color:#f48100">
                            <el-col :xs="12" :sm="12" :md="12" :lg="12">
                                <el-row :gutter="10">
                                    <!--<el-col :xs="8" :sm="4" :md="4" :lg="4">-->
                                        <!--<div class="into_more_img" style="height:76px;">-->
                                            <!--&lt;!&ndash;<b>{{item['name']}}</b>&ndash;&gt;-->
                                        <!--</div>-->
                                    <!--</el-col>-->
                                    <el-col :xs="16" :sm="16" :md="16" :lg="16">
                                        <h1>{{item['name']}}</h1>
                                        <p class="text-ellipsis-muti text-ellipsis-2">{{item['intro']}}</p>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :xs="4" :sm="4" :md="4" :lg="4">
                                <h1 class="tc">{{item['incubator']|| '暂无数据'}}</h1>
                            </el-col>
                            <el-col :xs="3" :sm="3" :md="3" :lg="3">
                                <h2 class="tc">{{item['contact'] || '暂无数据'}}</h2>
                            </el-col>
                            <el-col :xs="5" :sm="5" :md="5" :lg="5">
                                <h2 class="tc">{{item['phone'] || '暂无数据'}}</h2>
                            </el-col>
                        </router-link>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <!--分页-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
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
    import api from '../axios/api.js'
    import {formatDate} from '../../static/js/date.js'
    export default {
        data() {
            return {
                into_list: '',
                totalPages: ''
            }
        },
        created() {
            this.getTopList()
        },
        methods: {
            getTopList() {
                api.Get('/enterprise/1/10/1')
                    .then(res => {
                        this.into_list = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/enterprise/' + '1' + '/' + '10' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.into_list = res['data'];
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

<style scoped>
    .into_more_img{
        background: url(/static/img/service_area.png) no-repeat center center;
        background-size: 100%;
        border: 1px solid #eee;
        height: 80px;;
    }
    .into_more_img b{
        font-size: 12px;
        display: block;
        color:#0089e3;
        text-align: center;
        margin-top:10px;
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
        padding: 10px 0;
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
        color: #666;
        font-size: 16px;
        font-weight: normal;
    }
</style>