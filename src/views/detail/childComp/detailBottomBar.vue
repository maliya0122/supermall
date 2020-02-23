<template>
    <div class="bottombar">
        <div class="info">
            <div>
                <span class="icon service"></span>
                <span class="text">客服</span>
            </div>
            <div>
                <span class="icon shop"></span>
                <span class="text">店铺</span>
            </div>
            <div>
                <span class="icon select"></span>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="addcart" @click="addcart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
</template>

<script>

export default {
  name: "detailBottomBar",
  components: {},
  props: {
    
  },
  data() {
    return {};
  },
  methods: {
    addcart(){
        this.$emit('addcart')
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
    .bottombar{
        position: fixed;
        height: 49px;
        line-height: 49px;
        background-color: #eee;
        bottom: 0;
        left:0;
        right: 0;
        z-index:100;
    }
    .info{
        display: flex;
        float: left;
        width: 60%;
    }
    .info div{
        flex:1;
        text-align: center;
    }
    .info .icon{
        display: block;
        width: 22px;
        height: 22px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
        position: relative;
        top:9px;
        left:22px;
    }
    .info .text{
        display: block;
        font-size: 13px;
        position: relative;
        top:-7px;
    }
    .info .service {
        background-position:0 -54px;
    }
    .info .shop {
        background-position:0 -98px;
    }
    .addcart,
    .buy{
        float: left;
        width: 20%;
        text-align: center;
        line-height: 49px;
        color:black;
        font-size: 10px;
    }
    .addcart{
        background-color: yellow;
    }
    .buy{
        background-color: #ff5777;
    }
</style>