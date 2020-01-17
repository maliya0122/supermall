<!--  -->
<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiperItem v-for="(item, index) in banners" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
import {swiper, swiperItem} from 'components/common/swiper/index'

export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isload: false
    };
  },
  methods: {
    imgload() {
      //只需要发送一次请求即可，不需要很多次
      if (!this.isload) {
        this.$emit("imgload");
        this.isload = true;
      }      
    }
  }
};
</script>
<style scoped>

</style>
