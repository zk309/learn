/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 18:37:21
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 18:40:17
 * @FilePath: \20_Vue2.0\12_使用loader加载器打包处理图片文件.js
 */
// 1. 运行 npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令；

// 2. 在 webpack.config.js 的 modules -> rules 数组中， 添加 loader 规则如下：
// loader 加载器:
//     module: {
//         rules: [  // 所有第三方模块的匹配规则
//             { test: /\.css$/, use: ['style-loader', 'css-loader'] },  // .css 文件
//             { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },  // .less 文件
//             { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }  // 图片文件
//         ]
//     }
// }

// 其中， ? 之后的是 loader 的参数项：
// 1. limit 用来指定图片的大小， 单位是字节( byte );
// 2. 只有 <= limit 大小的图片， 才会被转为 base64 格式的图片；