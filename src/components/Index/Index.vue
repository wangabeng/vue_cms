<template>
  <div class="m-index">
    index
    <i class="fa fa-address-book-o" aria-hidden="true"></i>
    <h1>index</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  },
  mounted () {
    console.log($(".m-index").html());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";
@import "common/sass/index.scss";
.m-index {
  color: $color-sub-red;
  h1 {
    color: red;
  }
}
</style>
