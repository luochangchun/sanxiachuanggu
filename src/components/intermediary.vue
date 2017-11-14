<template>
    <div class="talent">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="container">
                    <div class="details_tag">
                        <el-row class="multi">
                            <el-col :span="2">
                                <p class="class_name">服务领域:</p>
                            </el-col>
                            <el-col :span="22">
                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane :label='item.value' :name="item.value" :cid="item.id" v-for="(item, index) in ServiceList" :key="index">
                                        <p v-show="noData" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                                        <a>
                                            <el-row v-show="!noData" :gutter="24" class="need_xq">
                                                <el-col :xs="6" :sm="6" :md="6" :lg="6" v-for="(item,index) in needData" :key="index" @click="openDetail(item.id)">
                                                    <div class="intermediary_list">
                                                        <h1>{{item['title']}}</h1>
                                                        <p>地址:东山大道105号东升人才市场</p>
                                                        <p>电话:{{item['phone']}}</p>
                                                        <img src="../../static/img/zc.png" alt="">
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </a>
                                    </el-tab-pane>
                                </el-tabs>
                            </el-col>
                            <el-col :span="1" class="tc" style="margin-top:8px;">
                                <i class="el-icon-arrow-down more_tag" @click="showMore(index)"></i>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="tc mb35">
                    <el-pagination :current-page="1" :total="111" layout="prev, pager, next"></el-pagination>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	import api from '../axios/api.js'
	export default {
		data() {
			return {
				activeName: "tab1",
				multi01: false,
				noData: false,
				ServiceList: '',
				needData: '',
			};
		},
		created() {
			this.getServiceList()
		},
		methods: {
//			handleClick(a,event){
//				this.initTalentList(a['businessType']['cid'])
//			},
			showMore() {
				if (this.multi01) {
					this.multi01 = false;
				} else {
					this.multi01 = true;
				}
			},
			getServiceList() {
				api.Get('/dict/service').then(res => {
					this.ServiceList = res;

				});
			},
			initServicesList(cid) {
				var url = "/enterprise/apply/" + "10" + "/" + "1" + "?cid=" + cid;
				api.Get(url).then(res => {
					this.needData = res["page"]["data"];
					this.recommend = res["recommend"];
					if (this.needData.length == 0) {
						this.noData = true;
					} else if (this.needData.length > 0) {
						this.noData = false;
						this.needData = res["page"]["data"];
						this.totalPages = res["page"]["totalPages"] * 10;
					}

				});
			},
			handleClick(tab, event) {
				this.initServicesList(tab["$attrs"]["cid"]);
				this.activeName = "first";
			},
		}
	};
</script>

<style>
    body{

    }
.intermediary_list{
    border:1px solid #ddd;
    font-size: 14px;
    padding-left:20px;
    margin-bottom: 14px;
    position: relative;
}
.intermediary_list h1{
    font-size: 20px;
    line-height:30px;
    padding-right:20px;
    height:60px;
    margin-top: 30px;
    margin-bottom: 20px;
    color:#333;
    letter-spacing:3px;
}
.intermediary_list p{
    font-size:14px;
    margin-bottom: 8px;
    padding-right:20px;
    color:#666;
}
.intermediary_list{
    padding-bottom: 20px;
}
.intermediary_list img{
    width:50px;
    position: absolute;
    right:10px;
    bottom: 10px;
}
</style>