<script lang="ts" setup></script>

<script>
export default {
  name: 'blank-layout'
};
</script>

<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}
</style>
