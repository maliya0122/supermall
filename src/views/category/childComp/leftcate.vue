<!--  -->
<template>
  <div class="leftcate">
    <div
      v-for="(item, index) in leftdata"
      :key="index"
      :class="{item, active: index === currentIndex }"
      @click="itemclick(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    leftdata: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("itemclick", index);
    }
  }
};
</script>
<style lang="less" scoped>
.leftcate {
  overflow: hidden;
  text-align: center;
}
.item {
  width: 100%;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
}
.active {
  background-color: #fff;
  color: red;
}
</style>
