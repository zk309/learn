/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 12:27:23
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-23 23:11:11
 * @FilePath: \22_微信小程序\25_WXML模板语法--事件绑定.js
 */
// 什么是事件？
// 事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理。
// 1. 渲染层向客户端描述交互事件  -->  2. 渲染层与用户进行交互触发事件  --> 3. 逻辑层处理触发事件，并通过客户端返回给渲染层。

// 小程序中常用的事件：
// tap        bindtap 或 bind:tap           手指触摸后马上离开，类似于 HTML 中的 click 事件。
// input      bindinput 或 bind:input       文本框的输入事件。
// change     bindchange 或 bind:change     状态改变时触发。

// 事件对象的属性列表：
// 当事件回调触发的时候，会收到一个事件对象 event，它的详细属性如下： '*'表示常用
// timeStamp            Integer         页面打开到触发事件所经过的毫秒数。
// target*              Object          触发事件的组件的一些属性集合。
// currentTarget        Object          当前组件的一些值属性集合。
// detail*              Object          额外的信息。
// touches              Array           触摸事件，当前停留在屏幕中的触摸点信息的数组。
// changedTouches       Array           触摸事件，当前变化的触摸点信息的数组。

// target 和 currentTarget 的区别：
// target 是触发该事件的源头组件 (点了哪个就返回哪个)，
// 而 currentTarget 则是当前事件所绑定的组件 (返回的是绑定该事件的元素)。
