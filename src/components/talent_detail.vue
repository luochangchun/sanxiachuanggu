<template>
    <div>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="background-color:#eeeeee;padding:15px 0;">
                <div class="container" style="padding-top:20px;">
                    <div class="talent_title">
                        <div class="pos_base_info">
                            <h2>{{employment['title']}}</h2>
                            <h1>{{employment['salaryMin']}}<span>-</span>{{employment['salaryMax']}}<span>元/月</span></h1>
                        </div>
                        <h3>{{employment['job']}}</h3>
                        <div class="pos_base_condition">
                            <span class="item_condition pad_left_none">{{employment['demand']}}</span>
                            <span class="item_condition">{{employment['edu']}}</span>
                            <span class="item_condition border_right_None">{{employment['exp']}}</span>
                        </div>
                        <router-link :to="{name:'position', params: {type:'position'}}">
                            <button>申请职位</button>
                        </router-link>
                    </div>
                    <div class="item_con">
                        <h3 class="title">职位描述</h3>
                        <p style="margin-bottom:10px;">岗位职责:</p>
                        <ol class="posDes">
                            <li v-for="(item , index) in detail" :key="index"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item['description']}}</li>
                        </ol>
                    </div>
                    <div class="item_con">
                        <h3 class="title">公司简介:</h3>
                        <p>{{item['content']}}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>



<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	export default {
		data() {
			return {
				checked: 'true',
				employment: '',
				detail: ''
			};
		},
		methods: {
			talentDetail(id) {
					api.Get('/recruit/' + id)
						.then(res => {
							this.title = res['title'];
							this.job = res['job'];
							this.salaryMin = res['salaryMin'];
							this.salaryMax = res['salaryMax'];
							this.demand = res['demand'];
							this.edu = res['edu'];
						})
				},

			},
	}
</script>

<style>
    .talent_title,.item_con{
        background-color:#fff;
        padding:20px 30px;
    }
    .pos_base_info {
        margin-top: 35px;
        overflow: hidden;
    }
    .pos_base_info h1 span:last-child{
        font-size: 18px;
        font-weight: 400;
        position: relative;
        top: -2px;
        left: 0;
        margin-left: 8px;
    }
    .talent_title div h2{
        float:left;
        font-size:28px;
        color: #2e343b;
        font-weight: 700;
    }
    .talent_title div h1{
        float:right;
        font-size:38px;
        color: #ff552e;
        font-weight: 700;
    }
    .talent_title h3{
        line-height: 1;
        display: inline-block;
        width: 100%;
        font-size: 20px;
        margin-top: 18px;
        color: #2e343b;
        font-weight: normal;
        border-bottom: 1px solid #ddd;
        padding-bottom:20px;
    }
    .talent_title button{
        margin-top: 30px;
        width: 300px;
        margin-right: 10px;
        height: 54px;
        line-height: 54px;
        padding: 0;
        vertical-align: middle;
        color: #fff;
        background: #ff552e;
        border:none;
        border-radius:5px;
        font-size:20px;
        /*margin-bottom: 20px;*/
    }
    .pos_base_condition {
        width: 100%;
        margin-top: 30px;
    }
    .pos_base_condition .pad_left_none {
        padding-left: 0;
        margin-left: -10px;
    }
    .pos_base_condition,.item_condition {
        font-size: 14px;
        padding: 0 10px;
        display: inline-block;
        border-right: 1px solid #e9e7e7;
    }
    .pos_base_condition,.border_right_None {
        border-right: none;
    }
    .item_con {
        margin-top: 10px;
        background: #fff;
        padding-bottom: 50px;
    }
    .title {
        font-size: 20px;
        color: #333;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .posDes{
        font-size: 14px;
        color: #2e343b;
        line-height: 35px;
        margin: 0 0 32px;
        overflow: hidden;
        font-weight: normal;
    }
    .item_con p{
        font-size: 14px;
        color: #2e343b;
        line-height: 35px;
        margin: 0 0 32px;
        overflow: hidden;
        font-weight: normal;
    }
</style>