<!--  -->
<template>
  <div id="category">
    <NavBar class="category-nav"
      ><template v-slot:center><div>商品分类</div></template>
    </NavBar>
    <Scroll class="content">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
      <li>12</li>
    </Scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/navbar";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "category",
  components: {
    NavBar,
    Scroll
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.category-nav{
  background-color: var(--color-tint);
  color:#fff;
  position: fixed;
  z-index: 99;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>