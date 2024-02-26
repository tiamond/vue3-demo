import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import useResize from 'v-resize-xf'
import $loading from './components/loading/index'

import App from './App.vue'
import router from './router'
import { myUse } from './myUse'

export const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(useResize)
// app.use($loading)
myUse($loading)
// myUse($loading) // 报警告

type Load = {
  show: () => void,
  hide: () => void
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loading: Load
  }
}

app.mount('#app')
