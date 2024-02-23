<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useCategoryStore from '@/stores/modules/category';
import { reqC1 } from '@/api/product/attr';

const options_1 = ref<any>([]);
const c1_id = ref<number | string>('');
const categoryStore = useCategoryStore();

onMounted(() => {
  getC1();
});

const getC1 = () => {
  categoryStore.getC1();
};
</script>

<template>
  <el-card>
    <el-form inline>
      <el-form-item label="一级分类">
        <el-select v-model="categoryStore.c1Id">
          <el-option
            v-for="(c1, index) in categoryStore.c1Arr"
            :key="c1.id"
            :label="c1.name"
            :value="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select>
          <el-option />
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select>
          <el-option />
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped></style>
