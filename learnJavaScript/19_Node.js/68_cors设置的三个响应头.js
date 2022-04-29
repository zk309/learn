/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-23 09:35:46
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-23 10:07:22
 * @FilePath: \19_Node.js\68_cors设置的三个响应头.js
 */

// CORS 响应头部 --- Access-Control-Allow-Origin

// 响应头部可以携带一个 Access-Control-Allow-Origin 字段, 其语法如下:
// Access-Control-Allow-origin: <origin> | *

// 其中, origin 参数的值指定了允许访问该资源的外域 URL.
// 例如, 下面的字段将只允许来自 http://itcast.cn 的请求:
// res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn)

// 如果指定了 Access-Control-Allow-Origin 字段的值为通配符 *, 表示允许来自任何域的请求, 示例代码如下:
// res.setHeader('Access-Control-Allow-Origin', '*');

// -------------------------------------------------------------------

// CORS 响应头部 --- Access-Control-Allow-Headers

// 默认情况下, CORS 仅支持客户端向服务器发送如下的 9 个请求头:
// Accept, Accept-Language, Content-Language, DPR, Downlink, Save-Data, Viewport-Width, Width,
// Content-Type(值仅限于 text/plain, multipart/form-data, application/x-www-form-urlencoded 三者之一);

// 如果客户端向服务器发送了额外的请求头信息, 则需要在服务器端, 通过 Access-Control-Allow-Headers 对额外的
// 请求头进行声明, 否则这次请求会失败. 例如:
// 允许客户端额外向服务器发送 Content-Type 请求头和 x-Custom-Header 请求头
// 注意: 多个请求头之间使用英文的逗号进行分割.
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-Custom-Header');4

// -------------------------------------------------------------------

// CORS 响应头部 --- Access-Control-Allow-Methods

// 默认情况下, CORS 仅支持客户端发起 GET, POST, HEAD 请求.

// 如果客户端希望通过 PUT, DELETE 等方式请求服务器的资源, 则需要在服务器端, 通过 Access-Control-Allow-Methods
// 来指明实际请求所允许使用的 HTTP 方法.

// 只允许 POST, GET, DELETE, HEAD 请求方法
// res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD');
// 允许所有的 HTTP 请求方法
// res.setHeader('Access-Control-Allow-Methods', '*');