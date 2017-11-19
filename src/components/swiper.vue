<template>
    <el-row :gutter="0">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <el-carousel :interval="10000" arrow="always" height="400px">
                <el-carousel-item v-for="item in imgArrs" :key="item.id">
                    <div :style="{backgroundImage: 'url(' +item.src+ ')'}" style="margin-bottom:0;height: 400px;background-size: cover;background-repeat: no-repeat;background-position: center center;overflow:hidden;">
                        <img :src="item.b1" alt="" style="width:auto;height:auto;margin-top:100px;margin-bottom:50px;">
                        <img :src="item.b2" alt="" style="width:auto;height:auto">
                    </div>
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
                { "id": '1', "src": "../static/img/banner01.jpg" ,"b1":"../static/img/b1-1.png","b2":"../static/img/b1-2.png" },
                { "id": '2', "src": "../static/img/banner02.jpg" ,"b1":"../static/img/b2-1.png","b2":"../static/img/b2-2.png"},
                { "id": '3', "src": "../static/img/banner03.jpg" ,"b1":"../static/img/b3-1.png","b2":"../static/img/b3-2.png"},
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

