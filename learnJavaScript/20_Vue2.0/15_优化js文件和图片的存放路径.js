/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 08:30:53
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 08:44:52
 * @FilePath: \20_Vue2.0\15_优化js文件和图片的存放路径.js
 */
// 把 JavaScript 文件统一生成到 js 目录中：
// 在 webpack.config.js 配置文件的 output 节点中，进行如下的配置：
    // output: {
    //     path: path.join(__dirname, './dist/'),  // 输出文件的存放路径
    //     filename: 'js/bundle.js'  // 输出文件的名称, 优化 js 文件的存放路径，把生成的 bundle.js 文件存放到 dist 目录下的 js 子目录中.
    // }

// -------------------------------------------------------------

// 把图片文件统一生成到 images 目录中：
// 修改 webpack.config.js 中的 url-loader 配置项，新增 outputPath 选项即可指定图片文件的输出路径：
// { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=images' },  // 图片文件, 优化图片的存放路径, 在配置 url-loader 的时候， 多个参数之间，使用 & 符号进行分隔.