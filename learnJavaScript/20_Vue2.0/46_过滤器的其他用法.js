/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-04 21:56:24
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-04 23:04:09
 * @FilePath: \20_Vue2.0\56_过滤器的其他用法.js
 */
// 1. 连续调用多个过滤器:
// 过滤器可以串联进行调用.
// 把 message 的值，交给 filterA 进行处理;
// 把 filterA 处理的结果，再交给 filterB 进行处理;
// 最终把 filterB 处理的结果，作为最终的值渲染到页面上;
// {{ message | filterA | filterB }}


// 2. 过滤器传参:
// 过滤器的本质是 JavaScript 函数, 因此可以接收参数:
// arg1 和 arg2 是传递给 filterA 的参数
// <p>{{ message | filterA(arg1, arg2) }}</p>
// 过滤器处理函数的形参列表中，第一个参数，永远是 "管道符" 前面待处理的值, 从第二个参数开始，才是调用过滤器是传递过来的 arg1 和 arg2 参数.
// Vue.filter('filterA', (msg, arg1, arg2) => {
    // 过滤器的代码逻辑
// })


// 3. 过滤器的兼容性
// 过滤器仅在 vue 2.x 和 1.x 中受支持，在 vue 3.x 的版本中剔除了过滤器相关的功能。
// 在企业级项目开发中：
// ⚫ 如果使用的是 2.x 版本的 vue，则依然可以使用过滤器相关的功能
// ⚫ 如果项目已经升级到了 3.x 版本的 vue，官方建议使用计算属性或方法代替被剔除的过滤器功能
// 具体的迁移指南，请参考 vue 3.x 的官方文档给出的说明：
// https://v3.vuejs.org/guide/migration/filters.html#migration-strategy
