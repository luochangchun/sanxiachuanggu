<template>
    <div class="register">
        <div class="container" style="margin-top:100px;margin-bottom:200px;">
            <el-tabs v-model="form.activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="企业注册" name="first">
                    <div class="register_wrap">
                        <el-form label-width="120px" class="register_form">
                            <el-form-item label="组织机构代码:">
                                <el-input  placeholder="请输入正数第9位到倒数第2位之间的9位"></el-input>
                            </el-form-item>
                            <el-form-item label="企业名称:">
                                <el-input placeholder="请输入企业名称"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人:">
                                <el-input placeholder="请输入联系人姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码:">
                                <el-input placeholder="请输入联系人手机号码"></el-input>
                            </el-form-item>
                            <el-row :gutter="10">
                                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                    <el-form-item label="验证码:">
                                        <el-input placeholder="请输入短信验证码"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <el-button type="primary">获取验证码</el-button>
                                </el-col>
                            </el-row>
                            <el-form-item label="登录密码:">
                                <el-input placeholder="密码长度为6-16位，可由字母和数字组成，区分大小写"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码:">
                                <el-input placeholder="确认密码必须和登录密码一致"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary">立即注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="个人注册" name="second">
                    <div class="register_wrap">
                         <el-form label-width="80px" class="register_form">
                            <el-form-item label="手机号码:">
                                <el-input placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-row :gutter="10">
                                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                    <el-form-item label="验证码:">
                                        <el-input placeholder="请输入短信验证码"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="8" :sm="6" :md="6" :lg="6">
                                    <el-button type="primary">获取验证码</el-button>
                                </el-col>
                            </el-row>
                            <el-form-item label="登录密码:">
                                <el-input placeholder="密码长度为6-16位，可由字母和数字组成，区分大小写"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码:">
                                <el-input placeholder="确认密码必须和登录密码一致"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary">立即注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                activeName2: 'first'
            }
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
