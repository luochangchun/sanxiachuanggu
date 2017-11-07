<template>
    <div v-loading.fullscreen.lock="fullscreenLoading">
        <!--header-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img">
                    <img src="../../static/img/banner_cgzx.png" alt="">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <el-row :gutter="10">
                    <!--左边图文-->
                    <el-col :lg="16" :md="16" :sm="24" :xs="24">
                        <div v-show="!show_read">
                            <!--导航切换-->
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane v-for="(item,index) in category" :key="index" :label="item.name" :name="item.cname" :cid="item.id">
                                    <el-row :gutter="10" class="news-leftlist" v-show="!show_read">
                                        <router-link :to="{ name: 'article', params: { id: item.id} }" class="m-t b-b clea" v-for="(item, index) in newsListData" :key="index">
                                            <el-col :lg="8" :md="8" :sm="8" :xs="24" class="no-padder">
                                                <div>
                                                    <img :src="item.icon" class="w-full" @click="show_read=true">
                                                </div>
                                            </el-col>
                                            <el-col :lg="16" :md="16" :sm="16" :xs="24" class="pos">
                                                <p class="text-md font-bold text-ellipsis">
                                                    <a href="" class="text-dark-lt">{{item['title']}}</a>
                                                </p>
                                                <p class="text-ellipsis-3" v-html="item['description']"></p>
                                                <div style="bottom:15px;">
                                                    <p class="text-muted pull-left m-r">
                                                        <i class="el-icon-time fa fa-clock-o m-r-xs"></i>
                                                        <span>时间：{{item['time'] | formatDate}}</span>
                                                    </p>
                                                    <p class="text-muted pull-left">
                                                        <i class="el-icon-edit fa fa-edit m-r-xs"></i>
                                                        <span>{{item['views']}}</span>
                                                    </p>
                                                </div>
                                            </el-col>
                                        </router-link>
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
                                </el-tab-pane>
                            </el-tabs>
                            <!--左图右文-->
                        </div>
                    </el-col>
                    <!--右边热门排行-->
                    <el-col :lg="8" :md="8" :sm="24" :xs="24">
                        <el-row :gutter="10">
                            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                <div class="news-rightlist">
                                    <div class="news-hot">热门排行</div>
                                    <div class="news-button">
                                        <button @click="week=true">周排行</button>
                                        <button @click="week=false">日排行</button>
                                    </div>
                                    <ul v-show="!week" style="display:none;">
                                        <li v-for="( item,index ) in daily" :key="index">
                                            <router-link :to="{ name: 'article', params: { id: item.id} }" class="text-ellipsis"><span>{{index+1}}</span>{{item.title}}</router-link>
                                        </li>
                                    </ul>
                                    <ul v-show="week">
                                        <li v-for="( item,index ) in weekly" :key="index">
                                            <router-link :to="{ name: 'article', params: { id: item.id} }" class="text-ellipsis"><span>{{index+1}}</span>{{item.title}}</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--footer-->
    </div>
</template>

<script>
    import api from '../axios/api.js'
    import {
        formatDate
    } from '../../static/js/date.js'
    export default {
        data() {
            return {
                activeName: 'tab1',
                show_read: false,
                week: false,
                limit: '10',
                category: '', //分类
                weekly: '',
                daily: '',
                newsListData: '',
                totalPages:''
            }
        },
        created() {
            this.newApi()
        },
        methods: {
            handleClick(tab, event) { //点击切换tab,切换文章列表类别
                this.initNewsList(tab['$attrs']['cid'])
            },
            newApi() { //获取新闻列表基本信息
                this.fullscreenLoading = true;
                var url = '/pub/info/' + 10;
                api.Get(url)
                    .then(res => {
                        this.category = res['category'];
                        this.weekly = res['weekly'];
                        this.daily = res['daily'];
                        this.category.forEach((value, index, array) => {　
                            this.category[index]['cname'] = 'tab' + (index + 1);
                            if (index == 0) { //打开新闻资讯首页，默认加载每日头条第1页
                                this.initNewsList(this.category[index]['id'])
                                this.fullscreenLoading = false;
                            }
                        });
                    })
            },
            initNewsList(cid) {
                var url = '/pub/info/' + cid + '/' + '10' + '/' + '1'
                api.Get(url)
                    .then(res => {
                        this.newsListData = res['data'];
                        this.totalPages = res['totalPages']*10;
                    })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/pub/info/' + '20' + '/' + '10' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.newsListData = res['data'];
                        this.totalPages = res['totalPages']*10;
                    })
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm')
            }
        }
    };
</script>

<style>
    /*banner*/
    .banner_img img {
        width: 100%;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
    }
    .padder-v-md {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        /* margin-top: 40px; */
    }
    .padder-v-md {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        /*margin-top:40px;*/
    }
    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        margin-bottom: 30px;
    }
    .h {
        height: 200px;
        background-image: url(../../static/img/banner-2.jpg);
    }
    .block {
        display: block;
    }
    .m-b-sm {
        margin-bottom: 10px;
    }
    .no-padder {
        padding: 0 !important;
    }
    /*导航切换*/
    .news-button>.button {
        border-radius: 4px;
        height: 30px;
        line-height: 30px;
        border: none;
        background-color: #ddd;
        color: #999;
        text-align: center;
        margin-right: 5px;
    }
    /*左图右文字*/
    .w-full {
        width: 100%;
        /*max-height:120px;*/
    }
    .no-padder a img {
        width: 100%;
    }
    .h-sm {
        height: 150px;
    }
    .pos {
        height: 150px;
    }
    .text-ellipsis {
        overflow: hidden;
        display: block;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
    .text-ellipsis {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .text-md {
        font-size: 16px;
    }
    .font-bold {
        font-weight: 700;
    }
    p {
        margin: 0 0 10px;
    }
    .text-dark-lt {
        color: #454b60;
    }
    a {
        color: #428bca;
        text-decoration: none;
    }
    .text-ellipsis-3 {
        height: 4.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.42857143;
        color: #333;
    }
    .pos-abt {
        position: absolute;
    }
    .pull-left {
        float: left;
    }
    .m-r {
        margin-right: 15px;
    }
    .text-muted {
        color: #98a6ad;
        font-size: 14px;
    }
    .pull-left {
        float: left !important;
    }
    .m-r-xs {
        margin-right: 5px;
    }
    .pull-left {
        float: left;
    }
    .pull-left {
        float: left !important;
    }
    .b-b {
        border-bottom: 1px dashed #dee5e7;
    }
    .m-t {
        margin-top: 15px;
    }
    .m-b-lg {
        margin-bottom: 30px;
    }
    .clea {
        display: block;
        overflow: hidden;
        clear: both;
    }
    .text-center {
        text-align: center;
    }
    .text-xxxl {
        font-size: 24px;
    }
    p {
        margin: 0 0 10px;
    }
    .wrapper-lg {
        padding: 30px;
    }
    .no-padder img{
        width:200px;
        height:120px;
    }
    @media (max-width: 768px) {
        .no-padder img{
            width:100%;
            height:320px;
            margin-bottom: 15px;
        }
    }
    /*热门排行*/
    .news-rightlist {
        border: 1px solid #ddd;
        width: 100%;
        /*position: absolute;*/
        padding: 0 10px 20px 20px;
        margin-bottom: 50px;
    }
    .news-hot {
        position: relative;
        top: -11px;
        left: 20px;
        background-color: #fff;
        width: 25%;
        text-align: center;
        color: #0089e3;
        font-weight: 600;
        font-size: 16px;
    }
    .news-button button {
        border: none;
        background-color:#0089e3;
        color:#fff;
        float: right;
        margin-right: 10px;
        border-radius: 4px;
        margin-bottom: 10px;
    }
    .news-rightlist ul li {
        clear: both;
        line-height: 30px;
        color: #a1a1a1;
        font-size: 14px;
    }
    .news-rightlist ul li span {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #0089e3;
        color: #fff;
        text-align: center;
        line-height: 20px;
        margin-right: 10px;
    }
</style>