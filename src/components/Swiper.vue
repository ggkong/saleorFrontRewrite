<template>
    <div id="swiperk">
        <swiper 
            ref="mySwiper" 
            :options="swiperOptions" 
            style="margin: 0 auto;"
            @slideChangeTransitionEnd="getActive"    
        >
            <swiper-slide style="margin: 0 auto;">
                <Draw></Draw>
              </swiper-slide>
            <swiper-slide style="margin: 0 auto; align-items: center;">
                <Input />
              </swiper-slide>
            <swiper-slide style="margin: 0 auto; align-items: center;">
                <Upload />
              </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
            <div class="swiper-button-next" slot="button-next" @click="next"></div>
          </swiper>
          <div id="buttons" style="width: 40%; margin: 0 auto;">
            <el-button type="primary" round style="margin: 0 auto;" v-on:click="sure">{{$t('m.confirm')}}</el-button>
            <!-- <el-button type="primary" round style="margin: 0 auto;" v-on:click="deleteValue">取消</el-button> -->
            </div>
          
    </div>
  </template>
  
  <script>
      import Draw from './Draw.vue'
      import Input from './Input.vue'
      import Upload from './Upload.vue'
    export default {
      name: 'carrousel',
      components : {
          Draw,
          Input,
          Upload
      },
      data() {
        return {
          swiperOptions: {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Some Swiper option/callback...
          }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper
        }
      },
      mounted() {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(0, 1000, false)
      },
      methods: {
          prev() {
              this.swiper.slidePrev();
        },
        next() {
            this.swiper.slideNext();
        },
        sure() {
            console.log("sure")
            if(this.$store.getters.getSwiperWhat == "draw"){
              try{
                // 调用 
                this.$store.dispatch('setDrawValue',this.getSmiles())
                this.$message({
                message: this.$t('m.selectTip')+this.$store.getters.getDrawValue,
                type: 'success'})
              }catch (error) {
                // 消息提示
                console.log(error)
                this.$message.error(this.$t('m.noValue'));
                return
              }
            }
            if(this.$store.getters.getSwiperWhat == "input"){
              if (this.$store.getters.getInputValue == ""){
                this.$message.error(this.$t('m.noValue'))
              }else{
                this.$message({
                message: this.$t('m.selectTip')+this.$store.getters.getInputValue,
                type: 'success'
            });
              }
              return
            }
            if(this.$store.getters.getSwiperWhat == ""){
              return
            }
        },
        deleteValue() {
            console.log("delete")
        },
        getActive() {
            var active = document.getElementsByClassName('swiper-slide-active');
            if(active[0].innerHTML.indexOf('../../static/InDraw/demo.html') != -1){
                this.$store.dispatch('setSwiperWhat', "draw")
                console.log(this.$store.getters.getSwiperWhat)
                return
            }
            else if(active[0].innerHTML.indexOf('el-upload--text') != -1){
                this.$store.dispatch('setSwiperWhat', "upload")
                console.log(this.$store.getters.getSwiperWhat)
                return
            }
            else if(active[0].innerHTML.indexOf('el-input__inner') != -1){
                this.$store.dispatch('setSwiperWhat', "input")
                console.log(this.$store.getters.getSwiperWhat)
                return
            }
        },
        getSmiles() {
            var drawHtml = document.getElementById('draw');
            console.log(drawHtml)
            var drawIframe = drawHtml.getElementsByTagName("iframe")[0]
            console.log(drawIframe)
            var indraw = drawIframe.contentWindow[0].InDraw;
            console.log(indraw)
            var smilesInfo = indraw.getSMILES();
            return smilesInfo
        },
    }
    }
  </script>
  <style>
      #swiperk {
          /* margin-left: 0 auto; */
          width: 50%;
          height: 100%;
      }
  </style>