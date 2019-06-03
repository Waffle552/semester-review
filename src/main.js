import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(vm.mixin)