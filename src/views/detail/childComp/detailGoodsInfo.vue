<!--  -->
<template>
  <div class="goodsInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goodsdesc">
      <p class="before"></p>
      <p>{{ detailInfo.desc }}</p>
      <p class="after"></p>
    </div>
    <p class="goodskey">{{ detailInfo.detailImage[0].key }}</p>
    <div class="goodsimg">
      <img
        v-for="item in detailInfo.detailImage[0].list"
        :src="item"
        :key="item.id"
        @load="imgLoad"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "detailGoodsInfo",
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter:0,
      imglength:0
    };
  },
  methods: {
    imgLoad() {
      this.counter ++;
      if(this.counter === this.imglength){
        this.$emit("imgload");
      }
    }
  },
  computed: {},
  watch: {
    detailInfo(){
      this.imglength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>
<style scoped>
.goodsInfo {
  border-top: 3px solid #eee;
  padding: 10px 0;
}
.goodsdesc {
  padding: 15px;
  font-size: 13px;
  position: relative;
}
.goodsdesc::before,
.goodsdesc::after {
  content: "";
  position: absolute;
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.goodsdesc::before {
  top: -5px;
}
.goodsdesc::after {
  bottom: 1px;
  right: 15px;
}
.before,
.after {
  display: block;
  width: 100px;
  height: 1px;
  position: absolute;
  background-color: #000;
}
.before {
  top: 0;
}
.after {
  bottom: 0;
  right: 15px;
}
.goodskey {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 14px;
}
.goodsimg img {
  width: 100%;
}
</style>
