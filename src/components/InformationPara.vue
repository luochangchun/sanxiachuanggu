<template>
    <div class="news padder-v-md">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="12" :offset="3">
                    <div class="text-center">
                        <p class="text-xxxl">省科技厅关于开展2017年省级众创空间认定工作的通知</p>
                        <p>
                            <span>时间：2017-10-11</span>
                        </p>
                    </div>
                    <p>为进一步指导和推动全省各级各类众创空间科学构建、健康发展，在全社会营造大众创业、万众创新的良好生态环境，省科技厅现决定开展2017年省级众创空间认定工作，现就有关事项通知如下：</p>
                    <p>为进一步指导和推动全省各级各类众创空间科学构建、健康发展，在全社会营造大众创业、万众创新的良好生态环境，省科技厅现决定开展2017年省级众创空间认定工作，现就有关事项通知如下：</p>
                    <p>为进一步指导和推动全省各级各类众创空间科学构建、健康发展，在全社会营造大众创业、万众创新的良好生态环境，省科技厅现决定开展2017年省级众创空间认定工作，现就有关事项通知如下：</p>
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
                                        <span class="pos-abt inline padder-xs padder-v-xxs bg-grey text-white" style="bottom:0px; right:10px;"> 已结束 </span>
                                        <span class="black-box block"></span>
                                    </span>
                                </a>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.font-bold {
    font-weight: 700;
}
.text-md {
    font-size: 16px;
}
.pos-abt {
    position: absolute;
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



