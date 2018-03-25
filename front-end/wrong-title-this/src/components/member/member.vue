<template>
  <div id="member">
    <el-tabs v-model="activeName" value="2">
      <el-tab-pane label="登录" name="1">
        <Login></Login>
      </el-tab-pane>
      <el-tab-pane label="注册" name="2">
        <Register></Register>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Login from "./login"
  import Register from "./register"
    export default {
        name: "member",
      components:{
        Login,
        Register
      },
      data(){
          return{
            activeName: '1'
          }
      }
    }
</script>

<style scoped>

</style>
