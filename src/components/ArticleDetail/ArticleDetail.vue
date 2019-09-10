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
          
            <div class="article">
              <h3>Pellentesque habitant morbi tristique</h3>

              <div class="article-content">
  
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>

                <img src="http://p1.img.cctvpic.com/photoAlbum/page/performance/img/2019/1/1/1546332398982_112.jpg" alt="">

                <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat.</p>
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
                <li class="page-item">
                  <a class="page-link" href="#">上一篇</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">下一篇</a>
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
export default {
  name: 'ArticleDetail',
  props: {
    msg: String
  },
  mounted () {
    // console.log($("h1").html() + "hahah");
  }
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
