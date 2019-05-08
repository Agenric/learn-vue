import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home'
import Migrate from '../pages/Migrate'
import NotFound from '../pages/NotFound'
import Learn from '../pages/Learn'
import ABai from '../pages/ABai/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/migrate',
      name: 'Migrate',
      component: Migrate
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/abai',
      name: 'ABai',
      component: ABai
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
