<script setup lang="ts">
import { onMounted } from 'vue';
import userStore from '@/stores/modules/user';

const useUserStore = userStore();

onMounted(() => {
  useUserStore.userInfo();
});
</script>

<template>
  <div class="home">123123</div>
</template>

<style scoped></style>
