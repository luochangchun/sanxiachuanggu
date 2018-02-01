<template>
    <div>
        <el-row :gutter="0">
<<<<<<< HEAD
            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="banner_img"  style="backgroundImage: url(../static/img/service02.jpg)">
=======
            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="banner_img" style="backgroundImage: url(../static/img/service02.jpg)">
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
            </el-col>
        </el-row>
        <!--title-->
        <div class="container" style="margin-top:40px;margin-bottom:40px;">
            <el-row :gutter="10">
                <!--服务商列表-->
                <el-col :lg="12" :md="12" :sm="24" :xs="24" style="border-right:1px solid #ccc;padding-right:20px;">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <h2 class="common_sub_title">
                                <p class="tc white">服务商机构</p>
                                <div class="line"></div>
                            </h2>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:40px;">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="s_service_list clearfix" v-for="(item , index) in ServiceList" :key="index">
                                <h2>{{ item['value']}}</h2>
                                <el-row v-if="item.id == 51">
                                    <p v-if="needData51.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData51" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 52">
                                    <p v-if="needData52.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData52" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 53">
                                    <p v-if="needData53.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData53" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 54">
                                    <p v-if="needData54.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData54" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 55">
                                    <p v-if="needData55.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData55" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 56">
                                    <p v-if="needData56.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData56" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 57">
                                    <p v-if="needData57.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData57" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row v-if="item.id == 58">
                                    <p v-if="needData58.length == 0" style="margin-left:5px;">暂无数据</p>
                                    <el-col :lg="6" :md="6" :sm="6" :xs="6" v-for="(item, index) in needData58" :key="index">
                                        <div class="c1">
                                            <div class="c2">
                                                <h3 class="text-ellipsis-muti text-ellipsis-2">{{item['name']}}</h3>
                                                <p>电话:{{item['phone']}}</p>
                                                <div class="block">
                                                    <el-rate disabled v-model="value1"></el-rate>
                                                </div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <!--被服务企业列表-->
                <el-col :lg="12" :md="12" :sm="24" :xs="24" style="padding-left:20px">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <h2 class="common_sub_title">
                                <p class="tc white">享受服务企业</p>
                                <div class="line"></div>
                            </h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col>
                            <div>
                                <div class="s_header_img">
                                    <!-- <img src="../../static/img/02z.png" alt=""> -->
                                </div>
                                <div class="s_intermediary_list">
                                    <div class="filte" style="margin-top:20px">
                                        <div class="filte_top rel">
                                            <dl>
                                                <!-- <dt>项目阶段</dt> -->
                                                <dd style="width: 93%;" :class="{ auto : moreFlag }">
<<<<<<< HEAD
                                                    <a href="javascript:;" :class="{ on : display_active[index] }" @click="handleClick(index,item.id)" class="sx_child" v-for="(item , index) in category" :key="index" :seid="item.id" v-if="index>0">{{ item['name']}}</a>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="filte_body" v-loading.body="loading">
                                            <el-row :gutter="10">
                                                <p v-show="nodata" style="margin-left:15px;">暂无数据</p>
=======
                                                    <el-tooltip class="item" effect="dark" :content="item.name" placement="top-start" v-for="(item , index) in category " :key="index " :class="{ on : display_active[index] } ">
                                                         <a href=" javascript:; " :class="{ on : display_active[index] } " @click="handleClick(index,item.id) " class="sx_child " :seid="item.id">{{ item['name']}}</a>
                                                    </el-tooltip>
                                                   
                                                </dd>
                                            </dl>
                                        </div>
                                        <div class="filte_body">
                                            <el-row :gutter="10">
                                                <p v-if="nodata" style="margin-left:15px;">暂无数据</p>
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                                                <el-col v-show="!nodata" class="gh" :xs="24" :sm="24" :md="24" :lg="24" v-for="(item,index) in serviceBody" :key="index">
                                                    <router-link :to="{name:'invest_detail', params: {id:item.id}}">
                                                        <div class="intermediary_list">
                                                            <h1>{{item['name']}}</h1>
                                                            <div class="c3">
                                                                <p>地址:{{ item['address']}}</p>
                                                                <p>电话:{{ item['phone']}}</p>
                                                            </div>
                                                            <ul class="clearfix">
<<<<<<< HEAD
                                                                <li v-show="item == '51'" class="green" v-for="(item,index) in item['labels']" :key="item.id">{{item.id}}信息化</li>
=======
                                                                <li v-show="item == '51'" class="green" v-for="(item,index) in item['labels']" :key="item.id">信息化</li>
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                                                                <li v-show="item == '52'" class="green" v-for="(item,index) in item['labels']" :key="item.id">知识产权</li>
                                                                <li v-show="item == '53'" class="green" v-for="(item,index) in item['labels']" :key="item.id">科技转化</li>
                                                                <li v-show="item == '54'" class="green" v-for="(item,index) in item['labels']" :key="item.id">金融服务</li>
                                                                <li v-show="item == '55'" class="green" v-for="(item,index) in item['labels']" :key="item.id">电子商务</li>
                                                                <li v-show="item == '56'" class="green" v-for="(item,index) in item['labels']" :key="item.id">财税/法务</li>
                                                                <li v-show="item == '57'" class="green" v-for="(item,index) in item['labels']" :key="item.id">招聘/培训</li>
                                                                <li v-show="item == '58'" class="green" v-for="(item,index) in item['labels']" :key="item.id">物业服务</li>
<<<<<<< HEAD
                                                                <li v-show="item == '51'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">{{item.id}}信息化</li>
=======
                                                                <li v-show="item == '51'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">信息化</li>
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                                                                <li v-show="item == '52'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">知识产权</li>
                                                                <li v-show="item == '53'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">科技转化</li>
                                                                <li v-show="item == '54'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">金融服务</li>
                                                                <li v-show="item == '55'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">电子商务</li>
                                                                <li v-show="item == '56'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">财税/法务</li>
                                                                <li v-show="item == '57'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">招聘/培训</li>
                                                                <li v-show="item == '58'" class="yellow" v-for="(item,index) in item['serviceIds']" :key="item.id">物业服务</li>
<<<<<<< HEAD
                                                                <li v-show="item == '51'" class="gray" v-for="(item,index) in item['others']" :key="item.id">{{item.id}}信息化</li>
                                                                <li v-show="item == '52'" class="gray" v-for="(item,index) in item['others']" :key="item.id">知识产权</li>
                                                                <li v-show="item == '53'" class="gray" v-for="(item,index) in item['others']" :key="item.id">{{item.id}}科技转化</li>
=======
                                                                <li v-show="item == '51'" class="gray" v-for="(item,index) in item['others']" :key="item.id">信息化</li>
                                                                <li v-show="item == '52'" class="gray" v-for="(item,index) in item['others']" :key="item.id">知识产权</li>
                                                                <li v-show="item == '53'" class="gray" v-for="(item,index) in item['others']" :key="item.id">科技转化</li>
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                                                                <li v-show="item == '54'" class="gray" v-for="(item,index) in item['others']" :key="item.id">金融服务</li>
                                                                <li v-show="item == '55'" class="gray" v-for="(item,index) in item['others']" :key="item.id">电子商务</li>
                                                                <li v-show="item == '56'" class="gray" v-for="(item,index) in item['others']" :key="item.id">财税/法务</li>
                                                                <li v-show="item == '57'" class="gray" v-for="(item,index) in item['others']" :key="item.id">招聘/培训</li>
                                                                <li v-show="item == '58'" class="gray" v-for="(item,index) in item['others']" :key="item.id">物业服务</li>
                                                            </ul>
                                                        </div>
                                                    </router-link>
                                                </el-col>
<<<<<<< HEAD
                                                <el-col v-show="!nodata" :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="margin-bottom: 50px;margin-top:50px;">
=======
                                                <el-col v-if="!nodata" :lg="8" :md="8" :sm="24" :xs="24" :offset="8" style="margin-bottom: 50px;margin-top:50px;">
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                                                    <div class="block">
                                                        <el-pagination :current-page="curPage" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                                        </el-pagination>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- footer -->
        </div>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                category: "",
                ServiceList: '',
                loading: false,
                moreFlag: true,
                needData: '',
<<<<<<< HEAD
                noData: false,
                noDate: false,
=======
                nodata: false,
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                serviceBody: '',
                display_active: [false, false, false, false],
                activeName: "tab1",
                serviceEight: '',
                value1: 4, //星级评分
                totalPages: "",
                needData51: [],
                needData52: [],
                needData53: [],
                needData54: [],
                needData55: [],
                needData56: [],
                needData57: [],
                needData58: [],
                totalArr: ['51', '52', '53', '54', '55', '56', '57', '58'],
                other: [],
                curPage: 1,
                seid: ''
            }
        },
        created() {
            this.getServiceList();
            this.getQb();
            this.getServiceEight();
        },
        methods: {
            // 服务商机构value
            getServiceList() {
                this.fullscreenLoading = true;
                api.Get('/dict/service').then(res => {
                    this.ServiceList = res;
                    for (var i = 0; i < this.ServiceList.length; i++) {
                        this.getProviderClass(this.ServiceList[i]['id'])
                    }
                });
            },
            //服务商机构内容
            getProviderClass(id) {
                console.log(id);
                var url = '/enterprise/' + id + '/' + '2' + '/' + '4' + '/' + '1';
                api.Get(url)
                    .then(res => {
                        switch (id) {
                            case 51:
                                this.needData51 = res['data'];
                                break;
                            case 52:
                                this.needData52 = res['data'];
                                break;
                            case 53:
                                this.needData53 = res['data'];
                                break;
                            case 54:
                                this.needData54 = res['data'];
                                break;
                            case 55:
                                this.needData55 = res['data'];
                                break;
                            case 56:
                                this.needData56 = res['data'];
                                break;
                            case 57:
                                this.needData57 = res['data'];
                                break;
                            case 58:
                                this.needData58 = res['data'];
                                break;
                            default:
                                this.needData58 = res['data'];
                                break;
                        }
                    });
            },
            // 享受服务企业name
            getQb() {
                api.Get('/qb')
                    .then(res => {
<<<<<<< HEAD
                        this.category = res;
                        this.category.forEach((value, index, array) => {
                            if (index == 1) {
                                this.$set(this.display_active, 1, true)
=======
                        this.category = res.reverse();
                        console.log(this.category);
                        this.category.forEach((value, index, array) => {
                            if (index == 0) {
                                this.$set(this.display_active, 0, true)
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                                this.initNewsList(this.category[index]["id"]);
                                this.fullscreenLoading = false;
                                window.localStorage.setItem("seid", this.category[index]["id"]);
                            }
<<<<<<< HEAD
                        });
=======
                            if(index == (this.category.length -1)) {
                                this.category[this.category.length -1]["name"] = "其它";
                            }
                        });
                        
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                    })
            },
            handleClick(index, seid) {
                var sx_child_item = document.querySelectorAll('.sx_child');
<<<<<<< HEAD
                for (let i = 1; i <= sx_child_item.length; i++) {
=======
                for (let i = 0; i <= sx_child_item.length; i++) {
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                    if (sx_child_item[i] != sx_child_item[index]) {
                        this.$set(this.display_active, i, false)
                    } else {
                        this.$set(this.display_active, i, true)
                    }
                }
                this.curPage = 1;
                this.seid = seid;
                this.initNewsList(seid);
                window.localStorage.setItem("seid", seid);
            },
            initNewsList(seid) {
                this.loading = true
                var url = "/enterprise/normal/" + "13" + "/" + "1?sid=" + seid;
                api.Get(url).then(res => {
                    this.serviceBody = res["data"];
                    if (this.serviceBody.length == 0) {
                        this.nodata = true;
                        this.loading = false;
                        this.totalPages = 1 * 10;
                    } else {
                        this.nodata = false;
                        this.loading = false;
                        for (var i = 0; i < this.serviceBody.length; i++) {
                            if (this.serviceBody[i]['labels']) {
                                this.serviceBody[i]['labels'] = this.serviceBody[i]['labels'].split(",");
                                let tempArr = this.serviceBody[i]['labels'].concat(this.serviceBody[i]['serviceIds']);
                                this.serviceBody[i]['others'] = this.filterOter(this.totalArr, tempArr);
                            } else {
                                // 当labels为空时
                                this.serviceBody[i]['labels'] = [];
                                let tempArr = this.serviceBody[i]['labels'].concat(this.serviceBody[i]['serviceIds']);
                                this.serviceBody[i]['others'] = this.filterOter(this.totalArr, tempArr);
                            }
                        }
                        this.totalPages = res["totalPages"] * 10;
                    }
<<<<<<< HEAD
                    
=======
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
                });
                var info = "/pub/info/22" + "/" + "10" + "/1";
                api.Get(info).then(res => {
                    this.infoData = res["data"];
                });
            },
            handleCurrentChange(val) {
                console.log(val);
                //获取到当前分页页码，获取当前页面数据
                let seid = window.localStorage.getItem("seid");
                this.seid = seid;
                var url = "/enterprise/normal/" + "13" + "/" + val + "/?sid=" + seid;
                api.Get(url).then(res => {
                    this.serviceBody = res["data"];
                    for (var i = 0; i < this.serviceBody.length; i++) {
                        if (this.serviceBody[i]['labels']) {
                            this.serviceBody[i]['labels'] = this.serviceBody[i]['labels'].split(",");
                            let tempArr = this.serviceBody[i]['labels'].concat(this.serviceBody[i]['serviceIds']);
                            this.serviceBody[i]['others'] = this.filterOter(this.totalArr, tempArr);
                        } else {
                            // 当labels为空时
                            this.serviceBody[i]['labels'] = [];
                            let tempArr = this.serviceBody[i]['labels'].concat(this.serviceBody[i]['serviceIds']);
                            this.serviceBody[i]['others'] = this.filterOter(this.totalArr, tempArr);
                        }
                    }
                    this.curPage = res['currentPageNo'];
                    this.totalPages = res["totalPages"] * 10;
                });
            },
            // 已享受服务,有需求服务,未享受服务
            getServiceEight() {
                api.Get('/pub/enterprises')
                    .then(res => {
                        this.serviceEight = res;
                    })
            },
            filterOter(ar1, ar2) {
                var arr1 = ar1; //数组A 
                var arr2 = ar2; //数组B 
                var temp = []; //临时数组1 
                var temparray = []; //临时数组2 
                for (var i = 0; i < arr2.length; i++) {
                    temp[arr2[i]] = true; //巧妙地方：把数组B的值当成临时数组1的键并赋值为真 
                };
                for (var i = 0; i < arr1.length; i++) {
                    if (!temp[arr1[i]]) {
                        temparray.push(arr1[i]); //巧妙地方：同时把数组A的值当成临时数组1的键并判断是否为真，如果不为真说明没重复，就合并到一个新数组里，这样就可以得到一个全新并无重复的数组 
                    };
                };
                return temparray;
            }
        }
    }
</script>

<style scoped>
    /*01/服务商机构*/
    .s_center_title {
        text-align: center;
        color: #0089e3;
        font-size: 24px;
        margin-top: 40px;
        margin-bottom: 60px;
    }
    .s_center_title h1 {
        line-height: 45px;
        letter-spacing: 2px;
        font-weight: 600;
    }
    .s_header_img img {
        width: 25%;
        float: left;
        margin-bottom: 40px;
    }
    .s_service_list h2 {
        color: #e38000;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid #e38000;
        height: 30px;
        width: 120px;
        border-radius: 10px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 10px;
    }
    .c1 {
        background-color: rgb(250, 250, 250);
        /*height:100px;*/
        margin-bottom: 20px;
        padding: 15px 10px;
    }
    .c2 {
        border-left: 1px solid rgba(204, 204, 204, 0.43);
        margin: 10px 3px;
    }
    .c1:last-child {
        padding-right: 0;
    }
    .c2 h3 {
        color: #666;
        height: 44px;
        font-size: 11px;
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 22px;
    }
    .c2 p {
        color: #999;
        font-size: 9px;
        text-align: center;
        line-height: 30px;
    }
    .block {
        margin-left: 10px;
        margin-right: 5px;
    }
    /*02/享受服务企业*/
    /*tab切换*/
    .filte dl {
        position: relative;
        margin-bottom: 0;
    }
    .filte dl:after {
        content: "";
        display: block;
        clear: both
    }
    .c3 p {
        color: #999;
        font-size: 9px;
        text-align: center;
        line-height: 30px;
    }
    .filte dl dd {
        padding: 0 5px;
        /*border-bottom: 1px solid #d1dbe5;*/
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }
    .filte dl dd.auto {
        height: auto;
<<<<<<< HEAD
    }
    .filte dl dd a {
        margin-right: 10px;
        margin-bottom: 10px;
        display: inline-block;
        color: #8391a5;
        font-size: 14px;
    }
    .filte dl dd a.on {
        color: #e38000;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid #e38000;
    }
    /*tab切换*/
    .s_intermediary_list {
        clear: both;
        margin-top: 50px;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
=======
    }
    .filte dl dd a {
        margin-right: 10px;
        margin-bottom: 10px;
        display: inline-block;
        color: #8391a5;
        font-size: 14px;
    }
    .filte dl dd a.on {
        color: #e38000;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid #e38000;
    }
    /*tab切换*/
    .s_intermediary_list {
        clear: both;
        margin-top: 50px;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
    .intermediary_list {
        border-bottom: 1px dashed #ccc;
        padding: 5px 10px;
        /* margin-top: 15px; */
    }
    .intermediary_list:hover {
        background-color: rgb(250, 250, 250);
    }
    .s_intermediary_list>.filte dd a {
        float: left;
        margin-right: 2%;
        font-size: 13px;
        font-weight: 600;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        height: 30px;
        width: 76px;
        border-radius: 10px;
        line-height: 30px;
        overflow: hidden;
        text-align: center;
        margin-bottom: 10px;
        color: #999;
        border: 1px solid #999;
    }
    .intermediary_list div p {
        float: left;
    }
    .intermediary_list div p:first-child {
        margin-right: 12%;
    }
    .intermediary_list ul li {
        float: left;
        line-height: 20px;
        width: 60px;
        height: 20px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        margin-right: 9px;
        margin-bottom: 5px;
    }
    .intermediary_list h1 {
        font-size: 14px;
        font-weight: 600;
        color: #333;
        line-height: 30px;
    }
    .intermediary_list ul {
        margin-top: 30px;
    }
    .intermediary_list ul li.green {
        background-color: #88d8a3;
    }
    .intermediary_list ul li.yellow {
        background-color: red;
    }
    .intermediary_list ul li.gray {
        background-color: #ccc;
    }
    /*banner*/
    .show_need_btn {
        border: none;
        background-color: #f48100;
        color: #fff;
        font-size: 14px;
        width: 70px;
        height: 24px;
        line-height: 24px;
        border-radius: 4px;
        text-align: center;
        margin-right: 5px;
    }
    /*banner*/
    /* .service-banner {
<<<<<<< HEAD
        background: url(../../static/img/service02.jpg) no-repeat center center;
        background-size: cover;
        width: 100%;
        height: 260px;
    } */
=======
                background: url(../../static/img/service02.jpg) no-repeat center center;
                background-size: cover;
                width: 100%;
                height: 260px;
            } */
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
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
</style>