<template>
    <div>
        <!--双创空间详情页-->
        <el-row :gutter="10"style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <el-row :gutter="10" style="margin-top: 50px;border:1px solid #ddd;padding:15px;background-color: #fff">
                    <el-col :lg="12" :md="12" :sm="24" :xs="24">
                        <div class="details-img"><img src="../../static/img/id_03.png" alt=""style="min-height:270px;"></div>
                        <el-row :gutter="10">
                            <el-col :lg="4" :md="4" :sm="4" :xs="4" v-for="(item,index) in 6" :key="item">
                                <div class="details-title-img">
                                    <img src="../../static/img/id_06.png" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :lg="11" :md="11" :sm="24" :xs="24":offset="1" class="details-text">
                        <h6>715文化创业园</h6>
                        <p>地址:湖北省宜昌市西陵区绿萝路43号</p>
                        <p>级别:市级</p>
                        <p>联系方式:李丽洁 13476854766</p>
                        <p>场地面积:24000平米</p>
                        <p>在孵企业数:61家</p>
                        <p>重点孵化类型:文化创意产业,科技企业</p>
                        <router-link to="/enter"><button>申请入驻</button></router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="10" style="margin-top: 50px;">
                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                        <div class="l service_provider_title"></div>
                        <div class="r more_plus"></div>
                    </el-col>
                </el-row>
                <el-row :gutter="10" class="incubators_details_text"style="border:1px solid #ddd;background-color: #fff;padding:15px;">
                    <el-col :lg="19" :md="24" :sm="24" :xs="24">
                        <p>宜昌市715文化创意产业园科技孵化器是宜昌首个以军工企业为背景的文化+科技+旅游的民营孵化器.总孵化经济学家变形金刚大家还是得不到回家啊斯巴达西安事变兴安盟似曾相识基本框架斑马斑马三次第三次.<br>宜昌市715文化创意产业园科技孵化器是宜昌首个以军工企业为背景的文化+科技+旅游的民营孵化器总孵化经济学家变形金刚大家还是得不到回家啊斯巴达西安事变兴安盟似曾相识<br>基本框架斑马斑马三次第三次.宜昌市715文化创意产业园科技孵化器是宜昌首个以军工企业为背景的文化+科技+旅游的民营孵化器.总孵化经济学家变形金刚大家还是得不到回家啊斯巴达西安事变兴安盟似曾相识基本框架斑马斑马三次第三次.</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>

</style>