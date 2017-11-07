<template>
    <div>
        <el-row :gutter="10">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3" class="content_detail">
                <h1 class="b">{{office_detail.name}}</h1>
                <!-- <div style="">
                    <p>责任单位:{{ }}</p>
                    <p>单位地址{{ }}</p>
                </div> -->
                <p v-html="content" style="min-height:300px;"></p>
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
                    this.office_detail = res;
                    if ( res['detail']== null) {
                        this.content = "暂无数据"
                    } else {
                        this.content = res['detail']['content']
                    }
                });
            }
        }
    };
</script>

<style>
    .content_detail h1 {
        text-align: center;
        font-size: 22px;
        color: #0089e3;
        padding: 20px;
    }
    .content_detail div {
        width:100%;
        border-bottom:1px solid #eee;
        display:block;
        overflow:hidden;
    }
    .content_detail div p {
        float: left;
        line-height:30px;
        height:30px;
    }
    .content_detail div p:first-child {
        margin-right: 20px;
    }
</style>