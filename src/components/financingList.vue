<template>
    <div class="Financing">
        <div class="container min650">
            <el-row :gutter="0">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator="/" class="padder-v">
                        <el-breadcrumb-item :to="{ path: '/' }">投融资库</el-breadcrumb-item>
                        <el-breadcrumb-item>融资项目列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(item, index) in provider_list" :key="index">
                    <router-link :to="{ name: 'financingDetail', params: { id: item.id} }" class="Financing_item rel">
                        <img :src='item.logo' alt="">
                        <div class="Financing_wrap">
                            <div class="Financing_info">
                                <h1 class="f16">{{item.name}}</h1>
                                <p class="text-ellipsis">{{item.intro}}</p>
                            </div>
                            <el-row type="flex" class="Financing_money">
                                <el-col :span="6">
                                    <p class="f14">{{item.archived}}万<br/>已获得投资意向</p>
                                </el-col>
                                <el-col :span="6" :push="12">
                                    <p class="f14 tr">{{item.financing}}万<br/>预融资总额</p>
                                </el-col>
                            </el-row>
                            <el-tag type="primary" style="margin-left:8px">行业领域:
                                <span>消费生活</span>
                            </el-tag>
                            <el-tag type="success">已完成融资:
                                <span>未完成融资</span>
                            </el-tag>
                            <p class="f14 pl10" style="margin-left:8px;">发起人:{{item.founder}}</p>
                        </div>
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import api from '../axios/api.js'
    import {formatDate} from '../../static/js/date.js'
    export default {
        data() {
            return {
                provider_list: '',
            }
        },
        created() {
            this.getTopList()
        },
        methods: {
            getTopList() {
                api.Get('/pub/index')
                    .then(res => {
                        this.provider_list = res['financing'];
                    });
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
