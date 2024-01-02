<script setup lang="ts"></script>

<template>
  <el-menu background-color="$base_menu_background" text-color="#ffffff">
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">数据大屏</el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <span>权限管理</span>
      </template>
      <el-menu-item index="3-1">用户管理</el-menu-item>
      <el-menu-item index="3-2">角色管理</el-menu-item>
      <el-menu-item index="3-2">菜单管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped></style>
