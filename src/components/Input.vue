
<template>
    <div style="width: 60%; margin: 0 auto;align-items: center;">
        <el-input 
            v-model="input" 
            placeholder="请输入内容"
            v-on:change="changeValue" 
            clearable 
        ></el-input>
    </div>
</template>
<script>
export default {
    name: "Input",
    data() {
        return {
        input: ''
        }
    },
    methods: {
        changeValue() {
            this.$store.dispatch("setInputValue",this.input)
        }
    },
}
</script>