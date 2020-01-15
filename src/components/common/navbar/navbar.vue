<!--  -->
<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>
<style scoped>
  .navbar{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .navbar .left,
  .navbar .right{
    width: 60px;
  }
  .navbar .center{
    flex:1;
  }
</style>