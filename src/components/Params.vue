<template>
    <div>
            <el-checkbox-group 
            v-model="checkedCities"
            :min="1"
            :max="3"
            style="margin: 0 auto; width: 60%;"
            >
            <el-checkbox-button v-for="param in params1" :label="param" :key="param"  size="medium">
                {{param}}
            </el-checkbox-button>
            <br>
            <el-checkbox-button style="margin-top: 20px;" v-for="param in params2" :label="param" :key="param"  size="medium">
                {{param}}
            </el-checkbox-button>
            <br>
            <el-checkbox-button style="margin-top: 20px;" v-for="param in params3" :label="param" :key="param"  size="medium">
                {{param}}
            </el-checkbox-button>
            <br>
            
          </el-checkbox-group>
    </div>
    
  </template>
  <script>
    export default {
      data() {
        return {
          checkedCities: [],
          params1:  ['a', 'b', 'c', 'd'],
          params2:  ['e', 'f', 'g', 'h'],
          params3:  ['i', 'j', 'k', 'l'],
        };
      }
    };
  </script>
  <style>
      .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  </style>