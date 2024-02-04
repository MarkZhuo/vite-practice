<script setup lang="ts">
import { Refresh, FullScreen, Setting } from '@element-plus/icons-vue';
import setting from '../../../../setting';
import useLayoutSettingStore from '@/stores/modules/setting';
import userStore from '@/stores/modules/user';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const layoutSettingStore = useLayoutSettingStore();
const useUserStore = userStore();
const $router = useRouter();
const $route = useRoute();

const updateRefresh = () => {
  layoutSettingStore.refresh = true;
};

const fullScreen = () => {
  let full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const logout = async () => {
  await useUserStore.userLogout();
  $router.push({ path: '/login', query: { redirect: $route.path } });
};
</script>

<template>
  <el-button circle size="small" :icon="Refresh" @click="updateRefresh" />
  <el-button circle size="small" :icon="FullScreen" @click="fullScreen" />
  <el-popover placement="bottom" title="主题设置" :width="200" trigger="hover">
    <el-form>
      <el-form-item label="主题颜色">
        <el-color-picker show-alpha size="small" />
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch size="small" inline-prompt active-icon="MoonNight" inactive-icon="Sunny" />
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button circle size="small" :icon="Setting" />
    </template>
  </el-popover>

  <img :src="useUserStore.avatar" />
  <el-dropdown>
    <span class="el-dropdown-link" style="cursor: pointer">
      {{ useUserStore.userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
img {
  width: 24px;
  height: 24px;
  border-radius: 20px;
  margin: 0 10px;
}
</style>
