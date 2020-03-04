import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入toast组件
import toast from 'components/common/toast'
import fastclick from 'fastclick'
//图片懒加载
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false

//使用fastclick
fastclick.attach(document.body)

//安装toast插件
Vue.use(toast)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
