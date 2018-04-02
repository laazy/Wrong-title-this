<template>
  <el-button id="container" @click="clickHandle" type="info" plain >
    <i  >
      <img id="add" src="../../assets/add.png"/>
    </i>
  </el-button>
</template>

<script>
    import ElIcon from "element-ui/packages/icon/src/icon";

    export default {
      components: {ElIcon},
      name: "redo",
      methods:{
        clickHandle(){
          this.$emit("entryAdd")
        }
      }
    }
</script>

<style scoped>
  #add{
    height: 150px;
    width: 150px;
  }
  #container{
    height:200px;
    width:650px;
  }
</style>
