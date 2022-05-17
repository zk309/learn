/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-07 12:40:38
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-07 13:01:43
 * @FilePath: \20_Vue2.0\65_scoped的使用以及使用原理.js
 */
// 组件之间的样式冲突问题
// 默认情况下， 写在 .vue 组件中的样式会在全局生效，因此很容易造成多个组件之间的样式冲突问题。

// 导致组件之间样式冲突的根本原因是:
// 1. 单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面进行呈现的；
// 2. 每个组件中的样式，都会影响整个 index.html 页面中的 DOM 元素；

// ----------------------------------------------------------

// 什么是 scoped:
// 在vue文件中的style标签上，有一个特殊的属性：scoped。
// 当一个style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素。
// 通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有style标签全部加上了scoped，相当于实现了样式的模块化。

// -----------------------------------------------------------

// scoped 原理：
// 1. 每个 Vue 文件都将对应一个唯一的 id，该 id 根据文件路径名和内容 hash 生成，通过组合形成scopeId。
// 2. 编译 template 标签时，会为每个标签添加了当前组件的scopeId；
// <div class="demo">test</div>
// 会被编译成:
// <div class="demo" data-v-12e4e11e>test</div>
// 3. 编译 style 标签时，会根据当前组件的 scopeId 通过属性选择器和组合选择器输出样式；
// .demo{color: red;}
// 会被编译成:
// .demo[data-v-12e4e11e]{color: red;}