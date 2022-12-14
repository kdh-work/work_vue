import Vue from 'vue'
import App from './App.vue'
//router을 설정한 파일을 import 
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
