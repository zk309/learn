/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 10:34:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-30 09:44:44
 * @FilePath: \vuex_demo\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储数据
  state: {
    count: 0
  },
  // 变更数据
  mutations: {
    // count + 1
    addCount (state) {
      state.count += 1
    },
    // count 自定义增加
    addCount1 (state, step) {
      state.count += step
    },
    // count - 1
    reduceCount (state) {
      state.count--
    },
    // count 自定义减少
    reduceCount1 (state, step) {
      state.count -= step
    }
  },
  // 异步操作处理
  actions: {
    // count + 1
    addSync (context) {
      setTimeout(() => {
        context.commit('addCount')
      }, 1000)
    },
    // count 自定义增加
    addSync1 (context, step) {
      setTimeout(() => {
        context.commit('addCount1', step)
      }, 1000)
    },
    // count - 1
    reduceSync (context) {
      setTimeout(() => {
        context.commit('reduceCount')
      }, 1000)
    },
    // count 自定义减少
    reduceSync1 (context, step) {
      setTimeout(() => {
        context.commit('reduceCount1', step)
      }, 1000)
    }
  },
  // 对 Store 中的数据进行加工
  getters: {
    showNum: (state) => {
      return '当前最新的数量是[' + state.count + ']'
    }
  },
  modules: {}
})
