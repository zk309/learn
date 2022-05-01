/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 08:36:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 12:17:24
 * @FilePath: \20_Vue2.0\07_安装配置webpack-dev-server插件.js
 */
// 安装 webpack-dev-server 的目的: 提供的一个小型 Express 服务器.

// 安装:
// 终端运行如下的命令:
// npm install webpack-dev-server@3.11.2 -D

// 配置:
// 1. 修改 package.json -> scripts 中的 dev 命令如下:
//   "scripts": {
//     "dev": "webpack server"  // script 节点下的脚本, 可以通过 npm run 执行.
//   },
// 2. 再次运行 npm run dev 命令, 重新进行项目的打包;
// 3. 在浏览器中访问 http://localhost:8080 地址, 查看自动打包效果;
//    注意: webpack-dev-server 会启动一个实时打包的 http 服务器
// 第四项选择哪个都可以.
// 4. 配置 "scripts": 
//  "scripts": {
//     "dev": "webpack server --open --port 8080 --content-base src --hot"
//   },
// 4. 在 webpack.config.js 配置文件中, 可以通过 devServer 节点对 webpack-dev-server 插件进行更多配置:
//     devServer: {
//         open: true,  // 初次打包的完成后, 自动打开浏览器
//         host: '127.0.0.1',  // 实时打包所使用的主机地址
//         port:80  // 实时打包所使用的端口号
//     }
// ----------------------------------------

// webpack-dev-server 打包生成的 bundle.js 文件并没有存放到实际的物理磁盘上 而是直接托管到了内存中.
// 因此 在项目的根目录中是找不到该 bundle.js 的
// 可以认为webpack-dev-server在项目根目录下放置了一个虚拟的 bundle.js
// 因为 物理磁盘会有转速的限制 若托管到内存 速度会比在物理磁盘快很多
// 原文链接：https://blog.csdn.net/Piconjo/article/details/105726663

// --------------------------------------

// 常用参数的配置:
// 1. webpack-dev-server打包完毕后自动打开浏览器：
// 在 package.json 脚本配置中的 webpack server 后加上 --open
// 2. 修改服务器端口号：
// 在 package.json 脚本配置中的 webpack server 后加上 --port 端口号
// 3. 指定进入服务器后默认访问路径：
// 在 package.json 脚本配置中的 webpack server 后加上 --content-base 路径
// 4. 开启热重载：
// 未配置热重载之前 打包是重新生成整份的JS文件
// 而热重载会生成变动的代码的补丁 对原本的JS文件进行局部更新 减少不必要的代码更新
// 且开启热重载之后 可实现CSS样式修改时 页面的无刷新更新(异步)
// 在 package.json 脚本配置中的 webpack server 后加上 --hot