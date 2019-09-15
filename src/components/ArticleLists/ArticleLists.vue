<template>
  <div class="hello">
    <!-- 主内容 -->
    <div class="container-fluid">
      <!-- Page Header-->
      <div class="card">
        <div class="card-header">
          <h5>当前分类：新闻</h5>
        </div>
        <div class="card-body">
          <div class="container-fluid">
            <!-- 表格 -->
            <div class="row">
              <div class="col-md-12">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>
                        发布时间
                      </th>
                      <th>
                        标题
                      </th>
                      <th>
                        发布者
                      </th>
                      <!-- <th>
                        Status
                      </th> -->
                      <th>
                        详情
                      </th>
                      <th>
                        编辑
                      </th>
                      <th>
                        删除
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- 每一行 -->
                    <tr class="" v-for="(item, index) in newsData.content">
                      <td>
                        {{item.createTime}}
                      </td>
                      <td>
                        {{item.newsTitle}}
                      </td>
                      <td>
                        {{item.newsAuthor}}
                      </td>
                      <td>
                        <a href="javascript:;"  class="text-primary" @click='detail(item.newsContent)'>详情{{item.newsContent}}</a>
                      </td>
                      <td>
                        <a href="#"  class="text-primary">编辑</a>
                      </td>
                      <td>
                        <a href="#"  class="text-primary">删除</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- 分页 -->
            <div class="container-fluid mt-4">
              <div class="row">
                <div class="col-md-12">
                  <nav>
                    <ul class="pagination  justify-content-center">
                      <li class="page-item" v-if='newsData.ifPrevious'>
                        <a class="page-link" href="javascript:;" @click='preTab'>上一页</a>
                      </li>
                      <li class="page-item" v-for="(item, index) in pageList">
                        <a class="page-link d-flex" :class="{'text-warning': (index + 1) === newsData.curPage}" href="javascript:;" @click='indexTab(index+1)'>{{index + 1}}</a>
                      </li>
                      <li class="page-item" v-if='newsData.ifNext'>
                        <a class="page-link" href="javascript:;" @click='nextTab'>下一页</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'src/api/axios';
import {BASEURL} from "src/api/config.js"

export default {
  name: 'ArticleLists',
  data () {
    return {
      curRequest: {
        requestPage: 1, // 默认从显示意义的第一页开始
        PAGESIZE: 3 // 默认每页容量有3条内容 
      },
      newsData: [],
      pageList: [],
      pageSubject: "新闻中心"
    };
  },
  props: {
    msg: String
  },
  methods: {
    getNewsLists: function (curpage, pagesize) {
      var _this = this;
      // 请求文章列表
      axios.get(BASEURL + '/newscenter/lists', {
          params: {
            curpage: curpage,
            pagesize: pagesize,
          }
        })
        .then(function (response) {
          // console.log(response);
          _this.newsData = response.data.data;
          _this.pageList.length = response.data.data.TotalPages;
          // console.log(_this.newsData);

        })
        .catch(function (error) {
          // console.log(error);
        });
    },
    // 通过页码切换
    indexTab: function (index) {
      this.getNewsLists(index, this.curRequest.PAGESIZE);
    },
    // 下一页
    nextTab: function () {
      if (this.newsData.ifNext) {
        this.getNewsLists(++this.curRequest.requestPage, this.curRequest.PAGESIZE);
      } else {
        return;
      }
    },
    // 上一页
    preTab: function () {
      if (this.newsData.ifPrevious) {
        this.getNewsLists(--this.curRequest.requestPage, this.curRequest.PAGESIZE);
      } else {
        return;
      }
    },
    // 查看详情
    detail (content) {
      console.log(content);
      // 路由跳转
      this.$router.push({ path: '/index/articledetail',/* query: {type: 1, page: 1}*/});
    }


  },
  created  () {
    // this.getNewsLists(this.curRequest.requestPage, this.curRequest.PAGESIZE);
    this.getNewsLists(this.curRequest.requestPage, this.curRequest.PAGESIZE);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";

</style>
