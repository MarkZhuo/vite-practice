<script setup lang="ts">
import { ref } from 'vue';

const currentPage = ref<number>(1);
const pageSize = ref<number>(5);
const pageSizes = [5, 10, 15, 20];

const add = () => {};

const handleSizeChange = () => {};

const handleCurrentChange = () => {};
</script>

<template>
  <el-card class="box-card">
    <el-button type="primary" size="default" @click="add" icon="Plus">添加品牌</el-button>
    <el-table :data="tableData" style="margin: 10px 0" border>
      <el-table-column prop="date" label="序号" width="80" align="center" />
      <el-table-column prop="name" label="品牌名称" />
      <el-table-column prop="address" label="品牌LOGO" />
      <el-table-column prop="address" label="品牌操作" />
    </el-table>
  </el-card>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="pageSizes"
    :disabled="disabled"
    :background="true"
    layout="prev, pager, next, jumper,->, sizes, total"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style scoped></style>
