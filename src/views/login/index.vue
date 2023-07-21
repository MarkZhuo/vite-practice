<script setup lang="ts">
import Child from '@/views/login/child.vue';
import Child2 from '@/views/login/child2.vue';
</script>

<template>
  <div class="login">
    <h1>pinia</h1>
    <Child />
    <Child2 />
  </div>
</template>

<style lang="scss" scoped>
.login {
  //width: 100%;
  //height: 100%;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: skyblue;
}
</style>
