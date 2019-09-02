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
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {};
  },
  components: {
    SideBar,
    MHeader,
    MFooter,
  },
  computed: {
    ...mapGetters([
      'token',
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'setToken',
      'setUserInfo'
    ])
  },
  mounted () {
    // 获取token
    /*this.setToken("lisi");
    console.log(this.token);
    console.log(this.userInfo);*/
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
