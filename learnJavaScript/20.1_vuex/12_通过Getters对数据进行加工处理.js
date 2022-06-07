/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-30 09:54:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-04 19:10:07
 * @FilePath: \20.1_vuex\12_通过Getters对数据进行加工处理.js
 */
// Getter:
// Getter 用于对 Store 中的数据进行加工处理形成新的数据.不会修改 State 中的数据.
// 1. Getter 可以对 Store 中已有的数据加工处理之后形成新的数据, 类似于 Vue 的计算属性;
// 2. Store 中数据发生变化, Getter 的数据也会跟着变化;
/*
定义 Getter
  getters: {
    showNum: (state) => {
      return '当前最新的数量是[' + state.count + ']'
    }
  },
*/



// 使用 getters 的第一种方式:
// this.$store.getters.名称

// 使用 getters 的第二种方式:
// 注意, 一定要写在 computed 计算属性中.
// import { mapGetters } from 'vuex' // 写在 computed

// computed: {
//   ...mapGetters(['showNum'])
// },