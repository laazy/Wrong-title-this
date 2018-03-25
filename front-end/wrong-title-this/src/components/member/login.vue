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
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    name:"login",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.pass !== '')
            return true;
          callback();
        }
      };
      return {
        pass: '',
        name: ''
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
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
