/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-05 20:52:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-06 18:19:48
 * @FilePath: \zk309\src\main.js
 */
// 导入 vue 函数库, 得到 vue 构造函数.
import Vue from 'vue';
// 导入 App.vue 根组件, 将来要把 App.vue 中的模板结构, 渲染到 HTML 页面中.
import App from './App.vue';
import Test from './Test';

Vue.config.productionTip = false;

// 利用 vue 构造函数, 创建 vue 实例对象.
new Vue({
    // el: '#app',  // 相当于底下的 $mount('#app')
    render: h => h(Test),  // 把 render 函数指定的组件, 渲染到 HTML 页面中. render() 函数中，渲染的是哪个 .vue 组件，那么这个组件就叫做 "根组件";
}).$mount('#app');
