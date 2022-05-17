/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 17:16:06
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-06 15:32:47
 * @FilePath: \20_Vue2.0\24_vue特性_双向数据绑定.js
 */
// 双向数据绑定:
// (在网页中，from 表单负责采集数据，Ajax 负责提交数据.)
// 在填写表单时，双向数据绑定可以辅助开发者在不操作 DOM 的前提下，自动把用户填写的内容同步到数据源中。
// js 数据的变化，会被自动渲染到页面中; 页面上表单采集的数据发生变化的时候，会被 vue 自动获取到，并更新到 js 数据中。

// 好处：
// 开发者不再需要手动操作 DOM 元素，来获取表单最新的值。