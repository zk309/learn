/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 09:46:28
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 09:52:45
 * @FilePath: \20_Vue2.0\16_配置和使用clean-webpack-plugin.js
 */
// 自动清理 dist 目录下的旧文件:
// 为了在每次打包发布时，自动清理 dist 目录下的旧文件，可以安装 clean-webpack-plugin 插件：
// 1. 安装清理 dist 目录的 webpack 插件
// npm install --save-dev clean-webpack-plugin

// 2. 按需导入插件，得到插件的构造函数之后，创建插件的实例对象.
// 按需导入, 一个webpack插件，用来删除/清理你的构建文件夹:
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 创建插件的实例对象"
// const cleanPlugin = new CleanWebpackPlugin();

// 3. 把创建的 cleanPlugin 插件实例对象，挂载到 plugins 节点上；
// plugins: [htmlPlugin, cleanPlugin],