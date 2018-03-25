<template>
    <Dropdown id="drop_menu">
      <a href="javascript:void(0)" >
        <Avatar icon="person" />
        {{user_id}}
        <Icon type="arrow-down-b"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>我的错题</DropdownItem>
        <DropdownItem>个人中心</DropdownItem>
        <DropdownItem>注销登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
</template>

<script>
    export default {
        name: "person",
      data(){
          return{
            user_id:"test_user1"
          }
      }
    }
</script>

<style scoped>
#person{
  width: auto;
  height: auto;
}
</style>
