<template>
    <div>
        <!--服务企业login-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#23b7e5">
                <el-row :gutter="10">
                    <div class="container">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" class="provider_header">
                            <div class="provider_login">
                                <img :src="financeDetail['icon']" alt="">
                            </div>
                            <div>
                                <p>{{financeDetail['name']}}</p>
                            </div>
                        </el-col>
                    </div>
                </el-row>
            </el-col>
        </el-row>
        <!--企业详情-->
        <el-row :gutter="10" style="margin-top: 50px;margin-bottom: 50px;">
            <div class="container">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <table border="1" class="table table-bordered bg-light" style="background-color: #edf1f2">
                                <tbody>
                                    <tr>
                                        <td class="font-bold w-xs">企业名称</td>
                                        <td colspan="3">
                                            <p>{{financeDetail['name']}}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold w-xs">联系人</td>
                                        <td>{{financeDetail['contact']}}</td>
                                        <td class="font-bold">联系电话</td>
                                        <td>
                                            <p>{{financeDetail['phone'] || "暂无数据"}}</p>
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <td class="font-bold w-xs">地址</td>
                                        <td colspan="3">
                                            <p>{{financeDetail['address'] || "暂无数据"}}</p>
                                        </td>
                                    </tr> -->
                                    <tr style="height:240px;">
                                        <td class="font-bold w-xs h-md">企业简介与优势</td>
                                        <td colspan="3">{{financeDetail['intro'] || "暂无数据"}}</td>
                                    </tr>
                                    <!--<tr style="height:90px;">-->
                                        <!--<td class="font-bold w-xs">服务领域</td>-->
                                        <!--<td colspan="3" class="h-xs">-->
                                            <!--&lt;!&ndash; <p v-html="financeDetail['detail']['content']"></p> &ndash;&gt;-->
                                        <!--</td>-->
                                    <!--</tr>-->
                                    <!-- <tr>
                                        <td class="font-bold w-xs">备注</td>
                                        <td colspan="3"></td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </el-col>
                        <!-- <el-col :lg="6" :md="6" :sm="24" :xs="24" :offset="1">
                                <div>
                                    <img src="../../static/img/provider_2.jpg" alt="">
                                </div>
                            </el-col> -->
                    </el-row>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                financeDetail: '',
            }
        },
        created() {
            let id = this.$route.params.id;
            this.getFinanceItem(id);
        },
        methods: {
            getFinanceItem(id) {
                api.Get('/enterprise/' + id)
                    .then(res => {
                        this.financeDetail = res;
                    });
            }
        }
    }
</script>

<style scoped>
    /*服务企业login*/
    .provider_header p {
        line-height: 60px;
        color: #fff;
        font-size: 14px;
    }
    .provider_header button {
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        text-align: center;
    }
    .provider_login img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        float: left;
        background-color: #fff;
        margin-right: 5%;
    }
    .provider_header {
        margin-top: 30px;
        margin-bottom: 40px;
    }
    /*优惠服务*/
    .provider_discounts h1 {
        font-size: 24px;
        font-weight: 400;
        line-height: 40px;
        display: inline-block;
        border-bottom: 2px solid #c8c9cc;
        margin-bottom: 30px;
        margin-top: 50px;
    }
    .provider_p {
        background-color: #edf1f2;
        padding: 15px;
    }
    .provider_p p {
        line-height: 30px;
        color: #58666e;
    }
    .provider_p button span {
        cursor: pointer;
        border-radius: 6px;
        width: 100px;
        height: 38px;
        line-height: 38px;
        display: block;
        color: #dcf2f8;
        background-color: #23b7e5;
        text-align: center;
    }
    /*企业详情*/
    .table {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        border-spacing: 0;
        border-collapse: collapse;
        display: table;
        border: 1px solid #ddd;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
        height: 47px;
    }
    td {
        line-height: 47px;
        border: 1px solid #ddd;
        padding: 0 10px;
        font-size: 14px;
    }
    td p {
        color: #298eff;
        cursor: pointer;
    }
</style>