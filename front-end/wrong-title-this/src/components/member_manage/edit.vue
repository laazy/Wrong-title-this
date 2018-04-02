<template>
    <div id="edit">
      <el-form :label-position="left" laber-width="80px" :model="user_data">
        <el-form-item label="用户名">
          <el-input v-model="user_data.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="user_data.phone"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "edit",
      props:["user"],
      data(){
        return{
          user_data:this.user
        }
      }
    }
</script>

<style scoped>

</style>
