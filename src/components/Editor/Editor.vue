<template>
  <div class="m-editor">
    <!-- 选项 -->
    <div class="container-fluid">
      <div class="col-md-12">
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-1 col-form-label">author</label>
            <div class="col-sm-11">
              <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
            </div>
          </div>


          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-1 col-form-label">title</label>
            <div class="col-sm-11">
              <input type="text" class="form-control" id="inputPassword3" placeholder="title">
            </div>
          </div>

          <!-- 类型选择 -->
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-1 pt-0">typs</legend>
              <div class="col-sm-11">
                <div class="form-check mb-3">
                  <input class="form-check-input" type="radio" name="gridRadios" id="type1" value="option1" checked>
                  <label class="form-check-label" for="type1">
                    First radio
                  </label>
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" type="radio" name="gridRadios" id="type2" value="option2">
                  <label class="form-check-label" for="type2">
                    Second radio
                  </label>
                </div>
                <div class="form-check disabled mb-3">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                  <label class="form-check-label" for="gridRadios3">
                    Third disabled radio
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <!-- 文件上传 -->
          <div class="form-group">
            <label for="exampleInputFile col-sm-1">File input</label>
            <input type="file" class="form-control-file" id="exampleInputFile" />
          </div>
          
          <!-- 文件上传回显 -->
          <ul class="show-pic d-flex align-items-center justify-content-start">
            <li class="each-image list-unstyled mr-5" style="background-image: url('https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_5869f49.png');"><i class="fa fa-times" aria-hidden="true"></i></li>
          </ul>

        </form>
      </div>
      
      <div class="col-md-12">
        <h6 class='mb-3 mt-4'>content：</h6>
        <div ref="editor" style="text-align:left;background-color: #fff;"></div>
        <p><button class="btn btn-primary mt-4" id="btnGenCode" role="button" @click='editorSubmit'>保存 »</button></p>
      </div>     
    </div>
    


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