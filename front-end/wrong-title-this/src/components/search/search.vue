<template>
  <div id="search">
    <br>
    <SearchList :pass_add="false">
    </SearchList>
  </div>
</template>

<script>
  import SearchList from "../question/question_list"
    export default {
        name: "search",
        components:{
          SearchList
        }
    }
</script>

<style scoped>
  #search{
    position: relative;
    left:5%;
    width:650px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
