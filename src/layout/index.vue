<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import useLayoutSettingStore from '@/stores/modules/setting';
import userStore from '@/stores/modules/user';

const useStore = userStore();
const layoutSettingStore = useLayoutSettingStore();
const $route = useRoute();
</script>

<template>
  <div class="layout">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#001529"
          text-color="#ffffff"
          :collapse="layoutSettingStore.fold"
          :router="true"
          :default-active="$route.path"
        >
          <Menu :menuList="useStore.menusRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
      <Tabbar />
    </div>
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
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
    transition: all 0.3s;
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
    transition: all 0.3s;
    background: #ffffff;
    &.fold {
      left: $base_menu_min_width;
      width: calc(100vw - $base_menu_min_width);
    }
  }
  .layout_main {
    position: absolute;
    top: $base_tabbar_height;
    left: $base_menu_width;
    width: calc(100% - $base_menu_width);
    height: calc(100vh - $base_tabbar_height);
    padding: 20px;
    transition: all 0.3s;
    background: #ffffff;
    &.fold {
      left: $base_menu_min_width;
      width: calc(100vw - $base_menu_min_width);
    }
  }
}
</style>
