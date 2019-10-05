<template>
  <div class="m-modify">
    <Editor
      v-bind:subject="subjectT"
      v-bind:aritcleContent='aritcleContent'>
      <div class="slot-container" slot='categoryTitle'>
        <h4><span>分类：</span>新闻中心</h4>
        <h5 v-if='aritcleContent'>新闻编号：{{aritcleContent.newsId}}</h5>
        <h5 v-if='aritcleContent'>创建日期：{{aritcleContent.createTime}}</h5>
        <!-- <h5><span>编号：</span><span></span></h5> -->
      </div>
    </Editor>
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
      subjectT: SUBJECT.NEWS_TYPE, // 新闻中心 主题
      cur: '', // 当前页内容 
      aritcleContent: null, // 文章内容详情
    };
  },
  watch: {
    $route (to, from) {
      var _this = this;
      // console.log('路由进入了modify页面', to);
      if (to.name == 'modify') {
        // 进入了该页面
        console.log('路由进入了modify页面');
        this.curId = this.$route.params.id;
        // this.getCurPage(this.curId);
        // 获取文章详情
        _this.getCurPage(this.curId);
      }
    },

  },
  computed: {
    /*aritcleNo () { // 作为参数传递过去
      return this.$route.params.id;
    },*/
  },
  props: {
    msg: String
  },
  components: {
    Editor,
  },
  methods: {
    getCurPage: function (id) {
      var _this = this;
      // 查询该条文章详情及上一条 下一条
      axios.get(BASEURL + '/newscenter/detail', {
          params: {
            id: id,
          }
        })
        .then(function (response) {
          _this.aritcleContent = response.data.data.cur;
          console.log('_this.aritcleContent', _this.aritcleContent)
        })
        .catch(function (error) {
          // console.log(error);
        });
    },
  },
  mounted () {
  },
  created () {
    console.log('首次 路由进入了modify页面');
    this.curId = this.$route.params.id;
    // this.getCurPage(this.curId);
    // 获取文章详情
    this.getCurPage(this.curId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";
.slot-container {
  h4 {
    margin-bottom: 1.2rem;
  }
  h5 {
    margin-bottom: 1.2rem;
  }
}
</style>