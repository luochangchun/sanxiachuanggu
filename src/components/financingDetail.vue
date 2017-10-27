<template>
    <div style="width:100%;background-color:#ececec;">
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="object_detail_head">
                    <h2>必约车车旅游用车</h2>
                    <div></div>
                </div>
                <div class="column">
                    <div class="column_title">我们是谁？</div>
                    <div class="column_content">
                        <div class="creative_main">
                            <h3>创始人</h3>
                            <div class="creative_main_info">
                                <table>
                                    <tbody><tr>
                                        <td><span class="txt">姓名：</span><label>谢联峻</label></td>
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
                                            <div>谢联峻，1975年出生于青海省海北藏族自治州。
                                                1997年获得北京交通大学自动控制专业学士学位，2000年获得北京交通大学信息工程专业硕士学位。
                                                同年进入深圳华为技术有限公司，从事技术支持和市场销售工作。2008年派往南非，负责海外市场拓展。
                                                2009年回国，在中国移动负责大客户拓展。
                                                2010年自主创业，从事过互联网和IT行业、快消品行业。
                                                2016年创办必约车车。</div>
                                        </td>
                                    </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column orange">
                    <div class="column_title">我们在做什么？</div>
                    <div class="column_content creative_main">必约车车用共享经济模式整合旅游资源，为用户提供便捷、安全的境内外旅游包车及司导（司机＋导游）服务，并通过完善的服务保障体系保证用户的出行满意度。我们在平台上发布旅游用车线路，用户下单后，我们将订单分配给加盟司机。用户获得安全便捷的旅游服务，司导获得经济收益。</div>
                </div>
                <div class="column green">
                    <div class="column_title">我们做得怎么样？</div>
                    <div class="column_content creative_main" style="color:#000;">公司以成都为公司总部，目前已完成新疆、西藏、青海、贵州、广西、海南等10个境内区域及马来西亚、泰国、日本等5个境外区域落地。平台注册司机境内6000+，境外2800+，2016年的销售额为400万，预计2017全年可达1200万，2018年可达4000万。<br>团队主要创始成员来自华为、58、用友等IT及互联网知名企业，长期从事IT、互联网市场及管理工作，具备丰富的行业经验。<br>项目注重知识产权保护，自主开发APP及CRM管理系统，取得2项软著，并申请了相关商标。<br></div>
                </div>
                <div class="column red" style="margin-bottom: 50px;">
                    <div class="column_title">为什么投资我们？</div>
                    <div class="column_content creative_main" style="color:#000;">专注内容开发，有实力的运营团队。具备成功的运营经验。<br>融资主要用于团队建设，IT支撑系统升级和市场拓展。<br>力争三年内进入国内旅游用车第一阵营，年营收收入1亿以上。</div>
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
//    import api from '../axios/api.js'
//    export default {
//        created() {
//            let id = this.$route.params.id;
//            this.getTutor(id);
//        },
//        methods: {
//            getTutor(id) {
//                api.Get('/finance/' + id)
//                    .then(res => {
//                        console.log(res);
//                    });
//            }
//        }
//    }
</script>
<style>
    .object_detail_head{
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
    .creative_main{
        margin-bottom: 10px;
    }
    .creative_main h3{
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
        color:#000;
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
    .creative_main{
        background-color: #fff;
        border: 1px solid #ddd;
        border-top: 0;
        padding: 16px;
        border-radius:4px;
        font-size: 14px;
        line-height: 160%;
    }
    .orange .column_title{
        background-color: #ffefda;
        border-color: #f2cdad;
    }
    .green .column_title{
        background-color: #ddffd1;
        border-color: #b7e1a9;
        color:#000;
    }
    .red .column_title{
        background-color: #ffe9e9;
        border-color: #f8c4c4;
        color: #000;
    }
</style>