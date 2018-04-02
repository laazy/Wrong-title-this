<template>
  <div id="menu_head">
    <el-menu id="menu" :default-active="selected" class="el-menu-demo" mode="horizontal" @select="handleSelect"
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
    </el-menu>
  </div>
</template>

<script>
  import Person from "./person"
  import ElMenu from "element-ui/packages/menu/src/menu";
    export default {
      name: "menu_head",
      components:{
        ElMenu, Person
      },
      data () {
        return {
          selected:'1'
        }
      },
      methods:{
        handleSelect(key){
          if (key === '4')
            this.$router.push("/main/setting/")
          if (key === '1')
            this.$router.push("/main/question/")
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
