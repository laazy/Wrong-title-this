<template>
  <div id="question_list" class="ques_list">
    <Search id="search" @search="handleSearch"></Search>
    <br>
    <Redo v-on:redoCommit="handleRCommit" v-on:redoCancel="handleRCancel" v-bind:title="pass_content" v-show="redo_flag"></Redo>
    <Editor v-on:editCommit="handleECommit" v-on:editCancel="handleECancel" v-bind:pass_content="pass_content"
            v-bind:pass_tags="pass_tag" v-show="edit_flag"></Editor>
    <AddNew v-if="pass_add" @entryAdd="handleAdd" v-show="!edit_flag && !redo_flag" ></AddNew>
    <br>
    <br>
    <div v-for="item in entries">
      <Entry v-bind:content="item" v-bind:key="item.id"
             @entryRedo="handleRedo" @entryDelete="handleDelete" @entryModify="handleModify">
      </Entry>
      <br>
    </div>
    <div>
      <el-pagination
        layout="prev, pager, next"
        :page-size="5"
        :total="2">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Redo from "./redo"
  import Entry from "./entry"
  import AddNew from "./add_new"
  import Editor from "./editor"
  import Search from "../menu/search"
    export default {
      name: "question_list",
      components:{
          Entry, AddNew, Editor, Redo, Search
      },
      data(){
        return{
          entries:[
          {
            id: 11011,
            content: "一加一等于几?",
            record_time: "2018-2-29",
            retry_times: 2,
            ans: ["1", "1"],
            correct:"2",
            analysis:"too easy to explain",
            tags:["数学","简单"]
        },
          {
            id: 11012,
            content: "一加一等于几  ?",
            record_time: "2018-3-29",
            retry_times: 2,
            ans: ["3", "1"],
            correct:"2",
            analysis:"too easy to explain",
            tags:["数学","简单"]
          }],
          edit_flag:false,
          redo_flag:false,
          pass_content:{data:""},
          pass_tag:{data:[]},
          current_index:-1
        }
      },
      methods:{
        findEntry(entry_id){
          for( var i = 0; i < this.entries.length;i++)
            if (this.entries[i].id == entry_id)
              return i;
          return -1;
        },
        clearData(){
          this.pass_content.data = '';
          this.pass_tag.data = [];
        },
        handleECancel(){
          this.edit_flag = false;
          this.clearData();
        },
        handleRCancel(){
          this.redo_flag = false;
          this.clearData();
        },
        handleECommit(tags, content){
          console.log(this.pass_content)
          this.edit_flag = false;
          this.clearData();
        },
        handleRCommit(ans){
          this.redo_flag = false;
          this.clearData();
        },
        handleRedo(entry_id){
          var index = this.findEntry(entry_id);
          this.current_index = index;
          this.pass_content.data = this.entries[index].content;
          this.redo_flag = true;
        },
        handleDelete(entry_id){
          console.log("delete")
        },
        handleModify(entry_id){
          var index = this.findEntry(entry_id);
          this.current_index = index;
          this.pass_content.data = this.entries[index].content;
          this.pass_tag.data = this.entries[index].tags.concat();
          this.edit_flag = true;
        },
        handleAdd(){
          this.edit_flag = true;
        },
        handleSearch(){
          this.$router.push("search")
        }
      },
      props:["pass_add"]
    }
</script>

<style scoped>
</style>
