<script setup lang="ts">
defineProps(['menuList']);
</script>

<script lang="ts">
export default {
  name: 'Menu'
};
</script>

<template>
  <el-menu background-color="$base_menu_background" text-color="#ffffff">
    <template v-for="(item, index) in menuList" :key="item.path">
      <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path">
        <template #title>
          <span>图标</span>
          <span>{{ item?.meta?.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="item.children && item.children.length === 1 && !item.children[0].meta.hidden"
        :index="item.children[0].path"
      >
        <template #title>
          <span>图标</span>
          <span>{{ item.children[0].meta?.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length > 1 && !item.meta.hidden"
        :index="item.path"
      >
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped></style>
