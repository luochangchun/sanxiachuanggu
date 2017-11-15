<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="service-banner">
                <!-- <div class="container">
                                                                                    <el-row :gutter="10">
                                                                                        <el-col :lg="20" :md="20" :sm="20" :xs="20">
                                                                                            <el-row :gutter="10">
                                                                                                <el-col :lg="4" :md="6" :sm="8" :xs="24" style="background-color:#f9fafa">
                                                                                                    <router-link :to="{name:'service_class', params: {id:item.id} }" class="service-nav" v-for='(item, index) in ServiceList' :key='index'>
                                                                                                        <img src="../../static/img/nav_1.png" v-show='index == 1' style="margin-top: 3px;">
                                                                                                        <img src="../../static/img/nav_2.png" v-show='index == 2'>
                                                                                                        <img src="../../static/img/nav_3.png" v-show='index == 3'>
                                                                                                        <img src="../../static/img/nav_4.png" v-show='index == 4'>
                                                                                                        <img src="../../static/img/nav_5.png" v-show='index == 5'>
                                                                                                        <img src="../../static/img/nav_6.png" v-show='index == 6'>
                                                                                                        <img src="../../static/img/nav_7.png" v-show='index == 7'>
                                                                                                        <img src="../../static/img/nav_8.png" v-show='index == 8'>
                                                                                                        <p v-show="index>0">{{item['value']}}</p>
                                                                                                    </router-link>
                                                                                                </el-col>
                                                                                            </el-row>
                                                                                        </el-col>
                                                                                    </el-row>
                                                                                </div> -->
            </el-col>
        </el-row>
        <!--热门服务-->
        <div class="container">
            <!--入孵企业专区-->
            <el-row :gutter="10">
                <el-col :lg="16" :md="16" :sm="24" :xs="24">
                    <div class="title" id="title-company" style="margin-top: 70px;margin-bottom:40px;">
                        <h1 class="tl">入孵企业专区</h1>
                        <p class="tl">SERVICE AREA</p>
                        <router-link to="/into_more" class="r more_plus" style="margin-top:-41px;"></router-link>
                    </div>
                    <el-row :gutter="10">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane v-for="(item,index) in category" :key="index" :label="item.name" :name="item.cname" :sid="item.id">
                                <el-row :gutter="10">
                                    <p v-show="nodata" style="margin-left:5px;">暂无数据</p>
                                    <el-col v-show="!nodata" :lg="8" :md="8" :sm="12" :xs="24" v-for="(item, index) in serviceBody" :key="index">
                                        <router-link :to="{name:'invest_detail', params: {id:item.id}}" style="display:block;">
                                            <div class="service-opcity-into">
                                                <h2>{{item.name}}</h2>
                                            </div>
                                        </router-link>
                                    </el-col>
                                </el-row>
                                <!--分页-->
                                <el-row :gutter="10" style="margin-top: 60px;margin-bottom: 50px;">
                                    <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                                        <div class="block">
                                            <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                            </el-pagination>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-tab-pane>
                        </el-tabs>
                    </el-row>
                </el-col>
                <el-col :lg="7" :md="7" :sm="24" :xs="24" :offset="1"  style="margin-top: 40px;">
                    <el-row :gutter="10">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="news-rightlist">
                                <div class="news-hot">服务需求</div>
                                <ul>
                                    <li v-for="( item,index ) in needData" :key="index" @click="openDetail(item['id'])">
                                        <p><span>{{index+1}}</span>{{item['title']}}</p>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24"  style="margin-bottom: 50px;">
                            <div class="news-rightlist">
                                <div class="news-hot">企业资讯</div>
                                <ul>
                                    <router-link v-for="( item,index ) in infoData" :to="{ name: 'article', params: { id: item.id} }" :key="index">
                                        <p><span>{{index+1}}</span>{{item['title']}}</p>
                                    </router-link>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- <el-row :gutter="10" style="margin: 30px 0;">
                                                                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                                                        <div class="title" id="title-service">
                                                                            <h1>热门服务</h1>
                                                                            <p>SERVICE AREA</p>
                                                                            <hr>
                                                                            <span></span>
                                                                            <div class="r more_plus"></div>
                                                                        </div>
                                                                        <el-row :gutter="0">
                                                                            <el-col :lg="12" :md="24" :sm="24" :xs="24" class="service-show">
                                                                                <a href="http://www.egowork.com/infomation.html">
                                                                                    <div class="service-img l"><img src="http://www.egowork.com/themes/egowork/img/logo-1.png" alt=""></div>
                                                                                    <div class="service-text">
                                                                                        <p class="f18">企业信息化</p>
                                                                                        <p class="text-muted">中小企业云服务平台</p>
                                                                                        <p class="text-muted">一个伴随企业成长的IT服务平台</p>
                                                                                        <p class="text-muted">一个平台一个账号对企业IT全流程统一管理</p>
                                                                                    </div>
                                                                                </a>
                                                                            </el-col>
                                                                            <el-col :lg="12" :md="24" :sm="24" :xs="24" class="service-show">
                                                                                <a href="http://www.egowork.com/agri_electricity.html">
                                                                                    <div class="service-img l"><img src="http://www.egowork.com/themes/egowork/img/logo-2.png" alt=""></div>
                                                                                    <div class="service-text">
                                                                                        <p class="f18">农业电商</p>
                                                                                        <p class="text-muted">中国农特产品全渠道营销服务平台，为中国农村电商的发展探索了新的模式</p>
                                                                                        <p class="text-muted">专注于为中小企业提供最佳信息化产品，最优质的行业解决方案，助力企业腾飞</p>
                                                                                    </div>
                                                                                </a>
                                                                            </el-col>
                                                                        </el-row>
                                                                        <el-row style="height:255px;overflow:hidden">
                                                                            <el-col :lg="6" :md="12" :sm="12" :xs="24">
                                                                                <a href="http://www.egowork.com/hr.html" class="service-mini">
                                                                                    <img src="http://www.egowork.com/themes/egowork/img/icon-1.png" class="center-block img-responsive">
                                                                                    <p class="tc f16">人力资源</p>
                                                                                </a>
                                                                            </el-col>
                                                                            <el-col :lg="6" :md="12" :sm="12" :xs="24">
                                                                                <a href="http://www.egowork.com/fiscal.html" class="service-mini">
                                                                                    <img src="http://www.egowork.com/themes/egowork/img/icon-3.png" class="center-block img-responsive">
                                                                                    <p class="tc f16">财税/法务</p>
                                                                                </a>
                                                                            </el-col>
                                                                            <el-col :lg="6" :md="12" :sm="12" :xs="24">
                                                                                <a href="http://www.egowork.com/insurance.html" class="service-mini">
                                                                                    <img src="http://www.egowork.com/themes/egowork/img/icon-2.png" class="center-block img-responsive">
                                                                                    <p class="tc f16">团体保险</p>
                                                                                </a>
                                                                            </el-col>
                                                                            <el-col :lg="6" :md="12" :sm="12" :xs="24">
                                                                                <a href="http://www.egowork.com/pro_application.html" class="service-mini">
                                                                                    <img src="http://www.egowork.com/themes/egowork/img/icon-4.png" class="center-block img-responsive">
                                                                                    <p class="tc f16">项目申报</p>
                                                                                </a>
                                                                            </el-col>
                                                                        </el-row>
                                                                    </el-col>
                                                                </el-row> -->
            <!-- 服务商 -->
            <!-- <el-row :gutter="10" style="margin:50px 0;">
                                                                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                                                            <div class="title" id="title-service">
                                                                                <h1>服务商</h1>
                                                                                <p>SERVICE</p>
                                                                                <hr>
                                                                                <span></span>
                                                                                <router-link to="/service_provider_more" class="r more_plus" style="margin-top:-41px;"></router-link>
                                                                            </div>
                                                                        </el-col>
                                                                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                                                            <el-row class="office_wrap">
                                                                                <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in provider" :key="index">
                                                                                    <router-link :to="{name:'provider', params: {id:item.id} }" class="service_provider_item rel">
                                                                                        <img :src="item.icon" alt="">
                                                                                        <p class="tc">{{item.name}}</p>
                                                                                        <i class="tag abs white tc f14">{{item.service}}</i>
                                                                                    </router-link>
                                                                                </el-col>
                                                                            </el-row>
                                                                        </el-col>
                                                                    </el-row> -->
            <!-- footer -->
        </div>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                // provider: '',
                // normal: '',
                // ServiceList: ''
                nodata: false,
                infoData: '',
                activeName: "tab1",
                totalPages: "",
                category: '',
                serviceBody: ''
            }
        },
        created() {
            // this.getServiceList()
            // this.researchApi()
            this.getQb();
            this.initServicesList()
        },
        methods: {
            getQb() {
                api.Get('/qb')
                    .then(res => {
                        console.log(res);
                        this.category = res;
                        this.category.forEach((value, index, array) => {
                            this.category[index]["cname"] = "tab" + (index + 1);
                            if (index == 0) {
                                this.initNewsList(this.category[index]["id"]);
                                this.fullscreenLoading = false;
                            }
                        });
                    })
            },
            handleClick(tab, event) {
                this.initNewsList(tab["$attrs"]["sid"]);
                window.localStorage.setItem("sid", tab["$attrs"]["sid"]);
            },
            initNewsList(sid) {
                var url = "/enterprise/" + sid + "/1/" + "9" + "/" + "1";
                api.Get(url).then(res => {
                    this.serviceBody = res["data"];
                    if (this.serviceBody.length == 0) {
                        this.nodata = true;
                    } else {
                        this.nodata = false;
                    }
                    this.totalPages = res["totalPages"] * 10;
                });
                var info = "/pub/info/22" + "/" + "10" + "/1";
                api.Get(info).then(res => {
                    this.infoData = res["data"];
                    // if (this.infoData.length == 0) {
                    //     this.nodata = true;
                    // } else {
                    //     this.nodata = false;
                    // }
                    // this.totalPages = res["totalPages"] * 10;
                });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                let sid = window.localStorage.getItem("sid");
                var url = "/enterprise/" + sid + "/1/" + "6" + "/" + val;
                api.Get(url).then(res => {
                    this.serviceBody = res["data"];
                    this.totalPages = res["totalPages"] * 10;
                });
            },
            initServicesList() {
                var url = "/enterprise/apply/" + "10" + "/" + "1" + "?cid=" + 0;
                api.Get(url).then(res => {
                    this.needData = res["page"]["data"];
                });
            },
            // researchApi() {
            //     api.Get('/pub/enterprises')
            //         .then(res => {
            //             this.provider = res['provider'];
            //             this.normal = res['normal'];
            //         })
            // },
            // getServiceList() {
            //     api.Get('/dict/service')
            //         .then(res => {
            //             this.ServiceList = res;
            //         })
            // }
        }
    }
</script>

<style scoped>
    /*banner*/
    .service-banner {
        background: url(../../static/img/service02.png) no-repeat center center;
        background-size: cover;
        width: 100%;
        height: 260px;
    }
    .service-nav {
        border-bottom: 1px solid #ddd;
        color: #333;
    }
    .service-banner .service-nav:last-child {
        border-bottom: none;
    }
    .service-nav img {
        width: 17px;
        display: inline-block;
        margin-bottom: 0;
        margin-left: 8px;
        margin-right: 8px;
    }
    .service-nav p {
        height: 40px;
        line-height: 40px;
        display: inline-block;
        font-size: 14px;
    }
    /*服务商专区*/
    .title {
        text-align: center;
        margin-top: 25px;
        /* margin-bottom: 25px; */
    }
    .title h1 {
        color: #0089e3;
        font-size: 18px;
        font-weight: 600;
    }
    .title p {
        color: #ddd;
        font-size: 10px;
    }
    .title hr {
        width: 30%;
        border: 1px solid #454b60;
    }
    .title span {
        display: block;
        border: 2px solid #0089e3;
        width: 10%;
    }
    .title div {
        margin-top: -42px;
    }
    #title-service {
        position: relative;
        /* margin-top: 50px; */
    }
    #title-service span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    .service-show {
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .service-show a {
        height: 200px;
        border: 1px solid rgba(0, 0, 0, 0.05);
    }
    .service-img {
        padding-top: 70px;
        padding-bottom: 60px;
        padding-right: 20px;
        padding-left: 20px;
    }
    .service-text {
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .service-text p {
        display: block;
        padding-bottom: 10px;
        color: #58666e;
    }
    .service-text p.text-muted {
        color: #98a6ad !important;
    }
    .service-mini {
        padding: 22px 0;
        border: 1px solid rgba(0, 0, 0, 0.05);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .service-mini:hover,
    .service-show:hover {
        box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
    }
    .service-mini img {
        width: 50%;
    }
    .service-mini p {
        padding: 10px 0;
        color: #98a6ad;
    }
    /*图片上阴影字*/
    .service-opcity {
        width: 70%;
        background: rgba(255, 255, 255, 0.5);
        height: 70%;
    }
    .service-opcity h2 {
        text-align: center;
        margin-top: 5%;
        color: #000;
    }
    .service-opcity p {
        margin: 0 6px;
        text-align: center;
        margin-top: 3%;
        color: #000;
        height: 58%;
        overflow: hidden;
    }
    .service-show img {
        width: 100%;
    }
    /*服务商*/
    .service_provider_item img {
        height: 100px;
        width: 100px;
    }
    .service_provider_item p {
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /*入孵企业专区*/
    #title-company {
        position: relative;
    }
    #title-company span {
        position: absolute;
        top: 48px;
        left: 45%;
    }
    .service-show-into {
        margin-bottom: 10px;
    }
    .service-show-into img {
        max-height: 192px;
    }
    .service-opcity-into {
        text-align: center;
        padding: 70px 0;
        background: url(../../static/img/service_area.png) no-repeat center center;
        background-size: cover;
        border: 1px solid #eee;
        margin: 5px 0;
    }
    .service-opcity-into h2 {
        width: 100%;
        height: 30px;
        line-height: 30px;
        /* margin-top: -60px; */
        color: #0089e3;
    }
    /* .service-show-into img:hover {
                                                                                width: 101%;
                                                                            } */
    .center-block {
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
    .img-responsive {
        max-width: 100%;
        height: auto;
    }
    /*热门排行*/
    .news-rightlist {
        box-shadow: 0 0 10px #ddd;
        width: 100%;
        padding: 0 10px 20px 20px;
        margin-top: 40px;
    }
    .news-hot {
        position: relative;
        top: -11px;
        left: 20px;
        background-color: #fff;
        width: 30%;
        text-align: center;
        color: #0089e3;
        font-weight: 600;
        font-size: 16px;
    }
    .news-button button {
        border: none;
        background-color: #ff0000;
        float: right;
        margin-right: 10px;
        border-radius: 4px;
        margin-bottom: 10px;
    }
    .news-rightlist ul li, .news-rightlist ul a {
        clear: both;
        line-height: 30px;
        color: #a1a1a1;
        font-size: 14px;
        letter-spacing: 1px;
    }
    .news-rightlist ul li span, .news-rightlist ul a span {
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