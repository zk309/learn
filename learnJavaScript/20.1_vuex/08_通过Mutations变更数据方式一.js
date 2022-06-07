/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 15:03:38
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-29 15:09:55
 * @FilePath: \20.1_vuex\08_通过Mutation变更数据.js
 */
// Mutation:
// Mutation 用于变更 Store 中的数据.
// 1. 只能通过 mutation 变更 Store 数据, 不可以直接操作 Store 中的数据;
// 2. 通过这种方式虽然操作起来稍微繁琐一些, 但是可以集中监控所有数据的变化;

/****
 * src/store/index.js
 *   mutations: {
    // count + 1
    addCount (state) {
      state.count++
    },
    // count - 1
    reduceCount (state) {
      state.count--
    }
  },

  * components/one.vue
    // 方法
  methods: {
    addCount () {
      this.$store.commit('addCount')
    }
  },
 */