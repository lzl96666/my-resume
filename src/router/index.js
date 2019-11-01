import Vue from 'vue'
import Router from 'vue-router'
//组件
import MyResume from '@/views/MyResume'
import My from '@/views/my'
import Js from '@/views/js'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'myResume',
      component: MyResume
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/js',
      name: 'js',
      component: Js
    }
  ]
})

export default router
