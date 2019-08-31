<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-link to="/index">Go to index</router-link>
    <br>
    <router-link to="/usercenter">Go to usercenter</router-link>
    <br>
    <router-link to="/helloworld">Go to helloworld</router-link> -->
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
}
</style>
