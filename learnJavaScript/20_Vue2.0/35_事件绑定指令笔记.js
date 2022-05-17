/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-03 13:34:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-03 16:27:36
 * @FilePath: \20_Vue2.0\35_vue的事件绑定指令笔记.js
 */
// 事件绑定指令:
// vue 提供了 v-on 事件绑定指令，用来辅助程序员为 DOM 元素绑定事件监听。语法格式如下：
// <button v-on:click="add"> +1 </button> <button v-on:click="reduce"> -1 </button> <br><br>

// 事件绑定指令的简写形式:
// <!-- 由于 v-on 指令在开发中使用频率非常高，因此，vue 官方为其提供了简写形式（简写为英文的 @ ）。 -->
// <button @click="increase(5)"> +N </button> <button @click="decrease(5)"> -N </button>

// 注意：原生 DOM 对象有 onclick、oninput、onkeyup 等原生事件，替换为 vue 的事件绑定形式后，
// 分别为：v-on:click、v-on:input、v-on:keyup

// ------------------------------------------------------------------------

// 事件参数对象：
// 在原生的 DOM 事件绑定中，可以在事件处理函数的形参处，接收事件参数对象 event。同理，在 v-on 指令
// （简写为 @ ）所绑定的事件处理函数中，同样可以接收到事件参数对象 event，示例代码如下：
// 实现随即变色
// get(n, evt) {
//     console.log(n);
//     var color = this.random();
//     // console.log(color);
//     evt.target.style.backgroundColor = color;
// }

// $event 是 vue 提供的特殊变量，用来表示原生的事件参数对象 event。$event 可以解决事件参数对象 event
// 被覆盖的问题。
// <input type="button" value="点击我，随即变色。" v-on:click="get('!-_-!', $event)">

// -----------------------------------------------------------------------------

// 事件修饰符:
// 在事件处理函数中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求.
// 因此，vue 提供了时间修饰符的概念，来辅助程序员更方便地对事件的触发进行控制
// .prevent     阻止默认行为(例如，阻止 a 链接的跳转，阻止表单的提交)
// .stop        阻止事件冒泡
// .capture     以捕获模式触发当前的时间处理函数
// .once        绑定的事件只触发一次
// .self        只有在 event.target 是当前元素自身时触发事件处理函数.

// ----------------------------------------------------------------------------

// 按键修饰符:
// 在监听键盘事件时，我们经常需要判断详细的按键。此时，可以为键盘相关的事件添加按键修饰符，例如：
// <!-- 按下 esc 键清空 input -->
        // <!-- 按下 enter 键，提交表单，清空 input -->
        // <input type="text" placeholder="输入内容，然后按下 esc 键或 enter 键." v-on:keyup.esc="clearInput"
        //    v-on:keyup.enter="submit"></input>