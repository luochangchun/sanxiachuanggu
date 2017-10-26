<template>
    <div>
        <!--精彩瞬间详情-->
        <el-row :gutter="10"style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" style="margin-top: 30px;">
                <p style="font-size: 14px;color:#000;">所在位置 : 首页 > 创谷学院 > 活动列表</p>
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(item, index) in 6" :key="index">
                        <a class="activitys_item">
                            <img src="../../static/img/1-1.png" alt="">
                            <div class="process abs">
                                <!--<p class="white f16 tc text-ellipsis">活动5</p>-->
                                <p class="f16 tc tag">进行中</p>
                                <p class="f16 tc tag">已结束</p>
                            </div>
                        </a>
                        <div class="splendid_detail_title">
                            <h1>五分钟搞定投资人</h1>
                            <p>时间:2017年8月25  &nbsp;&nbsp;下午14:30-16:30</p>
                            <p>地点:火凤凰云基地1楼云创咖啡</p>
                            <p>邀请嘉宾:周丹,刘庆,王丽</p>
                            <p>人数:30</p>
                        </div>
                    </el-col>
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
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    .process{
        background-color: transparent;
    }
    .process .tag{
        background-color: #93959a;
    }
    .splendid_detail_title h1{
        color:#0089e3;
        font-size:14px;
        font-weight: normal;
        line-height:30px;
    }
    .splendid_detail_title p{
        color:#666;
        font-size:14px;
        font-weight: normal;
        line-height:25px;
    }
</style>