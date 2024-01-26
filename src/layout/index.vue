<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import userStore from '@/stores/modules/user';

const useStore = userStore();
const $route = useRoute();
</script>

<template>
  <div class="layout">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="$base_menu_background"
          text-color="#ffffff"
          :router="true"
          :default-active="$route.path"
        >
          <Menu :menuList="useStore.menusRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <Main />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  overflow: auto;
  .layout_slider {
    width: $base_menu_width;
    height: 100%;
    background: $base_menu_background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base_menu_logo_height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base_menu_width;
    width: calc(100% - $base_menu_width);
    height: $base_tabbar_height;
  }
  .layout_main {
    position: absolute;
    top: $base_tabbar_height;
    left: $base_menu_width;
    width: calc(100% - $base_menu_width);
    height: calc(100vh - $base_tabbar_height);
    padding: 20px;
  }
}
</style>
