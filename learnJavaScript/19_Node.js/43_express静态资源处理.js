/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-20 12:53:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 12:54:35
 * @FilePath: \19_Node.js\43_express静态资源处理.js
 */
// express.static()
// express 提供了一个非常好用的函数，叫做 express.static(), 通过它，我们可以非常方便的创建一个静态资源服务器，
// 例如，通过如下代码就可以将 public 目录下的图片，css文件，JavaScript 文件对外开放访问了：
// app.use(express.static('public'));
// 注意：express 在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件的目录不会出现在 URL 中。

// 导入路由模块:
const express = require('express');

// 建立服务器:
const app = express();

// 托管静态资源
app.use('/clock/', express.static('./clock/'));

// 建立端口号
app.listen(83, () => {
    console.log('express server running at http://127.0.0.1:83/clock/');
});

// 托管多个静态资源：
// 如果要托管多个静态资源目录，请多次调用 express.static() 函数：
// app.use(express.static('public'));
// app.use(express.static('files'));
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件。


// 挂载路径前缀：
// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：
// app.use('/public', express.static('public'));
// 现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了：
// http://localhost:3000/public/images/kitten.jpg
// http://localhost:3000/public/css/style.css
// http://localhost:3000/public/js/app.js