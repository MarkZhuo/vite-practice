<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from 'vue';
import { reqHasTrademark, reqAddOrUpdateTradeMark } from '@/api/product/trademark';
import type { Records, TradeMarkResponseData, TradeMark } from '@/api/product/trademark/type';
import { ElMessage, type UploadProps } from 'element-plus';

const currentPage = ref<number>(1);
const pageSize = ref<number>(5);
const pageSizes = [5, 10, 15, 20];
const total = ref<number>(0);
const tableData = ref<Records>([]);
const dialogFormVisible = ref<boolean>(false);
const tradeMarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: ''
});
const formRef = ref();

onMounted(() => {
  getHasTrademark();
});

const getHasTrademark = async () => {
  const result: TradeMarkResponseData = await reqHasTrademark(currentPage.value, pageSize.value);
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
  Object.keys(tradeMarkParams).forEach((o) => {
    tradeMarkParams[o] = '';
  });
  nextTick(() => {
    formRef.value.clearValidate('tmName');
    formRef.value.clearValidate('logoUrl');
  });
};

const updateTradeMark = (row: TradeMark) => {
  dialogFormVisible.value = true;
  Object.assign(tradeMarkParams, row);
  formRef.value.clearValidate('tmName');
  formRef.value.clearValidate('logoUrl');
};

const cancel = () => {
  dialogFormVisible.value = false;
};

const confirm = async () => {
  await formRef.value.validate();
  const result: any = await reqAddOrUpdateTradeMark(tradeMarkParams);
  if (result.code === 200) {
    ElMessage({
      type: 'success',
      message: `${tradeMarkParams?.id ? '修改' : '添加'}品牌成功`
    });
    dialogFormVisible.value = false;
    if (!tradeMarkParams?.id) {
      currentPage.value = 1;
    }
    await getHasTrademark();
  } else {
    ElMessage({
      type: 'error',
      message: `${tradeMarkParams?.id ? '修改' : '添加'}品牌失败`
    });
    dialogFormVisible.value = false;
  }
};

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (
    rawFile.type == 'image/jpeg' ||
    rawFile.type == 'image/jpg' ||
    rawFile.type == 'image/png' ||
    rawFile.type == 'image/gif'
  ) {
    if (rawFile.size / (1024 * 1024) < 4) {
      return true;
    } else {
      ElMessage({
        type: 'error',
        message: '上传图片大小必须小于4M'
      });
      return false;
    }
  } else {
    ElMessage({
      type: 'error',
      message: '上传图片必须是jpeg｜jpg｜png｜gif'
    });
    return false;
  }
};

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  tradeMarkParams.logoUrl = response.data;
  formRef.value.clearValidate('logoUrl');
};

const rules = {
  tmName: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule: any, value: any, callBack: any) => {
        if (value.trim().length >= 2) {
          callBack();
        } else {
          callBack(new Error('品牌名称字数大于等于2位'));
        }
      }
    }
  ],
  logoUrl: [
    {
      required: true,
      trigger: 'change',
      validator: (rule: any, value: any, callBack: any) => {
        if (value) {
          callBack();
        } else {
          callBack(new Error('Logo图片务必上传'));
        }
      }
    }
  ]
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
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="updateTradeMark(row)"
            ></el-button>
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
    <el-dialog v-model="dialogFormVisible" :title="`${tradeMarkParams?.id ? '修改' : '添加'}品牌`">
      <el-form
        style="width: 80%"
        label-width="100px"
        :model="tradeMarkParams"
        :rules="rules"
        ref="formRef"
      >
        <el-form-item label="品牌名称" prop="tmName">
          <el-input v-model="tradeMarkParams.tmName" placeholder="请输入品牌名称" />
        </el-form-item>
        <el-form-item label="品牌LOGO" prop="logoUrl">
          <el-upload
            class="avatar-uploader"
            action="/api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="tradeMarkParams.logoUrl" :src="tradeMarkParams.logoUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" size="default" @click="cancel">取消</el-button>
        <el-button type="primary" size="default" @click="confirm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
