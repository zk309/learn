/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 20:52:59
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 21:17:44
 * @FilePath: \20_Vue2.0\13_使用babel处理js高级语法.js
 */

// webpack 只能打包处理一部分高级的 JavaScript 语法。对于那些 webpack 无法处理的高级语法，需要借助于
// babel-loader 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码：
// js 的高级语法：
// 1. 定义了名为 info 的装饰器
// function info(target) {
//     // 2. 为目标添加静态属性 info
//     target.info = 'Preson info'
// }

// // 3. 为 Person 类应用 info 装饰器
// @info
// class Person {}

// // 4. 打印 Person 的静态属性 info
// console.log(Person.info);

// ------------------------------------------------------------------------

// 应对方法： 使用 babel 处理 js 高级语法，安装和配置如下:

// 1.  运行如下的命令安装对应的依赖包：
// npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D

// 2. 在 webpack.config.js 的 modules -> rules 数组中， 添加 loader 规则如下：
// 在配置 babel-loader 的时候， 程序员只需要把自己的代码进行转换即可， 一定要排除 node_modules 目录中的 .js 文件。
// 因为第三方包中的 js 兼容性， 不需要程序员关心.
// { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },  // 处理 JS 高级语法

// 3. 在项目根目录下， 创建名为 babel.config.js 的配置文件，定义 Babel 的配置项如下：(固定格式)
// module.exports = {
//     // 声明 babel 可用的插件, 注意要用 JSON 格式, 将来 webpack 再调用 babel-loader 的时候， 会先加载 plugin 插件来使用。
//     plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }]]
// }
// Babel 官网：
// https://babeljs.io/docs/en/babel-plugin-proposal-decorators