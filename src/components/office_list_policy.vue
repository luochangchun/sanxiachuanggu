<template>
    <div class="container">
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="header_location">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator=">" class="padder-vx">
                         <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>双创空间</el-breadcrumb-item>
                    <el-breadcrumb-item>双创办公室列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-row style="padding:30px 0">
                    <el-col :xs="24" :sm="8" :md="8" :lg="4" v-for="(item, index) in policyList" :key="index" style="position:relative;" >
                        <a @mouseover="show_office(index)" href="javascript:;"  class="office_item">
                            <p @mouseover="show_office()"  class="tc black2 title0 b" style="margin-top:0">{{item.name}}</p>
                            <p class="tc black2">负责人：{{item['contact']}}</p>
                            <p class="tc black2">服务电话：{{item['phone']}}</p>
                        </a>
                        <div class="office_item_mask abs" :class="{ db: office_active[index] }">
                            <router-link to="/" class="tc">办事流程</router-link>
                            <router-link :to="{name:'office_list_detail', params: {id:item['id']} }" class="tc">优惠政策</router-link>
                            <router-link to="/" class="tc">服务窗口</router-link>
                        </div>
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
                policyList: "", //优惠政策
                office_active:[],
			};
		},
		created() {
			this.getPolicyList();
		},
		methods: {
			getPolicyList() {
				api.Get("/allies/office").then(res => {
                    this.policyList = res;
                    for (let i = 0; i < this.policyList.length; i++) {
                        this.office_active.push(false)
                    }
				});
            },
            //双创办公室
            show_office(index) {
                var office_item = document.querySelectorAll('.office_item');
                for (let i = 0; i < office_item.length; i++) {
                    if (office_item[i] != office_item[index]) {
                        this.$set(this.office_active, i, false)
                    } else {
                        this.$set(this.office_active, i, true)
                    }
                }
            },
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