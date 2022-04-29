/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 21:33:39
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-20 12:41:56
 * @FilePath: \19_Node.js\41_监听GET和POST请求&处理参数.js
 */
// 以下所有的演示均在 42


// 监听 GET 请求:
// 通过 app.get() 方法， 可以监听客户端地 GET 请求，具体的语法格式如下：
// 参数1：客户端请求的 URL 地址
// 参数2：请求对应的处理函数
//        req: 请求对象(包含了与请求相关的属性和方法)
//        res: 响应对象(包含了与响应相关的属性和方法)
// app.get('请求URL', function(req, res) { 处理函数 })


// 监听 POST 请求:
// 通过 app.post() 方法， 可以监听客户端地 POST 请求，具体的语法格式如下：
// 参数1：客户端请求的 URL 地址
// 参数2：请求对应的处理函数
//        req: 请求对象(包含了与请求相关的属性和方法)
//        res: 响应对象(包含了与响应相关的属性和方法)
// app.post('请求URL', function(req, res) { 处理函数 })


// 把内容响应给客户端:
// 通过 res.send() 方法，可以把处理好的内容，发送给客户端：
// 向客户端发送 JSON 对象。
// res.send({name: 'zs', age: 20, gender: '男'});
// 向客户端发送文本内容.
// res.send('请求成功');


// 通过 URL 中携带的参数:
// 通过 req.query 对象，可以访问到客户端通过查询参数的形式，发送到服务器的参数。
// req.query 默认是一个空对象
// 客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数。
// 可以通过 req.query 对象访问到，例如：
// req.query.name  req.query.age


// 获取 URL 中的动态参数：
// 通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数。
// URL 地址中，可以通过 : 参数名的形式，匹配动态参数值
// req.params 默认是一个空对象
// 里面存放着通过 : 动态匹配到的参数值， 注意 URL 地址不能有汉字。
// req.params