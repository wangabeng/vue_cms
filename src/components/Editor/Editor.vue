<template>
  <div class="m-editor">
    <!-- 选项 -->
    <div class="container-fluid">
      <!-- <h4 class="col-md-12 mb-3">添加{{subject}}</h4> -->
      <!-- <h4 class="col-md-12 mb-3" v-if='!!modiNews'>{{subject}}编号：{{modiNews.newsId}}</h4> -->
      
      <div class="col-md-12">
        <slot name='categoryTitle'></slot>
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">作者</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" v-model="author" placeholder="润捷">
            </div>
          </div>


          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">标题</label>
            <div class="col-sm-10">
              <!-- <input type="text" class="form-control" id="inputPassword3" placeholder="请输入标题" v-bind='publishTitle'> -->
              <input v-if='aritcleContent' type="text" class="form-control" id="inputPassword3" placeholder="请输入标题" v-model='publishTitle'>
            </div>
          </div>

          <!-- 类型选择 -->
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">文章所属分类</legend>
              <div class="col-sm-10">
                <div class="form-check mb-3">
                  <input class="form-check-input" type="radio" name="gridRadios" id="type1" value="新闻中心" v-model='subject'>
                  <label class="form-check-label" for="type1">
                    新闻中心
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" type="radio" name="gridRadios" id="type2" value="option2" v-model='subject'>
                  <label class="form-check-label" for="type2">
                    Second radio
                  </label>
                </div>
                <div class="form-check disabled mb-3">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled v-model='subject'>
                  <label class="form-check-label" for="gridRadios3">
                    新闻中心
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <!-- 文件上传 -->
          <div class="form-group">
            <label for="exampleInputFile" class='row'>
              <span class='col-sm-2'>主题图片</span>
              <p type="button" class="btn btn-primary col-sm-2 ml-3">上传主图</p>
            </label>
            <input type="file" class="form-control-file" style='display: none' id="exampleInputFile" @change="uploadFile($event)"/>
          </div>
          
          <!-- 文件上传回显 -->
          <ul class="show-pic d-flex align-items-center justify-content-start" v-if='uploadSum'>
            <!-- style="background-image: url('https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png');" -->
            <li class="each-image list-unstyled mr-5" 
              v-bind:style="{ backgroundImage: 'url(' + uploadSum + ')' }"
              ><i class="fa fa-times" aria-hidden="true" @click='deleteImg'></i></li>
          </ul>

        </form>
      </div>

       {{aritcleContent}}
       <br>
       {{publishTitle}}

      <div class="col-md-12">
        <h6 class='mb-3 mt-4'>编辑内容：</h6>
        <div ref="editor" class='editor-container-modify' style="text-align:left;background-color: #fff;"></div>
        <p><button class="btn btn-primary mt-4" id="btnGenCode" role="button" @click.prevent.stop='editorSubmit'>保存 »</button></p>
        <p><button class="btn btn-primary mt-4" id="aaaaaa" role="button" @click.prevent.stop='modifySubmit'>确认修改 »</button></p>
      </div>     
    </div>

   

  </div>
</template>

<script>
import E from 'wangeditor';
// import axios from 'axios'
import axios from 'src/api/axios';
import {BASEURL} from "src/api/config.js";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Editor',
  data () {
    return {
      'author': '润捷', // 作者
      // 'subject': '新闻中心', // 文章主题
      // 'publishTitle': '',

      'uploadSum': '',
      // 'editorHtml': '',
      'uploadfile': '',

      'curArticle': null,
      'curParam': '',

      'editorObj': null, // 编辑器对象 非内容


    };
  },
  computed: {
    ...mapGetters([
      // 'modiNews'
    ]),
    publishTitle () {
      return this.aritcleContent? this.aritcleContent.newsTitle: ''
    },
    editorHtml () {
      return this.aritcleContent? this.aritcleContent.newsContent: ''
    },
    // 上传的图片
    /*uploadSum () {

    }*/

  },
  props: {
    subject: { // 必传 文章分类
      type: String, // type 必传 新闻中心
      default: '',
    },
    aritcleContent: { // 文章内容
      type: Object, // type
      default: null,
    },
  },
  // 监听路由变化 一旦变化 清空vuex中新闻的内容
  watch: {
    curParam () {
      // console.log('参数变化');
    },

  },
  methods: {
    ...mapActions([
      // 'setModiNews',
    ]),
    // 移除上传的图片
    deleteImg () {
      this.uploadSum = '';
    },
    // 普通上传文件
    uploadFile (event) {
      var _this = this;

      this.file = event.target.files[0];

      let param = new FormData();
      // param.append("name", "wiiiiiinney");
      //通过append向form对象添加数据
      param.append("file", this.file);

      let config = {
        //添加请求头
        headers: { "Content-Type": "multipart/form-data" },
        //添加上传进度监听事件
        /*onUploadProgress: e => {
          var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
          this.progress = completeProgress;
        }*/
      };

      axios.post(BASEURL + '/article/upload', param, config)
        .then(function (response) {
          // console.log(response);
          _this.uploadSum = response.data;
        })
        .catch(function (error) {
          //console.log(error);
        });

    },
    // 最终提交 创建新的文章
    editorSubmit () {
      console.log(this.editorHtml);
      var _this = this;
      // 可选地，上面的请求可以这样做
      axios.post(BASEURL + '/article/editorsubmit', {
          params: {
            author: _this.author,
            type: _this.subject,
            mainPic: _this.uploadSum, 
            content: _this.editorHtml
          }
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          // console.log(error);
        });
      return;  
    },
    // 修改文章操作
    modifySubmit () {
      console.log(33333);
    }
  },
  created () {
    // 判断vuex是否存在
    // console.log(this.modiNews,this.$route.params, this.subject); // 如果不存在 就是新增
    // console.log(this.$route.params);
    // 如果路由参数为空 就是新增 ，如果存在 就是编辑
    
  },
  mounted () {
    console.log('创建了ediotr');
    var _this = this;
    var editor = new E(this.$refs.editor);

    // editor.txt.html("12445");

    editor.customConfig = {
      onchange:function(html){
        _this.editorHtml = html;
        // 获取html内容
        // console.log(html);
      },
      uploadImgServer: BASEURL + '/article/editorupload', // 上传图片到服务器
      uploadFileName : 'file', //后端使用这个字段获取图片信息
      uploadImgMaxLength : 1 , // 限制一次最多上传 1 张图片
    };
    editor.create();

    // 如果_this.editorHtml有内容 即是修改页面 则回显，如果是新建文章 则啥都不显示
    // editor.txt.html(_this.editorHtml);

    this.editorObj = editor;
    console.log('创建了ediotr end');
  },
  // 注意生命周期
  beforeUpdate () {
    console.log('editor更新了');
    this.editorObj.txt.html(this.editorHtml);
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

.editor-container-modify {
  overflow: hidden!important;
}
</style>