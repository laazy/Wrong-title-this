<template>
  <div id="editor">
    <quill-editor
      class="quill"
      v-model="content1"
      @change="textChange"
    >
    </quill-editor>
    <Entry v-bind:content="pass_data"></Entry>
  </div>
</template>

<script>
    import QuillEditor from "vue-quill-editor/src/editor";
    import Entry from"./entry"
    export default {
      components: {QuillEditor,Entry},
      name: "editor",
      data(){
        return{
          content1:"<p>dddd <strong>dd</strong></p>",
          pass_data:{
            id: 11011,
            content: "",
            analysis: "错",
            record_time: "2018-2-29",
            retry_times: 2,
            ans: ["1", "1"],
            tags:["数学","简单"]
          }
        }
      },
      methods:{
        textChange(){
          console.log(this.content1);
          this.pass_data.content=this.content1;
        }
      }
    }
</script>

<style scoped>

</style>
