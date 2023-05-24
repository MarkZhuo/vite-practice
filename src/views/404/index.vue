<script>
export default {
  name: '404'
};
</script>

<script lang="ts" setup></script>

<template>
  <div class="not-found">
    <div class="img"></div>
    <div class="text-area">您所访问的页面不存在!</div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img {
    width: 50%;
    height: 50%;
    background: url('/images/default/404.svg') no-repeat;
    background-size: 100%;
  }
  .text-area {
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
