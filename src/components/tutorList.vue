<template>
    <div class="activity_para">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/college' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>创业导师列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in tutorList" :key="index">
                    <div class="research-teacher">
                        <img :src="item.photo" alt="">
                        <div class="b">
                            <h3 class="f16">{{item.name}}</h3>
                            <p>{{item.title}}</p>
                        </div>
                        <div class="tutorcCheck white tc f14">
                            <router-link :to="{name:'tutorDetail', params: {id:item.id} }" style="color:#fff;">
                                查看更多>>
                            </router-link>
                        </div>
                    </div>
                </el-col>
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
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                tutorList: '',
                totalPages: ''
            }
        },
        created() {
            this.initTutorList()
        },
        methods: {
            initTutorList() {
                let url = '/indie/' + '3' + '/' + '8' + '/' + '1'
                api.Get(url)
                    .then(res => {
                        this.tutorList = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/enterprise/' + '3' + '/' + '8' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.tutorList = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    })
            }
        }
    }
</script>

<style scoped>
    .white{
        color:#fff;
    }
    .f16{
        text-align: center;
    }
    .b p{
        text-align: center;
        line-height: 30px;
        padding: 0% 5px;
    }
    .research-teacher {
        margin-bottom: 30px;
    }
    .activity_para {
        height: auto;
        min-height: 100%;
    }
    .activity_para p {
        margin: 0 0 10px;
        line-height: 24px;
    }
    .activity_para h1,
    .activity_para p {
        color: #fff;
    }
    .tutorList .item {
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    .tutorList .item img {
        width: 80%;
        padding: 10%;
        border-radius: 20px;
    }
    .tutorList .item p {
        width: 90%;
        line-height: 30px;
        padding: 0% 5px;
        text-align: center;
        margin-left: 5%;
    }
    .tutorcCheck {
        width: 96px;
        padding: 10px 6px;
        background-color: #f48100;
        border-color: #f48100;
        margin: 0 auto 5% auto;
        border-radius: 8px;
    }
</style>
