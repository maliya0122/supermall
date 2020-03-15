<!--  -->
<template>
  <div id="category">
    <NavBar class="category-nav"
      ><template v-slot:center><div>商品分类</div></template>
    </NavBar>
    <div class="content">
      <Scroll :probe-type="3" class="left">
        <leftcate :leftdata="leftdata" @itemclick="itemclick"></leftcate>
      </Scroll>
      <Scroll :probe-type="3" class="right">
        <rightcate :rightdata="rightdata"></rightcate>
      </Scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/navbar";
import Scroll from "components/common/scroll/Scroll";
import leftcate from "./childComp/leftcate";
import rightcate from "./childComp/rightcate";
import { getCategory,getSubcategory,getCategoryDetail } from "network/category"

export default {
  name: "category",
  components: {
    NavBar,
    Scroll,
    leftcate,
    rightcate
  },
  data() {
    return {
      leftdata:[],
      rightdata:[],
      maitKey:null,
      miniWallkey:null
    };
  },
  created(){
    this.getCategory()
  },
  methods: {
    getCategory(){
      getCategory().then(res=>{
        this.leftdata = res.data.data.category.list;
        this.maitKey = res.data.data.category.list[0].maitKey;
        this.miniWallkey = res.data.data.category.list[0].miniWallkey;
        //console.log(this.leftdata)
        this.getSubcategory()
      })
    },
    getSubcategory(){
      getSubcategory(this.maitKey).then(res=>{
        this.rightdata = res.data.data.list
        console.log(this.rightdata)
      })
    },
    itemclick(data){
      this.leftdata.forEach((item,index)=>{
        if(data == index){
          this.maitKey = item.maitKey;
        }
      })
      this.getSubcategory()
    }
  },
  computed: {}
};
</script>
<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.category-nav{
  background-color: var(--color-tint);
  color:#fff;
  position: fixed;
  z-index: 99;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.left{
  flex:3;
  height: 100%;
}
.right{
  flex:7;
  height: 100%;
}
</style>