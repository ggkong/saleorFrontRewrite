  <template>
    <el-checkbox-group 
      v-model="checkedCities"
      :min="1"
      :max="3"
      @change="changeCities"
    >
      <el-collapse accordion>
        <el-collapse-item title="①A (Absorption):" style="width: 40%; margin: 0 auto;">
          <el-checkbox  style="width: 80%; margin: 0 auto;" v-for="city in citiesa" :label="city" :key="city">{{city}}</el-checkbox>
        </el-collapse-item>
        <el-collapse-item title="②D (Distribution):" style="width: 40%; margin: 0 auto;">
          <el-checkbox  style="width: 80%; margin: 0 auto;" v-for="city in citiesb" :label="city" :key="city">{{city}}</el-checkbox>
        </el-collapse-item>
      </el-collapse>
      
      
    </el-checkbox-group>
  </template>
  <script>
    const cityOptionsa = ['R_A_Caco2_I', 'A_Caco2_I', 'A_HIA_I', 'A_PgpI_II','A_PgpS_I'];
    const cityOptionsb = ['A_BBB_I'];
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
                message: this.$t('m.selectTip')+this.$store.getters.getParams,
                type: 'success'})
        }
      },
    };
  </script>
  