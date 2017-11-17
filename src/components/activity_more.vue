<template>
    <div>
        <!--精彩瞬间详情-->
        <el-row :gutter="0" style="margin-bottom: 50px;">
            <div class="container">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-breadcrumb separator=">" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/college' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-row :gutter="10">
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in activityList" :key="index">
                        <router-link :to="{ name: 'train_detail', params: { id: item.id} }" class="activitys_item">
                            <div @mouseover="show_activity(index)" @mouseout="hide_activity(index)">
                                <h1 class="tc b f20 text-ellipsis">{{item['name']}}</h1>
                                <p class="tc">活动时间：{{item['startAt'] | formatDate}}</p>
                                <div class="top_line" style="width: 0px" :class="{ horizontal_line: activity_active[index] }"></div>
                                <div class="bottom_line" style="width: 0px;" :class="{ horizontal_line: activity_active[index] }"></div>
                                <div class="left_line" style="height: 0px;" :class="{ vertical_line: activity_active[index] }"></div>
                                <div class="right_line" style="height: 0px;" :class="{ vertical_line: activity_active[index] }"></div>
                            </div>
                        </router-link>
                    </el-col>
                </el-row>
                <!--分页-->
                <el-row :gutter="10" style="margin-bottom: 50px;margin-top: 50px;">
                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                        <div class="block">
                            <el-pagination :current-page="1" :total="totalPages" @current-change="getActivityList" layout="prev, pager, next">
                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    import api from "../axios/api.js";
    export default {
        data() {
            return {
                activityList: "",
                totalPages: "",
                activity_active: [false, false, false, false]
            };
        },
        created() {
            this.initActivityList();
        },
        methods: {
            initActivityList() {
                var url = "/activity/" + "2" + "/" + "10" + "/" + 1;
                api.Get(url).then(res => {
                    this.activityList = res["data"];
                    this.totalPages = res["totalPages"] * 10;
                });
            },
            getActivityList(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = "/activity/" + "2" + "/" + "10" + "/" + val;
                api.Get(url).then(res => {
                    this.activityList = res["data"];
                    this.totalPages = res["totalPages"] * 10;
                });
            },
            show_activity(index) {
                var activity_item = document.querySelectorAll(".activitys_item");
                for (let i = 0; i < activity_item.length; i++) {
                    if (activity_item[i] != activity_item[index]) {
                        this.$set(this.activity_active, i, false);
                    } else {
                        this.$set(this.activity_active, i, true);
                    }
                }
            },
            hide_activity(index) {
                var activity_item = document.querySelectorAll(".activitys_item");
                for (let i = 0; i < activity_item.length; i++) {
                    this.$set(this.activity_active, i, false);
                }
            }
        }
    };
</script>

<style scoped>
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