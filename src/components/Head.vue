<template>
    <div id = "head">
            <el-row>
              <spen style="margin: 0 auto; color: #409EFF; font-size: 30px;">{{$t('m.saleor')}}</spen>
              <el-button style="margin-left: 50px;" icon="el-icon-search" circle></el-button>
              <el-button type="primary" icon="el-icon-ice-cream-round" @click="changeLang" circle>{{$t('m.lang')}}</el-button>
            </el-row>
    </div>
</template>
<script>
  export default {
    name: "Head",
    methods: {
      changeLang() {
        console.log("切换语言")
        this.lang = localStorage.getItem('locale') || 'zh-CN';
        if ( this.lang === 'zh-CN' ) {
          this.lang = 'en-US';
          this.$i18n.locale = this.lang;
        } else {
          this.lang = 'zh-CN';
          this.$i18n.locale = this.lang;
        }
        localStorage.setItem('locale', this.lang);
      },
    },
  }
</script>
<style>
    #head {
      background-color: #f1f5f5;
      color: #333;
      text-align: center;
      line-height: 60px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
</style>