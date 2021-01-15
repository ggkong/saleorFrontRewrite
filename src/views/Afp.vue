<template>
    <div id="Afp">
        <el-container>
          <el-header>
            <Head></Head>
          </el-header>
          
          <el-main>
              <Swiper
                style="width: 50%; float: left;"
              ></Swiper>
              <Params
                style="width: 50%; float: left;"
              ></Params>
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
    import Swiper from '../components/Swiper' ;
    import Params from '../components/Params' ;
    export default {
        name: "Afp",
        components : {
            Footer,
            Head,
            Swiper,
            Params
        },
    }
</script>
<style>
    .el-main {
    margin-top: 20px;
    background-color: #E9EEF3;
    color: #333;
    height: 600px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
</style>
