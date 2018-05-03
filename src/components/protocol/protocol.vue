<template>
  <div class="registerPro">
       <mt-header title="注册协议">
            <mt-button icon="back" slot="left" @click.native="$router.back()"></mt-button>
        </mt-header>
        <div class="content">
            <iframe src="src/assets/xieyi.html" width="100%" height="100%" frameborder="0"></iframe>
        </div>
  </div>
</template>

<script>
export default {
  name: "protocol",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "protocol.scss";
</style>
