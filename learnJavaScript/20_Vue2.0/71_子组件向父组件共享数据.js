/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-09 08:33:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 11:56:15
 * @FilePath: \20_Vue2.0\71_子组件向父组件共享数据.js
 */
// 子组件向父组件共享数据使用自定义事件 $emit().
// 原理：
// 1. 在子组件中，通过 $emit() 来注册一个自定义事件； 
// 2. 在父组件中，通过 v-on: 来绑定自定义事件，并提供一个事件处理函数，接收到子组件传递过来的数据；

// 子组件
// export default {
//     data() {
//         return { count: 0 }
//     },
//     methods: {
//         add() {
//             this.count += 1;
//             this.$emit('numChange', this.count);  // 修改数据时，通过 $emit() 出发自定义事件。
//         }
//     },
// }

// 父组件
// <Son v-on:numChange="getNewCount"></Son>

// export default {
//     data() {
//         return { countFromSon: 0 }
//     },
//     methods: {
//         getNewCount(val) {
//             this.countFromSon = val
//         }
//     },
// }