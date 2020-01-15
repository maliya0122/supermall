<!--  -->
<template>
  <div class="tabbarItem" @click="itemclick">
    <div v-if="!isActive"><slot name="item_icon"></slot></div>
    <div v-else><slot name="item_icon_active"></slot></div>
    <div :style="activestyle"><slot name="item_text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'tabbarItem',
  components: {
    
  },
  props:{
    path:String,
    styleColor: {
      type: String,
      default: "var(--color-high-text)"
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  methods: {
    itemclick(){
      this.$router.push(this.path);//路由跳转
    }
  },
  computed: {
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activestyle(){
      return this.isActive ? { color: this.styleColor } : {};
    }
  },
  watch: {
    
  }
}
</script>
<style scoped>
.tabbarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}
.tabbarItem img {
  width:19px;
  height: 19px;
  margin-top: 5px;
  margin-bottom: 5px;
  vertical-align: middle;
}
</style>