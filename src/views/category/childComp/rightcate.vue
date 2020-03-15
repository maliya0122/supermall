<!--  -->
<template>
  <div class="rightcate">
    <div v-for="(item, index) in rightdata" :key="index" class="item">
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    rightdata: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},

  methods: {}
};
</script>
<style lang="less" scoped>
.rightcate {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item {
  padding: 10px;
  width: 33.333%;
  text-align: center;
}
.item img {
  width: 50px;
  height: 50px;
}
</style>
