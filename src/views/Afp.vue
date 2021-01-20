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
              <el-button type="primary" :loading="flag" v-on:click="submit" style="margin: 20px 100px; float: left; width: 20%;">{{$t('m.submit')}}</el-button>
              <el-input
                :placeholder="$t('m.wait_token')"
                v-model="this.$store.getters.getReturnToken"
                :disabled="true"
                style="width: 50%;"
              >
              </el-input>
            
              <el-input
              :placeholder="$t('m.wait_smiles')"
              v-model="this.smiles"
              :disabled="true"
              style="width: 50%;"
            >
            </el-input>
            
            <!-- <!-- <el-button type="primary" :loading="flag" v-on:click="jiexi" style="margin: 20px 100px; float: left; width: 20%;">测试解析</el-button> -->
              <el-table
              :data="tableData"
              style="width: 50%;"
              :empty-text="$t('m.no_data')"
            > 
          <el-table-column 
            <!-- :label="$t('m.smiles')" -->
          >
            <el-table-column
              prop="name"
              :label="$t('m.name')"
            >
            </el-table-column>
            <el-table-column
              prop="Result"
              :label="$t('m.result')"
            >
            </el-table-column>
            <el-table-column
              prop="Probability"
              :label="$t('m.probability')"
            >
            </el-table-column>
          </el-table-column>  
          </el-table>
            

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
    import { getProducts,getJsonResults,createOrder }  from '../graphql/check.js'
    export default {
        name: "Afp",
        components : {
            Footer,
            Head,
            Swiper,
            Params
        },
        data() {
          return {
            flag: false,
            jsonRestlt: "",
            tableData: [],
            smiles:""
          }
        },
        methods: {
          submit() {
            this.flag = true
            console.log("现在是submit")
            console.log(this.$store.getters.getUploadAfpFile)
            createOrder({product:1, uploadFile: this.$store.getters.getUploadAfpFile, drawValue: this.$store.getters.getDrawValue, inputValue: this.$store.getters.getInputValue, attr: this.$store.getters.getParams }).then(
              (res) => {
                this.flag = false
                console.log(res)
                // 通过 token 查询 结果 值
                this.$store.dispatch('setReturnToken', res.data.CheckoutCreate.token)
                
                if (res.data.CheckoutCreate.ok == true) {
                  console.log("进入循环")
                  var request = setInterval(() => {
                    console.log("开始")
                    getResult()
                  }, 1000)
                }
                
                var getResult = () => {
                  var tokenThis = this.$store.getters.getReturnToken
                  console.log(tokenThis)
                  getJsonResults({token: tokenThis}).then((res) => {
                    console.log(res)
                    console.log(res.data.jsonResult)
                    if (res.data.jsonResult != null){
                      console.log("循环结束")
                      this.analysisJsonData(res.data.jsonResult)
                      clearInterval(request)
                      // 进行 解析 json 
                    }
                  }
                  )
                }
              }
            )
          },
          analysisJsonData(jsonData) {
            console.log(typeof(jsonData))
            jsonData = JSON.parse(jsonData)
            console.log(typeof(jsonData))
            var tableDataList = []
            console.log("a-------------------")
            console.log(jsonData)
            for (var key in jsonData){
              console.log(key)
              this.smiles = key
              var results = jsonData[key]
              // console.log(results)
              // 每个 分子
              for(var i in results){
                  var obj = new Object()
                  obj.name = i
                  var next = results[i]
                  obj.Result = next["Result"]
                  obj.Probability = next["Probability"]
                  // console.log(obj)
                  tableDataList.push(obj)
              }
            }
            console.log(tableDataList)
            this.tableData = tableDataList 
          }
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
