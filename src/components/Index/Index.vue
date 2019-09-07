<template>
  <div id="m-index">
    <!-- 侧边栏 -->
    <SideBar></SideBar>
    <!-- 侧边栏 end -->
    <!-- 主页面 -->
    <div class="page-main" ref="pageMain">
      <!-- 页头 -->
      <div class="main-header container-fluid">
        <nav class="navbar navbar-expand navbar-light bg-transparent topbar row align-items-center justify-content-start row h100 nav-contant">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebar-toggler" class="sidebar-toggle ml-3 mr-5 category-nav" @click='categorynav'>
            <i class="fa fa-bars tab-side-bar" aria-hidden="true"></i>
          </button>

          <!-- Topbar Search -->
          <form class="d-none d-sm-inline-block form-inline navbar-search col-4 search-container">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..1111." aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto user-container">
             <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow show">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span class="mr-2 d-none d-lg-inline ">abeng</span>
                <img class="img-profile rounded-circle ml-2 mr-2" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in hide" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>
        </nav>
      </div>
      
      <!-- 主内容区 -->
      <div class="content-view">
        <router-view></router-view>
      </div>

      <!-- 页脚 -->
      <div class="main-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <p class='mb-0'>Your company © 2017-2019</p>
            </div>
            <div class="col-sm-6 text-right">
              <p class='mb-0'>Version 1.4.4</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header -->
    <!-- <MHeader></MHeader> -->
    <!-- header end -->

    <!-- <div class="content-container">
      <div class="content-main">
          主内容
          <div class="content-inner">
            <router-view></router-view>
          </div>
      </div>
    </div> -->
    <!-- footer -->
    <!-- <MFooter></MFooter> -->
    <!-- footer end -->
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld/HelloWorld.vue'
import Index from 'components/Index/Index.vue'
import SideBar from 'base/SideBar/SideBar.vue'
import MHeader from 'base/MHeader/MHeader.vue'
import MFooter from 'base/MFooter/MFooter.vue'

export default {
  name: 'Index',
  components: {
    SideBar,
    MHeader,
    MFooter,
  },
  mounted () {
    this.windowResize();


  },
  methods: {
    // 顶部导航按钮切换
    categorynav: function () {
      if (window.innerWidth < 575) {
        $(".side-navbar").addClass("shrink");
        $(".page-main").addClass("shrink");
        return;
      } else {
        $(".side-navbar").toggleClass("shrink");
        $(".page-main").toggleClass("shrink");              
      }
    },
    // 窗口缩放
    windowResize: function () {
      window.addEventListener('resize', function() {
          console.log(typeof window.innerWidth);
          tabShrink ()
      })
      tabShrink ();
      function tabShrink () {
        if (window.innerWidth < 575) {
          $('.page-main').addClass('shrink');
          $('.side-navbar').addClass('shrink');

        } else {
          $('.page-main').removeClass('shrink');
          $('.side-navbar').removeClass('shrink');
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "common/sass/reset.scss";
/* 主内容区 */
.page-main {
  min-height: 100VH;
  padding-bottom: 50px;
  width: calc(100% - 200px);
  position: absolute;
  top: 0;
  right: 0;

  &.shrink {
    width: calc(100% - 70px);
  }

  /* @media (max-width: 575px) {
    width: 100%;
  } */

  .main-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    box-sizing: border-box;
    background: #393836;
    
    .nav-contant {
      width: 100%;
      padding: 0;
      margin: 0;

      .category-nav {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        color: #8a909d;
        >i {
          font-size: 2rem;
        }
      }

      .search-container {
        @media (max-width: 575px) {
          & {
            display: none;
          }        
        }
      }

      .user-container {
        @media (max-width: 575px) {
          & {
            margin-left: 0;
          }        
        }
        margin-right: 1rem;
        >li {
          >a {
            color: #fff;
            img {
              width: 3.5rem;
              height: 3.5rem;
            }
          }
        }
      }
    }

  }


  .main-footer {
    position: absolute;
    padding: 10px 0;
    width: 100%;
    bottom: 0;
    background: #222;
    color: #777;
    
    div[class*="col-"] {
      @media (max-width: 575px) {
        & {
          text-align: center !important;
        }        
      }
    }

  }
}
#m-index {
  /* height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 75px;
  padding-left: 250px; */

  /* .content-container {
    min-height: 100%;
    padding-bottom: 5rem;
    box-sizing: border-box;
    background-color: #f8f9fc;
  
    .content-main {
      margin: 0 auto;
      .content-inner {
  
      }
    }
  
  } */
}
</style>
