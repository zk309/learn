/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 13:31:41
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 14:05:59
 * @FilePath: \20_Vue2.0\10_使用loader加载器打包处理css文件.js
 */
// 1. 运行命令, 安装处理 css 文件的 loader
// npm i style-loader@3.0.0 css-loader@5.2.6 -D

// 2. 在 webpack.config.js 的 module => rules 数组中, 添加 loader 规则如下:
// loader 加载器:
    // module: {
    //     rules: [  // 所有第三方模块的匹配规则
    //         { test: /\.css$/, use: ['style-loader', 'css-loader'] }  // .css 文件
    //     ]
    // }

// 其中, test 表示匹配的文件类型, user 表示对应要调用的 loader
// 注意:
// 1. use 数组中指定的 loader 顺序是固定的;
// 2. 多个 loader 的调用顺序是: 从后往前调用;

// -------------------------------------------------------------------

// loader 加载器处理 .css 文件的过程:
// 1. webpack 默认只能打包处理 .js 结尾的文件. 处理不了其他后缀的文件;
// 2. 由于代码中包含了 index.css 这个文件, 因此 webpack 默认处理不了;
// 3. 当 webpack 发现某个文件处理不了的时候, 会查找 webpack.config.js 这个配置文件, 看 module.rules 数组中, 是否配置了对应的 loader 加载器;
// 4. webpack 把 index.css 这个文件, 先转交最后一个 loader 进行处理 (先转交给 css-loader);
// 5. 当 css-loader 处理完毕之后, 会把处理的结果, 转交给下一个 loader (转交给 style-loader);
// 6. 当 style-loader 处理完毕之后, 发现没有下一个 loader 了, 于是就把处理的结果, 转交给 webpack;
// 7. webpack 把 style-loader 处理的结果, 合并到 /dist/bundle.js 中, 最终生成打包好的文件;