<template>
    <div>
        <div style="width:100%;background-color:#f2f5f4">
            <div class="container">
                <!--双创空间详情页-->
                <el-row :gutter="10" style="margin-bottom: 50px;">
                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                        <el-row :gutter="10" style="padding:15px;background-color: #f2f5f4;">
                            <el-col v-if="tenancyApply['type'] == 1" :lg="6" :md="6" :sm="24" :xs="24">
                                <div class="details-img">
                                    <el-carousel :interval="500000" arrow="never" height="240px">
                                        <el-carousel-item v-for="(item, index) in photos" :key="index">
                                            <img :src="item.uri">
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </el-col>
                            <el-col v-if="tenancyApply['type'] == 1" :lg="11" :md="11" :sm="24" :xs="24" :offset="1" class="details-text clearfix">
                                <h6 v-if="tenancyApply['detail']">{{tenancyApply['detail']['title']}}</h6>
                                <h6 v-if="!tenancyApply['detail']">暂无标题</h6>
                                <p>地段：{{tenancyApply['address']}}</p>
                                <p>联系方式：{{tenancyApply['contact']}} {{tenancyApply['phone']}}</p>
                                <p>场地面积：{{tenancyApply['area']}}平米</p>
                            </el-col>
                            <el-col v-if="tenancyApply['type'] == 2" :lg="11" :md="11" :sm="24" :xs="24" class="details-text wanted clearfix">
                                <h6 v-if="tenancyApply['detail']">{{tenancyApply['detail']['title']}}</h6>
                                <h6 v-if="!tenancyApply['detail']">暂无标题</h6>
                                <p>地段：{{tenancyApply['address']}}</p>
                                <p v-if="tenancyApply['district']"><span>区域：</span>{{tenancyApply['district']}}</p>
                                <p>联系方式：{{tenancyApply['contact']}} {{tenancyApply['phone']}}</p>
                                <p>场地面积：{{tenancyApply['area']}}平米</p>
                                <p style="margin-bottom:40px;">期望价格：{{tenancyApply['price']}}{{tenancyApply['unit']}}</p>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="container min400">
            <el-row :gutter="10" class="incubators_details_text wanted1" style="background-color: #fff;padding:15px;margin-top:20px;">
                <h1 style="margin-bottom:25px;font-size:16px;" v-if="tenancyApply['type'] == 1">招商说明:</h1>
                <h1 style="margin-bottom:25px;font-size:16px;" v-if="tenancyApply['type'] == 2">求租说明:</h1>
                <p v-html="content" class="wanted2"></p>
            </el-row>
        </div>
    </div>
</template>
<script>
	import api from '../axios/api.js'
	export default {
		data() {
			return {
				tenancyApply: '',
				photos: [],
				content:''
			}
		},
		created() {
			let id = this.$route.params.id
			this.getTenancyApply(id);
		},
		methods: {
			getTenancyApply(id) {
				api.Get('/qb/tenancy/' + id)
					.then(res => {
                        this.photos = res['photos'];
                        let defaultImg = {uri:"../../static/img/zss.png"}
						this.tenancyApply = res['tenancyApply'];
                        if(res['photos'].length > 0) {
                            this.photos = res['photos'];
                        } else {
                            this.photos.push(defaultImg);
                        }
						if(!res['tenancyApply']['detail']) {
							this.content="暂无数据"
						} else {
							this.content=res['tenancyApply']['detail']['content'];
						}
					});
			}
		}
	}
</script>

<style>
    /**求租样式*/
    .wanted2{
        margin-bottom:30px;
    }

    .details-img img {
        width: 100%;
        height: 100%;
    }
    .details-title-img img {
        width: 100%;
        border: 1px solid #ddd;
    }
    img {
        width: 100%;
        display: block;
        margin-right: auto;
        margin-left: auto;
        vertical-align: middle;
    }
    .details-text h6 {
        font-size: 26px;
        color: #0089e3!important;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .details-text p {
        line-height: 200%;
    }
    .details-text a {
        background-color: #f48100;
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-top: 30px;
    }
</style>