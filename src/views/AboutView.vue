<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="lq-wrap">
    测试
    <div class="lq-wrap--input">
      <input type="text">
    </div>
  </div>
</template>

<script lang=ts setup>
import {ref} from 'vue'
const v= ref('1')
console.log(v.value);

</script>


<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
@include b('wrap') {
  color: red;
  @include e('input') {
    background: #000;
  }
}
</style>
