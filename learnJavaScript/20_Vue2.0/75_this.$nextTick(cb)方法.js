/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 21:11:38
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-10 08:48:01
 * @FilePath: \20_Vue2.0\75_this.$nextTick(cb)方法.js
 */
// this.$nextTick(cb) 方法
// 组件的 $nextTick(cb) 方法，会把 cb 回调推迟下一个 DOM 更新周期之后执行。
// 通俗的理解是：DOM 更新完成之后，再执行 cb 回调函数。从而能保证 cb 回调函数可以操作到最新的 DOM 元素。