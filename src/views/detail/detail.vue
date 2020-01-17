<!--  -->
<template>
  <div>
      <detailNavBar></detailNavBar>
      <detailSwiper></detailSwiper>
  </div>
</template>
<script>
import detailNavBar from './childComp/detailNavBar'
import detailSwiper from './childComp/detailSwiper'


import { getDetail } from 'network/detail'

export default {
  name: 'detail',
  components: {
    detailNavBar,
    detailSwiper
  },
  data() {
    return {
      iid : null,
      topbarimg:null
    }
  },
  created(){
      //1.获取商品的iid数据
      this.iid = this.$route.params.iid;
      //2.获取详情页的数据
      this.getDetail(this.iid);
  },
  methods: {
    //封装获取detail数据的函数
    getDetail(data){
      getDetail(data).then( res =>{
        console.log(res);
        //获取轮播图的图片
        this.topbarimg = res.data.result.itemInfo.topImages;
      })
    }
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>
<style scoped>
  
</style>