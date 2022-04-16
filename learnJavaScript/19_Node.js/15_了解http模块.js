/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-16 09:33:50
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-16 11:33:17
 * @FilePath: \19_Node.js\15_了解http模块.js
 */
// 什么是客户端？ 什么是服务器？
// 在网络节点中，负责消费资源的电脑，叫做客户端，负责对外提供网络资源的电脑，叫做服务器；

// http 模块是 Node.js 官方提供的，用来创建 web 服务器的模块。
// 通过 http 模块提供的 http.createServer() 方法，就能方便把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

// 如果要希望使用 http 模块创建 Web 服务器，则需要先导入它：
// const http = require('http');

// 服务器和普通电脑的区别在于，服务器安装了 Web 服务器软件，例如：IIS, Apache 等。
// 通过安装这些服务器软件，就把一台普通的电脑变成一台 Web 服务器。

// 在 Node.js 中，我们不需要使用 IIS, Apache 等这些第三方 Web 服务器软件。
// 因为我们可以基于 Node.js 提供的 http 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供 Web 服务。