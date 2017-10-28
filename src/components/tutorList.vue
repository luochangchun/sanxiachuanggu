<template>
    <div class="activity_para">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>讲师列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row  :gutter="20" class="tutorList">
                <el-col :xs="12" :sm="12" :md="8" :lg="8" v-for="(item, index) in teacher" :key="index">
                    <div class="item">
                        <img :src="item.photo" alt="">
                        <p class="f18">{{item.name}}</p>
                        <p class="f16 text-ellipsis-muti text-ellipsis-3" style="height:60px;max-height:60px;">{{item.intro}}</p>
                        <router-link :to="{ name: 'tutorDetail', params: { id: item.id}}" class="tutorcCheck white tc">
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
                tutorDetail: '',
                teacher: '', //优秀讲师
            }
        },
        created() {
            this.getTutorList()
        },
        methods: {
            getTutorList(id) {
                api.Get('/pub/colleges')
                    .then(res => {
                        console.log(res);
                        this.teacher = res['teacher'];
                    });
            }
        }
    }
</script>

<style scoped>
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
        border:1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    .tutorList .item img {
        width: 90%;
        padding: 5%;
        border-radius:20px;
    }
    .tutorList .item p {
         width: 90%;
         line-height: 30px;
         padding: 0% 5px;
         text-align: center;
         margin-left:5%;
    }
    .tutorcCheck {
        width: 96px;
        padding:10px 6px;
        background-color: #f48100;
        border-color: #f48100;
        margin:0 auto 5% auto;
        border-radius: 8px;
    }
</style>
