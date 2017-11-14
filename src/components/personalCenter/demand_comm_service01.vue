<template>
    <div>
        <el-breadcrumb separator="/" class="padder-vx">
            <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>服务需求</el-breadcrumb-item>
        </el-breadcrumb>
        <!--企业技术难题及需求-->
        <el-row :gutter="10" class="need_xq">
            <el-col :lg="12" :md="12" :sm="12" :xs="12">
                <p>需求</p>
            </el-col>
            <el-col :lg="6" :md="6" :sm="6" :xs="6">
                <p>联系人</p>
            </el-col>
            <el-col :lg="5" :md="5" :sm="5" :xs="5">
                <p>联系方式</p>
            </el-col>
            <!-- <el-col :lg="3" :md="3" :sm="3" :xs="3">
                <p>发布时间</p>
            </el-col> -->
        </el-row>
        <p v-if='flag' style="padding-left:5px;line-height:30px;height:30px;font-size:12px;">暂无数据</p>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='01' || type=='02' || type=='03'">
            <router-link :to="{ name: 'service_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3" v-if="item['enterprise']">{{item['enterprise']}} </span><span>[{{item['title']}}]</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
                <!-- <el-col :lg="3" :md="3" :sm="3" :xs="3">
                    <p>2017-10-24</p>
                </el-col> -->
            </router-link>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='04' && item['type']==1">
            <router-link :to="{ name: 'service_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3" v-if="item['enterprise']">{{item['enterprise']}} </span><span>[{{item['title']}}]</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
                <!-- <el-col :lg="3" :md="3" :sm="3" :xs="3">
                    <p>2017-10-24</p>
                </el-col> -->
            </router-link>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index" v-if="type=='05' && item['type']==2">
            <router-link :to="{ name: 'service_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p><span style="color:#0089e3" v-if="item['enterprise']">{{item['enterprise']}} </span><span>[{{item['title']}}]</span></p>
                </el-col>
                <el-col :lg="6" :md="6" :sm="6" :xs="6">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
                <!-- <el-col :lg="3" :md="3" :sm="3" :xs="3">
                    <p>2017-10-24</p>
                </el-col> -->
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
                flag:false,
                totalPages:'',
                type:''
            };
        },
        created() {
            let type = this.$route.params.type;
            this.type = type;
            this.initDand(type);
            this.flag = false;
            
        },
        methods: {
            initDand(type) {
                if (type == '01') {
                    var url = "/enterprise/apply/my/" + '/' + '10' + '/' + '1'
                } else if(type == '02') {
                    var url = "/consult/my/" + '/' + '10' + '/' + '1'
                }
                else if(type == '03') {
                    var url = "/finance/my/" + '/' + '10' + '/' + '1'
                }
                else if(type == '04') {
                    var url = "/qb/tenancy/my/1" + '/' + '10' + '/' + '1'
                }
                else if(type == '05') {
                    var url = "/qb/tenancy/my/2" + '/' + '10' + '/' + '1'
                }
                api.Get(url).then(res => {
                    console.log(res['data'].length==0);
                    if(res['data'].length==0) {
                        this.flag = true;
                        this.List = [];
                    } else if(res['data'].length > 0) {
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
                } else if(type == '02') {
                    var url = "/consult/my/" + '/' + '10' + '/' + val
                }
                else if(type == '03') {
                    var url = "/finance/my/" + '/' + '10' + '/' + val
                }
                else if(type == '04') {
                    var url = "/qb/tenancy/my/" + '/' + '10' + '/' + val
                }
                else if(type == '05') {
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
