import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/home'
import topic from '@/components/topic'
import newroom from '@/components/newroom'
import newplayer from '@/components/newplayer'
import getcard from '@/components/getcard'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Router)

/* 載入並使用Vue Plugin */

/* 等校 var VueResource = require('vue-resource'); */

Vue.use(VueResource)

export default new Router({
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/topic',
      name: 'topic',
      component: topic
    },
    {
      path: '/newroom',
      name: 'newroom',
      component: newroom
    },
    {
      path: '/newplayer',
      name: 'newplayer',
      component: newplayer
    },
    {
      path: '/getcard',
      name: 'getcard',
      component: getcard
    },
  ]
})
