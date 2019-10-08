<template>
  <div class="CategoryHeader">
    分类 header
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'MHeader',
  date () {
    return {};
  },
  computed: {
    ...mapGetters([
      'token',
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'setToken',
      'setUserInfo'
    ])
  },
  props: {
    msg: String
  },
  mounted () {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "common/sass/variable.scss";

</style>
