<template>
  <div class="side-bar container no-gutter">
    <!-- Aplication Brand -->
    <div class="app-brand">
      <a href="/index.html">
        <svg class="brand-icon" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="30" height="33" viewBox="0 0 30 33">
          <g fill="none" fill-rule="evenodd">
            <path class="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z"></path>
            <path class="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z"></path>
          </g>
        </svg>
        <span class="brand-name">Sleek Dashboard</span>
      </a>
    </div>
    <!-- Aplication Brand end -->
    <!-- menu list -->
    <div class="slimScrollDiv">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="fa fa-wpexplorer type-icon" aria-hidden="true"></i><span>Active</span><i class="fa fa-angle-right arrow-icon" aria-hidden="true"></i></a>
          <!-- Submenu -->
          <ul class="nav flex-column sub-menu">
            <router-link to="/index/editor" tag="li" class='nav-item'>
              <a href="javascript:;">富文本</a>
            </router-link>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <!-- Submenu end -->
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="fa fa-wpexplorer type-icon" aria-hidden="true"></i><span>Active</span><!-- <i class="fa fa-angle-right arrow-icon" aria-hidden="true"></i> --></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"><i class="fa fa-wpexplorer type-icon" aria-hidden="true"></i><span>Active</span><i class="fa fa-angle-right arrow-icon" aria-hidden="true"></i></a>
          <!-- Submenu -->
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link active" href="#">ActiveActiveActive</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <router-link to="/index/helloworld" tag="li" class='nav-item'>
              <a href="#">Go to HelloWorld</a>
            </router-link>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <!-- Submenu end -->
        </li>

      </ul>
    </div>
    <!-- menu list -->
  </div>
</template>

<script>
export default {
  name: 'SideBar',
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
@import "common/sass/index.scss";
.side-bar {
  /* col-md-2 列宽 */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  min-height: 100%;
  z-index: 100;
  // box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  background-color: rgb(33, 42, 57);
  overflow: hidden;
  padding: 0;
  margin: 0;


  .app-brand {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    display: block;
    background-color: #4c84ff;
    z-index: 101;
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 75px;
      line-height: 75px;
      width: 250px;
      transition: width 0.3s ease-in-out;
      padding-left: 1.56rem;
      color: #fff;
      span {
        padding-left: 10px;
      }
    }
  }

  .slimScrollDiv {
    width: 100%;
    height: 100%;
    padding-top: 75px;
    box-sizing: border-box;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    >ul {
      width: 100%;
      >li {
        width: 100%;
        >a {
          padding: 1.25rem 1.56rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          font-size: 1rem;
          align-items: center;
          color: #a6aab4;
          background-color: #212a39;
          >.type-icon {
            padding: 0 10px 0 0;
            // color: #4c84ff;
            color: #a6aab4;
            font-size: 1.5rem;
          }
          >.arrow-icon {
            display: flex;
            margin-left: auto;
          }
        }
        /* 二级菜单 */
        .sub-menu {
          list-style-type: none;
          padding: .1rem 0 .1rem 2.2rem;
          width: 100%;
          box-sizing: border-box;
          margin: 0;
          position: relative;
          background: #1d2531;
          >li {
            width: 100%;
            height: 3rem;
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            /* vue路由 a激活状态样式 */
            &.router-link-exact-active, &.router-link-active {
              a {
                text-decoration: none;
                color: #fff!important;
                font-weight: 500!important;                
              }
              &:after {
                content: "";
                position: absolute;
                width: 5px;
                height: 100%;
                right: 0;
                top: 0;
                background-color: #4c84ff;
              }
            }

            >a {
              width: 100%;
              color: #b7c0cd;
              font-size: 1rem;
              padding: 0 1.25rem 0 1.5rem;
              box-sizing: border-box;
              text-align: left;

            }
          }
        }
      }
    }
  }


}
</style>
