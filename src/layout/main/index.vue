<script setup lang="ts">
import { computed, watch, ref, nextTick } from 'vue';
import useLayoutSettingStore from '@/stores/modules/setting';

const layoutSettingStore = useLayoutSettingStore();
const refresh = computed(() => layoutSettingStore.refresh);
const flag = ref(true);

watch(
  () => refresh.value,
  () => {
    flag.value = false;
    nextTick(() => {
      layoutSettingStore.refresh = false;
      flag.value = true;
    });
  }
);
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
