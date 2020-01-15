<!--  -->
<template>
  <div id="home">
    <NavBar class="home-nav"
        ><template v-slot:center><div>购物街</div></template>
    </NavBar>
    <Scroll class="content">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <RecommendsView :recommends="recommends"></RecommendsView>
      <FeatureView></FeatureView>
      <TabControl class="tabcontrol"
        :title="['精选', '流行', '新款']"
        @tabClick="tabClick"
      ></TabControl>
      <GoodsList :goodslist="goodslist"></GoodsList>
    </Scroll>
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

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
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
      currentType: "pop"
    };
  },
  created() {
    //直接调用methods的方法即可
    //1.请求轮播图和推荐的数据
    this.getHomeMultidata(),
      //2.请求tabControl的数据
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  methods: {
    // 1.网络请求：在methods里面封装请求，写逻辑，在created里面直接调用
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
    //2.监听页面请求
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
.tabcontrol{
  position: sticky;
  top:40px;
  z-index: 9;
}
.content{
  position: absolute;
  top: 44px;
  bottom:49px;
  left:0;
  right: 0;
  overflow: hidden;
}
</style>
