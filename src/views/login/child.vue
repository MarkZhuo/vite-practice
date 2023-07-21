<script setup>
import useInfoStore from '@/stores/info';

const infoStore = useInfoStore();
console.log(infoStore);

const handleUpdateCount = () => {
  infoStore.plusCount();
};
</script>

<template>
  <div class="child">
    <h1>{{ infoStore.count }}</h1>
    <button @click="handleUpdateCount">点击修改数值</button>
  </div>
</template>

<style lang="scss" scoped>
.child {
  width: 300px;
  height: 200px;
  background: yellowgreen;
}
</style>
