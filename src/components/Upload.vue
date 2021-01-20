<template>
    <div>
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
            :file-list="fileList"
            :on-change="changeFile"
            style="width: 60%; margin: 0 auto; margin-top: 50px;"
            >
            <el-button slot="trigger" size="small" type="primary">{{$t('m.select_file')}}</el-button>
        </el-upload>
    </div>
</template>
<script>
  export default {
      name: "Upload",
    data() {
      return {
        fileList: []
      };
    },
    methods: {
      changeFile(files,fileList) {
        console.log("files------------")
        console.log(files.raw)       
        console.log(typeof(files.raw))
        this.$store.dispatch("setUploadAfpFile", files.raw)
        console.log("上传----------------------------文件")
        console.log(this.$store.getters.getUploadAfpFile)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>