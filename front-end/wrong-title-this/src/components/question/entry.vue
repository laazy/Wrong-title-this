<template>
  <div id="entry">
    <el-card class=""box-card>
      <el-tag type="success" v-for="item in content.tags" :key="item.id" > {{ item }} </el-tag>
      <el-button size="small" class="b" type="primary">重做</el-button>
      <el-button size="small" class="b" type="warning">修改</el-button>
      <el-button size="small" class="b" type="danger">删除</el-button>
      <el-row id="con">
        <div v-html="content.content"></div>
      </el-row>
      <br><hr>
      <p class="decp"> 历次重做答案：</p>
        <div id="ans" v-for="item in content.ans">
          <el-row>
            <div v-html="item"></div>
          </el-row>
        </div>
      <br><hr>
      <el-row id="info">
        <el-col id="record" :span="12">
          <div class="decp">创建时间</div>
          {{content.record_time}}
        </el-col>
        <el-col id="retry" :span="12">
          <div class="decp">重做次数</div>
          {{content.retry_times}}
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
    export default {
      name: "entry",
      props: ["content"],
      components:{
      }
    }

</script>

<style scoped>
  .b{
    position: relative;
    left:330px;
  }
  #entry{
    width: 650px;
  }
  #con{
    font-size: 20px;
  }
  #ans{
    font-size: 20px;
  }
  #info{
    font-size: 14px;
  }
  .decp{
    font-size: 15px;
    color:gray;
}
</style>
