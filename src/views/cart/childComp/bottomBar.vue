<template>
  <div class="bottomBar">
      <div class="left" @click="allclick">
          <checkButton class="checkButton" :checked="isSelectall"></checkButton>
          <div class="text">全选</div>
      </div>
      <div class="center">
          合计:{{totalprice}}
      </div>
      <div class="right" @click="total">
          去计算({{totalcount}})
      </div>
  </div>
</template>

<script>
import checkButton from './checkButton';
import { mapGetters } from "vuex";

export default {
    name:'bottomBar',
    components:{
        checkButton
    },
    props:{
        
    },
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters(["cartCount", "cartList"]),
        isSelectall(){
            if(!this.cartList.length) return false;
            return !this.cartList.find(item=>{
                return !item.checked
            });
        },
        totalprice(){
            return this.cartList.filter(item=>{
                return item.checked
            }).reduce((prev,item)=>{
                return prev + item.price*item.count;
            },0).toFixed(2)
        },
        totalcount(){
            return this.cartList.filter(item=>{
                return item.checked
            }).length;
        }

    },
    methods:{
        allclick(){
           if(this.isSelectall){
               this.cartList.forEach((val,index)=>{
                   val.checked = false;
               })
           }else{
               this.cartList.forEach((val,index)=>{
                   val.checked = true;
               })
           }
            
        },
        total(){
            
           this.$toast.show('支付暂未开通',2000);
        }
    }
}
</script>

<style scoped>
.bottomBar{
    width: 100%;
    height: 40px;
    background-color: #eee;
    position: fixed;
    bottom:49px;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    line-height: 40px;
    font-size: 15px;
}
.left{
    flex:2;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.center{
    flex:5;
}
.right{
    flex:3;
    background-color: #ff5777;
    color: #fff;
}
</style>