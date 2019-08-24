import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index/Index'
import UserCenter from '@/components/UserCenter/UserCenter'
import HelloWorld from '@/components/HelloWorld/HelloWorld' // @别名 src
// import ItemCenter from '@/components/item-center/ItemCenter'
// import Cart from '@/components/cart/Cart'
// import Login from '@/components/login/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        title: '个人中心',
        requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
      }
    },
  ],

})

router.beforeEach((to, from, next) => {
  console.log("路由TO：", to, "路由FROM：", from, "路由Next：", next);
  console.log(router);
  next();
})

router.afterEach((to, from) => {
  console.log("后置守卫TO：", to, "后置守卫FROM：", from);
})

// export default new Router({
export default router