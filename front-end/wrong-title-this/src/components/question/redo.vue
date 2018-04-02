<template>
  <div id="redo">
    <el-card class="=box-card">
      <div v-html="title.data"></div>
    </el-card>
    <quill-editor
      class="quill"
      v-model="ans"
    >
    </quill-editor>
    <el-button id="b_com" size="medium" @click="commit" type="primary"  round>提交</el-button>
    <el-button id="b_com" size="medium" @click="cancel"  round>取消</el-button>
  </div>
</template>

<script>
    import ElCard from "element-ui/packages/card/src/main";

    export default {
      components: {ElCard},
      name: "redo",
      data(){
        return{
          ans:''
        }
      },
      props:["title"],
      methods:{
        cancel(){
          this.$emit("redoCancel");
          this.ans = '';
        },
        commit(){
          console.log(this.ans);
          this.$emit("redoCommit", this.ans);
        }
      }
    }
</script>

<style scoped>
  #b_com{
    position: relative;
    left: 75%;
    top:10px;
  }
</style>
