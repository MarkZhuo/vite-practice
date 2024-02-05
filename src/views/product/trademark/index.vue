<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { reqHasTrademark } from '@/api/product/trademark';
import type { Records, TradeMarkResponseData } from '@/api/product/trademark/type';

const currentPage = ref<number>(1);
const pageSize = ref<number>(5);
const pageSizes = [5, 10, 15, 20];
const total = ref<number>(0);
const tableData = ref<Records>([]);
const dialogFormVisible = ref<boolean>(true);

onMounted(() => {
  getHasTrademark();
});

const getHasTrademark = async () => {
  const result: TradeMarkResponseData = await reqHasTrademark(currentPage.value, pageSize.value);
  console.log(result);
  if (result.code === 200) {
    total.value = result.data.total;
    tableData.value = result.data.records;
  }
};

const handleSizeChange = () => {
  currentPage.value = 1;
  getHasTrademark();
};

const addTradeMark = () => {
  dialogFormVisible.value = true;
};

const updateTradeMark = () => {
  dialogFormVisible.value = true;
};
</script>

<template>
  <div>
    <el-card class="box-card">
      <el-button type="primary" size="default" @click="addTradeMark" icon="Plus"
        >添加品牌</el-button
      >
      <el-table :data="tableData" style="margin: 10px 0" border>
        <el-table-column label="序号" width="80" align="center" type="index" />
        <el-table-column prop="tmName" label="品牌名称" />
        <el-table-column label="品牌LOGO">
          <template #="{ row, $index }">
            <img :src="row.logoUrl" style="width: 100px; height: 100px" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="品牌操作">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="Edit" @click="updateTradeMark"></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSizes"
        :disabled="disabled"
        :background="true"
        layout="prev, pager, next, jumper,->, sizes, total"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="getHasTrademark"
      />
    </el-card>
    <el-dialog v-model="dialogFormVisible" title="添加"></el-dialog>
  </div>
</template>

<style scoped lang="scss"></style>
