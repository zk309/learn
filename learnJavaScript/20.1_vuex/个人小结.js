/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-30 10:02:22
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 19:08:26
 * @FilePath: \20.1_vuex\个人小结.js
 */
// 记住, 学习 vuex 不是学习语法, 而是要知道是用来做什么用的, 基于此, 你就会知道该怎么用.
// 1. State      是用来存储数据的; 两种写法
// 2. Mutation   是用来修改 State 数据的; 两种写法
// 3. Action     是用来处理 Mutation 的某些异步操作; 两种写法
// 4. Getter     加工处理 State 数据, 但不会修改 State 中的数据; 两种写法

// 注意:
// 1. 只有 Mutation 才可以修改 State 中的数据;
// 2. Action 中定义的异步操作, 需要通过 Mutation 才可以修改 State 中的数据;

// ------------------------------------------------------------------
// State:
// 使用 State 的第一种方式:
// this.$store.state.全局数据名称

// 使用 State 的第二种方式:
// import { mapState } from 'vuex'
// computed: {
//   ...mapState(['count'])
// }

// -------------------------------------------------------------

// Mutation:
// 使用 Mutation 的第一种方式:
// this.$store.commit('addCount')

// 使用 Mutation 的第二种方式:
// import { mapMutations } from 'vuex
// methods: {
//   ...mapMutations(['reduceCount', 'reduceCount1']),
//   reduce () {
//     this.reduceCount()
//   },
//   reduce1 (n) {
//     this.reduceCount1(n)
//   }
// },

// -------------------------------------------------------------

// Action:
// 使用 Action 的第一种方式:
// this.$store.dispatch('addSync')

// 使用 Action 的第二种方式:
// import { mapActions } from 'vuex
// methods: {
//   ...mapActions(['reduceSync', 'reduceSync1']),
//   reduce () {
//     this.reduceCount()
//   },
//   reduce1 (n) {
//     this.reduceCount1(n)
//   }
// },

// -------------------------------------------------------------

// Getter:
// 使用 getters 的第一种方式:
// this.$store.getters.名称

// 使用 getters 的第二种方式:
// import { mapGetters } from 'vuex'
// computed: {
//   ...mapGetters(['showNum'])
// },