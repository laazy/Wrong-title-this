<template>
  <div id="menu_head">
    <el-menu id="menu" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             text-color="#000"
             active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-tickets"></i>
        我的错题本
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        个人设置
      </el-menu-item>
      <Person id="person"></Person>
      <Search id="search"></Search>
    </el-menu>
  </div>
</template>

<script>
  import Person from "./person"
  import Search from "./search"
  import ElMenu from "element-ui/packages/menu/src/menu";
    export default {
      name: "menu_head",
      components:{
        ElMenu,
        Person, Search},
      data () {
        return {
          theme1: 'dark'
        }
      }
    }
</script>

<style scoped>
  #person{
    float:right;
    position: relative;
    right:70px;
    top:15px;
  }
  #search{
    float: right;
    position: relative;
    right: 150px;
    top:15px;

  }
</style>
