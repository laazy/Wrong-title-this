<template>
  <div id="app">
    <el-header>
      <Menu_head></Menu_head>
    </el-header>
    <el-container>
      <Editor></Editor>
    </el-container>
  </div>
</template>

<script>
  import Editor from "./components/question/editor"
  import Entry from "./components/question/entry"
  import Menu_head from "./components/menu/menu_head";
  import ElHeader from "element-ui/packages/header/src/main";
  import ElContainer from "element-ui/packages/container/src/main";
  export default {
    name: 'App',
    components:{
      ElContainer,
      ElHeader,
      Menu_head,
      Entry,
      Editor
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
