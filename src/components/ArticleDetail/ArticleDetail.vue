<template>
  <div class="article-detail">
    <!-- 主内容 -->
<div class="container">
    <section id="wrapper">
 
        <div class="row">   
          <div class="col-md-12 mt-3 mb-3">
            <p style='font-size:1.3rem; color: var(--gray);'>当前分类：新闻</p>
          </div>
        </div>
        
        <div class="row">   
          <div class="col-md-12"> 
          
            <div class="article" v-if='!!cur'>

              <h5>{{cur.newsTitle}}</h5>
              <h6 class='text-secondary'>发布时间：{{cur.createTime}}</h6>
              
              <div class="article-content" v-html='cur.newsContent'>
                
                <!-- <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>
                              
                <img src="http://p1.img.cctvpic.com/photoAlbum/page/performance/img/2019/1/1/1546332398982_112.jpg" alt="">
                              
                <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p> -->
              </div>

            </div>

          </div>
        </div> 
        
        <!-- 编辑及切换 -->
        <div class="row pt-4 pb-4">
          <div class="col-md-12">
            <nav>
              <ul class="pagination">
                <li class="page-item mr-5">
                  <a class="page-link" href="#">编辑</a>
                </li>
                <li class="page-item" v-if='pre'>
                  <a class="page-link" href="javascript:;" @click='preTab'>上一篇</a>
                </li>
                <li class="page-item ml-2" v-if='next'>
                  <a class="page-link" href="javascript:;" @click='nextTab'>下一篇</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

    </section>
</div>
  </div>
</template>

<script>
import axios from 'src/api/axios';
import {BASEURL} from "src/api/config.js";

export default {
  name: 'ArticleDetail',
  data () {
    return {
      curId: '',
      pre: null,
      cur: null,
      next: null,
    };
  },
  props: {
    msg: String
  },
  created () {
    var _this = this;
    this.curId = this.$route.params.id;
    console.log('首次进入');

    this.curId = this.$route.params.id;
    this.getCurPage(this.curId);
    // 获取路由页面参数
    /*console.log(this.$route.params.id);
    // 查询该条文章详情及上一条 下一条
    axios.get(BASEURL + '/newscenter/detail', {
        params: {
          id: this.$route.params.id,
        }
      })
      .then(function (response) {
        _this.pre = response.data.data.pre;
        _this.cur = response.data.data.cur;
        _this.next = response.data.data.next;
      })
      .catch(function (error) {
        // console.log(error);
      });*/
  },
  mounted () {
  },
  watch: {
    $route (to, from) {
      // 首次进入 无法监听路由变化
      // console.log('afterEach改变to: ', to);
      // this.curId = this.$route.params.id;
      if (to.name == 'articledetail') {
        // 进入了该页面
        console.log('路由进入了该页面');
        this.curId = this.$route.params.id;
        this.getCurPage(this.curId);
      }
    },

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
          _this.pre = response.data.data.pre;
          _this.cur = response.data.data.cur;
          _this.next = response.data.data.next;
        })
        .catch(function (error) {
          // console.log(error);
        });
    },
    preTab: function () {
      if (!this.pre) {
        return;
      }
      console.log(this.pre.newsId); // 切换页面的时候打印
      this.curId = this.pre.newsId;
      this.getCurPage(this.curId);
    },
    nextTab: function () {
      if (!this.next) {
        return;
      }
      console.log(this.next.newsId); // 切换页面的时候打印
      this.curId = this.next.newsId;
      this.getCurPage(this.curId);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";
.article {
  margin: 0;
  padding: 0;
}
</style>
