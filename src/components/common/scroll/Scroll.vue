<!--  -->
<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "",
  components: {},
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullLoad:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建scroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, //监听回弹滑动事件，2：不监听回弹
      pullUpLoad: this.pullLoad, //上拉加载事件
      click: true //scroll组件里面默认是不能点击的
    });

    //2.实时监听事件，把这个position发送给父组件 :probe-type="3"
    this.scroll.on("scroll",(position)=>{
      this.$emit("pscroll",position);
    });

    //3.pullingUp事件监听
    this.scroll.on("pullingUp",()=>{
      this.$emit("pullingUp");
    });

  },
  methods: {
    //对scroll方法进行封装，方便调用，为了保证scroll已经挂载成功
    BackTop(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //刷新操作，重新计算height
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    //完成上拉刷新操作
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    },
    //返回页面的y值
    getscrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped></style>
