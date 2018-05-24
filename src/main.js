// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Todolist from './Todolist' // 引用模块文件Todolist.vue 到本地，且本地模块名为Todolist

Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
/* eslint-disable */

new Vue({                   // 新建
  el : '#app',              // 对象调用标签名 #app
  components: { Todolist }, // 在该页面，激活Todolist这个模块
  template: '<Todolist />'  // 模板名 Todolist
})
