<!--  -->
<template>
  <div class="listItem">
    <img :src="goodsitem.show.img" alt="" />
    <div class="item-info">
      <p class="info-title">{{ goodsitem.title }}</p>
      <span class="info-price">{{ goodsitem.price }}</span>
      <span class="info-cfav">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    goodsitem: {
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
.listItem {
  width: 46%;
  position: relative;
  padding-bottom: 40px;
  font-size: 10px;
}
.listItem img {
  width: 100%;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}
.item-info {
  position: absolute;
  left: 0;
  right: 0;
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；*/
}
.info-title {
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.info-price {
  color: var(--color-high-text);
  margin-right: 40px;
}
.info-cfav {
  color: var(--color-high-text);
  position: relative;
}
.info-cfav::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -17px;
  width: 14px;
  height: 14px;
  background :url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
