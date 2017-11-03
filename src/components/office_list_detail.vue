<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="content_detail">
                <h1>{{item.title}}</h1>
                <div>
                    <p>责任单位:{{ }}</p>
                    <p>单位地址{{ }}</p>
                </div>
                <p v-html="content"></p>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
	import api from "../axios/api.js";
	export default {
		data() {
			return {
				office_detail: "" //双创办公室详情
			};
		},
		created() {
			let id = this.$route.params.id;
			this.getOfficeDetail(id);
		},
		methods: {
			getOfficeDetail(id) {
				api.Get("/allies/" + id).then(res => {
					this.officeDetail = res;
					console.log(res);
				});
			}
		}
	};
</script>

<style>
    .content_detail h1{
        text-align: center;
        font-size:16px;
        color:#0089e3;
    }
    .content_detail div p{
        float:left;
    }
    .content_detail div p:first-child{
        margin-right: 20px;
    }
</style>