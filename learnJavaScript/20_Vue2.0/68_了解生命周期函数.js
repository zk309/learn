/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-08 14:31:47
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-08 15:24:50
 * @FilePath: \20_Vue2.0\68_了解生命周期函数.js
 */
// 简略生命周期函数：（原图在 images/lifecycle.png）

// 组建的创建阶段：
// beforeCreate: 组件的 props/data/methods 尚未被创建，都处于不可用的状态。
// 初始化 props, data, methods
// created: 组件的 props, data, methods 已创建好，都处于可用的状态，但是组件的模板结构尚未生成。

// beforeMount: 将要把内存中编译好的 HTML 结构渲染到浏览器中，此时浏览器中还没有当前组件的 DOM 结构。
// 用内存中编译生成的 HTML 结构，替换掉 el 属性指定的 DOM 元素。
// mounted: 已经把内存中的 HTML 结构，成功渲染到了浏览器中，此时浏览器已然包含了当前组件的 DOM 结构。

// 组件的运行阶段：
// beforeUpdate: 将要根据变化过后，最新的数据，重新渲染组件的模板结构。
// 根据最新的数据，重新渲染组件的 DOM 结构。
// update: 已经根据最新的数据，完成了组件的 DOM 结构的渲染.

// 组件的销毁阶段:
// beforeDestroy: 将要销毁此组件，此时尚未销毁，组件还处于正常工作的状态。
// 销毁当前组件的 数据侦听器(watch), 子组件, 事件监听器.
// destroyed: 组件已经被销毁，此组件在浏览器中对应的 DOM 结构已被完全移除。