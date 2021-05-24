// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App, },
//   template: '<App/>'
// })

new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');


// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');