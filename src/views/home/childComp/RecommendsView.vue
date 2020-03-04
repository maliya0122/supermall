<!--  -->
<template>
  <div class="recommends">
      <div class="recommendsItem" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img v-lazy="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendsView',
  components: {
    
  },
  props:{
      recommends:{
        type: Array,
        default() {
          return []
      }
    }
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
  .recommends{
      display: flex;
      width: 100%;
      text-align: center;
      font-size: 12px;
      padding:10px 0 16px 0;
      border-bottom: 8px solid #eee;
  }
  .recommendsItem{
      flex:1;
  }
  .recommendsItem img{
      width: 65px;
      height: 65px;
      margin-bottom: 5px;
  }
</style>