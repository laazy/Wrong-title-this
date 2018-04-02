<template>
  <div id="entry">
    <el-card class=""box-card>
      <div id="header">
        <el-tag class="tag" type="success" v-for="item in content.tags" :key="item.id" > {{ item }} </el-tag>
        <el-button size="small" class="b1" type="primary" @click="handleRedo" >重做</el-button>
        <el-button size="small" class="b2" type="warning" @click="handleModify" >修改</el-button>
        <el-button size="small" class="b3" type="danger" @click="handleDelete" >删除</el-button>
      </div>
      <br>
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
      <div class="entry_ans">
        <el-collapse >
          <el-collapse-item title="正确答案">
            <p>{{content.correct}}</p>
          </el-collapse-item>
          <el-collapse-item title="题目解析">
            <p>{{content.analysis}}</p>
          </el-collapse-item>
        </el-collapse>
      </div>
      <br>
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
    import Person from "../menu/person";

    export default {
      name: "entry",
      props: ["content"],
      components:{
        Person
      },
      methods:{
        handleRedo(){
          this.$emit("entryRedo", this.content.id)
        },
        handleDelete(){
          this.$emit("entryDelete", this.content.id)
        },
        handleModify(){
          this.$emit("entryModify", this.content.id)
        }
      }
    }

</script>

<style scoped>
  #entry{
    position: relative;
  }
  .tag{
    margin-left: 10px;
  }
  .b1{
    position: absolute;
    margin-right: 140px;
    right:20px;
  }
  .b2{
    position: absolute;
    margin-right: 75px;
    right:20px;
  }
  .b3{
    position: absolute;
    margin-right: 10px;
    right:20px;
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
