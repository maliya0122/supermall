<template>
  <div class="checkButton" :class="{'active': checked}" @click="buttonclick">
      <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'checkButton',
    props:{
        checked:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    methods:{
        buttonclick(){
            this.$emit('buttonclick');
        }
    }
}
</script>

<style scoped>
.checkButton{
    width:20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid #ccc;
    position: relative;
}
.checkButton img{
    position: absolute;
    top:2px;
    left: 2px;
}
.checkButton.active{
    background-color: red;
    border:none;
}
</style>