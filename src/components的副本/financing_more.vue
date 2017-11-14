<template>
    <div class="activity_para">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" style="margin:15px 0;position:relative;">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">投融资库</el-breadcrumb-item>
                        <el-breadcrumb-item>融资项目列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <router-link v-if="true" :to="{ name: 'attract_list', params: {categoryId:'2', type: type}}" class="zs">发布项目</router-link>
            </el-row>
            <el-row :gutter="20" class="tutorList">
                <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in financing" :key="index">
                    <div class="item">
                        <div style="max-height:250px;">
                            <img :src='item.logo' alt="" style="max-height:220px;">
                        </div>
                        <p class="f16">{{item.name}}</p>
                        <p class="f14 text-ellipsis-muti text-ellipsis-3" style="height:60px;max-height:60px;">{{item.intro}}</p>
                        <router-link :to="{ name: 'financingDetail', params: { id: item.id}}" class="tutorcCheck white tc f14">
                            查看详情>>
                        </router-link>
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
                financingDetail: '',
                financing: '', //融资项目
            }
        },
        created() {
            this.getTutorList()
        },
        methods: {
            getTutorList(id) {
                api.Get('/pub/financing')
                    .then(res => {
                        console.log(res);
                        this.financing = res['financing'];
                    });
            }
        }
    }
</script>

<style scoped>
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
        top: 20px;
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
        color: #666;
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
