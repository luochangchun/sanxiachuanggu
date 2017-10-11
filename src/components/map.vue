<template>
    <div class="amap-page-container" ref="allmap">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
            <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
            <el-amap-info-window v-for="window in windows" :position="window.position" :visible="window.visible" :content="window.content"></el-amap-info-window>
        </el-amap>
    </div>
</template>
<script>
export default {
    name: 'amap-page',
    data() {
        return {
            zoom: 13,
            center: [111.3163, 30.722593],
            markers: [],
            windows: []

        };
    },
    mounted() {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.$refs.allmap.style.height = h + 'px';

        let markers = [];
        let windows = [];
        let num = 7;
        let position_arrs = [
            {
                id: 0,
                "longitude": '111.33417',
                "latitude": '30.71303',
                "phone": "123",
                "text": "715文化创意产业园"
            },
            {
                id: 1,
                "longitude": '111.301608',
                "latitude": '30.70677',
                "phone": "123",
                "text": "三峡总部创客空间"
            },
            {
                id: 2,
                "longitude": '111.297397',
                "latitude": '30.701836',
                "phone": "123",
                "text": "东升创客空间"
            },
            {
                id: 3,
                "longitude": '111.323025',
                "latitude": '30.735136',
                "phone": "123",
                "text": "住邦科技园"
            },
            {
                id: 4,
                "longitude": '111.300478',
                "latitude": '30.694102',
                "phone": "123",
                "text": "创创社区众创空间"
            },
            {
                id: 5,
                "longitude": '111.33417',
                "latitude": '30.733175',
                "phone": "123",
                "text": "宜昌慧云科技孵化器"
            },
            {
                id: 6,
                "longitude": '111.320745',
                "latitude": '30.733342',
                "phone": "123",
                "text": "西陵区高新产业孵化中心"
            }
        ]
        let self = this;

        for (let i = 0; i < position_arrs.length; i++) {
            markers.push({
                position: [position_arrs[i]['longitude'], position_arrs[i]['latitude']],
                events: {
                    click() {
                        self.windows.forEach(window => {
                            window.visible = false;
                        });

                        self.$nextTick(() => {
                            self.windows[i].visible = true;
                        });
                    }
                }
            });

            windows.push({
                position: [position_arrs[i]['longitude'], position_arrs[i]['latitude']],
                content: `<div class="sh_boxmn"><div class="sh_mation"><h1>${position_arrs[i]['text']}</h1></div><dl class="sh_dlsm"><dd><p>管理机构：${position_arrs[i]['text']}</p><p>电话：${position_arrs[i]['phone']}</p></dd></dl><div class="bm"><div class="sh_cha"><a target="_blank" href="/c/29958681"><span>去企业号</span></a><span class="rig-fdi">分享地址<div class="sh_fenxiang"><img src="1"></div></span></div></div><div class="triangle2"></div></div>`,
                visible: true
            });
        }

        this.markers = markers;
        this.windows = windows;
    },
    methods: {

    }
};
</script>
  <style>
.amap-page-container {
    width: 100%;
    height: 600px;
}

.prompt {
    background: white;
    width: 100px;
    height: 30px;
    text-align: center;
}

.sh_boxmn {
    padding: 14px 20px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 7px 7px #E0E2DD;
    padding-bottom: 0;
}

.sh_boxhide {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    padding: 0 5px;
    cursor: pointer;
}

.sh_mation {
    z-index: 1;
    max-width: 180px;
    margin: 0 auto;
}

.sh_mation h1 {
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.sh_dlsm {
    padding: 10px 0 15px 0;
    overflow: hidden;
    margin: 0;
}

.sh_dlsm dt {
    width: 40px;
    height: 40px;
    float: left;
    margin-right: 10px;
    border: 1px solid #ddd;
}

.sh_dlsm dd {
    float: left;
    font-size: 12px;
    color: #666;
    line-height: 20px;
}

.sh_dlsm dd p {
    width: 200px;
    font-size: 14px;
}

.bm {
    height: 30px;
}

.sh_cha {
    position: absolute;
    background: #eee;
    width: 100%;
    left: 0;
    height: 30px;
    z-index: 1;
}

.sh_cha span.rig-fdi {
    float: right;
    border: 0px;
    background: #eee;
    color: #666;
    position: relative;
    border-left: 1px solid #ddd;
    left: -1;
}

.sh_cha span {
    float: left;
    border-radius: 0;
    height: 30px;
    line-height: 30px;
    padding: 0;
    width: 120px;
    font-size: 12px;
    cursor: pointer;
    border: 0px;
    color: #666;
    background: #eee;
    text-align: center;
}
.amap-info-content {
    padding: 0;
}
</style>

