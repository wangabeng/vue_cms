<template>
  <div id="app">
    <!-- 侧边栏开始 -->
    <!-- 侧边栏开始 结束 -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <router-link to="/index">Go to index</router-link>
    <br>
    <router-link to="/usercenter">Go to usercenter</router-link>
    <br>
    <router-link to="/helloworld">Go to helloworld</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
import Index from './components/Index/Index.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
