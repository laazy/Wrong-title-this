<template>
  <div id="question_list">
    <div v-for="item in ddd">
      <Entry v-bind:content="item" v-bind:key="item.id"></Entry>
      <br>
    </div>
    <div>
      <el-pagination
        v-on:current-change="handleChangePage"
        :current-page="current"
        layout="prev, pager, next"
        :page-size="5"
        :total="50">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import Entry from "./entry"
    export default {
        name: "question_list",
      components:{
          Entry
      },
      data(){
          return{
            ddd:[
              {
              id: 11011,
              content: "一加一等于几?",
              analysis: "错",
              record_time: "2018-2-29",
              retry_times: 2,
              ans: ["1", "1"],
              tags:["数学","简单"]
            },
              {
                id: 11011,
                content: "一加一等于几?",
                analysis: "错dd",
                record_time: "2018-3-29",
                retry_times: 2,
                ans: ["3", "1"],
                tags:["数学","简单"]
              }],
            current:4
          }
      },
      methods:{
        handleChangePage(val) {
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>

<style scoped>

</style>
