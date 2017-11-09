<template>
    <div class="container">
        <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24" class="content_detail">
                <h1 class="b">{{office_detail.name}}</h1>
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