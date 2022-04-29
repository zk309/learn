/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-20 17:25:28
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-20 17:29:21
 * @FilePath: \19_Node.js\47_路由的匹配过程.js
 */
// 路由的匹配过程：
// 每当一个请求到达服务器之后，需要先经过路由的匹配，才会调用对应的处理函数。
// 在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，
// 则 Express 会将这次请求，转交给对应的 function 函数进行处理。

// 路由匹配的注意点：
// 1. 按照定义的先后顺序进行匹配；
// 2. 请求类型和请求的 URL 同时匹配成功，才会调用对应的处理函数。