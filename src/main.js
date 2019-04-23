import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import routes from './routes'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes
}).$mount('#app')
