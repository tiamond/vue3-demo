<template>
  <div class="image-lazy-wrap">
    <img v-lazy="item" v-for="item in arr" :key="item">
  </div>
</template>

<script lang="ts" setup>
import { ref, type Directive, reactive } from 'vue';
const imageList: Record<string, {default: string}> = import.meta.glob('../assets/images/*.*', {eager: true})

let arr = Object.values(imageList).map(v => v.default)

const VLazy: Directive<HTMLImageElement, string> = async (el, binding) => {
  const def = await import('../assets/logo.svg')
  el.src = def.default
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.intersectionRatio > 0) {
      setTimeout(() => {
        el.src = binding.value
      }, 1000);
      observer.unobserve(el)
    }
  })
  observer.observe(el)
}


</script>

<style lang="scss" scoped>
.image-lazy-wrap {
  img {
    width: 100%;
    min-height: 500px;
    margin: 0;
    vertical-align: middle;
  }
}
</style>