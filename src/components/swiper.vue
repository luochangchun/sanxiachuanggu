<template>
    <el-row :gutter="0">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-carousel :interval="5000" arrow="always" height="400px">
                <el-carousel-item v-for="item in imgArrs" :key="item.id">
                    <div :style="{backgroundImage: 'url(' +item.src+ ')'}" style="margin-bottom:0;height: 400px;background-size: cover;background-repeat: no-repeat;background-position: center center;"></div>
                </el-carousel-item>
            </el-carousel>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            imgArrs: [
                { "id": '1', "src": "../static/img/banner01.png" },
                { "id": '2', "src": "../static/img/banner02.png" },
                { "id": '3', "src": "../static/img/banner03.png" },
            ]
        }
    },
}
</script>
<style scoped>
.el-carousel__container img {
    width: 100%;
    height: 100%;
}
</style>

