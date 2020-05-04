import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuemsg from './plugins/index'
Vue.config.productionTip = false
Vue.use(vuemsg)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
