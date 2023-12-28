<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import userStore from '@/stores/modules/user';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time';
import type { FormRules, FormInstance } from 'element-plus';

interface LoginForm {
  username: string;
  password: string;
}

const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: '123456'
});
const useStore = userStore();
const loading = ref<boolean>(false);
const $router = useRouter();
const rules = reactive<FormRules<LoginForm>>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'change' }
  ],
  password: {
    required: true,
    message: '密码不能为空',
    trigger: 'blur'
  }
});
const ruleFormRef = ref<FormInstance>();

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true;
      try {
        const result = await useStore.userLogin(loginForm);
        ElNotification({
          title: `Hi, ${getTime()}好`,
          message: '登录成功！',
          type: 'success'
        });
        loading.value = false;
        $router.push('/');
      } catch (error) {
        ElNotification({
          message: (error as Error).message,
          type: 'error'
        });
      }
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form ref="ruleFormRef" :model="loginForm" :rules="rules" class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到德莱联盟</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              type="password"
              :show-password="true"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              style="width: 100%"
              type="primary"
              @click="login(ruleFormRef)"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 20px;
    h1 {
      color: #ffffff;
      font-size: 40px;
    }
    h2 {
      color: #ffffff;
      font-size: 20px;
      margin: 20px 0;
    }
  }
}
</style>
