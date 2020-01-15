<!--  -->
<template>
  <div class="TabControl">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="TabControlItem"
      @click="itemclick(index)"
    >
      <span :class="{ active: index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  components: {},
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
      itemclick(index){
          this.currentIndex=index;
          this.$emit("tabClick",index);
      }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
.TabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 12px;
  background-color: #fff;
}
.TabControlItem {
  flex: 1;
}
span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
span.active {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
