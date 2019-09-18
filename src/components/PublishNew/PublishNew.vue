<template>
  <div class="m-publish">
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
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'PublishNew',
  data () {
    return {
      subjectT: SUBJECT.NEWS_TYPE
    };
  },
  props: {
    msg: String
  },
  created () {
    // 把vuex中新闻信息清空
    // this.setModiNews(null);
  },
  components: {
    Editor,
  },
  methods: {
    ...mapActions([
      'setModiNews',
    ]),
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";
.m-editor {
  margin: 0;
  padding: 3rem;
}

// 文件上传回显
.show-pic {

  .each-image {
    margin-top: 1rem;
    width: 5rem;
    height: 5rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    
    position: relative;
    i {
      position: absolute;
      top: -.5rem;
      right: -1rem;
      color: var(--orange);
    }

  }
}
</style>