<template>
    <div style="width:100%;background-color:#ececec;">
        <div class="container">
            <el-row :gutter="10">
                <el-col :lg="24" :md="24" :sm="24" :xs="24">
                    <div class="object_detail_head">
                        <h2>{{financeDetail['name']}}</h2>
                        <div></div>
                    </div>
                    <div class="column">
                        <div class="column_title">我们是谁？</div>
                        <div class="column_content">
                            <div class="creative_main">
                                <h3>创始人</h3>
                                <div class="creative_main_info">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span class="txt">姓名：</span><label>{{financeDetail['founder']}}</label></td>
                                                <td><span class="txt">出生年月：</span><label>1975-07-10</label></td>
                                                <td><span class="txt">投股比例：</span><label>80%</label></td>
                                            </tr>
                                            <tr>
                                                <td><span class="txt">最高学历：</span><label>研究生</label></td>
                                                <td><span class="txt">毕业院校：</span><label>北京交通大学</label></td>
                                                <td><span class="txt">专业：</span><label>交通信息工程</label></td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"><span class="txt">个人简历：</span>
                                                    <div>{{financeDetail['intro']}}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column orange">
                        <div class="column_title">我们在做什么？</div>
                        <div class="column_content creative_main">{{financeDetail['what']}}</div>
                    </div>
                    <div class="column green">
                        <div class="column_title">我们做得怎么样？</div>
                        <div class="column_content creative_main" style="color:#000;">{{financeDetail['how']}}</div>
                    </div>
                    <div class="column red" style="margin-bottom: 50px;">
                        <div class="column_title">为什么投资我们？</div>
                        <div class="column_content creative_main" style="color:#000;">{{financeDetail['why']}}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        data() {
            return {
                financeDetail: '',
            }
        },
        created() {
            let id = this.$route.params.id;
            this.getFinanceItem(id);
        },
        methods: {
            getFinanceItem(id) {
                api.Get('/finance/' + id)
                    .then(res => {
                        this.financeDetail = res;
                    });
            }
        }
    }
</script>

<style>
    .object_detail_head {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .object_detail_head h2 {
        font-size: 25px;
        font-weight: normal;
    }
    .object_detail_head div {
        color: #f00;
        margin-top: 10px;
        background-color: #ffe2b5;
        padding: 6px 10px;
        border: 1px solid #fff;
        border-radius: 4px;
    }
    .column_title {
        height: 58px;
        line-height: 58px;
        border: 1px solid #ddd;
        background-color: #fafafa;
        border-radius: 3px 3px 0px 0px;
        font-size: 18px;
        text-indent: 20px;
    }
    .creative_main {
        margin-bottom: 10px;
    }
    .creative_main h3 {
        font-size: 18px;
        font-weight: normal;
        border-bottom: 1px solid #fcc;
        padding: 10px;
        color: #e00;
    }
    .creative_main_info {
        padding: 6px 10px;
    }
    .creative_main table td {
        padding: 4px 0;
        font-size: 14px;
        color: #000;
    }
    td {
        text-align: left;
        font-weight: normal;
    }
    .creative_main .txt {
        float: left;
        color: #999;
        display: inline-block;
        width: 70px;
        text-align: right;
    }
    .creative_main {
        background-color: #fff;
        border: 1px solid #ddd;
        border-top: 0;
        padding: 16px;
        border-radius: 4px;
        font-size: 14px;
        line-height: 160%;
    }
    .orange .column_title {
        background-color: #ffefda;
        border-color: #f2cdad;
    }
    .green .column_title {
        background-color: #ddffd1;
        border-color: #b7e1a9;
        color: #000;
    }
    .red .column_title {
        background-color: #ffe9e9;
        border-color: #f8c4c4;
        color: #000;
    }
</style>