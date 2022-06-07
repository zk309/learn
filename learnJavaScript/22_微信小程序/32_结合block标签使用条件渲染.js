/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 09:06:43
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-24 09:10:07
 * @FilePath: \22_微信小程序\32_结合block标签使用条件渲染.js
 */
// 结合 <block> 使用 wx:if
// 如果要一次性控制多个组件的展示与隐藏, 可以使用一个 <block></block> 标签将多个组件包装起来,
// 并在 <block></block> 标签上使用 wx:if 控制属性.

// 注意: <block></block> 并不是一个组件, 它只是一个包裹性质的容器, 不会在页面中做任何渲染.