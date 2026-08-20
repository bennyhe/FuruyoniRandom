import { defineStore } from 'pinia'

// 全局状态：版本切换互斥、数据重置副作用由 App.vue 的 watch 统一处理，子组件直接读写
export const useGlobalStore = defineStore('global', {
  state: () => ({
    isOldVer: false, // 第二幕（旧幕）
    isNaChVer: false, // 新幕官中（中文版本）
    isNaVer: false, // 新幕
    isReVer: true, // 再演（默认）
    isShowA: true, // 是否显示范围 A
    curlang: 0 // 语言（0=日文，从 localStorage 的 sakuraLang 恢复）
  })
})