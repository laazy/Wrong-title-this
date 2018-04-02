<template>
    <div id="tags_view">
      <el-card id="con">
        <div slot="header" class="clearfix">
          <span id="tag_header">便签栏</span>
        </div >
        <div id="tags">
          <el-button class="button" v-for="item in tags" type="primary" plain :key="item" v-on:click="handleClick(item)" >
            {{item}}
          </el-button>
        </div>

      </el-card>
    </div>
</template>

<script>
    import ElCard from "element-ui/packages/card/src/main";

    export default {
      components: {ElCard},
      name: "tags_view",
        data(){
          return{
            tags: ["简单","数学","111","222"]
          }
        },
        methods:{
          handleClick(item){
            console.log(item);
            this.$router.push('/main/search/')
          }
        }
    }
</script>

<style scoped>
  #tags{
    text-align: left;
  }
  .button{
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  #tag_header{
    font-size: large;
  }
  #tags_view{
    width:300px;
  }
</style>
