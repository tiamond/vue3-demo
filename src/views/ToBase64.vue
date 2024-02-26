<template>
  <div class="wrap" v-resize="listenResize">

    <img id="base" src="../assets/images/1.jpg" alt="">
  </div>
  <!-- <img :src="base64" alt=""> -->
  <!-- <loading/> -->
</template>

<script lang="ts" setup>
import { onMounted, ref, getCurrentInstance } from 'vue';
import toBase64 from '../hooks/toBase64';
// import useResize from 'v-resize-xf'

const app = getCurrentInstance()

onMounted(() => {
  app?.proxy?.$loading?.show()
  setTimeout(() => {
    app?.proxy?.$loading?.hide()
  }, 2000);
})

const base64 = ref('')
toBase64('#base').then((obj) => {
  base64.value = obj.url

})

// onMounted(() => {
//   useResize(document.querySelector('.wrap'), (entry: any)=> {
//     console.log(entry);
//   })
// })
const listenResize = (entry: any) => {
}

</script>

<style lang="scss" scoped>
.wrap {
  resize: both;
  overflow: hidden;
  border: 1px solid #000;
}
</style>