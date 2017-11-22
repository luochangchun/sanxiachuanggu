<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide v-for="(item, index) in imgArrs" :key="index" :style="{backgroundImage: 'url(' +item.src+ ')'}" style="margin-bottom:0;height: 400px;background-size: cover;background-repeat: no-repeat;background-position: center center;overflow:hidden;">
      <!-- <p>{{activeIndex}}    {{curIndex}}   {{index}}</p> -->
      <div class="container rel">
        <img :class="curIndex == index ? 'animate_start d1' : 'animate_aft' " :src="item.b1" alt="" style="width:auto;height:auto;margin-top:80px;margin-bottom:30px;">
        <img :class="curIndex == index ? 'animate_start d2' : 'animate_aft' " :src="item.b2" alt="" style="width:auto;height:auto;margin-bottom:30px;">
        <div :class="curIndex == index ? 'animate_start d3' : 'animate_aft' " class="sw_btn">{{item.text}}</div>
        <img :class="(curIndex == index ? 'animate_start d1' : 'animate_aft') || (curIndex == index ? 'animate_start d1' : 'animate_aft')" :src="item.b0" alt="" style="width:40%;height:auto;position:absolute;top:0;right:0" @mouseover="transForm1()" @mouseout="transForm1()">
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from "vue-awesome-swiper";
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        curIndex: '',
        activeIndex: '',
        imgArrs: [{
            id: "1",
            src: "../static/img/bg.png",
            b0: "../static/img/b1-1-1.png",
            b1: "../static/img/b1-1.png",
            b2: "../static/img/b1-2.png",
            text: "全域1+6+N新模式"
          },
          {
            id: "2",
            src: "../static/img/bg.png",
            b0: "../static/img/b2-1-1.png",
            b1: "../static/img/b2-1.png",
            b2: "../static/img/b2-2.png",
            text: "一站式服务"
          },
          {
            id: "3",
            src: "../static/img/bg.png",
            b0: "../static/img/b3-1-1.png",
            b1: "../static/img/b3-1.png",
            b2: "../static/img/b3-2.png",
            text: "建立创业服务生态链"
          }
        ],
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          initialSlide: 0, //设定初始化时slide的索引
          pagination: ".swiper-pagination",
          effect: 'fade',
          // loop: true,
          speed: 600,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          paginationClickable: false,
         
          onSlideChangeStart: swiper => {
            //这个位置放swiper的回调方法
            this.curIndex = this.index = swiper.realIndex;
            this.activeIndex = swiper.activeIndex;
            // console.log(this.activeIndex);
            // if (this.activeIndex == 4) {
            //   this.activeIndex = 1;
            //   this.curIndex = 0;
            //   swiper.slideTo(1, 1000, false); 
            // }
          },
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.curIndex = swiper.realIndex;
            this.activeIndex = swiper.activeIndex;
          }
        }
      };
    },
    //定义这个swiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    }
  };
</script>

<style scoped>
  .el-carousel__container img {
    width: 100%;
    height: 100%;
  }
  .sw_btn {
    width: 260px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    margin-left: 0px;
  }
</style>

