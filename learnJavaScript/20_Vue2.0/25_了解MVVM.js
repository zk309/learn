/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 19:56:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 20:10:36
 * @FilePath: \20_Vue2.0\25_了解MVVM.js
 */
// MVVM 是 vue 实现数据驱动视图和双向数据绑定的核心原理，MVVM 指的是 Model(数据源), View(视图) 和 ViewModel(vue 的实例), 它是把每个 HTML 页面都拆分成了这三个部分.

// 在 MVVM 概念中：
// Model 表示当前页面渲染时所依赖的数据源.
// View 表示当前页面所渲染的 DOM 结构.
// ViewModel 表示 vue 的实例, 它是 MVVM 的核心.

// MVVM 的工作原理：
// ViewModel 作为 MVVM 的核心, 是它把当前页面的数据源 (Model) 和页面的结构 (View) 连接在一起.
// 当数据源发生变化的时候, 会被 ViewModel 监听到, VM 会根据最新的数据源自动更新页面的结构.
// 当表单元素的值发生变化时, 也会被 VM 监听到, VM 会把变化过后最新的值自动同步到 Model 数据源中.