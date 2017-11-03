<template>
    <div class="activity_para">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>优秀讲师</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :xs="24" :sm="24" :md="10" :lg="8">
                    <div class="padder-v">
                        <img :src="tutorDetail['photo']" alt="" class="tutorImg">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="14" :lg="10">
                    <div class="padder-v">
                        <p class="f18 b">{{tutorDetail['name'] || "暂无数据"}}</p>
                        <hr class="line-w">
                        <p class="clearfix"><span class="l" style="width:70px;">个人简介：</span><span class="l" style="width:400px">{{tutorDetail['intro'] || "暂无数据"}} </span></p>
                        <p class="clearfix"><span class="l" style="width:70px;">关注领域：</span><span class="l" style="width:400px">{{tutorDetail['talent'] || "暂无数据"}} </span></p>
                        <p class="clearfix"><span class="l" style="width:70px;">所获荣誉：</span><span class="l" style="width:400px">{{tutorDetail['cert'] || "暂无数据"}}</span></p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="10" :lg="8">
                    <div class="padder-v"></div>
                </el-col>
                <!--<el-col :xs="24" :sm="24" :md="14" :lg="10" style="padding-top:20px;border-top: 1px solid #dddddd;">-->
                    <!--<h1 class="f20">问题留言:</h1>-->
                    <!--<div class="padder-v">-->
                        <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">-->
                            <!--<el-form-item label="" prop="desc">-->
                                <!--<el-input type="textarea" :rows="7" placeholder="有什么问题，你在这里提问"></el-input>-->
                            <!--</el-form-item>-->
                            <!--<el-form-item>-->
                                <!--<el-button type="primary" class="tutorBtn r">提交问题</el-button>-->
                            <!--</el-form-item>``-->
                        <!--</el-form>-->
                    <!--</div>-->
                <!--</el-col>-->
            </el-row>
        </div>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                tutorDetail: '',
            }
        },
        created() {
            let id = this.$route.params.id
            this.getTutor(id);
        },
        methods: {
            getTutor(id) {
                api.Get('/indie/' + id)
                    .then(res => {
                        console.log(res);
                        this.tutorDetail = res
                    });
            }
        }
    }
</script>

<style scoped>
    .activity_para {
        height: auto;
        min-height: 100%;
    }
    .activity_para p {
        margin: 0 0 10px;
        line-height: 24px;
    }
    .activity_para h1,
    .activity_para p {
        color: #666;
    }
    .tutorImg {
        width: 220px;
        height: 220px;
        border-radius: 50%;
    }
    .line-w {
        margin-top: 5px;
        margin-bottom: 10px;
        border: 0;
        border-top: 2px solid #eee;
        margin-right: 30%;
    }
    .wrapper {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 15px;
    }
    .tutorBtn {
        width: 100px;
        background-color: #f48100;
        border-color: #f48100;
    }
</style>
