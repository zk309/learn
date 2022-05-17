/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-11 13:48:30
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-12 09:22:51
 * @FilePath: \20_Vue2.0\81_了解slot插槽.js
 */
// 什么是插槽？
// 插槽 (Slot) 是 vue 为组件的封装者提供的能力，允许开发者在封装组件时，把不确定的，希望用户指定的部分定义为插槽。

// 父组件：
/* 
<Left>
    <p>我是在 Left.vue 组件中插在的内容</p>
</Left> 
*/

// 子组件：
/* 
<div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <slot></slot>  // 插槽
</div> 
*/

// 注意：
/*
默认情况下，在使用组件的时候，提供的内容都会被填充到名字为 default 的插槽之中;
1. 如果要把内容填充到指定名称的插槽中，需要使用 v-slot: 指令;
2. v-slot: 后面要跟上插槽的名字;
3. v-slot: 指令不能直接用在元素身上，必须用在 template 标签上;
4. template 这个标签，它是一个虚构的标签，只起到包裹性质的作用，但是，不会被渲染为任何实质性的 html 元素; 
5. v-slot: 简写是 #;
6. 插槽指令的 后备内容(即默认内容) 直接放在 <slot></slot> 中即可；
*/

// ---------------------------------------------------

// 具名插槽:
// 顾名思义：具名插槽就是有具体名字的插槽，使用时可以指定替换模板中哪个插槽的内容。
// 当我们需要在子组件模板中不同的位置插入不同的内容时，只会有一个插槽起作用。

/*
子组件:
<div class="content-box">
    <!-- 具名插槽 -->
    <slot name="content"></slot>
</div>
*/

// ---------------------------------------------------

// 作用域插槽:
// 在封转组件时，为预留的 <slot></slot> 提供属性对应的值，这种用法叫做 '作用域插槽';
/* 
父组件:
<template v-slot:title="scope">
    <p>将进酒</p>
    <p>{{ scope }}</p>
    <p>{{ scope.msg }}</p>
</template>

子组件:
<div class="header-box">
    <!-- 具名插槽 -->
    <slot name="title" msg="建安初年" v-bind:user="userInfo"></slot>
</div>
*/