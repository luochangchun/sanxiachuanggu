<template>
    <div>
        <!--服务企业login-->
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#23b7e5">
                <el-row :gutter="10">
                    <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="provider_header">
                        <div class="provider_login">
                            <img src="../../static/img/logo.png" alt="">
                        </div>
                        <div>
                            <p>华夏银行</p>
                            <button>贷款</button>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--优惠服务-->
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="provider_header">
                <h1>优惠服务</h1>
                <el-row>
                    <el-col :lg="20" :md="20" :sm="20" :xs="20">

                    </el-col>
                    <el-col :lg="4" :md="4" :sm="4" :xs="4">

                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    /*服务企业login*/
    .provider_header p{
    line-height:60px;
        color:#fff;
        font-size: 14px;
    }
    .provider_header button{
        border:1px solid #fff;
        background-color: transparent;
        width:60px;
        color:#fff;
        font-size: 12px;
        text-align: center;
    }
.provider_login img{
    width:100px;
    height:100px;
    border-radius: 50%;
    float:left;
    background-color: #fff;
    margin-right: 5%;
}
    .provider_header{
        margin-top:30px;
        margin-bottom: 50px;
    }
</style>