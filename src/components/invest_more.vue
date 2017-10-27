<template>
    <div>
        <el-row :gutter="10"style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" style="margin-top:30px;">
                <p style="font-size:14px;color:#666;line-height:40px;">您所在的位置 : <span style="color:#0089e3;">创谷企业</span> > 服务商列表</p>
                <!--<div>-->
                <!--<ol>-->
                <!--<li>服务类型:</li>-->
                <!--<li>全部</li>-->
                <!--<li>信息化服务</li>-->
                <!--<li>物业服务</li>-->
                <!--<li>设备维修服务</li>-->
                <!--<li>投融资服务</li>-->
                <!--<li>项目申报服务</li>-->
                <!--<li>法律税收服务</li>-->
                <!--<li>人才招聘/培训服务</li>-->
                <!--<li>工商注册服务/li>-->
                <!--</ol>-->
                <!--</div>-->

                <div>
                    <el-row :gutter="10" style="margin-bottom: 10px;"  class="into_more_header">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12">
                            <h2>服务商</h2>
                        </el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4">
                            <h2 style="text-align: left">服务类别</h2>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="3" :lg="3">
                            <h2>联系人</h2>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5">
                            <h2>联系方式</h2>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10" v-for="(item, index) in 6" :key="index" class="into_more_list">
                        <el-col :xs="12" :sm="12" :md="12" :lg="12" class="into_more_img">
                            <el-row :gutter="10">
                                <el-col :xs="8" :sm="4" :md="4" :lg="4">
                                    <div>
                                        <img src="../../static/img/keji.png" alt="">
                                    </div>
                                </el-col>
                                <el-col :xs="16" :sm="16" :md="16" :lg="16">
                                    <h1>宜昌市兴诚生产力促进中心</h1>
                                    <p>试问你看好多卡仕达加速度很快就傻笑可是当你即可很快就很难看可好看就能看</p>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :xs="4" :sm="4" :md="4" :lg="4">
                            <h1>项目申报</h1>
                        </el-col>
                        <el-col :xs="3" :sm="3" :md="3" :lg="3">
                            <h2>曹总</h2>
                        </el-col>
                        <el-col :xs="5" :sm="5" :md="5" :lg="5">
                            <h2>13232658712</h2>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    .into_more_header h2{
        color:#666;
        background-color: #f1f1f1;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
    }
    .into_more_header{
        background-color: #f1f1f1;
        height:40px;
        line-height:40px;
    }
    .into_more_img img{
        width:100%;
    }
    .into_more_list{
        border:1px solid #ddd;
        margin-bottom: 10px;
        padding:20px 5px;
        margin-top: -10px;
        border-top:none;
    }
    .into_more_list h1{
        color: #0089e3;
        font-size: 16px;
        font-weight: normal;
        line-height:30px;
    }
    .into_more_list p{
        color:#999;
        font-size:10px;
        font-weight: normal;
        line-height:20px;
    }
    .into_more_list h2{
        color:#666;
        font-size: 16px;
        font-weight: normal;
        margin-left: 40px;
    }
</style>