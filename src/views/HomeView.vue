<template>
  <button @click="toAbout">跳转关于页面</button>
  <button @click="toDirective">使用自定义指令：用户鉴权</button>
  <button @click="toVMove">使用自定义指令：移动</button>
  <button @click="toVLazy">使用自定义指令：懒加载</button>
  <button @click="toHooks">使用自定义hook：图片转base64</button>
  <!-- <div>{{ gril }}</div>
  <button @click="change">修改</button> -->
</template>

<script setup lang="ts">
import { reactive, ref, toRaw, toRef, triggerRef } from 'vue'
import {useRouter} from'vue-router'

const $router = useRouter()

const gril = reactive({ name: 'alice', age: 18, like: 'dream' })


const change = () => {
  const man = toRaw(gril)
  man.like = 'sz'
  gril.like = 'jk'
  console.log(gril, man); // man.like 也会更改
}

const toAbout = () => {
  $router.push('/about')
}
const toDirective = () => {
  $router.push('/directive')
}
const toVMove = () => {
  $router.push('/v-move')
}
const toVLazy = () => {
  $router.push('/v-lazy')
}
const toHooks = () => {
  $router.push('/to-base64')
}
</script>