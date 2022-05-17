/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 16:40:54
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-10 19:16:42
 * @FilePath: \20_Vue2.0\74_使用$refs操作DOM元素.js
 */
// 什么是 ref 引用？
// ref 用来辅助开发者在不依赖 jQuery 的情况下，获取 DOM或组件的引用。
// 每个 vue 的组件实例上，都包含一个 $refs 对象，里面存储着对应的 DOM 元素或组件的引用。默认情况下，组件的 $refs 指向一个空对象。

// demo 1:
// <h1 ref="appH1">App 根组件</h1>

//  mounted() {
//         console.log(this.$refs);
//         this.$refs.appH1.style.color = 'pink';
        // console.log(this.$refs.Left.info);
//     },