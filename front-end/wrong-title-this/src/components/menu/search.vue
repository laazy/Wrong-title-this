<template>
  <Input id="search" v-model="value" placeholder="请输入搜索内容">
    <Select v-model="select" slot="prepend" style="width: 80px">
      <Option value="text">文本搜索</Option>
      <Option value="re">正则匹配</Option>
    </Select>
    <Button slot="append" icon="ios-search"></Button>
  </Input>
</template>
<script>
    export default {
      name: "search"
      ,
      data() {
        return {
          value:'',
          select:"text"
        }
      }
    }
</script>

<style scoped>
  #search{
    width:500px;
  }
</style>
