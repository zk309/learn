/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-31 19:25:59
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 19:26:09
 * @FilePath: \22_微信小程序\69.5_wxs脚本的特点.js
 */
// WXS 特点:
// 1. 与 JavaScript 不同:   WXS 借鉴于 JavaScript, 但本质上是完全不同的两种语言;
// 2. 不能作为组件的事件回调:   典型的应用场景是'过滤器', 经常配合 Mustache 语法, 不能配合事件绑定.
// 3. 隔离性:   wxs不能调用 js 中定义的函数; wxs 不能调用小程序提供的 API;
// 4. 性能好:   对 IOS 设备友好 2~20倍, 而对 android 设备无差异;