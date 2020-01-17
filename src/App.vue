<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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


