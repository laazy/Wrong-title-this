<template>
  <div id="setting">
    <Info v-bind:username="name" v-bind:phone="phone" >
    </Info>
  </div>

</template>

<script>
  import Info from "../member/register"
    export default {
      name: "setting",
      components: {
        Info
      },
      data() {
        return {
          name: "111",
          phone: "84652325"
        }
      }
    }
</script>

<style scoped>
  #setting{
    width: 800px;
    margin-top:200px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
