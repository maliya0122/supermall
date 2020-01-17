<!--  -->
<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" />
      </template>
      <template v-slot:center>
        <div class="itembox">
          <span v-for="(item, index) in title" :key="index" class="item">
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
      title: ["商品", "参数", "评论", "推荐"]
    };
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style scoped>
    .itembox{
        display: flex;
        font-size: 14px;
        text-align: center;
    }
    .item{
        flex: 1;
    }
</style>
