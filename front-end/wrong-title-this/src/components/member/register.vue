<template>
  <div id="reg">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username" v-if="mode" >
        <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phonenumber"  >
        <el-input v-model="ruleForm2.phonenumber" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import ElInput from "element-ui/packages/input/src/input";

  export default {
    components: {ElInput},
    name:"register",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateUName = (rule, value, callback) => {
        //后期加入用户名验证
        if (value === 'username') {
          callback(new Error('该用户名已被占用'));
        } else if (value === '' || value === undefined){
          callback(new Error('必须输入用户名'));
        } else {
          callback();
        }
      };
      var validatePNum = (rule, value, callback) => {
        if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value))){
          callback(new Error('请输入正确的手机号码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          username:this.username,
          pass: "",
          checkPass: '',
          phonenumber:this.phone
        },
        rules2: {
          username: [
            { required:true, validator: validateUName,trigger:' blur'}
          ],
          pass: [
            { required:true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required:true, validator: validatePass2, trigger: 'blur' }
          ],
          phonenumber: [
            { required:true, validator: validatePNum,trigger:' blur'}
          ]
        }
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    props:["username","phone", "mode"]
  }
</script>

<style scoped>

</style>
