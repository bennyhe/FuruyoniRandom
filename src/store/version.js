import { defineStore } from 'pinia'

// 版本切换的全局状态：互斥逻辑与数据重置副作用由 App.vue 的 watch 统一处理
export const useVersionStore = defineStore('version', {
  state: () => ({
    isOldVer: false, // 第二幕（旧幕）
    isNaChVer: false, // 新幕官中（中文版本）
    isNaVer: false, // 新幕
    isReVer: true // 再演（默认）
  })
})