/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-15 11:24:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-15 19:11:00
 * @FilePath: \19_Node.js\14_clock时钟案例.js
 */
// 案例的实现步骤：
// 1. 创建两个正则表达式，分别用来匹配 <style> 和 <script>标签；
// 2. 使用 fs 模块，读取需要被处理的 HTML 文件；
// 3. 自定义 resolveCSS 方法，来写入 index.css 样式文件；
// 4. 自定义 resolveJS 方法，来写入 index.js 脚本文件；
// 5. 自定义 resolveHTML 方法，来写入 index.html 文件；
// 注意：
// fs.writeFile() 方法只能用来创建文件，不能用来创建路径；
// 重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容;

const fs = require('fs');
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, './13_clock时钟案例/index.html'), 'utf8', function(err, data) {
    if (err) {
        return console.log('读取文件失败!' + err);
    };
    // console.log(data);

    // 处理 CSS 样式
    resolveCSS(data);
    // 处理 JS 脚本
    resolveJS(data);
    // 处理 html 文件
    resolveHtml(data);
});

// 处理 Html 文件函数
function resolveHtml(htmlStr) {
    const newStr = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>');
    // console.log(newStr);
    fs.writeFile(path.join(__dirname, './13_clock时钟案例/index.html'), newStr, 'utf8', err => {
        if (err) {
            return console.log('写入HTML失败!' + err);
        };
         console.log('!-_-!HTML写入文件成功!-_-!');
    });
};

// 处理 CSS 样式函数
function resolveCSS(htmlStr) {
    // 1. 使用正则提取页面中的 <style></style> 标签
    const r1 = regStyle.exec(htmlStr);
    // console.log(r1[0]);
    // 2. 将提取出来的样式字符串，做进一步的处理
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // console.log(newCSS);
    // 3. 将提取出来的 CSS 样式，写入到 index.css 文件中
    fs.writeFile(path.join(__dirname, './13_clock时钟案例/index.css'), newCSS, 'utf8', err => {
        if (err) {
             return console.log('写入CSS失败!' + err);
        };
        console.log('!-_-!CSS写入文件成功!-_-!');
    });
};

// 处理 JS 脚本函数
function resolveJS(htmlStr) {
    // 1. 使用正则提取页面中的 <script></script> 标签
    const r2 = regScript.exec(htmlStr);
    // console.log(r2[0]);
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    // console.log(newJS);
    fs.writeFile(path.join(__dirname, './13_clock时钟案例/index.js'), newJS, 'utf8', err => {
        if (err) {
             return console.log('写入JavaScript失败!' + err);
        };
        console.log('!-_-!JavaScript写入文件成功!-_-!');
    });
};