<template>
  <div id="list">
    <el-container>
      <el-aside class="admin_side">
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleOpen">
            <el-menu-item index="1">
              <i class="el-icon-tickets"></i>
              <span slot="title">题目管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">统计信息</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-edit-outline"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <QuesList :pass_add="true" v-show="ques_show"></QuesList>
      <router-view>
      </router-view>
    </el-container>
  </div>
</template>

<script>
  import QuesList from "./question/question_list"
  import ElContainer from "element-ui/packages/container/src/main";
  export default {
    components: {ElContainer, QuesList },
    name: "member_list",
    data(){
      return {
        ques_show:true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        if (key === '1') {
          this.$router.push("/admin")
          this.ques_show = true;
        }
        if (key === '2' ) {
          this.$router.push("/admin/statistics")
          this.ques_show = false
        }
        if (key === '3') {
          this.$router.push("/admin/member")
          this.ques_show = false
        }
      }
    }
  }
</script>

<style scoped>
  .admin_side{
    margin-top: 100px;
  }
  #list{
    width:1000px;
    margin-top:100px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

