/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-11 09:22:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-11 09:49:48
 * @FilePath: \20_Vue2.0\79_动态组件渲染component.js
 */
// 什么是动态组件？
// 动态组件指的是动态切换组件的显示与隐藏。

// 如何实现动态组件渲染？
// vue 提供了一个内置的 <component></component> 组件，专门用来实现动态组件的渲染。
// component 是 vue 内置的, 作用：组件的占位符。
// demo：

    // data() {
    //     return {
            // 1. 当前要渲染的组件名称
    //         comName: 'Left'
    //     }
    // },

    // <!-- 2. 通过 is 属性，动态指定要渲染的组件. -->
    // <component v-bind:is="comName"></component>

    // <!-- 3. 点击按钮，动态切换组件的名称 -->
    // <button v-on:click=" comName = 'Left' ">展示 Left 组件。</button>
    // <button v-on:click=" comName = 'Right' ">展示 Right 组件。</button>
   