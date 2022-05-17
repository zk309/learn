/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-12 12:47:01
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-12 13:21:03
 * @FilePath: \20_Vue2.0\84_全局自定义指令.js
 */
// 全局自定义指令:
// 全局共享的自定义指令需要通过 'Vue.directive()' 进行声明, 
// 参数 1: 字符串, 表示全局自定义指令的名字;
// 参数 2: 对象, 用来接收指令的参数值;

// demo:
// 全局自定义指令:
// Vue.directive('color', {
//     bind(el, binding) {
//         console.log('bind');
//         el.style.color = binding.value;
//     },
//     update() {
//         console.log('update');
//     }
// });
// 全局自定义指令的简写形式:
// Vue.directive('color', (el, binding) => {
//     el.style.color = binding.value;
// });
