<!--  -->
<template>
  <div id="home">
    <NavBar class="home-nav"
      ><template v-slot:center><div>购物街</div></template>
    </NavBar>
    <TabControl
        class="tabcontrol"
        :title="['精选', '流行', '新款']"
        @tabClick="tabClick"
        ref="tabcontrol1"
        v-show="isfixed"
    ></TabControl>

    <!-- scroll组件，ref是为了访问scroll子组件的属性和方法，
    绑定probe-type是传值，需不需要实时监听position，
    监听pscroll事件，是监听scroll子组件事件，
    触发了这个事件，就触发自己的contentscroll事件
     -->
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @pscroll="contentscroll"
      :pull-load="true"
      @pullingUp="loadmore"
    >
      <HomeSwiper :banners="banners" @imgload="imgload"></HomeSwiper>
      <RecommendsView :recommends="recommends"></RecommendsView>
      <FeatureView></FeatureView>
      <TabControl
        :title="['精选', '流行', '新款']"
        @tabClick="tabClick"
        ref="tabcontrol2"
      ></TabControl>
      <GoodsList :goodslist="goodslist"></GoodsList>
    </Scroll>

    <BackTop @click.native="topClick" v-show="isShow"></BackTop>
  </div>
</template>
<script>
import HomeSwiper from "./childComp/HomeSwiper";
import RecommendsView from "./childComp/RecommendsView";
import FeatureView from "./childComp/FeatureView";

import NavBar from "components/common/navbar/navbar";
import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/BackTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from 'common/ultils'

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      taboffsetTop:0,
      isfixed:false,
      scrollY:0
    };
  },
  created() {
    //直接调用methods的方法即可
    //1.请求轮播图和推荐的数据
    this.getHomeMultidata();

    //2.请求tabControl的数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  destroyed(){
    console.log("页面被销毁了");
  },
  activated(){
    //页面回来的时候，回到这个位置，最好重新刷新一次
    this.$refs.scroll.BackTop(0,this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    //页面离开的时候记住scrollY值
    this.scrollY = this.$refs.scroll.getscrollY();
    //console.log(this.scrollY);
  },
  mounted(){
    //3.监听imgload事件,图片加载完成就调用scroll的refresh方法进行刷新
    const refresh = debounce(this.$refs.scroll.refresh);
    
    this.$bus.$on("imgload",()=>{
      refresh();
    });

  },
  methods: {
    /* 1.网络请求：
    在methods里面封装请求，写逻辑，在created里面直接调用
    */
    //获取轮播图，商品数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(page, type).then(res => {
        var data = res.data.data.list;
        this.goods[type].list.push(...data);
        this.goods[type].page += 1;
      });
    },
    /*2.监听页面的事件请求*/
    //2.1菜单栏切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      //让两个组件保持一致
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    //2.2监听backTop的点击，点击这个组件就会回弹到（0,0）
    topClick() {
      //console.log(this.$refs.scroll.scroll);
      //this.$refs.name：访问子组件，方法，属性，数据
      this.$refs.scroll.BackTop(0, 0);
    },
    //2.3监听页面的滑动距离position
    contentscroll(position) {
      //1.position>1000，就显示这个backTop按钮
      this.isShow = -position.y > 1000;
      //2.position>taboffsetTop，就固定tabcontrol组件
      this.isfixed = -position.y > this.taboffsetTop
    },
    //2.4上拉加载更多
    loadmore() {
      this.getHomeGoods(this.currentType);
    },
    //2.5监听图片是否加载完成
    imgload(){
      //console.log(this.$refs.tabcontrol2.$el.offsetTop);
      this.taboffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
    }
  },
  computed: {
    goodslist() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tabcontrol{
  position: relative;
  z-index: 9;
}
</style>
