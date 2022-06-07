/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 13:05:24
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-30 17:50:15
 * @FilePath: \20.1_vuex\07_获取State数据的方式.js
 */
// States
// 提供唯一的公共数据源, 所有共享的数据都要统一放到 State 中进行存储.

// 组件访问 State 中的数据的第一种方式:
// this.$store.state.全局数据名称



// 组件访问 State 中的数据的第二种方式: (推荐)
// 注意, 一定要写在 computed 计算属性中.
/*
  1. 从 vuex 中按需导入 mapState 函数
  import { mapState } from 'vuex'

  2. 将全局数据, 映射为当前组件的计算属性
  computed: {
    ...mapState(['count'])
  }
*/