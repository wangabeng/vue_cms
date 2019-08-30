<template>
  <div class="m-header container-fluid">
    <!-- <div class="header-content container-fluid no-gutter h100">
      <div class="row align-items-center justify-content-between row-container">
        search container
        <div class="input-group col-3 search-container">
          <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon"><i class="fa fa-search" aria-hidden="true"></i></div>
          </div>
        </div>
    
        user info
        <div class="dropdown show user-container">
          <button href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
            <img src="./user-pic.jpg" class="user-image" alt="User Image">
            <span class="ml-3 mr-3">Abdus Salam</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right hide animated--grow-in">
            User image
            <li class="dropdown-header">
              <img src="./user-pic.jpg" class="img-circle" alt="User Image">
              <div class="d-inline-block">
                Abdus Salam <small class="pt-1">abdus@gmail.com</small>
              </div>
            </li>
    
            <li>
              <a href="profile.html">
                <i class="mdi mdi-account"></i> My Profile
              </a>
            </li>
            <li>
              <a href="email-inbox.html">
                <i class="mdi mdi-email"></i> Message
              </a>
            </li>
            <li>
              <a href="#"> <i class="mdi mdi-diamond-stone"></i> Projects </a>
            </li>
            <li>
              <a href="#"> <i class="mdi mdi-settings"></i> Account Setting </a>
            </li>
    
            <li class="dropdown-footer">
              <a href="signin.html"> <i class="mdi mdi-logout"></i> Log Out </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clearfix">
        <span class="float-left">左浮动</span>
        <span class="float-right">右浮动</span>
      </div>
    </div> -->

    <nav class="navbar navbar-expand navbar-light bg-white topbar row align-items-center justify-content-start
      row h100 nav-contant
    ">

      <!-- Sidebar Toggle (Topbar) -->
      <button id="sidebar-toggler" class="sidebar-toggle ml-3 mr-5 category-nav">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

      <!-- Topbar Search -->
      <form class="d-none d-sm-inline-block form-inline navbar-search col-3 search-container">
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
      <ul class="navbar-nav user-container ml-auto">

         <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow show">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="mr-3 d-none d-lg-inline ">Valerie Luna</span>
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
</template>

<script>
export default {
  name: 'MHeader',
  props: {
    msg: String
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";
.m-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  padding-left: 250px;
  padding-right: 0;
  box-sizing: border-box;
  z-index:99;
  background-color: #ffffff;
  border-bottom: $border-1px;
  
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

    .search-container {}
    .user-container {
      margin-right: 1rem;
      >li {
        >a {
          img {
            width: 3.5rem;
            height: 3.5rem;
          }
        }
      }
    }
  }

}
/* .m-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  padding-left: 250px;
  padding-right: 0;
  box-sizing: border-box;
  z-index:99;
  background-color: #ffffff;
  border-bottom: $border-1px;

  .header-content {
    width: 100%;
    
    .row-container {
      .search-container {
        .input-group-prepend {
          i {
            font-size: 1rem;
          }
        }
      }
      .user-container {
        margin-right: 1rem;
        >button {
          background: transparent;
          border: none;
          cursor: pointer;
        }
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
} */
</style>
