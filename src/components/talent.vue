<template>
    <div class="talent">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <img src="../../static/img/talent_banner01.png" alt="">
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="background-color:#eeeeee;padding:15px 0;">
                <div class="container" style="padding-top:20px;">
                    <el-form class="talent_form">
                        <el-form-item>
                            <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                <el-form-item>
                                    <el-input placeholder="请输入职位关键词：如java工程师"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                <el-button type="primary">搜索</el-button>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="container">
                    <div class="details_tag">
                        <el-row v-for="(item, index) in 3" :key="index" class="multi">
                            <el-col :span="2">
                                <p class="class_name">职位类别:</p>
                            </el-col>
                            <el-col :span="20">
                                <ul class="Multiple_choices" :class="[multi01 ? 'h_auto' : 'h_fixed']">
                                    <a href="">全部</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">全部</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">全部</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                    <a href="">软件工程师</a>
                                    <a href="">JAVA</a>
                                </ul>
                            </el-col>
                            <el-col :span="1" class="tc" style="margin-top:8px;">
                                <i class="el-icon-arrow-down more_tag" @click="showMore(index)"></i>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="container">
                    <div class="talent_list">
                        <el-row class="talent_top">
                            <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                <p>职位名称</p>
                            </el-col>
                            <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                <p>公司名称</p>
                            </el-col>
                            <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                <p>期望薪资</p>
                            </el-col>
                            <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                <p>发布日期</p>
                            </el-col>
                        </el-row>
                        <a href="javascript:;" v-for="{item,index} in 4" :key="index" class="talent_item">
                            <el-row>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <p class="blue">JAVA</p>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <p>阿拉伯</p>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <p>1000</p>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <p class="orange">1天</p>
                                </el-col>
                            </el-row>
                        </a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <div class="tc mb35">
                    <el-pagination layout="prev, pager, next" :total="50">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                multi01: false
            };
        },
        created() {
            this.getTalent()
        },
        methods: {
            showMore() {
                if (this.multi01) {
                    this.multi01 = false;
                } else {
                    this.multi01 = true;
                }
            },
            getTalent() {
                api.Get('/pub/recruit')
                    .then(res => {
                        // this.investor = res['investor'];
                        // this.financing = res['financing'];
                    });
            },
        }
    };
</script>
