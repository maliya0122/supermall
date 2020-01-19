<!--  -->
<template>
  <div id="detail">
    <detailNavBar></detailNavBar>

    <Scroll ref="scroll" class="content">
      <detailSwiper :topbarimg="topbarimg"></detailSwiper>
      <detailBaseInfo :BaseInfo="BaseInfo"></detailBaseInfo>
      <detailShopInfo :ShopInfo="ShopInfo"></detailShopInfo>
      <detailGoodsInfo :detailInfo="detailInfo" @imgload="imgload"></detailGoodsInfo>
      <detailGoodsParam :GoodsParam="GoodsParam"></detailGoodsParam>
    </Scroll>

  </div>
</template>
<script>
import Scroll from "../../components/common/scroll/Scroll";

import detailNavBar from "./childComp/detailNavBar";
import detailSwiper from "./childComp/detailSwiper";
import detailBaseInfo from "./childComp/detailBaseInfo";
import detailShopInfo from "./childComp/detailShopInfo";
import detailGoodsInfo from "./childComp/detailGoodsInfo";
import detailGoodsParam from "./childComp/detailGoodsParam";

import { getDetail, BaseInfo,ShopInfo,GoodsParam} from "network/detail";

export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailGoodsParam,
    Scroll
  },
  data() {
    return {
      iid: null,
      topbarimg: [],
      BaseInfo:{},
      ShopInfo:{},
      detailInfo:{},
      GoodsParam:{}
    };
  },
  created() {
    //1.获取商品的iid数据
    this.iid = this.$route.params.iid;
    //2.获取详情页的数据
    this.getDetail(this.iid);
  },
  methods: {
    //封装获取detail数据的函数
    getDetail(data) {
      getDetail(data).then(res => {
        const data = res.data.result;
        console.log(data);

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


      });
    },
    imgload(){
      this.$refs.scroll.refresh();
    }
  },
  computed: {},
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
  bottom: 60px;
}
</style>
