<template>
  <div id="user">
    <el-header>
      <Menu_head v-bind:select_item="1" ></Menu_head>
    </el-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu_head from "./menu/menu_head";
  export default {
    name: 'User',
    components:{
      Menu_head
    },
    data()
    {
      return{
      }
    }
  }
</script>

<style>
</style>
