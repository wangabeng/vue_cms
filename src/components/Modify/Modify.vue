<template>
  <div class="m-modify">
    <Editor v-bind:subject="subjectT"></Editor>
  </div>
</template>

<script>
import E from 'wangeditor'
// import axios from 'axios'
import axios from 'src/api/axios';
import {BASEURL, SUBJECT} from "src/api/config.js"

import Editor from '@/components/Editor/Editor.vue'
// import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
  name: 'Modify',
  data () {
    return {
      subjectT: SUBJECT.NEWS_TYPE
    };
  },
  props: {
    msg: String
  },
  components: {
    Editor,
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";

</style>