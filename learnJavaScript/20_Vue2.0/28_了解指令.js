/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 21:20:20
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-04 23:09:07
 * @FilePath: \20_Vue2.0\28_了解指令.js
 */
// 指令的概念:
// 指令 (directives) 是 vue 为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构.

// vue 中的指令按照不同的用途可以分为如下 6 个大类:
// 1. 内容渲染指令;  v-text 指令, {{ }} 插值表达式指令, v-html 指令, 简单指令
// 2. 属性绑定指令； v-bind: 指令, 简写 : ,简单指令
// 3. 事件绑定指令； v-on: 指令，简写 @, 复杂指令
// 4. 双向绑定指令； v-model, 复杂指令
// 5. 条件渲染指令； v-if (还有只能和 v-if 配套使用的 v-else-if, v-else), v-show, 简单指令
// 6. 列表渲染指令;  v-for (一般要加上 v-bnd:key="item.key"); 复杂指令

// 注意：指令是 vue 开发中最基础，最常用，最简单的知识点.
//      v-bind: 是数据驱动视图，而 v-model 则属于 双向数据绑定.