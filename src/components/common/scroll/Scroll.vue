<!--  -->
<template>
  <div ref="wrapper">
      <div>
          <slot></slot>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
  name: '',
  components: {
    
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:3, //监听回弹滑动事件，2：不监听回弹
      pullUpLoad:true,   //上拉加载事件
      click:true   //scroll组件里面默认是不能点击的
    });

    // this.scroll.on("scroll",(position)=>{
    //   //console.log(position);
    // });

    // this.scroll.on("pullingUp",()=>{
    //   console.log("上拉加载更多");
    // });

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