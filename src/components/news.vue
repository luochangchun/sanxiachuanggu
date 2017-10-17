<template>
    <div class="news padder-v-md">
        <div class="container">
            <el-row :gutter="20">
                <!--左边部分-->
                <el-col :span="12" :offset="3">
                    <a href="">
                        <div class="bg-cover block h"></div>
                    </a>
                    <!--切换-->
                    <el-row :gutter="20" class="b-b m-t">
                        <el-col :span="4">全部</el-col>
                        <el-col :span="4">园区新闻</el-col>
                        <el-col :span="4">国家政策</el-col>
                    </el-row>
                    <!--左图右文字-->
                    <el-row :gutter="20" class="b-b m-t">
                        <el-col :span="8">
                            <a @click="!showread">
                                <div class="left1"></div>
                            </a>
                        </el-col>
                        <el-col :span="16" class="pos" v-show="showread">
                            <p class="text-md font-bold text-ellipsis">
                                <a href="" class="text-dark-lt">湖北发文规范推进人才创新创业超市建设</a>
                            </p>
                            <p class="text-ellipsis-3">
                                近日，湖北省委组织部、省人社厅、省科技厅、省教育厅等四部门联合印发《关于推进人才创新创业超市建设的通知》(以下简称《通知》)，持续、规范推进人才创新创业超市建设，为人才"双创"营造优良的生态环境。
                            </p>
                            <div class="pos-abt" style="bottom:15px;">
                                <p class="text-muted pull-left m-r">
                                    <i class="el-icon-time fa fa-clock-o m-r-xs"></i>
                                    <span>时间：2017-10-10</span>
                                </p>
                                <p class="text-muted pull-left">
                                    <i class="el-icon-edit fa fa-edit m-r-xs"></i>
                                    <span>创谷空间</span>
                                </p>
                            </div>
                        </el-col>
                        <!--点击图片进入详情-->
                        <el-col :span="16" v-show="!showread" style="display: none">
                            <div class="text-center">
                                <p class="text-xxxl">省科技厅关于开展2017年省级众创空间认定工作的通知</p>
                                <p>
                                    <span>时间：2017-10-11</span>
                                </p>
                            </div>
                            <div class="wrapper-lg">
                                <p></p>
                                <p style="text-align:left;">各市、州、直管市、神农架林区科技局，东湖国家自主创新示范区管委会，各有关单位：</p>
                                <p style="text-align:left;"> 为进一步指导和推动全省各级各类众创空间科学构建、健康发展，在全社会营造大众创业、万众创新的良好生态环境，省科技厅现决定开展2017年省级众创空间认定工作，现就有关事项通知如下：</p>
                                <p style="text-align:left;"> 一、基本条件</p>
                                <p style="text-align:left;"> 1.众创空间的运营机构应当是湖北省境内注册的具有独立法人资格的企事业单位，实际运营时间应达到半年以上。</p>
                                <p style="text-align:left;"> 2.众创空间的服务团队和主要负责人要具备一定行业背景、丰富的创新创业经历和相关行业资源，人员的知识结构、综合素质、业务技能和服务能力能够满足大众创新创业服务需求。</p>
                                <p style="text-align:left;"> 3.众创空间应当拥有不少于500平米的可自主支配的工作空间，应当能够为创新创业者提供免费或低成本的办公条件，具备完善的基本服务设施。专注于特定产业或技术领域的众创空间，还应当为创新创业者提供开源软件、装配工具、试验仪器等公共技术资源共享空间。</p>
                                <p style="text-align:left;"> 4.众创空间应当搭建有便于创业者、技术人员、投融资机构等各方交流对接的线上（线下）社交空间，每年开展的促进创新创业者信息沟通交流的线下活动应当不少于20场。</p>
                                <p style="text-align:left;"> 5、众创空间应当有与天使投资人、创业投资机构的合作协议，优先支持自建或主导建设天使投资基金的众创空间。</p>
                                <p style="text-align:left;"> 二、申报要求</p>
                                <p style="text-align:left;"> 1、申请认定为省级众创空间的有关机构，应满足上述5条要求，同时应符合《科技部关于印发&lt;发展众创空间工作指引&gt;的通知》（国科发火〔2015〕297号）中的有关条件和要求。</p>
                                <p style="text-align:left;"> 2、申请机构请认真填写《湖北省省级众创空间认定申请书》（附件2），并向所在地的科技管理部门递交申报材料。</p>
                                <p style="text-align:left;"> 3、地方科技管理部门要认真审核把关，提出审核意见。同意推荐的，出具推荐函并附《省级众创空间申报信息汇总表》（见附件1）报省科技厅，同时将《信息汇总表》电子版发送至联系人邮箱。</p>
                                <p style="text-align:left;"> 三、申报方式及时间</p>
                                <p style="text-align:left;"> 1.各申请机构请将申报材料纸质版材料一式三份报送至地方科技管理部门，由地方科技管理部门审核盖章推荐后于10月30日前统一报送至省科技厅协调办。</p>
                                <p style="text-align:left;"> 2.各市州科技局负责本辖区申请机构的申报组织及审核推荐工作，东湖高新区管委会负责区内各申请机构申报组织及审核推荐工作。 </p>
                                <p style="text-align:left;"> 3.省科技厅将尽快组织专家对申报材料进行评价并进行实地考察。省科技厅将根据评价结果，对认定的众创空间统一发文公示。</p>
                                <p style="text-align:left;"> 四、联系人及联系方式</p>
                                <p style="text-align:left;"> 省科技厅协调办&nbsp;黄&nbsp;源、陈&nbsp;满</p>
                                <p style="text-align:left;"> 联系电话：027-87135795、87135349</p>
                                <p style="text-align:left;"> 电子邮箱：chenman1118@163.com</p>
                                <p style="text-align:left;"> 附件1、《省级众创空间申报信息汇总表》</p>
                                <p style="text-align:left;"> &nbsp; &nbsp; &nbsp;2、《湖北省省级众创空间认定申请书》</p>
                                <p style="text-align:left;"> 湖北省科技厅</p>
                                <p style="text-align:left;"> 2017年9月18日</p>
                                <p><br></p>
                                <p></p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <!--右边部分:精彩活动-->
                <el-col :span="6">
                    <div class="news-rightlist">
                        <p class="text-md font-bold">精彩活动</p>
                        <hr class="m-n b-b">
                        <el-row :gutter="20" class="news-rightlist">
                            <el-col :span="24">
                                <a href="">
                                    <span class="block pos-rlt">
                                        <img src="../../static/img/download.jpg" alt="">
                                        <span class="pos-abt text-xl block text-green text-ellipsis-2 padder-md" style="top:30%;">中秋话团圆，火凤凰云创空间中秋联谊会圆满举办</span>
                                        <span class="pos-abt inline padder-xs padder-v-xxs bg-grey text-white" style="bottom:5px; right:10px;"> 已结束 </span>
                                        <span class="black-box block"></span>
                                    </span>
                                </a>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <div class="block">
                        <el-pagination layout="prev, pager, next" :total="50">
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
            <!--footer-->
            <div style="width:100%;">
                <el-row :gutter="20">
                    <el-col :span="14">

                    </el-col>
                </el-row>
            </div>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import header from './header.vue'
const False = false;
export default {
    data() {
        return {
            //				abnormalA:true,
            //				abnormalB:false,
            //				abnormalC:false,
            showread: true
        };
    },
    methods: {

    }

};

</script>
<style>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.padder-v-md {
    padding-top: 20px;
    padding-bottom: 20px;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    /* margin-top: 40px; */
}

.bg-cover {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-bottom: 30px;
}

.h {
    height: 200px;
    background-image: url(../../static/img/banner-2.jpg);
}

.block {
    display: block;
}

.no-padder {
    margin-bottom: 10px;
    padding: 0 !important;
}


/*左图*/

.left1 {
    background-image: url(../../static/img/download.jpg);
    height: 144px;
}


/*右文字*/

.pos {
    height: 150px;
}

.text-ellipsis {
    overflow: hidden;
    display: block;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
}

.text-ellipsis {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.text-md {
    font-size: 16px;
}

.font-bold {
    font-weight: 700;
}

p {
    margin: 0 0 10px;
}

.text-dark-lt {
    color: #454b60;
}

a {
    color: #428bca;
    text-decoration: none;
}

.text-ellipsis-3 {
    height: 4.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.42857143;
    color: #333;
}

.pos-abt {
    position: absolute;
}

.pull-left {
    float: left;
}

.m-r {
    margin-right: 15px;
}

.text-muted {
    color: #98a6ad;
    font-size: 14px;
}

.pull-left {
    float: left !important;
}

.fa {
    display: inline-block;
    /* font: normal normal normal 14px/1 FontAwesome; */
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.m-r-xs {
    margin-right: 5px;
}

.pull-left {
    float: left;
}

.pull-left {
    float: left !important;
}

.b-b {
    border-bottom: 1px solid #dee5e7;
}

.m-t {
    margin-top: 15px;
    padding-bottom: 15px;
}


/*右边图片*/

.news-rightlist span img {
    width: 100%;
}

.text-green {
    color: #0ab394;
}

.padder-md {
    padding-right: 20px;
    padding-left: 20px;
}

.text-ellipsis-2 {
    height: 2.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.text-xl {
    font-size: 20px;
    line-height: 1.42857143;
}

.text-white {
    color: #fff !important;
}

.bg-grey {
    background-color: #93959a;
    color: #fff;
}

.padder-v-xxs {
    padding-top: 5px;
    padding-bottom: 5px;
}

.padder-xs {
    padding-right: 10px;
    padding-left: 10px;
}

.inline {
    display: inline-block !important;
}

.black-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: none;
}


/*点击图片详情*/

.text-center {
    text-align: center;
}

.text-xxxl {
    font-size: 24px;
}

p {
    margin: 0 0 10px;
}

.wrapper-lg {
    padding: 30px;
}
</style>