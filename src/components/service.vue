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
                                    <img src="../../static/img/nav_03.png" alt=""style="margin-top: 3px;">
                                    <p>信息化服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="" alt="">
                                    <p>物业服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="" alt="">
                                    <p>设备维修服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="" alt="">
                                    <p>投融资服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="" alt="">
                                    <p>项目申报服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="" alt="">
                                    <p>法律税收服务</p>
                                </div>
                                <div class="service-nav">
                                    <img src="" alt="">
                                    <p>人才招聘/培训服务</p>
                                </div>
                                <div class="service-nav" style="border: none;">
                                    <img src="" alt="">
                                    <p>工商注册服务</p>
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
        margin-bottom:-3px;

    }
    .service-nav p{
        height:40px;
        line-height:40px;
        display: inline-block;
        font-size: 14px;
    }

</style>