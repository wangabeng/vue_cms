<template>
  <div class="m-error">
    <div class="content-wrapper">
      <div class="content">           
          <div class="error-wrapper rounded border bg-white px-5">
          <div class="row justify-content-center">
            <div class="col-xl-4">
              <h1 class="text-primary bold error-title">404</h1>
              <p class="pt-4 pb-5 error-subtitle">Looks like something went wrong.</p>
              <a href="index.html" class="btn btn-primary btn-pill">Back to Home</a>
            </div>
            <div class="col-xl-6 pt-5 pt-xl-0 text-center">
              <img src="./lightenning.png" class="img-responsive" alt="Error Page Image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
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
.m-error {
  padding: 2.5rem 3.75rem;
  .content-wrapper {
    .content {
      .error-wrapper {
        padding: 4rem 2rem;
      }
    }
  }
}
</style>
