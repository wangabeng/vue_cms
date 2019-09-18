import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index/Index'
import UserCenter from '@/components/UserCenter/UserCenter'
import Register from '@/components/Register/Register'
import Login from '@/components/Login/Login'
import HelloWorld from '@/components/HelloWorld/HelloWorld' // @别名 src
import ArticleLists from '@/components/ArticleLists/ArticleLists'

import NotFound from '@/components/NotFound/NotFound'
// import Editor from '@/components/Editor/Editor'
import Modify from '@/components/Modify/Modify'
import PublishNew from '@/components/PublishNew/PublishNew'
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail' // 文章详情
import Error from '@/components/Error/Error'
// import ItemCenter from '@/components/item-center/ItemCenter'
// import Cart from '@/components/cart/Cart'
// import Login from '@/components/login/Login'
import store from '@/store/index'

Vue.use(Router)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      meta: {
        title: '首页',
        requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
      },
      children: [
        /*{
          path: "helloworld",
          component: HelloWorld
        },*/
        {
          path: "articlelists", // {type: 1, page: 1}
          component: ArticleLists,
          keepAlive: true
        },
        {
          path: "articledetail/:id",
          component: ArticleDetail,
          name: 'articledetail'
        },
        {
          path: "publishNew",
          component: PublishNew,
        },
        {
          path: "modify/:id?", // :id?参数可以不传 如果不传 就是上传新文章 如果传 就是修改文章
          component: Modify,
        },
        {
          path: "error",
          component: Error
        },
      ],
      // 设置在当前一级路由为index的时的 二级路由
      redirect:  {path: '/index/articlelists',/* query: {type: 1, page: 1}*/},
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
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

// 路由卫士 鉴权 获取和设置用户token及userInfo信息
router.beforeEach((to, from, next) => {
  // 判断将要跳转的路由是否需要鉴权
  if (to.matched.some(record => record.meta.requireAuth)) {
    /*console.log("需要权限");
    console.log(to);
    console.log("需要权限 end");*/
    // 如果未登陆 跳转到登陆页
    /*if(!store.getters.token) {
      next('/login');
      return;
    }*/
  }
  // 如果不需要登陆权限 直接进入要跳转的路由页面
  next();
})

/*router.afterEach((to, from) => {
  console.log("后置守卫TO：", to, "后置守卫FROM：", from);
})*/

// export default new Router({
export default router