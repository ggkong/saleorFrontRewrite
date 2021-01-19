  <template>
    <el-checkbox-group 
      v-model="checkedCities"
      :min="1"
      :max="3"
      @change="changeCities"
    >
      <el-collapse accordion>
        <el-collapse-item title="a" style="width: 40%; margin: 0 auto;">
          <el-checkbox  style="width: 80%; margin: 0 auto;" v-for="city in citiesa" :label="city" :key="city">{{city}}</el-checkbox>
        </el-collapse-item>
        <el-collapse-item title="b" style="width: 40%; margin: 0 auto;">
          <el-checkbox  style="width: 80%; margin: 0 auto;" v-for="city in citiesb" :label="city" :key="city">{{city}}</el-checkbox>
        </el-collapse-item>
      </el-collapse>
      
      
    </el-checkbox-group>
  </template>
  <script>
    const cityOptionsa = ['上海', '北京', '广州', '深圳'];
    const cityOptionsb = ['山东', '江苏', '浙江', '福建'];
    export default {
      data() {
        return {
          checkedCities: [],
          citiesa: cityOptionsa,
          citiesb: cityOptionsb
        };
      },
      methods: {
        changeCities() {
          console.log(this.checkedCities)
          this.$store.dispatch('setParams',this.checkedCities)
          this.$message({
                message: '您选择的值是'+this.$store.getters.getParams,
                type: 'success'})
        }
      },
    };
  </script>
  