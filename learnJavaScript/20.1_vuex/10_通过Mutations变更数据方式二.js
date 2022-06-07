/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 21:34:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-04 19:06:10
 * @FilePath: \20.1_vuex\10_通过Mutations变更数据方式二.js
 */
// Mutation: 
// this.$store.commit() 是触发 mutations 的第一种方式, 触发 mutations 的第二种方式:

// 1. 从 vuex 中按需导入 mapMutations 函数
// import { mapMutations } from 'vuex

// 2. 将指定的 mutations 函数, 映射为当前组件的 methods 函数, 然后调用
/****
 * 
  methods: {
    ...mapMutations(['reduceCount', 'reduceCount1']),
    reduce () {
      this.reduceCount()
    },
    reduce1 (n) {
      // 传参
      this.reduceCount1(n)
    }
  },
 */