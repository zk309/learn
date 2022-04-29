/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-23 10:59:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-23 11:49:34
 * @FilePath: \19_Node.js\69_简单请求和预检请求.js
 */
// 简单请求
// 同时满足以下两大条件的请求, 就属于简单请求:
// 1. 请求方式: GET, POST, HEAD 三者之一;
// 2. HTTP 头部信息不超过以下几种字段: 无自定义头部字段, Accept, Accept-Language, Content-Language, 
// DPR, Downlink, Save-Data, Viewport-Width, Width, Content-Type(只有三个值 application/x-www-form-urlencoded,
// multipart/form-data, text/plain);

// -----------------------------------------------

// 预检请求
// 只要符合以下任何一个条件的请求, 都需要进行预检请求:
// 1. 请求方式为 GET, POST, HEAD 之外的请求 Method 类型;
// 2. 请求头中包含自定义头部字段;
// 3. 向服务器发送了 application/json 格式的数据;

// 在浏览器与服务器正式通信之前, 浏览器会先发送 OPTION 请求进行预检, 以获知服务器是否允许该实际请求, 所以这一
// 次的 OPTION 请求称为 "预检请求". 服务器成功响应预检请求后, 才会发送真正的请求, 并且携带真实数据.

// ------------------------------------------------

// 简单请求和预检请求的区别:
// /简单请求的特点: 客户端与服务器之间只会发生一次请求;
// 预检请求的特点: 客户端与服务器之间会发生两次请求, OPTION 预检请求成功之后, 才会发生真正的请求.