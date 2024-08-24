import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import MasonryWall from '@yeger/vue2-masonry-wall'

Vue.config.productionTip = false
Vue.use(MasonryWall)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

