/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-30 02:50:28
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-04 19:08:10
 * @FilePath: \20.1_vuex\11_通过Actions处理异步任务.js
 */
// Action 用于处理异步任务.
// 如果通过异步操作变更数据, 必须通过 Action, 而不能使用 Mutation, 但是在 Action 中还是
// 要通过触发 Mutation 的方式间接变更数据.

// src/store/index.js
// 异步操作处理
// mutations: {
//   addCount (state) {
//     state.count += 1
//   },
// }
// actions: {
//   addSync (context) {
//     setTimeout(() => {
//       context.commit('addCount')
//     }, 1000)
//   }
// },

// 触发 Action 的第一种方式:
// src/components/one.vue
// <button v-on:click="handle">+ 1 (间隔1秒后自增)</button>
// handle () {
//   this.$store.dispatch('addSync')
// }

// 触发 Action 的第二种方式:
// src/components/one.vue
// <button v-on:click="handler">+ 1 (间隔1秒后自增)</button>
// ...mapActions(['addSync']), // 写在 methods 中
// handler () {
//   this.addSync()
// }