<!--  -->
<template>
  <div class="shopInfo">
    <div class="shop-title">
      <img :src="ShopInfo.shopLogo" alt="">
      <span>{{ShopInfo.name}}</span>
    </div>
    <div class="shop-box">
      <div class="shop-left">
        <div>
          <p class="shop-text">{{ShopInfo.cGoods}}</p>
          <p>全部商品</p>
        </div>
        <div>
          <p class="shop-text">{{ShopInfo.cSells}}</p>
          <p>销量</p>
        </div>
      </div>
      <div class="shop-right">
        <table>
          <tr v-for="(item, index) in ShopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <a href="#" class="link">进店逛逛</a>
  </div>
</template>
<script>
export default {
  name: 'detailShopInfo',
  components: {
    
  },
  props:{
    ShopInfo:{
      type:Object,
      default(){
        return {}
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
  .shopInfo{
    border-top: 5px solid #eee;
    margin-bottom: 25px;
  }
  .shop-title{
    padding: 25px 8px;
    display: flex;
    align-items:center;
  }
  .shop-title img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-title span{
    margin-left: 10px;
    color:#000;
  }
  .shop-box{
    display: flex;
  }
  .shop-left{
    flex:1;
    color:#000;
    display: flex;
    text-align: center;
    align-items:center;
  }
  .shop-left div{
    flex:1;
    font-size: 15px;
  }
  .shop-left div:last-child{
    border-right: 2px solid #ccc;
  }
  .shop-text{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .shop-right{
    flex:1;
    display: flex;
    font-size: 13px;
    color:#000;
    justify-content:center;
  }
  .shop-right td{
    padding: 3px;
  }
  .score{
    color: #5ea732;
  }
  .score-better{
    color: #f13e3a;
  }
  .better{
    color:#fff;
    background-color: #5ea732;
  }
  .better-more{
    color:#fff;
    background-color:#f13e3a;
  }
  .link{
    font-size: 15px;
    width: 120px;
    height: 30px;
    line-height: 10px;
    margin: 20px auto;
    text-align: center;
    display: block;
    padding:10px 20px;
    border-radius: 10px;
    background-color: #eee;
  }

</style>