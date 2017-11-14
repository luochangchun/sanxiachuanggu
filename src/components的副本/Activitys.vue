<template>
    <div class="container">
        <div class="activity">
            <div class="activity-title">
                <p class="word">近期活动</p>
                <p class="more">
                    <a href="/active.html">MORE+</a>
                </p>
            </div>
            <div class="activity-list">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                                <p>创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                                <i class="tag_end">已结束</i>
                            </a>
                        </div>
                        <div class="item_info">
                            <p class="text-ellipsis f16">创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                            <p class="f16">活动时间
                                <span>2017-09-21</span>
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                                <p>创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                                <i class="tag_end">已结束</i>
                            </a>
                        </div>
                        <div class="item_info">
                            <p class="text-ellipsis f16">创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                            <p class="f16">活动时间
                                <span>2017-09-21</span>
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                                <p>创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                                <i class="tag_end">已结束</i>
                            </a>
                        </div>
                        <div class="item_info">
                            <p class="text-ellipsis f16">创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                            <p class="f16">活动时间
                                <span>2017-09-21</span>
                            </p>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                                <p>创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                                <i class="tag_end">已结束</i>
                            </a>
                        </div>
                        <div class="item_info">
                            <p class="text-ellipsis f16">创业培训 | 从业20年的顶级职业经理告诉你，如何规避创业路上的各种雷坑</p>
                            <p class="f16">活动时间
                                <span>2017-09-21</span>
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="activity padder-v-md">
            <div class="activity-title">
                <p class="word">精彩瞬间</p>
                <p class="more">
                    <a href="/active.html">MORE+</a>
                </p>
            </div>
            <div class="activity-list">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                            </a>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                            </a>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                            </a>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6">
                        <div class="item_img_wrap">
                            <a href="">
                                <img src="../../static/img/download.jpg" alt="">
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<style scoped>
.activity {
    margin-bottom: 30px;
}
.padder-v-md {
    padding-top: 20px;
    padding-bottom: 20px;
}
.activity-list {
    height: auto;
}

.activity-title p.word {
    line-height: 40px;
    border-bottom: 2px solid #c8c9cc;
    font-size: 24px;
    margin: 0 0 10px;
    display: inline-block;
}

.activity-title p.more a {
    color: #98a6ad;
}

.activity-list {
    width: 100%;
}

.el-row {
    width: 100%;
}

.el-col {
    margin-top: 10px;
}

.item_img_wrap {
    display: block;
}

.item_img_wrap a {
    width: 100%;
    height: 100%;
    position: relative;
}

.item_img_wrap a img {
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    vertical-align: middle;
}

.item_img_wrap a p {
    position: absolute;
    top: 30%;
    font-size: 20px;
    color: #0ab394;
    padding: 0 20px;
    height: 2.8em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.item_img_wrap a .tag_end {
    padding: 5px 10px;
    background-color: #93959a;
    color: #fff;
    bottom: 0;
    right: 0;
    position: absolute;
    font-size: 14px;
    font-family: normal;
}

.item_info {
    background-color: #f7f7f7;
    padding: 10px;
}

.item_info p {
    margin: 0 0 10px;
}
</style>
<script>

</script>

