<!--  -->
<template>
  <swiper>
    <swiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiperItem>
  </swiper>
</template>
<script>

import {swiper,swiperItem} from 'components/common/swiper/index'

export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperItem
  },
  props: {
      banners: {
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
  
</style>