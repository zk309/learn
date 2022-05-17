/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 21:48:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-03 13:51:27
 * @FilePath: \20_Vue2.0\29_vue的内容渲染指令笔记.js
 */
// 内容渲染指令用来辅助开发者渲染 DOM 元素的文本内容. 常用的内容渲染指令有如下 3 个:
// 1. v-text
// 2. {{  }}
// 3. v-html

// 1. v-text 指令
// <!-- v-text 指令 -->
// <p v-text="userName"></p>
// <!-- 注意，默认的文本 "性别" 会被 gender 的值覆盖掉. -->
// <p v-text="gender">性别:</p>

// 2. {{}} 指令
// <!-- {{  }} 插值表达式指令 -->
// <p>姓名: {{ userName }} </p>
// <p>性别: {{ gender }} </p>
// 注意，相对于 v-text 指令来说，插值表达式在开发中更常用一些，因为它不会覆盖元素中默认的文本内容.

// 3. v-html 指令
// <!-- v-html 指令 -->
// <!-- 把包含 HTML 标签的字符串渲染为页面的 HTML 元素. -->
// <p v-html="info"></p>