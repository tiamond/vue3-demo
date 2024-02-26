<template>
  <div class="wrap">
    <div class="dialog" v-move="canMove">
      <header></header>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Directive } from 'vue'

const canMove = ref(true)

let vw = window.document.body.clientWidth
let vh = window.document.body.clientHeight



const VMove: Directive<HTMLDivElement, boolean> = (el, binding) => {
  const moveElement = el.firstElementChild as HTMLDivElement;
  if (!binding.value) {
    moveElement.style.cursor = 'default'
    return
  }
  const elHalfW = el.offsetWidth / 2
  const elHalfH = el.offsetHeight / 2
  const mouseDown = (e: MouseEvent) => {
    // 计算点击位置与弹框左上角的偏移
    const x = e.clientX - el.offsetLeft
    const y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      let l = e.clientX - x;
      let t = e.clientY - y;
      // 控制显示区域，不超过视口
      l = l < elHalfW ? elHalfW : l > vw - elHalfW ? vw - elHalfW : l
      t = t < elHalfH ? elHalfH : t > vh - elHalfH ? vh - elHalfH : t

      el.style.left = l + 'px'
      el.style.top = t + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)

}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;

  .dialog {
    position: fixed;
    width: 200px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000;

    header {
      height: 20px;
      background-color: #ddd;
      cursor: move;
    }
  }
}
</style>