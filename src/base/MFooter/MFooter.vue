<template>
  <div class="m-footer">
  footer
  </div>
</template>

<script>
export default {
  name: 'MFooter',
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
.m-footer {
  height: 2.085rem;
  background-color: red;
  margin-top: -2.085rem;
}
</style>
