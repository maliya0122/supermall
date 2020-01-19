<!--  -->
<template>
  <div class="GoodsParam" v-if="Object.keys(GoodsParam).length !== 0">
    <div class="info">
      ※
      以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。
    </div>
    <table class="tableSize">
      <tr v-for="item in GoodsParam.rule" :key="item.id">
        <td v-for="index in item.length" :key="index">{{ item[index - 1] }}</td>
      </tr>
    </table>

    <table class="tableInfo">
      <tr v-for="item in GoodsParam.info" :key="item.id">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "detailGoodsParam",
  components: {},
  props: {
    GoodsParam: {
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
.GoodsParam {
  padding: 20px 10px;
  border-top: 3px solid #eee;
}
.info {
  font-size: 12px;
  margin-bottom: 10px;
}
.tableSize,
.tableInfo {
  display: block;
  width: 100%;
  font-size: 13px;
  padding:5px;
}
.tableSize{
  padding-bottom: 0;
}
.tableInfo{
  padding-top : 0;
}
.tableSize tr {
  display: block;
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.tableSize td {
  flex : 1;
}
.tableSize td:first-of-type {
  flex: 1;
}
.tableInfo tr{
  display: block;
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.tableInfo tr:first-of-type{
  border-top: 2px solid #eee;
}
.tableInfo td:first-of-type{
  flex:1;
}
.tableInfo td:last-of-type{
  flex:3;
  overflow: hidden;
}
</style>
