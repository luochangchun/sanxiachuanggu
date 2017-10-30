<template>
    <div class="activity_para">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/college' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>精彩瞬间</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in highlightList" :key="index">
                    <router-link :to="{name:'train_detail', params: {id:item.id} }" class="research-splendid">
                        <img :src="item.photo" alt="">
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                highlightList: "" //精彩瞬间
            };
        },
        created() {
            this.getHighlightList()
        },
        methods: {
            getHighlightList() {
                api.Get('/pub/colleges')
                    .then(res => {
                        this.highlightList = res['teacher'];
                    });
            }
        }
    }
</script>

<style scoped>
    .research-splendid {
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        margin:20px 0;
    }
    .research-splendid:hover {
        box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
    .research-splendid img {
        width: 100%;
    }
</style>

