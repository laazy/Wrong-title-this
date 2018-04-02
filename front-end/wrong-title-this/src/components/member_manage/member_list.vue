<template>
  <div id="list">
    <el-table :data="users" >
      <el-table-column id="name" prop="name" label="用户名"></el-table-column>
      <el-table-column id="phone" prop="phone" label="手机号"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    import user from "./users"
    export default {
        name: "member_list",
        data(){
          return {
            users:user
          }
        }
    }
</script>

<style scoped>

</style>
