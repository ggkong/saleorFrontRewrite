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
            <!-- <el-button  type="primary" round style="width: 100%; margin: 0 auto;">点击上传</el-button> -->
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
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