<template>
    <div class="result_detail">
        <!--header-->
        <div class="container">
            <el-row :gutter="20" class="result_detail_top">
                <el-col :lg="8" :md="8" :sm="8" :xs="24" class="result_detail_top_img">
                    <img src="../../static/img/logo.png" alt="">
                </el-col>
                <el-col :lg="16" :md="16" :sm="16" :xs="24">
                    <div class="inb">
                        <h1 class="title-h1">{{ resultDetail.resultsName }}</h1>
                        <!--<b>-->
                             <!--<span v-if="item.state == true">-->
                                 <!--<span>已转化</span>-->
                             <!--</span>-->
                            <!--<span v-if="item.state == false">-->
                                <!--<span>转化中</span>-->
                            <!--</span>-->
                        <!--</b>-->
                    </div>
                    <p>成果权力人全称: {{ resultDetail.rightName }}</p>
                    <p>成果所属高校: {{ resultDetail.belongsTo }}</p>
                    <p>预估标金额: <span>{{  resultDetail.money}}</span>万元</p>
                    <div style="color:#666;">应用领域:
                        <p v-for="(upItem,index) in resultDetail.fieldId.split(',')" :key="index" style="display: inline-block;margin-right:10px;">
                            <i  v-if="upItem == subItem.id" v-for="(subItem,index) in field" :key="index">
                                {{ subItem.value }}
                            </i>
                        </p>
                    </div>
                    <div class="small-img">
                        <span><img src="../../static/img/lianxiren.png" alt=""></span>
                        <p>{{ resultDetail.name }}</p>
                    </div>
                    <div class="small-img result-b">
                        <span><img src="../../static/img/phone.png" alt=""></span>
                        <p>{{ resultDetail.phone }}</p>
                    </div>
                    <div class="small-img">
                        <span><img src="../../static/img/email.png" alt=""></span>
                        <p>{{ resultDetail.mail }}</p>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :lg="4" :md="4" :sm="12" :xs="24">
                    <div class="b-list">
                        <p>成果类别</p>
                        <img src="../../static/img/result.png" alt="">
                        <h2 v-if="resultDetail.resultsId == subItem.id" v-for="(subItem,index) in category" :key="index">
                            {{ subItem.value }}
                        </h2>
                    </div>
                </el-col>
                <el-col :lg="4" :md="4" :sm="12" :xs="24">
                    <div class="b-list">
                        <p>成熟度</p>
                        <img src="../../static/img/result.png" alt="">
                        <h2>
                            <span v-if="resultDetail.mature == 3">
                                <span>研发</span>
                            </span>
                            <span v-if="resultDetail.mature == 2">
                                <span>中试</span>
                            </span>
                            <span v-if="resultDetail.mature == 1">
                                <span>小试</span>
                            </span>
                            <span v-if="resultDetail.mature == 0">
                                <span>其他</span>
                            </span>
                        </h2>
                    </div>
                </el-col>
                <el-col :lg="4" :md="4" :sm="12" :xs="24">
                    <div class="b-list">
                        <p>合作形式</p>
                        <img src="../../static/img/result.png" alt="">
                        <h2>
                            <span v-if="resultDetail.plan == 4">
                                <span>使用许可</span>
                            </span>
                            <span v-if="resultDetail.plan == 3">
                                <span>技术入股</span>
                            </span>
                            <span v-if="resultDetail.plan == 2">
                                <span>分地区转让</span>
                            </span>
                            <span v-if="resultDetail.plan == 1">
                                <span>一次转让</span>
                            </span>
                            <span v-if="resultDetail.plan == 0">
                                <span>其他</span>
                            </span>
                        </h2>
                    </div>
                </el-col>
                <el-col :lg="4" :md="4" :sm="12" :xs="24">
                    <div class="b-list">
                        <p>可否国外推介</p>
                        <img src="../../static/img/result.png" alt="">
                        <h2>
                            <span v-if="resultDetail.toPromote == true">
                                <span>是</span>
                            </span>
                            <span v-if="resultDetail.toPromote == false">
                                <span>否</span>
                            </span>
                        </h2>
                    </div>
                </el-col>
                <el-col :lg="4" :md="4" :sm="12" :xs="24">
                    <div class="b-list">
                        <p>能否提供英文版本</p>
                        <img src="../../static/img/result.png" alt="">
                        <h2>
                            <span v-if="resultDetail.englishVersion == true">
                                <span>是</span>
                            </span>
                            <span v-if="resultDetail.englishVersion == false">
                                <span>否</span>
                            </span>
                        </h2>
                    </div>
                </el-col>
                <el-col :lg="4" :md="4" :sm="12" :xs="24">
                    <div class="b-list">
                        <p>有效期至</p>
                        <img src="../../static/img/result.png" alt="">
                        <h2>{{ resultDetail.date | formatDate }}</h2>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <h1 class="title-h1 t-b">科技成果信息</h1>
                    <hr>
                    <div class="content-list">
                        <h2>成果描述:</h2>
                        <p>{{ resultDetail.describes }}</p>
                    </div>
                    <div class="content-list">
                        <h2>市场前景分析:</h2>
                        <p>{{ resultDetail.market }}</p>
                    </div>
                    <div class="content-list">
                        <h2>与同类成果相比的优势分析:</h2>
                        <p>{{ resultDetail.advantage }}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--footer-->
    </div>
</template>

<script>
    import * as types from "./store/types";
    import api from "../axios/api.js";
    import { formatDate } from "../../static/js/date.js";
    export default {
        data() {
            return {
                resultDetail: "",//科技成果转化详情
                category: "",//成果类别
            };
        },
        mounted() {

        },
        created() {
            let id = this.$route.params.id;
            this.getResult_detail(id);
            this.initCategory();//成果类别
            this.initField();//应用领域

        },
        methods: {
            getResult_detail(id) {
                api.Get('/science/' + id)
                    .then(res => {
                        this.resultDetail = res;
//                        console.log(res);
                    })
            },
            initCategory() {
                api.Get("/dict/results").then(res => {
                    this.category = res;
                });
            },
            initField() {
                api.Get("/dict/application").then(res => {
                    this.field = res;
                });
            },

        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, "yyyy-MM-dd hh:mm");
            }
        }
    };
</script>

<style scoped>
    .result_detail{
        padding-bottom:50px;
    }
    .result_detail{
        padding-top: 30px;
    }
    .title-h1{
        font-size: 16px;
        color:#333;
    }
    .inb h1,.inb b{
        display: inline-block;
    }
    .inb{
        margin-bottom: 10px;
    }
    .inb b{
        color:#e38000;
        border:1px solid #e38000;
        padding:2px 8px;
        font-size: 12px;
        margin-left: 4%;
    }
    .small-img{
        display: inline-block;
        text-align: center;
        padding-left:10px;
        padding-right:10px;
        margin-top: 20px;
    }
    .small-img img{
        width:20px;
    }
    .result_detail_top p span{
        color:#ff4949;
        font-size:18px;
        font-weight: bold;
    }
    .result_detail_top p{
        line-height:28px;
        color:#666;
        font-size: 13px;
    }
    .result-b{
        border-left:1px solid #ddd;
        border-right:1px solid #ddd;
    }
    .result_detail_top_img{
        border:1px solid #ddd;
        height:220px;
    }
    .result_detail_top_img img{
        height:64px;
        width:88px;
        margin-top: 60px;
    }
    .b-list{
        text-align: center;
        background-color:#f1f1f1;
        border:1px solid #0089e3;
        border-radius:6px;
        padding-top:10px;
        padding-bottom:10px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .b-list p{
        color:#666;
        line-height:30px;
    }
    .b-list img{
        width:29px;
    }
    .b-list h2{
        color:#333;
        line-height:30px;

    }
    .t-b{
        border-bottom:2px solid #0089e3;
        display: inline;
        padding:7px 0;
    }
    hr{
        color:#ddd;
    }
    .content-list h2{
         color:#333;
         line-height:30px;
        font-size: 15px;
     }
    .content-list p{
        color:#666;
        line-height:30px;
    }
</style>
