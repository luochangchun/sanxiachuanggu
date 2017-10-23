<template>
    <div>
        <!--header-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img">
                    <img src="../../static/img/banner_trzk.png" alt="">
                    <button>查看详情</button>
                </div>
            </el-col>
        </el-row>
        <!--投资机构-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-invest">
                    <h1>投资机构</h1>
                    <p>INVESTMENT ORGANIZATION</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <div  class="service_provider">
                    <el-row :gutter="10">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <el-row class="office_wrap">
                                <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in 10" :key="item">
                                    <a class="service_provider_item rel">
                                        <img src="../../static/img/service01.png" alt="">
                                        <p class="tc">长江证券</p>
                                        <i class="tag abs white tc f14">项目申报</i>
                                    </a>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <!--融资项目-->
        <el-row :gutter="10" style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-financing">
                    <h1>投资机构</h1>
                    <p>INVESTMENT ORGANIZATION</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="12" :md="12" :sm="12" :xs="24" v-for="(item, index) in 6" :key="item">
                        <a class="Financing_item rel">
                            <img src="../../static/img/project01.png" alt="">
                            <div class="Financing_wrap">
                                <div class="Financing_info">
                                    <h1 class="f16">融创投资新三板领投基金</h1>
                                    <p class="text-ellipsis">融创投资新三板领投基金融创投资新三板领投基金融创投资新三板领投基金融创投资新三板领投基金</p>
                                </div>
                                <el-row type="flex" class="Financing_money">
                                    <el-col :span="6">
                                        <p class="f14">3240万<br/>已获得投资意向</p>
                                    </el-col>
                                    <el-col :span="6" :push="12">
                                        <p class="f14 tr">5000万<br/>预融资总额</p>
                                    </el-col>
                                </el-row>
                                <el-tag type="primary" style="margin-left:8px">行业领域:
                                    <span>消费生活</span>
                                </el-tag>
                                <el-tag type="success">已完成融资:
                                    <span>未完成融资</span>
                                </el-tag>
                                <p class="f14 pl10">发起人:融创中国</p>
                            </div>
                        </a>
                    </el-col>
                </el-row>
            </el-col>
            <!--<el-col :lg="24" :md="24" :sm="24" :xs="24">-->
                <!--<div class="Financing">-->
                    <!--<div class="container">-->
                        <!--<el-row :gutter="10">-->
                            <!--<el-col v-for="(item, index) in 6" :key="item">-->
                                <!---->
                            <!--</el-col>-->
                        <!--</el-row>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</el-col>-->
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    .banner_img img{
        width:100%;
    }
    .banner_img button{
        border:none;
        background-color: #fada0b;
        border-radius: 4px;
        color:#fff;
        position: absolute;
        bottom: 20%;
        margin-left: 45%;
    }
    /*title*/
    .title{
        text-align: center;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .title h1{
        color:#0089e3;
        font-size:18px;
        font-weight:600;
    }
    .title p{
        color:#ddd;
        font-size: 10px;
    }
    .title hr{
        width:30%;
        border:1px solid #454b60;
    }
    .title span{
        display: block;
        border:2px solid #0089e3;
        width:10%;
    }
    .title div{
        margin-top: -42px;
    }
    /*投资机构*/
    #title-invest{
        position:relative;
        margin-top: 50px;
    }
    #title-invest span{
        position: absolute;
        top: 48px;
        left:45%;
    }
    /*融资项目*/
    #title-financing{
        position:relative;
        /*margin-top: 50px;*/
    }
    #title-financing span{
        position: absolute;
        top: 48px;
        left:45%;
    }
</style>