<!--  -->
<template>
  <div class="GoodsList">
    <GoodsListItem v-for="item in goodslist" :key="item.acm" :goodsitem="item"></GoodsListItem>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props:{
    goodslist:{
      type:Array,
      default(){
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
  .GoodsList{
    display: flex;
    flex-wrap: wrap; /*wrap的意思是，根据子元素的宽度进行包裹 */
    justify-content: space-around;
  }
</style>