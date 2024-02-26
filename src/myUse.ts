import type { App } from "vue";
import { app } from './main'

interface MyUse {
  install: (app: App, ...options: any[]) => void
}

// 防止重复添加注册
const pluginList = new Set()
export function myUse<T extends MyUse>(plugin: T, ...options: any[]) {
  if (pluginList.has(plugin)) {
    console.error('警告！已经重复添加注册这个插件', plugin);

  } else {
    plugin.install(app)
    pluginList.add(plugin)
  }
}