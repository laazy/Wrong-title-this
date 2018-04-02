<template>
  <div id="question_view" class="user_con">
    <div id="side">
      <TagsView></TagsView>
    </div>
    <div class="user_main">
      <br>
      <EntryList :pass_add="true" ></EntryList>
    </div>
  </div>
</template>

<script>
    import TagsView from "./tags_view"
    import EntryList from "./question_list"
    export default {
        name: "question_view",
        components:{
          EntryList,  TagsView
      }
    }
</script>

<style scoped>
  .user_con {
  }
  #side{
    position: fixed;
    left:20px;
    bottom: 20%;
    width:200px;
  }
  .user_main{
    position: relative;
    left:5%;
    width:650px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
