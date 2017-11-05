<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="header_location">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator=">" class="padder-vx">
                         <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>双创空间</el-breadcrumb-item>
                    <el-breadcrumb-item>服务窗口入口列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-row style="padding:30px 0">
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(item, index) in policyList" :key="index">
                        <router-link :to="{name:'office_list_detail', params: {id:item['id']} }"  class="office_item">
                            <img :src="item.icon" alt="">
                            <p class="tc black2" style="margin-top:0">{{item.name}}</p>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	import api from "../axios/api.js";
	export default {
		data() {
			return {
				policyList: "" //优惠政策
			};
		},
		created() {
			this.getPolicyList();
		},
		methods: {
			getPolicyList() {
				api.Get("/allies/policy").then(res => {
					this.policyList = res;
				});
			}
		}
	};
</script>

<style scoped>
    .header_location p,el-breadcrumb{
        height:30px;
        line-height:30px;
    }
    .office_item img {
       height: 120px;
       padding: 20px 0;
    }
</style>