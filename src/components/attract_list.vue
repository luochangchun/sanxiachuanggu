<template>
	<div>
		<el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
			<el-col :lg="14" :md="10" :sm="10" :xs="10" :offset="5">
				<el-form :model="tenancyForm" :rules="tenancyRules" ref="tenancyForm" label-width="120px" class="tenancyForm">
					<el-form-item class="tc f18 b">发布招商表</el-form-item>
					<el-form-item label="联系人" prop="name">
						<el-input type="text" v-model="tenancyForm.name"></el-input>
					</el-form-item>
					<el-form-item label="联系电话" prop="phone">
						<el-input type="tel" v-model="tenancyForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="楼盘名称" prop="building">
						<el-input type="text" v-model="tenancyForm.building"></el-input>
					</el-form-item>
					<el-form-item label="楼盘类型" prop="buildingType">
						<el-select v-model="tenancyForm.buildingType">
							<el-option :label="item['label']" :value="item['value']" v-for="(item, index) in options" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="面积（平米）" prop="area">
						<el-input type="tel" v-model="tenancyForm.area"></el-input>
					</el-form-item>
					<el-form-item label="地址" prop="address">
						<el-input type="text" v-model="tenancyForm.address"></el-input>
					</el-form-item>
					<el-form-item label="价格" prop="area">
						<el-input type="tel" v-model="tenancyForm.price"></el-input>
					</el-form-item>
					<el-form-item label="单位" prop="unit">
						<el-select v-model="tenancyForm.unit">
							<el-option :label="item['label']" :value="item['value']" v-for="(item, index) in units" :key="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否工位租赁" prop="cubicle">
						<el-radio-group v-model="tenancyForm.cubicle">
							<el-radio label="true">是</el-radio>
							<el-radio label="false">否</el-radio>
						</el-radio-group>
					</el-form-item>
					<!-- <vue-editor v-model="content"></vue-editor> -->
					<el-form-item>
						<el-button type="primary" @click="submitForm('tenancyForm')">发布</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>
<style scoped>
	.info {
		border-radius: 10px;
		line-height: 20px;
		padding: 10px;
		margin: 10px;
		background-color: #ffffff;
	}
</style>

<script>
	import api from "../axios/api.js";
	export default {
		data() {
			let validatePhone = (rule, value, callback) => {
				let re = /^1[34578]\d{9}$/;
				if (value === "" || !re.test(value) || value.length < 11) {
					callback(new Error("请输入正确手机号！"));
				} else {
					callback();
				}
			};
			let validateName = (rule, value, callback) => {
				let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
				if (
					value === "" ||
					!re.test(value) ||
					value.length < 2 ||
					value.length > 5
				) {
					callback(new Error("请输入联系人姓名"));
				} else {
					callback();
				}
			};
			return {
				htmlForEditor: null,
				options: [{
						value: "写字楼",
						label: "写字楼"
					},
					{
						value: "厂房",
						label: "厂房"
					}
				],
				units: [{
						value: "元/平米/天",
						label: "元/平米/天"
					},
					{
						value: "元/平米/月",
						label: "元/平米/月"
					},
					{
						value: "元/个/天",
						label: "元/个/天"
					},
					{
						value: "元/个/月",
						label: "元/个/月"
					},
					{
						value: "元/月",
						label: "元/月"
					}
				],
				tenancyForm: {
					name: "",
					phone: "",
					building: "",
					buildingType: "",
					area: "",
					address: "",
					price: "",
					unit: "",
					cubicle: "",
					detail: ""
				},
				tenancyRules: {
					name: [{
						required: true,
						validator: validateName,
						message: "请输入联系人",
						trigger: "blur"
					}],
					phone: [{
						required: true,
						validator: validatePhone,
						message: "请输入正确的手机号",
						trigger: "blur"
					}],
					building: [{
						required: true,
						message: "请输入楼盘名称",
						trigger: "blur"
					}],
					area: [{
						required: true,
						message: "请输入面积",
						trigger: "blur"
					}],
					address: [{
						required: true,
						message: "请输入地址/地段",
						trigger: "blur"
					}],
					price: [{
						required: true,
						message: "请输入每平米价格",
						trigger: "blur"
					}],
					unit: [{
						required: true,
						message: "请输入单位",
						trigger: "blur"
					}],
					cubicle: [{
						required: true,
						message: "请选择工位是否能租赁",
						trigger: "blur"
					}],
					detail: [{
						message: "请输入简介",
						trigger: "blur"
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						let url = "/qb/tenancy/apply";
						var params = {
							name: this.tenancyForm.name,
							contact: this.tenancyForm.contact,
							phone: this.tenancyForm.phone,
							building: this.tenancyForm.building,
							buildingType: this.tenancyForm.buildingType,
							area: this.tenancyForm.area,
							address: this.tenancyForm.address,
							price: this.tenancyForm.price,
							unit: this.tenancyForm.unit,
							cubicle: this.tenancyForm.cubicle,
							detail: "123",
						};
						api.Post("/qb/tenancy/apply", params).then(res => {
							console.log(res);
							if (res["suc"] == true) {
								this.$message("提交成功");
							} else {
								this.$message(res["msg"]);
							}
						})
					} else {
						// console.log("error submit!!");
						// return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	};
</script>
<style>
	.tenancyForm {
		width: 600px;
		background-color: #fff;
		padding: 30px;
		margin-left: auto;
		margin-right: auto;
	}
	.tenancyForm .tc {
		color: #06affe;
		border-bottom: 2px solid #06affe;
	}
	.tenancyForm .tc .el-form-item__content {
		margin-left: 0 !important;
	}
	h2 {
		color: #20a0ff;
		font-size: 16px;
		font-weight: 600;
		margin: 20px 10px;
	}
	.line {
		text-align: center;
	}
</style>