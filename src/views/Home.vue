<template>
    <div id="Home">
      <el-container>
        <el-header>
          <Head></Head>
        </el-header>
        <el-main>
          <div id=afp v-on:click="selectProduct('afp')">我是afp</div>
          <div id=cocrystal1 v-on:click="selectProduct('cocrystal1')">我是cocrystal1</div>
          <div id=cocrystal2 v-on:click="selectProduct('cocrystal2')">我是cocrystal2</div>
        </el-main>
        
        
        <el-footer>
          <Footer></Footer>
        </el-footer>

      </el-container>
    </div>
  </template>
 
  <script>
    import Footer from '../components/Footer';
    import Head from '../components/Head' ;
    export default {
      name : "Home",
      components : {
        Footer,
        Head
      },
      methods: {
        selectProduct: function(productName){
          // 跳转
          this.$router.push('/product/'+productName)
        },
      },
    }
  </script>
  
  <style>
    
    
    .el-main {
      margin-top: 20px;
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 200px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    .el-main div {
      width: 200px;
      height: 180px;
      background-color: #409EFF;
      float: left;
      margin-left: 20px;
      border-radius: 20px;
      
    }
    
  
  </style>