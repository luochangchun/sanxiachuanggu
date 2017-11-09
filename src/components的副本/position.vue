<template>
    <div>
        <el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
            <el-col :lg="10" :md="10" :sm="10" :xs="10" :offset="7" style="background-color:#fff;padding:30px 25px 15px 0">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>

                    <el-form-item label="性别" prop="sex" >
                        <el-radio-group v-model="ruleForm.sex"style="width:50%;">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                        <el-button @click="submitForm('resumeForm')" style="background-color: #ddd;border:none;color:#fff;">简历上传</el-button>
                    </el-form-item>

                    <el-form-item>
                        <el-button @click="submitForm('ruleForm')" style="background-color: #f48100;border:none;color:#fff;">提交申请</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					number: '',
					email: '',
					sex: '',
					manage: '',

				},
				rules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					],
					number: [
						{ required: true, message: '请输入手机号', trigger: 'blur' }
					],
					email: [
						{ required: true, message: '请输入邮箱', trigger: 'blur' }
					],
					sex: [
						{ required: true, message: '请选择性别', trigger: 'change' }
					]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
		}
	}
</script>

<style>

</style>