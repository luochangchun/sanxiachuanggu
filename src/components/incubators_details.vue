<template>
    <div class="incubators_details">
        <div class="container">
            <!--双创空间详情页-->
            <el-row :gutter="10" style="padding-bottom: 50px;">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <el-row :gutter="10" style="border:1px solid #ddd;padding:15px;background-color: #fff">
                        <el-col :lg="12" :md="12" :sm="24" :xs="24">
                            <div class="details-img">
                                <el-carousel :interval="500000" arrow="never" height="240px">
                                    <el-carousel-item v-for="(item, index) in photos" :key="index">
                                        <img :src="item.uri">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </el-col>
                        <el-col :lg="11" :md="11" :sm="24" :xs="24" :offset="1" class="details-text">
                            <h6>{{incubator['name']}}</h6>
                            <p>地址:{{incubator['address']}}</p>
                            <p>级别:{{incubator['level']}}</p>
                            <p>联系方式:{{incubator['contact']}} {{incubator['phone']}}</p>
                            <router-link v-if="incubator['categoryId']==2" :to="{ name: 'enter', params: { id: incubator['id']}}">申请入驻</router-link>
                            <!-- 跳到工位申请表单 -->
                            <router-link v-if="incubator['categoryId']==3" :to="{ name: 'station', params: { id: incubator['id']}}">申请入驻</router-link>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" class="incubators_details_text">
                        <div class="i01">
                            <h1 class="i_tit i01_tit">空间展示</h1>
                            <div class="incubators_img clearfix">
                                <el-col :lg="8" :md="8" :sm="24" :xs="24" v-for="(item, index) in photos" :key="index" v-if="index < 3">
                                    <img :src="item.uri">
                                </el-col>
                            </div>
                        </div>
                        <div class="i02">
                            <h1 class="i_tit i02_tit">空间招商</h1>
                            <div class="incubators_intro clearfix">
                                <p class="mr130"><span class="b">园区面积：</span>24000m2 </p>
                                <p class="mr130"><span class="b">已使用面积：</span>24000m2 </p>
                                <p><span class="b">待招商面积：</span>24000m2 </p>
                                <p><span class="b">园区特色：</span>孵化器通过提供研发、试制、经营的场地和共享设施，以及政策、法律、财务、投融资、企业管理、人力资源、市场推广和加速成长等方面的孵企速成长。</p>
                            </div>
                        </div>
                        <div class="i03">
                            <h1 class="i_tit i03_tit">空间简介</h1>
                            <div class="incubators_detail clearfix">
                                <p v-html="content"></p>
                            </div>
                        </div>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                incubator: '',
                photos: '',
                content: ''
            }
        },
        created() {
            let id = this.$route.params.id
            this.getIncubator(id);
        },
        methods: {
            getIncubator(id) {
                api.Get('/qb/' + id)
                    .then(res => {
                        this.incubator = res['incubator'];
                        this.photos = res['photos']
                        if (!res['incubator']['detail']) {
                            this.content = "暂无数据"
                        } else {
                            this.content = res['incubator']['detail']['content'];
                        }
                    });
            }
        }
    }
</script>

<style scoped>
    .incubators_details {
        background-color: #f1f1f1;
        padding-top: 40px;
    }
    .details-img img {
        width: 100%;
        height: 100%;
    }
    .details-title-img img {
        width: 100%;
        border: 1px solid #ddd;
    }
    img {
        width: 100%;
        display: block;
        margin-right: auto;
        margin-left: auto;
        vertical-align: middle;
    }
    .details-text h6 {
        font-size: 26px;
        color: #666;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .details-text p {
        line-height: 200%;
    }
    .details-text a {
        background-color: #f48100;
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-top: 30px;
    }
    .incubators_details_text {
        margin-top: 40px;
    }
    /* i01 */
    .i_tit {
        height: 20px;
        text-indent: 25px;
        color: #333;
    }
    .i01_tit {
        text-indent: 26px;
        background: url(../../static/img/i01.jpg) no-repeat 0 center;
        background-size: contain;
    }
    .i02_tit {
        background: url(../../static/img/i02.jpg) no-repeat 0 center;
        background-size: contain;
    }
    .i03_tit {
        text-indent: 28px;
        background: url(../../static/img/i03.jpg) no-repeat 0 center;
        background-size: contain;
    }
    .incubators_img,
    .incubators_detail,
    .incubators_intro {
        background-color: #fff;
        padding: 20px 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .incubators_img {
        padding: 20px 10px;
    }
    .incubators_img img {
        max-height: 190px;
    }
    .incubators_intro p {
        display: inline-block;
        color: #333;
        margin-bottom: 12px;
    }
    .incubators_intro p.mr130 {
        margin-right: 130px;
    }
</style>