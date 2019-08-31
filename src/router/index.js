import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index/Index'
import UserCenter from '@/components/UserCenter/UserCenter'
import Register from '@/components/Register/Register'
import HelloWorld from '@/components/HelloWorld/HelloWorld' // @别名 src
import NotFound from '@/components/NotFound/NotFound'
// import ItemCenter from '@/components/item-center/ItemCenter'
// import Cart from '@/components/cart/Cart'
// import Login from '@/components/login/Login'

Vue.use(Router)

const router = new Router({
  // 如果开启history模式 会出现如果二级路由找不到 无法跳转到404页面的错误 此时需要后端配合 重定向到index.html页
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: "helloworld",
          component: HelloWorld          
        },
      ],
      // 设置在当前一级路由为index的时的 二级路由
      redirect:'/index/helloworld'
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    /*{
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        title: '个人中心',
        requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
      }
    },*/
    {
      path: '*', //全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
      component: NotFound,
    },

  ],

})

// router.beforeEach((to, from, next) => {
  /*console.log("路由TO：", to, "路由FROM：", from, "路由Next：", next);
  console.log(router);*/
  // 判断将要跳转的路由是否需要鉴权
  /*console.log(to.matched.some(record => record.meta.requireAuth));
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 判断本地cookie是否包含sessionId字段
    // 
  }
  next();*/
  /*if (to.matched.length === 0) { //匹配前往的路由不存在
    from.name ? next({
      name: from.name
    }) : next('/404'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else {
    next(); //如果匹配到正确跳转
  }*/
// })

/*router.afterEach((to, from) => {
  console.log("后置守卫TO：", to, "后置守卫FROM：", from);
})*/

// export default new Router({
export default router