<template>
    <div>
        <el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
            <div class="container min650">
                <el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#fff;padding:30px 25px 15px 0">
                    <p class="tc b f20">招聘申请表</p>
                </el-col>
                <el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#fff;padding:0 25px 15px 0">
                    <el-row :gutter="10">
                        <el-col :lg="14" :md="14" :sm="14" :xs="14" :offset="5">
                            <el-form :model="employmentForm" :rules="employmentRules" ref="employmentForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="标题" prop="title">
                                    <el-input v-model="employmentForm.title"></el-input>
                                </el-form-item>

                                <!--<el-form-item label="公司名称" prop="name">-->
                                    <!--<el-input v-model="employmentForm.name"></el-input>-->
                                <!--</el-form-item>-->

                                <el-form-item label="职位" prop="job">
                                    <el-input v-model="employmentForm.job"></el-input>
                                </el-form-item>

                                <!--<el-form-item label="联系人" prop="author">-->
                                    <!--<el-input v-model="employmentForm.author"></el-input>-->
                                <!--</el-form-item>-->

                                <el-form-item label="最低薪资" prop="salaryMin" style="display:inline-block">
                                    <el-col :span="24">
                                        <el-input v-model="employmentForm.salaryMin"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="最高薪资" prop="salaryMax" style="display:inline-block">
                                    <el-col :span="24">
                                        <el-input v-model="employmentForm.salaryMax"></el-input>
                                    </el-col>
                                </el-form-item>

                                <el-form-item label="招聘人数" prop="demand">
                                    <el-input v-model="employmentForm.demand"></el-input>
                                </el-form-item>

                                <el-form-item label="学历要求" prop="edu">
                                    <el-input v-model="employmentForm.edu" placeholder="不限"></el-input>
                                </el-form-item>

                                <el-form-item label="工作经验" prop="exp">
                                    <el-radio-group v-model="employmentForm.exp">
                                        <el-radio label="不限"></el-radio>
                                        <el-radio label="无"></el-radio>
                                        <el-radio label="1~3年"></el-radio>
                                        <el-radio label="3~5年"></el-radio>
                                        <el-radio label="5~10年"></el-radio>
                                        <el-radio label="10年以上"></el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <el-form-item label="公司简介" prop="content">
                                    <el-input type="textarea" v-model="employmentForm.content"></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button @click="employForm('employmentForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>
                                    <el-button @click="resetForm('employmentForm')">取消</el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	export default {
		data() {
			//demand正整数
			let validateDemand = (rule, value, callback) => {
				let re = /^[0-9]*[1-9][0-9]*$/;
				if (value === "" || !re.test(value) || value.length < 1) {
					callback(new Error("请输入正确招聘人数！"));
				} else {
					callback();
				}
			};
            //salaryMin
			let validateSalaryMin = (rule, value, callback) => {
				let re = /^[0-9]*[1-9][0-9]*$/;
				if (value === "" || !re.test(value) || value.length < 3) {
					callback(new Error("请输入正确最低工资！"));
				} else {
					callback();
				}
			};
			//salaryMax
			let validateSalaryMax = (rule, value, callback) => {
				let re = /^[0-9]*[1-9][0-9]*$/;
				if (value === "" || !re.test(value) || value.length < 3) {
					callback(new Error("请输入正确最高工资！"));
				} else {
					callback();
				}
			};
			return {
				checked: 'true',
				employmentForm: {
					title: '',
					job: '',
					salaryMin: '',
					salaryMax: '',
					demand: '',
					edu: '',
					exp: '',
					content: ''
				},
				employmentRules: {
					title: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
                    }],
					job: [
						{
						required: true,
						message: '请输入公司招聘岗位',
						trigger: 'blur'
					},
						{
							min: 2,
							max: 40,
							message: '长度在 2 到 40 个字符',
							trigger: 'blur'
						}
					],
					salaryMin: [{
						required: true,
						validator: validateSalaryMax,
						message: '请输入最低薪资',
						trigger: 'blur'
					}],
					salaryMax: [{
						required: true,
						validator: validateSalaryMax,
						message: '请输入最高薪资',
						trigger: 'blur'
					}],
					demand: [{
						required: true,
						validator: validateDemand,
						message: '请输入招聘人数',
						trigger: 'blur'
					}],
					edu: [{
						required: true,
						message: '请输入学历要求',
						trigger: 'blur'
					}],
					exp: [{
						required: true,
						message: '请输入工作经验',
						trigger: 'change'
					}],
					content: [{
						required: true,
						message: '请输入公司简介',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			employForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
//						let id = this.$route.params.id;
						var createTime = new Date();
						var createAt = Number(createTime);
						var params = {
//							"talent": id,
							"title": this.employmentForm.title,
							"job": this.employmentForm.job,
							"salaryMin": this.employmentForm.salaryMin,
							"salaryMax": this.employmentForm.salaryMax,
							"demand": this.employmentForm.demand,
							"edu": this.employmentForm.edu,
							"exp": this.employmentForm.exp,
							"content": this.employmentForm.content
						};
						api.Post('/recruit', params).then(res => {
							console.log(res);
							if (res["suc"] == true) {
								this.$message('招聘信息发布成功');
							} else {
								this.$message(res["msg"]);
							}
						});
					}else {
						console.log("发布难题失败!");
						return false;
					    }
					});
				},
		}
	}
</script>

<style>

</style>