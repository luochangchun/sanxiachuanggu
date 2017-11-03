<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="header_location">
                <!--<p style="display: inline-block">您所在的位置 :</p>-->
                <el-breadcrumb separator=">" style="display: inline-block">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>双创空间</el-breadcrumb-item>
                    <el-breadcrumb-item>服务窗口入口列表</el-breadcrumb-item>
                </el-breadcrumb>
                <el-row>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(item, index) in policyList" :key="index">
                        <router-link :to="{name:'office_list_detail', params: {id:item['id']} }"  class="office_item">
                            <img :src="item.icon" alt="">
                            <p class="tc black2">{{item.title}}</p>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
	import api from "../axios/api.js";
	export default {
		data() {
			return {
				policyList: "" //优惠政策
			};
		},
		created() {
			let id = this.$route.params.id;
			this.getPolicyList(id);
		},
		methods: {
			getPolicyList(id) {
				api.Get("/allies/policy").then(res => {
					this.policyList = res;
					console.log(res);
				});
			}
		}
	};
</script>

<style>
    .header_location p,el-breadcrumb{
        height:30px;
        line-height:30px;
    }
</style>