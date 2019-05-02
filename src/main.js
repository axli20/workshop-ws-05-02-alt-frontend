import ToDo from './ToDo.vue'
import Vue from 'vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(ToDo)
}).$mount('#app')
