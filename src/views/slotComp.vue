<template>
  <div class="wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, render } from 'vue';


</script>

<style lang="scss" scoped>
.wrap {
  background: #000;

  :slotted(.txt) {
    color: red !important;
  }
}
</style>