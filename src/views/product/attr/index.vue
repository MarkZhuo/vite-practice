<script setup></script>

<template>
  <div class="attr">
    <Category />
    <el-card style="margin: 10px 0">
      <el-button type="primary" size="default" icon="Plus">添加属性</el-button>
      <el-table style="margin: 10px 0" border>
        <el-table-column label="序号" type="index" align="center" width="80" />
        <el-table-column prop="tmName" label="属性名称" width="120" />
        <el-table-column prop="tmName" label="属性值名称" />
        <el-table-column prop="address" label="操作" width="120">
          <template #="{ row, $index }">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="updateTradeMark(row)"
            ></el-button>
            <el-popconfirm
              :title="`您确定要删除${row.tmName}么？`"
              width="250px"
              icon="Delete"
              @confirm="removeTradeMark(row.id)"
            >
              <template #reference>
                <el-button type="primary" size="small" icon="Delete"></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped></style>
