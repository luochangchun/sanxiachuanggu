<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
                    <el-form-item label="入驻孵化器类型" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择入驻孵化器类型">
                            <el-option label="类型一" value="shanghai"></el-option>
                            <el-option label="类型二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="公司名称" prop="designation">
                        <el-input v-model="ruleForm.designation"></el-input>
                    </el-form-item>

                    <el-form-item label="团队人数" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>

                    <el-form-item label="成立情况" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="筹建"></el-radio>
                            <el-radio label="初建"></el-radio>
                            <el-radio label="2年以内"></el-radio>
                            <el-radio label="2年以上"></el-radio>
                            <el-radio label="是否毕业3年内大学生"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="公司经营范围" prop="manage">
                        <el-input v-model="ruleForm.manage"></el-input>
                    </el-form-item>

                    <el-form-item label="所需办公面积/工位" prop="need">
                        <el-input v-model="ruleForm.need"></el-input>
                    </el-form-item>

                    <el-form-item label="联系人" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="联系电话" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
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
					region: '',
					designation: '',
					number: '',
					resource: '',
					manage: '',
					need:'',
					name:'',
					phone: ''
				},
				rules: {
					region: [
						{ required: true, message: '请选择入驻孵化器类型', trigger: 'change' }
					],
					designation: [
						{ required: true, message: '请输入公司名称', trigger: 'blur' }
                    ],
					number: [
						{ required: true, message: '请输入团队人数', trigger: 'blur' }
					],
					resource: [
						{ required: true, message: '请选择成立情况', trigger: 'change' }
					],
					manage: [
						{ required: true, message: '请输入公司经营范围', trigger: 'blur' }
					],
					need: [
						{ required: true, message: '请输入所需办公面积/工位', trigger: 'blur' }
					],
					name: [
						{ required: true, message: '请输入联系人', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '请输入联系电话', trigger: 'blur' }
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