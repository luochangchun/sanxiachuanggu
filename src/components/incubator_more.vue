<template>
    <div>
        <el-row :gutter="10"style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" style="margin-top:30px;">
                <p style="font-size: 14px;color:#000;">所在位置 : 首页 > 双创空间展示</p>
                <el-row :gutter="10" v-for="(item, index) in 6" :key="index" style="border:1px solid #ddd;margin-bottom: 10px;">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8">
                        <div class="incubators_more_img">
                            <img src="../../static/img/int1.png" alt=""style="margin-left: -5px;">
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :offset="1">
                        <div class="incubators_more_introduce">
                            <h2>西陵青年创业基地</h2>
                            <p><span>地址:</span>宜昌市西陵区西葫芦32号2号楼</p>
                            <p><span>联系方式:</span>吴江涛 &nbsp;&nbsp;18671768894
                            <p><span>在孵企业数:</span>23家</p>
                            <button>查看详情>></button>
                        </div>
                    </el-col>
                    <el-col :xs="3" :sm="3" :md="3" :lg="3">
                        <div class="incubators_more_area">
                            <h3>1700平方米</h3>
                            <p>孵化总面积</p>
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
    .incubators_more_area img{
        width:100%;
        /*margin-left: -5px;*/
    }
    .incubators_more_introduce h2{
        color:#0089e3;
        font-weight: normal;
        line-height:30px;
        font-size: 16px;
        /* margin-top: 20px; */
    }
    .incubators_more_introduce p{
        line-height:30px;
        color:#666;
    }
    .incubators_more_introduce button {
        width: 100px;
        line-height: 30px;
        border-radius: 4px;
        background-color: #f48100;
        color: #fff;
        font-size: 14px;
        border: none;
        margin: 35px auto;
    }
    .incubators_more_area h3{
        color: #f48100;
        font-size: 14px;
        font-weight: normal;
        margin-top: 30px;
        margin-bottom: -30px;
    }
    .incubators_more_area p{
        color: #666;
        font-size: 10px;
        font-weight: normal;
        margin-top: 30px;
    }
</style>