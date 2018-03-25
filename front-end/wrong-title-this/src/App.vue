<template>
  <div id="app">
    <el-header>
      <Menu_head></Menu_head>
    </el-header>
    <el-container>
      <Entrys ></Entrys>
    </el-container>
  </div>
</template>

<script>
  import Entrys from "./components/question/question_list"
  import Menu_head from "./components/menu/menu_head";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElContainer from "element-ui/packages/container/src/main";
  export default {
    name: 'App',
    components:{
      ElContainer,
      ElHeader,
      Menu_head,
      Entrys
    },
    data()
    {
      return{

      }
    }
}
</script>

<style>
#app {

}
</style>
