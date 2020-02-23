<!--  -->
<template>
  <div id="cart">
    <!-- 导航栏 -->
    <NavBar class="cart-nav">
      <template v-slot:center>
        <div>购物车({{cartCount}})</div>
      </template>
    </NavBar>

    <!-- 购物车列表 -->
    <cartList class="cartList"></cartList>

    <!-- 结算 -->
    <bottomBar></bottomBar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/navbar";
import cartList from "./childComp/cartList";
import bottomBar from "./childComp/bottomBar";

import { mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    NavBar,
    cartList,
    bottomBar
  },
  data() {
    return {
      bochecked: null,
      totalcount: 0,
      totalprice: 0
    };
  },
  methods: {
    
  },
  computed: {
    ...mapGetters(["cartCount", "cartList"])
  },
  watch: {}
};
</script>
<style scoped>
#cart {
  height: 100vh;
  position: relative;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.cartList {
  position: absolute;
  top: 44px;
  bottom: 89px;
  width: 100%;
}
</style>