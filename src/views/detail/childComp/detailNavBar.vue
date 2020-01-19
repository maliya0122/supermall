<!--  -->
<template>
  <div>
    <NavBar class="detailNavBar">
      <template v-slot:left>
        <img
          src="~assets/img/common/back.svg"
          class="item-img"
          @click="imgClick"
        />
      </template>
      <template v-slot:center>
        <div class="itembox">
          <span
            v-for="(item, index) in title"
            :key="index"
            class="item"
            @click="itemClick(index)"
            :class="{ active: index === currentIndex }"
          >
            {{ item }}
          </span>
        </div>
      </template>
    </NavBar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/navbar";

export default {
  name: "detailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods: {
    imgClick() {
      this.$router.back();
    },
    itemClick(index){
      this.currentIndex = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
.detailNavBar{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
.itembox {
  display: flex;
  font-size: 14px;
  text-align: center;
}
.item {
  flex: 1;
}
.item-img {
  margin-top: 13px;
}
.active{
  color : var(--color-high-text);
}
</style>
