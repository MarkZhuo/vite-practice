<script setup lang="ts">
import setting from '../../../setting';
</script>

<template>
  <div class="logo_container">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo_container {
  width: 100%;
  height: $base_menu_logo_height;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    color: #ffffff;
    font-size: $base_menu_logo_title_fontSize;
    margin-left: 10px;
  }
}
</style>
