import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index/a'
  },
  {
    path: '/index',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      keepAlive: false
    },
    children: [{
      path: 'a',
      name: 'componentA',
      meta: {
        keepAlive: true
      },
      component: () => import('../components/ComponentA')
    },
    {
      path: 'b',
      name: 'componentB',
      meta: {
        keepAlive: true
      },
      component: () => import('../components/componentB')
    }
    ]
  },
  {
    path: '/c',
    name: 'componentC',
    component: () => import('../components/componentC')
  }
  ]
})
