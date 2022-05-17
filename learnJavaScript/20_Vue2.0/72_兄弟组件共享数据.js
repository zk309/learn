/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 09:37:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 09:59:48
 * @FilePath: \20_Vue2.0\72_兄弟组件共享数据.js
 */
// 在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus.

// 兄弟组件 A (数据发送方):
// import bus from '@/eventBus.js';
// exports default {
//     data() {
//         return {
//             msg: 'Hello vue.js'
//         }
//     },
//     methods: {
//         sendMsg() {
//             bus.$emit('share', this.msg);
//         }
//     }
// }


// eventBus.js 文件:
// import Vue from 'vue';
// 向外共享 Vue 的实例对象
// export default new Vue();


// 兄弟组件 C (数据接收方):
// import bus from '@/eventBus.js';
// export default {
//     data() {
//         return {
//             msgFromLeft: ''
//         }
//     },
//     created() {
//         bus.$on('share', val => {
//             this.msgFromLeft = val;
//         })
//     }
// }

// ----------------------------------------------------------------

// EventBus 的使用步骤：
// 1. 创建 eventBus.js 模块，并向外共享一个 Vue 的实例对象；
// 2. 在数据发送方，调用 bus.$emit('事件名称', 要发送的数据) 方法触发自定义事件;
// 3. 在数据结构方，调用 bus.$on('事件名称'，事件处理函数) 方法注册一个自定义事件；