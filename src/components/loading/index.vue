<template>
<div class="mask" v-if="isShow">
  <div class="loading">加载中...</div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isShow = ref(false)

const show = () => isShow.value = true
const hide = () => isShow.value = false
defineExpose({
  show,
  hide
})

</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 20;
  .loading {
    color: red;
  }
}
</style>