<template>
  <div id="statistics">
    <el-table id="table" :data="stat" >
      <el-table-column id="t_name" prop="name" label="项目"></el-table-column>
      <el-table-column id="t_con" prop="content" label="内容"></el-table-column>
      <el-table-column id="t_date" prop="date" labe="更新日期"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "statistics",
        data(){
          return{
            stat:[{
                name:"错题总数",
                content:"2",
                date:"2018-3-27"
              },
              {
                name: "总计重做次数",
                content:"2",
                date:"2018-3-26"
              }
            ]
          }
        }
    }
</script>

<style scoped>
  #statistics{
    margin-top:100px;
    width:800px;
  }
</style>
