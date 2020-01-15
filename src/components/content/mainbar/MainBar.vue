<!--  -->
<template>
  <div id="MainBar">
    <tabbar>
      <tabbarItem path="/home">
        <template v-slot:item_icon><img src="~assets/img/tabbar/home.svg"></template>
        <template v-slot:item_icon_active><img src="~assets/img/tabbar/home_active.svg"></template>
        <template v-slot:item_text><p>首页</p></template>
      </tabbarItem>
      <tabbarItem path="/category">
        <template v-slot:item_icon><img src="~assets/img/tabbar/category.svg"></template>
        <template v-slot:item_icon_active><img src="~assets/img/tabbar/category_active.svg"></template>
        <template v-slot:item_text><p>分类</p></template>
      </tabbarItem>
      <tabbarItem path="/cart">
        <template v-slot:item_icon><img src="~assets/img/tabbar/shopcart.svg"></template>
        <template v-slot:item_icon_active><img src="~assets/img/tabbar/shopcart_active.svg"></template>
        <template v-slot:item_text><p>购物车</p></template>
      </tabbarItem>
      <tabbarItem path="/profile">
        <template v-slot:item_icon><img src="~assets/img/tabbar/profile.svg"></template>
        <template v-slot:item_icon_active><img src="~assets/img/tabbar/profile_active.svg"></template>
        <template v-slot:item_text><p>我的</p></template>
      </tabbarItem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbarItem from 'components/common/tabbar/tabbarItem'

export default {
  name: 'MainBar',
  components: {
    tabbar,
    tabbarItem
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
  #MainBar{
    height: 49px;
  }
</style>