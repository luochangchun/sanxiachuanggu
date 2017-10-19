<template>
    <div class="footer">
        <div class="container">
            <el-row :gutter="0" class="padder-v-md">
                <el-col :xs="24" :sm="24" :md="12" :lg="15" class="contact_info padder-v">
                    <p class="b white">加入我们 | 联系我们</p>
                    <p class="gray">公司地址：武汉市江汉经济开发区江旺路6号</p>
                    <p class="gray">客服电话：027-62432550</p>
                    <p class="gray">邮箱：marketing@hansap.com</p>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="9" class="contact_img">
                    <p class="b white tc" style="padding-bottom:10px">关注我们<span class="gray">（扫一扫）</span></p>
                    <img src="http://www.egowork.com/themes/egowork/img/egowork.jpg" class="center-block" style="width:130px;">
                </el-col>
            </el-row>
        </div>
        <div class="bg-dark">
            <div class="tc padder-v-xxs">
                <p class="m-b-xs m-t-xs">Copyright © 2017.Phoenix All rights reserved.鄂ICP备16001629号-1</p>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.footer {
    background-color: #333333;
}

.contact_info {
    /* width: 100%; */
    box-sizing: border-box;
}

.contact_info p {
    padding: 0 0 10px;
}

.contact_info p.gray, .contact_img span.gray{
    color: #8b8b8b;
}
.bg-dark {
    color: #666666;
    background-color: #222222;
}
</style>

