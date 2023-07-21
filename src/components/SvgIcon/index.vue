<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: () => ''
  },
  color: {
    type: String,
    default: () => ''
  },
  width: {
    type: String,
    default: () => ''
  },
  height: {
    type: String,
    default: () => ''
  }
});
</script>

<template>
  <svg :style="{ width, height }">
    <use :xlink:href="'#icon-' + prefix" :fill="color"></use>
  </svg>
</template>

<style lang="scss" scoped></style>
