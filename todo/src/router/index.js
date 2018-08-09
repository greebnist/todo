import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: [{
        path: 'HelloWorld',
        component: HelloWorld
      }]
    },
    {
      path: '*',
      redirect: '/HelloWorld'
    }
  ]
})
