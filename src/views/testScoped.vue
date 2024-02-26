<template>
<div class="scoped">
  <A>
    <div class="txt">123</div>
  </A>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import A from './slotComp.vue'

</script>

<style lang="scss" scoped>
.scoped {
  .txt {
    color: green;
  }
}
</style>