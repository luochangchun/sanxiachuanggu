<template>
    <div class="talent" v-loading.fullscreen.lock="fullscreenLoading">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="container" style="min-height:400px;">
                    <el-row>
                        <el-col :span="2" style="margin-top:15px">
                            <p class="class_name">服务领域:</p>
                        </el-col>
                        <el-col :span="22">
                            <div class="filter" style="margin-top:20px">
                                <div class="filter_top rel">
                                    <dl>
                                        <!-- <dt>项目阶段</dt> -->
                                        <dd :class="{ auto : moreFlag }" style="width: 93%;">
                                            <a href="javascript:;" :class="{ on : display_active[index] }" @click="handleClick(index,item.id)" class="sx_child" v-for="(item,index) in ServiceList" :key="index" :sid="item.id" v-if="index>0">{{item['value']}}</a>
                                        </dd>
                                    </dl>
                                    <a href="javascript:;" class="filter_more abs" @click="filterMore">更多<i class="el-icon-arrow-up" v-show="!moreFlag"></i><i class="el-icon-arrow-down" v-show="moreFlag"></i></a>
                                </div>
                                <div class="filter_body" v-loading.body="loading">
                                    <el-row :gutter="10">
                                        <p v-show="nodata" style="margin-left:5px;">暂无数据</p>
                                        <el-col v-show="!nodata" :xs="6" :sm="6" :md="6" :lg="6" v-for="(item,index) in needData" :key="index">
                                            <div class="intermediary_list">
                                                <h1 class="text-ellipsis">{{item['name']}}</h1>
                                                <p class="text-ellipsis">地址:{{item['address']}}</p>
                                                <p class="text-ellipsis">电话:{{item['phone']}}</p>
                                                <img src="../../static/img/i-01.png" alt="" v-show="item['serviceId'] == '51'">
                                                <img src="../../static/img/i-02.png" alt="" v-show="item['serviceId'] == '52'">
                                                <img src="../../static/img/i-03.png" alt="" v-show="item['serviceId'] == '53'">
                                                <img src="../../static/img/i-04.png" alt="" v-show="item['serviceId'] == '54'">
                                                <img src="../../static/img/i-05.png" alt="" v-show="item['serviceId'] == '55'">
                                                <img src="../../static/img/i-06.png" alt="" v-show="item['serviceId'] == '56'">
                                                <img src="../../static/img/i-07.png" alt="" v-show="item['serviceId'] == '57'">
                                                <img src="../../static/img/i-08.png" alt="" v-show="item['serviceId'] == '58'">
                                                <img src="../../static/img/i-09.png" alt="" v-show="item['serviceId'] == '59'">
                                                <img src="../../static/img/i-10.png" alt="" v-show="item['serviceId'] == '60'">
                                                <img src="../../static/img/i-11.png" alt="" v-show="item['serviceId'] == '61'">
                                                <img src="../../static/img/i-12.png" alt="" v-show="item['serviceId'] == '62'">
                                                <img src="../../static/img/i-13.png" alt="" v-show="item['serviceId'] == '63'">
                                                <img src="../../static/img/i-14.png" alt="" v-show="item['serviceId'] == '64'">
                                                <img src="../../static/img/i-15.png" alt="" v-show="item['serviceId'] == '65'">
                                                <img src="../../static/img/i-16.png" alt="" v-show="item['serviceId'] == '66'">
                                                <img src="../../static/img/i-17.png" alt="" v-show="item['serviceId'] == '67'">
                                                <img src="../../static/img/i-18.png" alt="" v-show="item['serviceId'] == '68'">
                                                <img src="../../static/img/i-19.png" alt="" v-show="item['serviceId'] == '69'">
                                                <img src="../../static/img/i-20.png" alt="" v-show="item['serviceId'] == '70'">
                                                <img src="../../static/img/i-21.png" alt="" v-show="item['serviceId'] == '71'">
                                                <img src="../../static/img/i-22.png" alt="" v-show="item['serviceId'] == '72'">
                                                <img src="../../static/img/i-23.png" alt="" v-show="item['serviceId'] == '73'">
                                                <img src="../../static/img/i-24.png" alt="" v-show="item['serviceId'] == '74'">
                                                <img src="../../static/img/i-25.png" alt="" v-show="item['serviceId'] == '75'">
                                                <img src="../../static/img/i-26.png" alt="" v-show="item['serviceId'] == '76'">
                                                <img src="../../static/img/i-27.png" alt="" v-show="item['serviceId'] == '77'">
                                                <img src="../../static/img/i-28.png" alt="" v-show="item['serviceId'] == '78'">
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="10" style="margin-top: 30px;margin-bottom: 20px;">
                                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                            <div class="block">
                                                <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                                </el-pagination>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
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
    export default {
        data() {
            return {
                loading: false,
                moreFlag: true,
                display_active: [false, false, false, false],
                activeName: "tab1",
                noData: false,
                ServiceList: '',
                needData: '',
                totalPages: '',
                fullscreenLoading: false
            };
        },
        created() {
            this.getServiceList()
        },
        methods: {
            getServiceList() {
                this.fullscreenLoading = true;
                api.Get('/dict/service').then(res => {
                    this.ServiceList = res;
                    this.ServiceList.forEach((value, index, array) => {
                        if (index == 1) {
                            this.$set(this.display_active, 1, true)
                            this.getProviderClass(this.ServiceList[index]["id"]);
                            window.localStorage.setItem('mid', this.ServiceList[index]["id"]);
                            this.fullscreenLoading = false;
                        }
                    });
                });
            },
            filterMore() {
                if (this.moreFlag) {
                    this.moreFlag = false;
                } else {
                    this.moreFlag = true;
                }
            },
            handleClick(index, mid) {
                var sx_child_item = document.querySelectorAll('.sx_child');
                for (let i = 1; i <= sx_child_item.length; i++) {
                    if (sx_child_item[i] != sx_child_item[index]) {
                        this.$set(this.display_active, i, false)
                    } else {
                        this.$set(this.display_active, i, true)
                    }
                }
                this.getProviderClass(mid);
                window.localStorage.setItem("mid", mid);
            },
            getProviderClass(id) {
                let url = '/enterprise/' + id + '/' + '2' + '/' + '10' + '/' + '1';
                api.Get(url)
                    .then(res => {
                        this.needData = res['data'];
                        if (this.needData.length == 0) {
                            this.nodata = true;
                        } else {
                            this.nodata = false;
                        }
                        this.totalPages = res['totalPages'] * 10;
                    });
            },
            handleCurrentChange(val) {
                let id = window.localStorage.getItem('mid');
                let url = '/enterprise/' + id + '/' + '2' + '/' + '10' + '/' + val;
                api.Get(url)
                    .then(res => {
                        this.needData = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    });
            }
        }
    };
</script>

<style scoped>
    .intermediary_list {
        border: 1px solid #ddd;
        font-size: 14px;
        padding: 20px;
        position: relative;
    }
    .intermediary_list h1 {
        width: 100%;
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 20px;
        color: #333;
        letter-spacing: 3px;
    }
    .intermediary_list p {
        width: 80%;
        font-size: 14px;
        margin-bottom: 8px;
        color: #666;
    }
    .intermediary_list {
        margin-bottom: 10px;
    }
    .intermediary_list img {
        width: 50px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
</style>