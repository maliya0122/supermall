<template>
  <div class="cartList">
    <Scroll ref="scroll" class="content">
      <div>
        <cart-list-item v-for="item in cartList" 
        :key="item.iid" 
        :item-info="item"
        ></cart-list-item>
      </div>
    </Scroll>
  </div>
</template>

<script>
import cartListItem from "./cartListItem";
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";

export default {
  name: "cartList",
  components: {
    cartListItem,
    Scroll
  },
  props: {
    
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["cartCount", "cartList"])
  },
  watch: {},
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cartList {
  height: calc(100vh - 44px -49px);
  position: relative;
  overflow: hidden;
}
.content {
  height: 100%;
}
</style>>
