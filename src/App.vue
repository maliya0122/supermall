<template>
  <div id="app">
    <router-view></router-view>
    <MainBar></MainBar>
  </div>
</template>

<script>
import MainBar from 'components/content/mainbar/MainBar'

export default {
  name:"App",
  components:{
    MainBar
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
</style>


