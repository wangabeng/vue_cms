<template>
  <div class="not-found">
    未找到
  </div>
</template>

<script>
export default {
  name: 'Index',
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
.hello {
  h1 {
    color: $color-sub-red;
  }
}
</style>
