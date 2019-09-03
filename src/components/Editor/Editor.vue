<template>
  <div class="m-editor">
    <div ref="editor" style="text-align:left;background-color: #fff;"></div>
    <p><button class="btn btn-primary btn-lg mt-4" id="btnGenCode" role="button" @click='editorSubmit'>保存 »</button></p>
  </div>
</template>

<script>
import E from 'wangeditor'
import axios from 'axios'

export default {
  name: 'Editor',
  data () {
    return {
      'editorHtml': ''
    };
  },
  props: {
    msg: String
  },
  methods: {
    editorSubmit () {
      console.log(this.editorHtml);
      var _this = this;
      // 可选地，上面的请求可以这样做
      axios.get('http://localhost:8080/editor/submit', {
          params: {
            content: _this.editorHtml
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted () {
    var _this = this;
    var editor = new E(this.$refs.editor);
    editor.customConfig = {
      onchange:function(html){
        _this.editorHtml = html;
        // 获取html内容
        // console.log(html);
      },
      uploadImgServer: 'http://localhost:8080/editor/upload', // 上传图片到服务器
      uploadFileName : 'file', //后端使用这个字段获取图片信息
      uploadImgMaxLength : 1 , // 限制一次最多上传 1 张图片
    };
    editor.create();
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
</style>

<!-- springboot 上传 参照 
https://blog.csdn.net/moshowgame/article/details/83099562
-->

<!-- 作者：懵懂老头
链接：https://zhuanlan.zhihu.com/p/43416702
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

Express.post('/UploadImg',function (Request,Response) {
  var From = new Formidable.IncomingForm();
  //设置保存 文件路径
  var TargetFile = Path.join(__dirname, './Public/');
  From.uploadDir = TargetFile;

  From.parse(Request, function (err, fields, files) {
    if (err) throw err;
    var FilePath = files.Content.path;    //此content由前端uploadFileName设置
    var NewPath = Path.join(Path.dirname(FilePath), files.Content.name);
    FS.rename(FilePath, NewPath, function (err) {
      if (err) throw err;
      var MyJson = {
        errno: 0,
        data:['http://localhost:8888/' + files.Content.name]
      };
      Response.json(MyJson);
    });
  });
}); -->