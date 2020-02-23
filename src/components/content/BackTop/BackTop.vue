<!--  -->
<template>
  <div class="BackTop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'BackTop',
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
  .BackTop{
      display: block;
      position: fixed;
      bottom: 50px;
      right: 10px;
      z-index: 1000;
  }
  .BackTop img{
      width: 40px;
      height: 40px;
  }
</style>