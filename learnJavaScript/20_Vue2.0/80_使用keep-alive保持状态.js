/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-11 11:06:12
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-11 11:38:01
 * @FilePath: \20_Vue2.0\80_使用keep-alive保持状态.js
 */
// 默认情况下，切换动态组件时无法保持组件的状态。此时可以使用 vue 内置的 <keep-alive></keep-alive>
// 保持动态组件的状态。demo:

/* <keep-alive>
    <component v-bind:is="comName"></component>
</keep-alive> */

// 当组件被缓存时，会自动触发组件的 deactivated 生命周期函数。
// 当组件被激活时，会自动触发组件的 activated 生命周期函数。

// 当组件第一次被创建的时候，既会执行 created() 生命周期, 又会执行 activated() 生命周期。
// 当组件被激活的时候，只会触发 activated() 生命周期，不在触发 created() 生命周期，因为组件没有被创建。

// --------------------------------------------------------

// keep-alive 的 include 属性
// include 属性用来指定：只有名称匹配的组件会被缓存。多个组件之间使用英文的逗号分隔：

/* <keep-alive include="Left, Right">
    <component v-bind:is="comName"></component>
</keep-alive> */

// --------------------------------------------------------

// keep-alive 的 exclude 属性
// include 属性用来指定：除了名称匹配的组件，其余组件会被缓存。多个组件之间使用英文的逗号分隔：

/* <keep-alive exclude="Right">
    <component v-bind:is="comName"></component>
</keep-alive> */