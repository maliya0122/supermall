<template>
  <div class="cartListItem">
      <div class="left">
         <checkButton :checked="itemInfo.checked" @buttonclick='buttonclick'></checkButton> 
      </div>
      <div class="center">
          <img :src="imgurl" alt="">
      </div>
      <div class="right">
          <div class="title">{{itemInfo.title}}</div>
          <div class="desc">商品描述：{{itemInfo.desc}}</div>
          <div class="info">
              <div class="price">￥{{itemInfo.price}}</div>
              <div class="count">×{{itemInfo.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import checkButton from './checkButton'

export default {
    name:'cartListItem',
    components:{
        checkButton
    },
    props:{
        itemInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
       return {
           
       }
    },
    computed:{
        imgurl(){
            return "http:" + this.itemInfo.image;
        }
        
    },
    methods:{
        buttonclick(){
            this.itemInfo.checked = !this.itemInfo.checked;
        }
    }
}
</script>

<style scoped>
.cartListItem{
    width: 100%;
    height: 120px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ccc;
}
.left{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.center{
    flex:2;
}
.center img{
    display: block;
    width: 80px;
    height: 100px;
    border-radius: 10px;
    margin:10px auto;
}
.right{
    flex:7;
    font-size: 17px;
    color: #333;
    padding: 10px;
    position: relative;
    overflow: hidden;
}
.title,
.desc{
    display: inline-block;
    white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow:ellipsis;
}
.desc{
    font-size: 14px;
}
.info{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.price{
    color: var(--color-tint);
}
</style>>