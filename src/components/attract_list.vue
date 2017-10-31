<template>
    <div>
        <el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
            <el-col :lg="14" :md="10" :sm="10" :xs="10" :offset="5" style="background-color:#fff;padding:30px 25px 15px 10px">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <h2>供求和类型</h2>
                    <el-form-item label="供求" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="出租"></el-radio>
                            <el-radio label="求租"></el-radio>
                            <el-radio label="出售"></el-radio>
                            <el-radio label="求购"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="类型" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <h2>基础信息</h2>
                    <el-form-item label="楼盘名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="所在区域" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="请选择区域" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker type="fixed-time" placeholder="请选择商圈" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>

                    <el-form-item label="地段" prop="name">
                        <el-col :span="10">
                            <el-form-item prop="date1">
                                <el-input type="date" v-model="ruleForm.date1" style="width: 100%;"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">附近的</el-col>
                        <el-col :span="10">
                            <el-form-item prop="date2">
                                <el-input type="fixed-time" placeholder="请选择商圈" v-model="ruleForm.date2" style="width: 100%;"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">位置</el-col>
                    </el-form-item>


                    <el-form-item label="面积" prop="name">
                        <el-col :span="10">
                            <el-form-item prop="date1">
                                <el-input type="date" v-model="ruleForm.date1" style="width: 100%;"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">平米</el-col>
                    </el-form-item>

                    <el-form-item label="价格" prop="name">
                        <el-col :span="12">
                            <el-form-item prop="date1">
                                <el-input type="date" placeholder="面议" v-model="ruleForm.date1" style="width: 100%;"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="请选择单位" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>

                    <h2>详细信息</h2>
                    <el-form-item label="标题" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="出租写字楼"></el-input>
                    </el-form-item>

                    <el-form-item label="补充描述" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>

                    <el-form-item label="上传图片" prop="name">
                        <el-input type="file" v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <h2>详细信息</h2>
                    <el-form-item label="联系人" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="联系电话" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="QQ" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name: [
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					region: [
						{ required: true, message: '请选择活动区域', trigger: 'change' }
					],
					date1: [
						{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }
					],
					date2: [
						{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }
					],
					type: [
						{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
					],
					resource: [
						{ required: true, message: '请选择活动资源', trigger: 'change' }
					],
					desc: [
						{ required: true, message: '请填写活动形式', trigger: 'blur' }
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
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>
<style>
    h2{
        color:#20a0ff;
        font-size: 16px;
        font-weight: 600;
        margin:20px 10px;
    }
    .line{
        text-align: center;
    }
</style>