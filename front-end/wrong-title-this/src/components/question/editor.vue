<template>
  <div id="editor">
    <el-tag
      :key="tag"
      v-for="tag in dynamic_tag.data"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    <br>
    <br>
    <quill-editor
      class="quill"
      v-model="content.data"
    >
    </quill-editor>
    <el-button class="b_com" size="medium" @click="commit" type="primary"  round>提交</el-button>
    <el-button class="b_com" size="medium" @click="cancel"   round>取消</el-button>
  </div>
</template>

<script>
    import QuillEditor from "vue-quill-editor/src/editor";
    import ElButton from "element-ui/packages/button/src/button";
    export default {
      components: {
        ElButton,
        QuillEditor },
      name: "editor",
      data(){
        return{
          inputVisible: false,
          inputValue: '',
          dynamic_tag: this.pass_tags,
          content:this.pass_content,
        }
      },
      methods:{
        clearData(){
          // this.dynamic_tag = {data:[]};
          // this.content = {data:""};
        },
        cancel(){
          this.$emit("editCancel");
          this.clearData();
        },
        commit(){
          console.log(this.content);
          this.$emit("editCommit",this.dynamic_tag, this.content);
          this.clearData();
        },
        handleClose(tag) {
          this.dynamic_tag.data.splice(this.dynamic_tag.data.indexOf(tag), 1);
        },
        showInput() {
          this.inputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },
        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.dynamic_tag.data.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        }
      },
      props:["pass_tags","pass_content"]
    }
</script>

<style scoped>
  .b_com{
    position: relative;
    left: 75%;
    top:10px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
