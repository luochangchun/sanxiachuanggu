<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button @click="submitForm('ruleForm')" style="background-color: #f48100;border:none;color:#fff;">确定</el-button>
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

				},
				rules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					],
					number: [
						{ required: true, message: '请输入手机号', trigger: 'blur' }
					],
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