/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-07 18:14:29
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-07 18:49:29
 * @FilePath: \20_Vue2.0\67_了解生命周期.js
 */
// 生命周期 & 生命周期函数：

// 生命周期 (Life Cycle) 是指一个组件从 创建 -> 运行 -> 销毁 的整个阶段，强调的是一个时间段。
// 生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。

// 注意：生命周期强调的是时间段，生命周期函数强调的是时间点。

// ---------------------------------------------------

// 组件生命周期函数的分类：
// 1. 组件创建阶段：new Vue() --> beforeCreate --> created --> beforeMount --> mounted -->
// 2. 组件运行阶段：beforeUpdate --> updated -->
// 3. 组件销毁阶段：beforeDestroy --> destroyed

// ---------------------------------------------------

// 生命周期示意图:
// https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA