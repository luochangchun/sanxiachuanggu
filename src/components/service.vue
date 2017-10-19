<template>
    <div>
    <!--banner-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24"class="service-banner">
                <el-row :gutter="10">
                    <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                        <el-row :gutter="10">
                            <el-col :lg="6" :md="6" :sm="6" :xs="24" style="background-color:#f9fafa">
                                <div class="service-nav">
                                    <img src="../../static/img/nav_1.png" alt=""style="margin-top: 3px;">
                                    <p>信息化服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_2.png" alt="">
                                    <p>物业服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_3.png" alt="">
                                    <p>设备维修服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_4.png" alt="">
                                    <p>投融资服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_5.png" alt="">
                                    <p>项目申报服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_6.png" alt="">
                                    <p>法律税收服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="../../static/img/nav_7.png" alt="">
                                    <p>人才招聘/培训服务</p>
                                </div>
                                <div class="service-nav" style="border: none;">
                                    <img src="../../static/img/nav_8.png" alt="">
                                    <p>工商注册服务</p>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    <!--服务商专区-->
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-service">
                    <h1>服务商专区</h1>
                    <p>SERVICE AREA</p>
                    <hr>
                    <span></span>
                    <button>MORE+</button>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="service-show"id="showone">
                        <img src="../../static/img/s_05.png" alt="">
                        <div class="service-opcity">
                            <h2>海量客户 遍布全国</h2>
                            <p>16+城市,40+场区,3000+入驻企业,30000+注册用户</p>
                        </div>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="service-show"id="showtwo">
                        <img src="../../static/img/s_07.png" alt="">
                        <div class="service-opcity">
                            <h2>立体推广 精准直达</h2>
                            <p>专属推广活动,频道展示,优质企业推荐,多渠道提供合作机会 </p>
                        </div>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="service-show"id="showthree">
                        <img src="../../static/img/s_09.png" alt="">
                        <div class="service-opcity">
                            <h2>优质标签 彰显身份</h2>
                            <p>服务商评估体系,您的标签,就是您三峡创谷的尊贵身份</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>







    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    /*banner*/
    .service-banner{
        background-image: url(../../static/img/service-banner_02.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        width:100%;
    }
    .service-nav{
        background-image: url(../../static/img/right.png);
        background-repeat: no-repeat;
        background-size: 8px;
        background-position: right;
        border-bottom:1px solid #ddd;
    }
    .service-nav img{
        display: inline-block;
        margin-bottom:-5px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .service-nav p{
        height:40px;
        line-height:40px;
        display: inline-block;
        font-size: 14px;
    }
    /*服务商专区*/
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
    .title button{
        position: absolute;
        top: 40px;
        right:13%;
        font-size: 12px;
        color:#999;
        border-radius:4px;
        border:1px solid #ddd;
        background-color: transparent;
    }
    #title-service{
        position:relative;
        margin-top: 50px;
    }
    #title-service span{
        position: absolute;
        top: 48px;
        left:45%;
    }
    /*图片上阴影字*/
    .service-opcity{
        width:70%;
        background:rgba(255,255,255,0.5);
        height:70%;
    }
    #showone{
        position:relative;
    }
    #showone div{
        position: absolute;
        top: 15%;
        left:15%;
    }
    .service-opcity h2{
        text-align: center;
        margin-top: 15%;
        color:#666;
    }
    .service-opcity p{
        margin:0 6px;
        text-align: center;
        margin-top: 5%;
        color:#999;
    }
    #showtwo{
        position:relative;
    }
    #showtwo div{
        position: absolute;
        top: 15%;
        left:15%;
    }
    #showthree{
        position:relative;
    }
    #showthree div{
        position: absolute;
        top: 15%;
        left:15%;
    }
</style>