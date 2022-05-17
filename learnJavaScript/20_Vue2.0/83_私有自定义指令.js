/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-12 11:00:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-12 12:41:29
 * @FilePath: \20_Vue2.0\83_私有自定义指令.js
 */
// 在每个 vue 组件中, 可以在 directives 节点下声明私有自定义指令.

// demo1: 基础用法, 当指令第一次被绑定到元素上的时候, 会立即触发 bind() 函数
    // 私有自定义指令节点
    // directives: {
        // 定义名为 color 的指令,指向一个配置对象
    //     color: {
            // 当指令第一次被绑定到元素上的时候, 会立即触发 bind() 函数
            // 为绑定到的 HTML 元素设置红色的文字.
    //         bind(el) {
                // 形参中的 el 是绑定了此指令的,原生的 DOM 对象
    //             el.style.color = 'pink';
    //         }
    //     },
    // },



// demo2: binding.value 获取指令绑定的值
 // 私有自定义指令节点
    // directives: {
        // 定义名为 color 的指令,指向一个配置对象
    //     color: {
            // 当指令第一次被绑定到元素上的时候, 会立即触发 bind() 函数
            // 为绑定到的 HTML 元素设置红色的文字.
    //         bind(el, binding) {
                // console.log(binding); // 使用 binding.value 来获取指令绑定的值.
                // 形参中的 el 是绑定了此指令的,原生的 DOM 对象
                // el.style.color = 'pink';
    //             el.style.color = binding.value;
    //         }
    //     },
    // },



// demo3: update() 函数, 每次 DOM 更新时被调用
    // 私有自定义指令节点
    // directives: {
        // 定义名为 color 的指令,指向一个配置对象
    //     color: {
            // 当指令第一次被绑定到元素时被调用
            // 当指令第一次被绑定到元素上的时候, 会立即触发 bind() 函数
            // 为绑定到的 HTML 元素设置红色的文字.
    //         bind(el, binding) {
    //             console.log('触发了 bind() 函数');
                // console.log(binding); // 使用 binding.value 来获取指令绑定的值.
                // 形参中的 el 是绑定了此指令的,原生的 DOM 对象
                // el.style.color = 'pink';
    //             el.style.color = binding.value;
    //         },
            // 每次 DOM 更新时被调用
    //         update(el, binding) {
    //             console.log('触发了 update() 函数');
    //             el.style.color = binding.value;
    //         }
    //     },
    // },



// demo4:  如果 bind 和 update 函数中的逻辑完全相同, 则对象格式的自定义指令可以简写成函数格式.
// directives: {
//      // 如果 bind 和 update 函数中的逻辑完全相同, 则对象格式的自定义指令可以简写成函数格式.
//     color(el, binding) {
//         el.style.color = binding.value;
//     }
// }
   