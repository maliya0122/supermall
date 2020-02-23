<!--  -->
<template>
  <div class="info" v-if="Object.keys(BaseInfo).length !== 0">
    <div class="info-title">{{ BaseInfo.title }}</div>
    <div class="info-price">
      <span class="now-price">￥{{ BaseInfo.lowNowPrice }}</span>
      <span class="old-price">￥{{ BaseInfo.lowPrice }}</span>
      <span class="price-desc">{{ BaseInfo.discountDesc }}</span>
    </div>
    <div class="info-sell">
      <span>{{BaseInfo.columns[0]}}</span>
      <span>{{BaseInfo.columns[1]}}</span>
      <span>{{BaseInfo.services[BaseInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <div v-for="index in BaseInfo.services.length-1" :key="index">
          <img :src="BaseInfo.services[index-1].icon" alt="">
          <span>{{BaseInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailBaseInfo",
  components: {},
  props: {
    BaseInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped>
.info {
  padding: 15px;
}
.info-title {
  font-size: 17px;
  font-weight: bold;
  color: #000009;
}
.info-price {
  margin-top: 5px;
  vertical-align: middle;
}
.now-price {
  font-size: 18px;
  color: var(--color-high-text);
  margin-right: 5px;
}
.old-price {
  font-size: 10px;
  margin-right: 5px;
  text-decoration: line-through;
}
.price-desc {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.info-sell {
  font-size: 13px;
  margin: 20px 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  display: flex;
  justify-content: space-between; 
}
.info-service{
  font-size: 12px;
  color: #000;
  padding:20px 0 20px 0;
  display: flex;
  justify-content: space-between;
}
.info-service img{
    width: 10px;
    height: 10px;
}

</style>
