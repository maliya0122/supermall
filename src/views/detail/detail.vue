<!--  -->
<template>
  <div id="detail">
    <detailNavBar @navclick="navclick" ref="detailNavBar"></detailNavBar>
    <BackTop @click.native="topClick" v-show="isShow"></BackTop>
    <detailBottomBar @addcart="addcart"></detailBottomBar>

    <Scroll ref="scroll" class="content" @pscroll="contentscroll" :probe-type="3">
      <detailSwiper :topbarimg="topbarimg"></detailSwiper>
      <detailBaseInfo :BaseInfo="BaseInfo"></detailBaseInfo>
      <detailShopInfo :ShopInfo="ShopInfo"></detailShopInfo>
      <detailGoodsInfo :detailInfo="detailInfo" @imgload="imgload"></detailGoodsInfo>
      <detailGoodsParam :GoodsParam="GoodsParam" ref="GoodsParam"></detailGoodsParam>
      <detailComment :commentInfo="commentInfo" ref="commentInfo"></detailComment>
      <GoodsList :goodslist="goodslist" ref="goodslist"></GoodsList>
    </Scroll>

  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/BackTop/BackTop";

import detailNavBar from "./childComp/detailNavBar";
import detailSwiper from "./childComp/detailSwiper";
import detailBaseInfo from "./childComp/detailBaseInfo";
import detailShopInfo from "./childComp/detailShopInfo";
import detailGoodsInfo from "./childComp/detailGoodsInfo";
import detailGoodsParam from "./childComp/detailGoodsParam";
import detailComment from "./childComp/detailComment";
import detailBottomBar from "./childComp/detailBottomBar";

import { getDetail, getRecommend,BaseInfo,ShopInfo,GoodsParam } from "network/detail";
import { mapActions } from 'vuex';

export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailGoodsParam,
    detailComment,
    GoodsList,
    Scroll,
    BackTop,
    detailBottomBar
  },
  data() {
    return {
      iid: null,
      topbarimg: [],
      BaseInfo:{},
      ShopInfo:{},
      detailInfo:{},
      GoodsParam:{},
      commentInfo: {},
      goodslist: [],
      scrollTopY:[],
      currentIndex: 0,
      isShow:false
    };
  },
  mixins:['backtopmix'],
  created() {
    //1.获取商品的iid数据
    this.iid = this.$route.params.iid;
    //2.获取详情页的数据
    this.getDetail(this.iid);
  },
  methods: {
    ...mapActions(['addCart']),
    //封装获取detail数据的函数
    getDetail(data) {
      //获取详情数据
      getDetail(data).then(res => {
        const data = res.data.result;

        //1.获取轮播图的图片
        this.topbarimg = data.itemInfo.topImages;
        //2.获取商品的基础信息
        this.BaseInfo = new BaseInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //3.获取店铺信息
        this.ShopInfo = new ShopInfo(data.shopInfo);
        //4.获取商品的详情
        this.detailInfo = data.detailInfo;
        //5.获取商品的参数
        this.GoodsParam = new GoodsParam(data.itemParams);
        //6.获取商品的评价
        if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0];
            }
      });

      //获取推荐信息
      getRecommend().then(res => {
        //console.log(res.data.data.list);
        this.goodslist = res.data.data.list;
      })

    },

    //图片加载完，就计算offsetTop高度
    imgload(){
      this.$refs.scroll.refresh();
      this.scrollTopY = [];
      this.scrollTopY.push(0);
      this.scrollTopY.push(this.$refs.GoodsParam.$el.offsetTop);
      this.scrollTopY.push(this.$refs.commentInfo.$el.offsetTop);
      this.scrollTopY.push(this.$refs.goodslist.$el.offsetTop);
      this.scrollTopY.push(Number.MAX_VALUE);
      //console.log(this.scrollTopY);
    },
    //点击nav，跳转到对应页面
    navclick(index){
      this.$refs.scroll.BackTop(0, -this.scrollTopY[index], 200);
    },
    //页面滑动，得到不同的index
    contentscroll(position) {
      //1.获取y值
      const positionY = -position.y;
      this.isShow = positionY > 1000;

      const length = this.scrollTopY.length;
      //2.循环比较scrollTopY数组里面的值[0, 14639, 15888, 16104, 1.7976931348623157e+308]
      for(let i=0;i<length-1;i++){
        if(this.currentIndex !== i && positionY > this.scrollTopY[i] && positionY < this.scrollTopY[i+1]){
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }
    },
    //回到顶部
    topClick() {
      this.$refs.scroll.BackTop(0, 0);
    },
    //加入购物车，保存数据
    addcart(){
      const product = {};
      product.image = this.topbarimg[0];
      product.title = this.BaseInfo.title;
      product.desc = this.BaseInfo.desc;
      product.price = this.BaseInfo.lowNowPrice;
      product.iid = this.iid;
      // this.$store.dispatch('addCart', product);
      this.addCart(product).then(res=>{
        this.$toast.show(res, 2000);
      })

    }
  },
  computed: {
    
  },
  watch: {}
};
</script>
<style scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>
