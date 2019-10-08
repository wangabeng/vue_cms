<template>
  <div class="wang-editor">
    <!-- 富文本编辑器 -->
    <div ref="editor" class='editor-container-modify' style="text-align:left;background-color: #fff;"></div>
    <!-- <input type="button" @click='getEditorHmtl'> -->
  </div>
</template>

<script>
import E from 'wangeditor';
import axios from 'src/api/axios';
import {BASEURL} from "src/api/config.js";

export default {
  name: 'Editor',
  data () {
    return {
      'editorHtml': '', // wangeditor输入框内文档内容 默认为空
      'uploadfile': '', // 
      'editorObj': null, // 编辑器对象 非内容

    };
  },
  props: {
    aritcleContent: { // 文章内容
      type: Object, // type
      default: null,
    },
  },
  /*computed: {
    editorHtml () {
      return this.aritcleContent? this.aritcleContent: '';
    },
  },*/
  watch: {
  },
  methods: {
    getEditorHmtl () {
      // console.log(this.editorHtml);
    }
    // 最终提交 创建新的文章
    /*editorSubmit () {
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
    },*/
  },
  created () {
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
    // console.log('editor更新了');
    // 如果传入了 aritcleContent
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

.editor-container-modify {
  overflow: hidden!important;
}

.w-e-toolbar {
  flex-wrap: wrap;
}
</style>