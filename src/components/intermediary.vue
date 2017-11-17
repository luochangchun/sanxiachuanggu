<template>
    <div class="talent">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="container" style="min-height:400px;">
                    <el-row>
                        <el-col :span="2">
                            <p class="class_name">服务领域:</p>
                        </el-col>
                        <el-col :span="22">
                            <el-tabs v-model="activeName" @tab-click="handleClick" class="interTab">
                                <el-tab-pane :label='item.value' :name="item.cname" :mid="item.id" v-for="(item, index) in ServiceList" :key="index" v-if="index > 0">
                                    <el-row :gutter="10">
                                        <p v-show="nodata" style="margin-left:5px;">暂无数据</p>
                                        <el-col v-show="!nodata" :xs="6" :sm="6" :md="6" :lg="6" v-for="(item,index) in needData" :key="index">
                                            <!-- <router-link :to="{ name: 'invest_detail', params: { id: item.id} }"> -->
                                                <div class="intermediary_list">
                                                    <h1 class="text-ellipsis">{{item['name']}}</h1>
                                                    <p class="text-ellipsis">地址:{{item['address']}}</p>
                                                    <p class="text-ellipsis">电话:{{item['phone']}}</p>
                                                    <img src="../../static/img/internet.png" alt="" v-show="item['contact'] == '51' || item['contact'] == '35'">
                                                    <img src="../../static/img/wy.png" alt="" v-show="item['contact'] == '34'">
                                                    <img src="../../static/img/sb.png" alt="" v-show="item['contact'] == '32'">
                                                    <img src="../../static/img/jr.png" alt="" v-show="item['contact'] == '4' || item['contact'] == '5'">
                                                    <img src="../../static/img/fn.png" alt="" v-show="item['contact'] == '2'">
                                                    <img src="../../static/img/xm.png" alt="" v-show="item['contact'] == '1'">
                                                    <img src="../../static/img/gs.png" alt="" v-show="item['contact'] == '3'">
                                                    <img src="../../static/img/rc.png" alt="" v-show="item['contact'] == '44' || item['contact'] == '45'">
                                                </div>
                                            <!-- </router-link> -->
                                        </el-col>
                                    </el-row>
                                    <!--分页-->
                                    <el-row :gutter="10" style="margin-top: 30px;margin-bottom: 20px;">
                                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                            <div class="block">
                                                <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                                </el-pagination>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                            </el-tabs>
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
                activeName: "tab1",
                noData: false,
                ServiceList: '',
                needData: '',
                totalPages: ''
            };
        },
        created() {
            this.getServiceList()
        },
        methods: {
            getServiceList() {
                api.Get('/dict/service').then(res => {
                    this.ServiceList = res;
                    this.ServiceList.forEach((value, index, array) => {
                        if (index == 1) {
                            this.ServiceList[index]["cname"] = "tab" + index;
                            this.getProviderClass(this.ServiceList[index]["id"]);
                            window.localStorage.setItem('mid', this.ServiceList[index]["id"]);
                        }
                    });
                });
            },
            handleClick(tab, event) {
                this.getProviderClass(tab["$attrs"]["mid"]);
                window.localStorage.setItem("mid", tab["$attrs"]["mid"]);
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
                        console.log(this.nodata);
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