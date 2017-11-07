<template>
    <div>
        <el-breadcrumb separator="/" class="padder-vx">
            <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>融资需求</el-breadcrumb-item>
        </el-breadcrumb>
        <!--企业技术难题及需求-->
        <el-row :gutter="10" class="need_xq">
            <el-col :lg="12" :md="12" :sm="12" :xs="12">
                <p>需求</p>
            </el-col>
            <el-col :lg="3" :md="3" :sm="3" :xs="3">
                <p>联系人</p>
            </el-col>
            <el-col :lg="5" :md="5" :sm="5" :xs="5">
                <p>联系方式</p>
            </el-col>
            <el-col :lg="3" :md="3" :sm="3" :xs="3">
                <p>发布时间</p>
            </el-col>
        </el-row>
        <el-row :gutter="10" v-for="(item,index) in List" class="need_xq" :key="index">
            <router-link :to="{ name: 'service_detail', params: { id: item.id} }">
                <el-col :lg="12" :md="12" :sm="12" :xs="12" class="need_xq_p">
                    <p>{{item['enterprise']}} <span>[{{item['title']}}]</span></p>
                </el-col>
                <el-col :lg="3" :md="3" :sm="3" :xs="3">
                    <p>{{item['contact']}}</p>
                </el-col>
                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                    <p>{{item['phone']}}</p>
                </el-col>
                <el-col :lg="3" :md="3" :sm="3" :xs="3">
                    <p>2017-10-24</p>
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
    </div>
</template>

<script>
    import api from "../../axios/api.js";
    export default {
        data() {
            return {
                List: ""
            };
        },
        created() {
            let userId = window.localStorage.getItem('userId');
            this.getDand01(userId);
        },
        methods: {
            getDand01(id) {
                let url = "/finance/my/" + '/' + '10' + '/' + '1'
                api.Get(url).then(res => {
                    this.List = res['data'];
                    this.totalPages = res['totalPages'] * 10;
                });
            },
            handleCurrentChange(val) {
                //获取到当前分页页码，获取当前页面数据
                var url = '/finance/my/' + '/' + '10' + '/' + val
                api.Get(url)
                    .then(res => {
                        this.List = res['data'];
                        this.totalPages = res['totalPages'] * 10;
                    })
            }
        }
    };
</script>
