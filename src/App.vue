<template>
  <div id="app">
    <!-- 侧边栏 -->
    <SideBar></SideBar>
    <!-- 侧边栏 end -->
    
    <!-- header -->
    <MHeader></MHeader>
    <!-- header end -->

    <!-- 主内容容器 -->
    <!-- <div class="content-wrapper mh100 container ">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      主内容
      <div class="inner-content mh100">
        <i class="fa fa-address-book-o" aria-hidden="true"></i>
        <router-view></router-view>
        <router-link to="/index">Go to index</router-link>
        <br>
        <router-link to="/usercenter">Go to usercenter</router-link>
        <br>
        <router-link to="/helloworld">Go to helloworld</router-link>
        <br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      </div>
      主内容 end
      <footer>footer is me</footer>
    </div> -->
    <!-- 主内容容器 end -->

    <div class="content-wrapper">
      <div class="content-main">
          <!-- 主内容 -->
          <div class="content-inner">
            <img alt="Vue logo" src="./assets/logo.png">
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            <router-view></router-view>
            <router-link to="/index">Go to index</router-link>
            <br>
            <router-link to="/usercenter">Go to usercenter</router-link>
            <br>
            <router-link to="/helloworld">Go to helloworld</router-link>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          </div>
          <!-- 主内容 end -->
      </div>
    </div>
    <!-- footer -->
    <MFooter></MFooter>
    <!-- footer end -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
import Index from './components/Index/Index.vue'
import SideBar from './base/SideBar/SideBar.vue'
import MHeader from './base/MHeader/MHeader.vue'
import MFooter from './base/MFooter/MFooter.vue'

export default {
  name: 'app',
  components: {
    SideBar,
    MHeader,
    MFooter,
  }
}
</script>

<style scoped lang="scss">
@import "common/sass/reset.scss";

#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 75px;
  padding-left: 250px;

  .content-wrapper {
    min-height: 100%;
    background-color: #f8f9fc;

    .content-main {
      margin: 0 auto;
      // background-color: #f7f7f7;
      .content-inner {

      }
    }

  }
}
</style>
