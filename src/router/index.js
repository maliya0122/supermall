import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("../views/home/home.vue");
const category = () => import("../views/category/category.vue");
const cart = () => import("../views/cart/cart.vue");
const profile = () => import("../views/profile/profile.vue");
const detail =() => import("../views/detail/detail.vue");

//1.安装插件
Vue.use(VueRouter);

//3.配置映射关系
const routes = [
  {
    path:"/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/category",
    name: "category",
    component: category
  },
  {
    path: "/cart",
    name: "cart",
    component: cart
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  },
  {
    path:"/detail/:iid",
    name:"detail",
    component:detail
  }
];

//2.初始化示例
const router = new VueRouter({
  routes,
  mode:"history"
});

//4.导出
export default router;
