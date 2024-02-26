<template>
  <div class="about">
    <h1>某详情页</h1>
    <button v-has-show="'detail:create'">创建</button>
    <button v-has-show="'detail:edit'">编辑</button>
    <button v-has-show="'detail:delete'">删除</button>
  </div>
</template>

<script lang=ts setup>
import { ref, reactive} from 'vue'
import type {Directive} from 'vue';

localStorage.setItem('userId', 'liuqi')

const permission = [
  'liuqi:detail:create',
  'liuqi:detail:edit',
  'liuqi:detail:delete',
]

const userId = localStorage.getItem('userId') as string
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
  console.log(el, binding);
  if (!permission.includes(userId + ':' +binding.value)) {
    el.style.display = 'none';
  }

}

</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
