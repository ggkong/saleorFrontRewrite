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
              <el-button type="primary" :loading="flag" v-on:click="submit" style="margin: 20px 100px; float: left; width: 20%;">提交</el-button>
              <el-input
                placeholder="等待token 值"
                v-model="this.$store.getters.getReturnToken"
                :disabled="true"
                style="width: 50%;"
              >
              </el-input>
            
              <el-input
              placeholder="等待smiles 值"
              v-model="this.smiles"
              :disabled="true"
              style="width: 50%;"
            >
            </el-input>
            
            <!-- <!-- <el-button type="primary" :loading="flag" v-on:click="jiexi" style="margin: 20px 100px; float: left; width: 20%;">测试解析</el-button> -->
              <el-table
              :data="tableData"
              style="width: 50%;"
            > 
          <el-table-column label="smiles">
            <el-table-column
              prop="name"
              label="名字"
            >
            </el-table-column>
            <el-table-column
              prop="Result"
              label="结果"
            >
            </el-table-column>
            <el-table-column
              prop="Probability"
              label="数值"
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
    import axios from 'axios'
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
            // jsondata: {
            //   "C1=CC=CC=C1": {
            //       "Fish Toxicity II": {
            //           "Result": "High FHMT",
            //           "Probability": 0.62577356822818
            //       },
            //       "Honey Bee Toxicity": {
            //           "Result": "highAT",
            //           "Probability": 0.5482682077332233
            //       }
            //   },
              
            // },
            tableData: [],
            smiles:""
          }
        },
        methods: {
          submit() {
            this.flag = true
            console.log("现在是submit")
            console.log(this.$store.getters.getUploadAfpFile)
            // var query = `
            // mutation($product: Int!, $uploadFile: Upload, $drawValue: String, $inputValue: String, $attr: [String]){
            //  CheckoutCreate(
            //   checkout:{
            //     product: $product
            //     uploadFile: $uploadFile
            //     drawValue: $drawValue
            //     inputValue: $inputValue
            //     attr: $attr
            // }
            // )
            // {
            //   ok
            //   token
            // }
            // }
            // `;
            // var formData = new FormData();
            // const operations = JSON.stringify({
            //   query,
            //   variables: { product:1, uploadFile: null, drawValue: this.$store.getters.getDrawValue, inputValue: this.$store.getters.getInputValue, attr: ["T_FHMT_I","T_HBT_I"] },
            //  });
            //  formData.append("operations", operations);
            //   const map = {
            //     "1": ["variables.file"],
            //   };
            // formData.append("map", JSON.stringify(map));
            // formData.append("1", this.$store.getters.getUploadAfpFile);
            // console.log(formData)
            // axios({
            //   url: "http://39.101.164.11:8080/graphql/",
            //   method: "post",
            //   data: formData,
            //   headers: {
            //   "Content-Type": "multipart/form-data",
            // },
            // }).then((res) => {
            //   console.log("我成功了")
            // })
            createOrder({product:1, uploadFile: this.$store.getters.getUploadAfpFile, drawValue: this.$store.getters.getDrawValue, inputValue: this.$store.getters.getInputValue, attr: ["T_FHMT_I","T_HBT_I"] }).then(
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
