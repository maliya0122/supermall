<!--  -->
<template>
  <swiper class="detailSwiper" v-if="topbarimg.length">
    <swiperItem v-for="item in topbarimg" :key="item.id">
      <img :src="item" alt="">
    </swiperItem>
  </swiper>
</template>
<script>
import {swiper, swiperItem} from 'components/common/swiper/index'

export default {
  name: 'detailSwiper',
  components: {
    swiper,
    swiperItem
  },
  props:{
    topbarimg:{
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
  .detailSwiper{
    height: 200px;
    overflow: hidden;
  }
</style>