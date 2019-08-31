<template>
  <div id="m-index">
    <!-- 侧边栏 -->
    <SideBar></SideBar>
    <!-- 侧边栏 end -->
    
    <!-- header -->
    <MHeader></MHeader>
    <!-- header end -->

    <div class="content-wrapper">
      <div class="content-main">
          <!-- 主内容 -->
          <div class="content-inner">
            <router-view></router-view>
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
import HelloWorld from 'components/HelloWorld/HelloWorld.vue'
import Index from 'components/Index/Index.vue'
import SideBar from 'base/SideBar/SideBar.vue'
import MHeader from 'base/MHeader/MHeader.vue'
import MFooter from 'base/MFooter/MFooter.vue'

export default {
  name: 'Index',
  components: {
    SideBar,
    MHeader,
    MFooter,
  }
}
</script>

<style scoped lang="scss">
@import "common/sass/reset.scss";

#m-index {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 75px;
  padding-left: 250px;

  .content-wrapper {
    min-height: 100%;
    padding-bottom: 5rem;
    box-sizing: border-box;
    background-color: #f8f9fc;

    .content-main {
      margin: 0 auto;
      .content-inner {

      }
    }

  }
}
</style>
