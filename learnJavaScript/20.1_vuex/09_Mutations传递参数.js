/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 15:26:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 18:59:36
 * @FilePath: \20.1_vuex\09_Mutations传递参数.js
 */
// Mutation 传参:
/****
 * 1. 定义 mutation
 *  count 自定义增加
    addCount1 (state, n) {
      state.count += n
    }


  
  * 2. 触发 mutation
  <button v-on:click="addCount1(2)">+ n</button>
  
  addCount1 (n) {
    this.$store.commit('addCount1', n)
  }
 */