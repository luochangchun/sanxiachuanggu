<template>
    <div>
        <el-breadcrumb separator="/" class="padder-vx">
            <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item v-if="type=='01'">服务需求列表</el-breadcrumb-item>
            <el-breadcrumb-item v-if="type=='02'">技术难题及需求列表</el-breadcrumb-item>
            <el-breadcrumb-item v-if="type=='03'">融资项目列表</el-breadcrumb-item>
            <el-breadcrumb-item v-if="type=='04'">招商信息列表</el-breadcrumb-item>
            <el-breadcrumb-item v-if="type=='05'">求租信息列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!--企业技术难题及需求-->
        <el-row :gutter="10" class="need_xq">
            <el-col :lg="12" :md="12" :sm="12" :xs="12">
                <p style="margin-left:10px;">标题</p>
            </el-col>
            <el-col :lg="6" :md="6" :sm="6" :xs="6">
                <p>联系人</p>
            </el-col>
            <el-col :lg="5" :md="5" :sm="5" :xs="5" v-if="type!='03'">
                <p>联系方式</p>
            </el-col>
        </el-row>
        <p v-if='flag' style="padding-left:5px;line-height:30px;height:30px;font-size:12px;">暂无数据</p>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='01'">
            <router-link :to="{ name: 'service_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3" v-if="item['enterprise']">{{item['enterprise']}} </span><span v-for="n in searchService" :key="n" v-if="n['id'] == item['classifyId']">[{{n['value']}}]</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
            </router-link>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='02'">
            <router-link :to="{ name: 'consult_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3" v-if="item['enterprise']">{{item['enterprise']}} </span><span v-for="n in searchConsult" :key="n" v-if="n['id'] == item['businessId']">[{{n['value']}}]</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
            </router-link>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='03'">
            <router-link :to="{ name: 'financingDetail', params: { id: item.id} }" v-if="item.status == 1 || item.status == 2 || item.status == 3">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3" v-if="item['name']">{{item['name']}} </span><span v-for="n in searchBusiness" :key="n" v-if="n['id'] == item['businessId']">[{{n['value']}}]</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['founder']}}</p>
                </el-col>
                <!-- <el-col :lg="5" :md="5" :sm="5" :xs="5">
                            <p>{{item['phone']}}</p>
                        </el-col> -->
            </router-link>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='04' && item['type']==1">
            <router-link :to="{ name: 'attract_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3">{{item['title']}}</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
            </router-link>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='05' && item['type']==2">
            <router-link :to="{ name: 'attract_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3">{{item['title']}}</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
            </router-link>
        </el-row>
        <!--分页-->
        <el-row :gutter="10" style="margin-top:30px;margin-bottom: 50px;">
            <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                <div class="block">
                    <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from "../../axios/api.js";
    export default {
        data() {
            return {
                List: "",
                flag: false,
                totalPages: '',
                type: '',
                searchService: '',
                searchConsult: '',
                searchBusiness: ''
            };
        },
        created() {
            let type = this.$route.params.type;
            this.type = type;
            this.initDand(type);
            this.flag = false;
        },
        methods: {
            service() {
                var url = "/dict/service";
                api.Get(url).then(res => {
                    this.searchService = res;
                });
            },
            consult() {
                var url = "/dict/consult";
                api.Get(url).then(res => {
                    this.searchConsult = res;
                });
            },
            business() {
                var url = "/dict/business";
                api.Get(url).then(res => {
                    this.searchBusiness = res;
                });
            },
            initDand(type) {
                if (type == '01') {
                    this.service();
                    var url = "/enterprise/apply/my/" + '/' + '10' + '/' + '1'
                } else if (type == '02') {
                    this.consult();
                    var url = "/consult/my/" + '/' + '10' + '/' + '1'
                } else if (type == '03') {
                    this.business()
                    var url = "/finance/my/" + '/' + '10' + '/' + '1'
                } else if (type == '04') {
                    var url = "/qb/tenancy/my/1" + '/' + '10' + '/' + '1'
                } else if (type == '05') {
                    var url = "/qb/tenancy/my/2" + '/' + '10' + '/' + '1'
                }
                api.Get(url).then(res => {
                    console.log(res['data'].length == 0);
                    if (res['data'].length == 0) {
                        this.flag = true;
                        this.List = [];
                    } else if (res['data'].length > 0) {
                        this.flag = false;
                        this.List = res['data'];
                    }
                    this.totalPages = res['totalPages'] * 10;
                });
            },
            handleCurrentChange(val) {
                let type = this.$route.params.type;
                //获取到当前分页页码，获取当前页面数据
                if (type == '01') {
                    var url = "/enterprise/apply/my/" + '/' + '10' + '/' + val
                } else if (type == '02') {
                    var url = "/consult/my/" + '/' + '10' + '/' + val
                } else if (type == '03') {
                    var url = "/finance/my/" + '/' + '10' + '/' + val
                } else if (type == '04') {
                    var url = "/qb/tenancy/my/" + '/' + '10' + '/' + val
                } else if (type == '05') {
                    var url = "/qb/tenancy/my/" + '/' + '10' + '/' + val
                }
                api.Get(url).then(res => {
                    this.List = res['data'];
                    this.totalPages = res['totalPages'] * 10;
                });
            }
        },
        watch: {
            '$route' (to, from) {
                this.flag = false;
                let type = this.$route.params.type;
                this.type = type;
                this.initDand(type);
            }
        }
    };
</script>
