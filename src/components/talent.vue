<template>
    <div class="talent">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <img src="../../static/img/talent_banner01.png" alt="">
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="background-color:#eeeeee;padding:20px 0;">
                <div class="container">
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

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
