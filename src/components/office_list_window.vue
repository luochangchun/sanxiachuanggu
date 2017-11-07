<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="header_location">
               <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator=">" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '>' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>双创空间</el-breadcrumb-item>
                        <el-breadcrumb-item>服务窗口入口列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-row>
                    <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(item, index) in windowList" :key="index">
                        <a class="office_item" :href="item.redirect" target="_blank">
                            <img :src="item.icon" alt="">
                            <p class="tc black2" style="margin-top:0">{{item.name}}</p>
                        </a>
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
				windowList: "" //服务窗口
			};
		},
		created() {
			let id = this.$route.params.id;
			this.getWindowList(id);
		},
		methods: {
			getWindowList(id) {
				api.Get("/allies/window").then(res => {
					this.windowList = res;
					console.log(res);
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
    /* img {
        width: 100%;
        display: block;
        margin-right: auto;
        margin-left: auto;
        vertical-align: middle;
    } */
</style>