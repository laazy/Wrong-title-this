<template>
  <div id="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item id="user" label="用户名" prop="name">
      <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item id="pwd" label="密码" prop="pass">
        <el-input type="password" v-model="pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    name:"login",
    data() {
      return {
        pass: '',
        name: ''
      };
    },
    methods: {
      submitForm() {
          this.$router.push("/main/question");
      },
    }
  }
</script>
<style scoped>
  #user{
    position: relative;
    top:30px;
    width: auto;
    height: 80px;
  }
  #pwd{
    width: auto;
    height: auto;
  }
</style>
