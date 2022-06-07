/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-25 21:13:53
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-25 21:19:45
 * @FilePath: \22_微信小程序\46.5_关于跨域和Ajax的说明.js
 */
// 关于跨域问题:
// 跨域问题只存在于基于浏览器的 Web 开发中. 由于小程序的宿主环境不是浏览器, 而是微信客户端, 所以小程序中不存在跨域的问题.
// 跨域问题只存在于浏览器开发, 但是小程序是基于微信客户端开发, 所以, 不会存在跨域.

// 关于 Ajax 的说明:
// Ajax 技术的核心依赖于浏览器中的 XMLHttpRequest 这个对象, 由于小程序的宿主环境是微信客户端, 
// 所以, 小程序中不能叫做 "发起 Ajax 请求", 而是叫做 "发起网络数据请求".