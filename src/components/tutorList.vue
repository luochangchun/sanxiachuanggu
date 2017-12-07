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
            <el-row :gutter="10" style="margin:20px 0">
                <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in tutorList" :key="index">
                    <div class="research-teacher" style="margin-bottom:20px;">
                        <img :src="item.photo" alt="">
                        <div>
                            <h3>{{item.name}}</h3>
                            <p>{{item.title}}</p>
                            <p class="text-ellipsis-muti text-ellipsis-2">{{item.intro}}</p>
                        </div>
                        <div>
                            <router-link :to="{name:'tutorDetail', params: {id:item.id}}">
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
                var url = '/indie/' + '3' + '/' + '8' + '/' + val
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
    .research-teacher {
        background-color: #0068b7;
        padding: 20px 0;
        border-radius:5px;
        position: relative;
        min-height: 220px;
    }
    .research-teacher img {
        width: 30%;
        margin-right: auto;
        margin-left: auto;
        display: block;
    }
    .research-teacher div {
        margin-left: 30px;
        margin-right: 30px;
        text-align: center;
        color: #fff;
        margin-top: 25px;
    }
    .research-teacher a {
        width: 100px;
        line-height: 26px;
        border-radius: 12px;
        background-color: #f53436;
        color: #fff;
        font-size: 14px;
        border: none;
        margin: 20px auto;
    }   
    .research-teacher div p {
        height: 40px;
        margin-bottom: 10px;
    }
</style>
