<template>
  <div class="hello">
    <!-- 主内容 -->
    <div class="container-fluid">
      <!-- Page Header-->
      <div class="card">
        <div class="card-header">
          <h4>Data Table</h4>
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
                        #
                      </th>
                      <th>
                        Product
                      </th>
                      <th>
                        Payment Taken
                      </th>
                      <th>
                        Status
                      </th>
                      <th>
                        Declined
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        TB - Monthly
                      </td>
                      <td>
                        01/04/2012
                      </td>
                      <td>
                        Default
                      </td>
                      <td>
                        <a href="#"  class="text-primary">Declined</a>
                      </td>
                    </tr>
                    <tr class="">
                      <td>
                        1
                      </td>
                      <td>
                        TB - Monthly
                      </td>
                      <td>
                        01/04/2012
                      </td>
                      <td>
                        Approved
                      </td>
                      <td>
                        <a href="#"  class="text-primary">Declined</a>
                      </td>
                    </tr>
                    <tr class="">
                      <td>
                        2
                      </td>
                      <td>
                        TB - Monthly
                      </td>
                      <td>
                        02/04/2012
                      </td>
                      <td>
                        Declined
                      </td>
                      <td>
                        <a href="#"  class="text-primary">Declined</a>
                      </td>
                    </tr>
                    <tr class="">
                      <td>
                        3
                      </td>
                      <td>
                        TB - Monthly
                      </td>
                      <td>
                        03/04/2012
                      </td>
                      <td>
                        Pending
                      </td>
                      <td>
                        <a href="#"  class="text-primary">Declined</a>
                      </td>
                    </tr>
                    <tr class="">
                      <td>
                        4
                      </td>
                      <td>
                        TB - Monthly
                      </td>
                      <td>
                        04/04/2012
                      </td>
                      <td>
                        Call in to confirm
                      </td>
                      <td>
                        <a href="#"  class="text-primary">Declined</a>
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
                      <li class="page-item">
                        <a class="page-link" href="#">Previous</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">4</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">5</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">Next</a>
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
export default {
  name: 'HelloWorld',
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
.hello {
  margin: 0;
  padding: 0;
}
</style>
