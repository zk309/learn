/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-22 12:55:20
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-22 13:02:13
 * @FilePath: \19_Node.js\zk309-body-parse\index.js
 */
// 导入 querystring 模块, 专门用来处理查询字符串.
const qs = require('querystring');

 function  bodyParse(req, res, next) {
    // 2. 监听 req 的 data 事件;
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    });

    // 3. 监听 req 的 end 事件;
    req.on('end', () => {
        // console.log(str);
        // 4. 使用 querystring 模块解析请求体数据;
        const body = qs.parse(str);
        console.log(body);
        // 5. 将解析出来的数据对象挂载为 req.body;
        req.body = body;
        next(); // next() 函数需写在 req 的 on 事件中.
    });    
}

module.exports = bodyParse;