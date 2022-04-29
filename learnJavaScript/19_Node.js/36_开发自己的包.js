/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 09:54:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 13:58:58
 * @FilePath: \19_Node.js\36_开发自己的包.js
 */
// 开发属于自己的包
// 需要实现的功能
// 1. 格式化日期;
// 2. 转义 HTML 中的特殊字符;
// 3. 还原 HTML 中的特殊字符;

const zk309 = require('./zk309');

// 功能 1:
const dt = zk309.dateFormat(new Date());
console.log(dt); // 输出 2022-04-19 11:33:40

// 功能 2:
const htmlStr = '<h1 style="red">你好!&</h1>';
const str = zk309.htmlEscape(htmlStr);
console.log(str); // &lt;h1 style=&quot;red&quot;&gt;你好!&amp;&lt;/h1&gt;

// 功能 3:
const rawStr = zk309.htmlUnEscape(str);
console.log(rawStr); // <h1 style="red">你好!&</h1>

// 初始化包的基本结构:
// 1. 新建 zk309 文件夹, 作为包的根目录
// 2. 在 zk309 文件中, 新建如下三个文件:
// 2.1 package.json (包管理配置文件)
// 2.1.1 关于更多 license 许可协议相关的内容, 可参考 https://www.jianshu.com/p/1cc3fa3a0306
// 2.2 index.js (包的入口文件)
// 2.3 README.md (包的说明文档)

// 将不同的功能进行模块化拆分
// 1. 将格式化时间的功能, 拆分到 src -> dateFormat.js 中;
// 2. 将处理 HTML 字符串的功能, 拆分到 src -> htmlEscape.js 中;
// 3. 在 index.js 中, 导入两个模块, 得到需要向外共享的方法;
// 4. 在 index.js 中, 使用 modules.exports 把对应的方法共享出去;

// const fs = require('fs');
// fs.writeFile('./zk309/htmlEscape.js', '//htmlEscape.js  文件', function(err) {
//     // console.log(err);

//     // 判断文件是否成功:
//     if (err) {
//         return console.log('写入文件失败' + err);
//     }
//     console.log('写入文件成功!');
// });


// 编写包的说明文档
// 包根目录中的 README.md 文件, 是包的使用文档, 通过它, 我们可以事先把包的使用说明, 以 markdown 的格式写出来, 方便用户参考.
// README 文件中具体写什么内容, 没有强制性的要求; 只要能够清晰地把包的作用, 用法, 注意事项等被描述清楚即可.
// 我们所创建的这个包地 README.md 文档中, 会包含以下 6 项内容:
// 安装方式, 导入方式, 格式化时间, 转义 HTML 中的特殊字符, 还原 HTML 中的特殊字符, 开源协议.