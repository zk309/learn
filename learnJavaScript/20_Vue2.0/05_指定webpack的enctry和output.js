/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 08:04:33
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 10:39:13
 * @FilePath: \20_Vue2.0\05_指定webpack的enctry和output.js
 */

// 在 webpack4.x 和 5.x 的版本中, 有如下的默认约定:
// 1. 默认的打包入口文件为: src -> index.js
// 2. 默认的输出文件路径为: dist -> main.js
// 注意: 可以在 webpack.config.js 中修改打包的默认约定.

// ---------------------------------------------------------------

// entry 导入 与 output 导出:
// 在 webpack.config.js 配置文件中, 通过 entry 节点指定打包的入口. 通过 output 节点指定打包的出口.
// entry: '', // 打包的入口
// output: {
//    path: '', // 输出文件的存放路径
//    filename: '' // 输出文件的名称
// }
// demo:
// module.exports = {
//     mode: 'development',  // mode 用来指定构建模式, 可选的值有 development 和 production
//     entry: path.join(__dirname, './src/index.js'),  // 打包的入口
//     output: {
//         path: path.join(__dirname, './dist/'),  // 输出文件的存放路径
//         filename: 'bundle.js'  // 输出文件的名称
//     }
// }