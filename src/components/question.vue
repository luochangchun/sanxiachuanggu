<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" >
                <el-row :gutter="10">
                    <el-col :lg="16" :md="16" :sm="24" :xs="24">
                        <!--行业分类-->
                        <div v-show="!show_need">
                            <div class="classify">
                                <h3>行业分类</h3>
                                <ul>
                                    <li>生产制造业</li>
                                    <li>信息产业</li>
                                    <li>电子商务业</li>
                                    <li>高新技术业</li>
                                    <li>软件开发业</li>
                                    <li>健康医疗业</li>
                                    <li>第三方服务业</li>
                                    <li><button>发布问题</button></li>
                                </ul>
                            </div>
                            <!--导航切换-->
                            <el-row :gutter="10" class="need_xq">
                                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                    <template>
                                        <el-tabs v-model="activeName" @tab-click="handleClick">
                                            <el-tab-pane label="全部需求" name="first"></el-tab-pane>
                                            <el-tab-pane label="待解决" name="second"></el-tab-pane>
                                            <el-tab-pane label="已解决" name="third"></el-tab-pane>
                                        </el-tabs>
                                    </template>
                                </el-col>
                            </el-row>
                            <!--企业技术难题及需求-->
                            <el-row :gutter="10" class="need_xq">
                                <el-col :lg="10" :md="10" :sm="10" :xs="10">
                                    <p>需求</p>
                                </el-col>
                                <el-col :lg="3" :md="3" :sm="3" :xs="3">
                                    <p>联系人</p>
                                </el-col>
                                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                                    <p>联系方式</p>
                                </el-col>
                                <el-col :lg="5" :md="5" :sm="5" :xs="5">
                                    <p>发布时间</p>
                                </el-col>
                            </el-row>
                            <el-row :gutter="10" v-for="(item,index) in 20" class="need_xq" :key="index">
                                <div  @click="show_need=true">
                                    <el-col :lg="10" :md="10" :sm="10" :xs="10" class="need_xq_p">
                                        <p>企业并购法律流程是什么  <span>[法律相关]</span></p>
                                    </el-col>
                                    <el-col :lg="3" :md="3" :sm="3" :xs="3">
                                        <p>李涛</p>
                                    </el-col>
                                    <el-col :lg="5" :md="5" :sm="5" :xs="5">
                                        <p>13986003628</p>
                                    </el-col>
                                    <el-col :lg="5" :md="5" :sm="5" :xs="5">
                                        <p>2017-10-24</p>
                                    </el-col>
                                </div>

                            </el-row>
                            <!--分页-->
                            <el-row :gutter="10" style="margin-bottom: 50px;margin-top: 50px;">
                                <el-col :lg="8" :md="8" :sm="24" :xs="24"  :offset="8">
                                    <div class="block">
                                        <el-pagination layout="prev, pager, next" :total="1000">
                                        </el-pagination>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>

                        <div v-show="show_need" style="display: none" class="show_need">
                            <p>您所在的位置 : <span>答疑解惑列表</span> > 问题详情</p>
                            <div class="need_import">
                                <h3>工商局办理公司股东变更登记需要哪些手续</h3>
                                <p>企业名称: 乐行(宜昌)科技有限公司 | 需求类型: 法律类 | 联系人: 李涛 | 联系方式: 13996003628 | 2017-10-24 | 已解决</p>
                                <div>
                                    <div class="need_import_img">
                                        <div>
                                            <img src="../../static/img/college_2.png" alt="">
                                        </div>
                                        <div class="need_import_p">
                                            <p>钟学保</p>
                                            <p>2017-10-21</p>
                                        </div>
                                    </div>
                                    <div style="clear:both;">
                                        <h1>你需要提交以下材料:</h1>
                                        <p v-for="(item,index) in 7" :key="index">1.股东会关于股权变更的决议;</p>
                                        <p>如果B在公司李担任职务的需求注意任免情况</p>
                                    </div>

                                </div>
                            </div>
                            <el-input type="textarea" :rows="4" placeholder="您可以在此留言" v-model="textarea">
                            </el-input>
                            <button>留言</button>
                        </div>
                    </el-col>
                    <!--热门排行-->
                    <el-col :lg="8" :md="8" :sm="24" :xs="24">
                        <el-row :gutter="10">
                            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                <div class="news-rightlist">
                                    <div class="news-hot">热门排行</div>
                                    <ul>
                                        <li v-for="( item,index ) in 10" :key="index">
                                            <span>1</span>企业财务成果的计算包括哪些收支项目
                                        </li>
                                    </ul>
                                </div>
                                <!--导师推荐-->
                                <div class="news-rightlist">
                                    <div class="news-hot">导师推荐</div>
                                    <ul>
                                        <li v-for="( item,index ) in 2" :key="index" class="need_teacher">
                                            <el-row :gutter="10">
                                                <el-col :lg="8" :md="8" :sm="8" :xs="8">
                                                    <img src="../../static/img/college_2.png" alt="">
                                                </el-col>

                                                <el-col :lg="8" :md="8" :sm="8" :xs="8">
                                                    <p>郑丽</p>
                                                    <p>优秀创业导师</p>
                                                </el-col>

                                                <el-col :lg="8" :md="8" :sm="8" :xs="8">
                                                    <button>提问</button>
                                                </el-col>
                                            </el-row>
                                        </li>
                                    </ul>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	import Swiper from '../components/swiper.vue'
	export default {
		data() {
			return {
				activeName: 'second',
				show_need:false,
				textarea: ''
			}
		},
		created() {

		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
		},
		components: {
			commonSwiper: Swiper
		},
	};

</script>

<style>
    /*问题详情*/
    .need_import_img img{
        border-radius: 50%;
        width:60px;
        margin-right: 20px;
        margin-top:10px;
        margin-bottom: 20px;
    }
    .need_import_p p{
        border-bottom:none !important;
        height:20px !important;
    }
    .need_import_p p:first-child{
        margin-top: 20px !important;
    }

    .need_import_img div{
        float:left;
        /*width:40%;*/
    }

    .need_import{
        border:2px solid #0089e3;
        padding: 10px;
        margin-bottom: 20px;
    }
    .need_import h3{
        font-size:16px;
        font-weight: normal;
        color:#666;
    }
    .need_import p{
        font-weight: normal;
        font-size: 12px;
        color:#999;
        height:30px;
        line-height:30px;
        border-bottom: 1px solid #ddd;
    }
    .need_import h1{
        height: 30px;
        line-height:30px;
        font-weight: normal;
        font-size: 12px;
        color:#666;
        margin-top: 15px;
    }
    .show_need button{
        border:none;
        background-color: #f48100;
        color:#fff;
        font-size:14px;
        width:70px;
        height:28px;
        border-radius: 4px;
        margin-left: 84%;
        margin-top: 20px;
    }







    /*行业分类*/
    .classify h3{
        font-size:14px;
        font-weight: normal;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .classify ul li{
        float:left;
        margin-right: 3%;
        font-size: 12px;
        color:#0089e3;
    }
    .classify ul li button{
        border:none;
        background-color: #f48100;
        color:#fff;
        font-size:14px;
        width:70px;
        height:28px;
        border-radius: 4px;
        margin-left: 30px;
    }
    .classify span{
        border:1px solid #ddd;
        display: block;
        clear:both;
        width:48%;

    }
    /*企业技术难题及需求*/
    .need_xq{
        border-bottom:1px solid #ddd;
    }
    .need_xq p{
        height:38px;
        line-height:38px;
        color:#0089e3;
        font-size: 12px;
        cursor: pointer;
    }
    .need_xq p span{
        margin-left: 10px;
        color:#999;
        font-size: 12px;
    }
    /*热门排行*/
    .news-rightlist{
        border:1px solid #ddd;
        width:100%;
        padding: 0 10px  20px 20px;
        margin-bottom: 50px;
        margin-top: 40px;
    }
    .news-hot{
        position: relative;
        top:-11px;
        left:20px;
        background-color:#fff;
        width:25%;
        text-align: center;
        color:#0089e3;
        font-weight: 600;
        font-size: 16px;
    }
    .news-button button{
        border:none;
        background-color: #ff0000;
        float:right;
        margin-right: 10px;
        border-radius: 4px;
        margin-bottom: 10px;
    }
    .news-rightlist ul li{
        clear:both;
        line-height:30px;
        color:#a1a1a1;
        font-size: 14px;
        letter-spacing: 1px;
    }
    .news-rightlist ul li span{
        display: inline-block;
        width:20px;
        height:20px;
        background-color: #0089e3;
        color:#fff;
        text-align: center;
        line-height: 20px;
        margin-right: 10px;
    }
    /*导师推荐*/
    .need_teacher div img{
        width:100px;
        border-radius: 50%;
    }
    .need_teacher div p{
        line-height:30px;
        font-size:14px;
    }
    .need_teacher div p:first-child{
        margin-top: 25px;
    }
    .need_teacher div button{
        border:none;
        background-color: #f48100;
        color:#fff;
        font-size:14px;
        width:70px;
        height:28px;
        border-radius: 4px;
        margin-top: 40px;
    }
</style>