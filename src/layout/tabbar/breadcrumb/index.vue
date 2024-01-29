<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
import useLayoutSettingStore from '@/stores/modules/setting';

const layoutSettingStore = useLayoutSettingStore();
const $route = useRoute();

const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
};
</script>

<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="vertical-align: middle">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0 5px; vertical-align: middle">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped></style>
