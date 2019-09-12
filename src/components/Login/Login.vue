<template>
  <div class="m-login">
    <div class="container login-wrapper">

      <!-- Outer Row -->
      <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <!-- 用户名 -->
                        <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." v-model="userName">
                      </div>
                      <div class="form-group">
                        <!-- 密码 -->
                        <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" v-model="password">
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input type="checkbox" class="custom-control-input" id="customCheck">
                          <label class="custom-control-label" for="customCheck">Remember Me</label>
                        </div>
                      </div>
                      <a href="javascript:;" class="btn btn-primary btn-user btn-block"
                        @click='submitLogin'>
                        Login
                      </a>
                      <hr>
                      <a href="index.html" class="btn btn-google btn-user btn-block">
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a href="index.html" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </a>
                    </form>
                    <hr>
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html">Create an Account!</a>
                    </div>
                  </div>
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

export default {
  name: 'Login',
  data () {
    return {
      userName: "",
      password: ""
    };
  },
  props: {
    msg: String
  },
  mounted () {
    
  },
  methods: {
    submitLogin: function () {
      var _this = this;
      // 获取提交数据
      axios.post('/admin/login', {
          params: {
            userName: _this.userName,
            password: _this.password
          },
          withCredentials: true // 可以拿到cookie
        })
        .then(function (response) {
          // 如果登录成功
          if (response.data.code == 0) {
            _this.$router.push({ path: "/index", query: {type: 1, page: 1}});
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      // var _this = this;
      /*$.post("http://localhost:8080/consult/admin/login",{
        userName: _this.userName,
        password: _this.password
      },function(result){
        console.log(result);
      });*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";
@import "common/sass/index.scss";
.m-login {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  background-color: #4e73df;
  .login-wrapper {
    .bg-login-image {
      background: url(https://source.unsplash.com/K4mSJ7kc0As/600x800);
      background-position: center;
      background-size: cover;
    }    
  }


}
</style>
