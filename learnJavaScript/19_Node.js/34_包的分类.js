/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 01:46:11
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 09:24:23
 * @FilePath: \19_Node.js\34_包的分类.js
 */

// 包的分类:
// 使用 npm 包管理工具下载的包, 共分为两大类, 分别是:
// 1. 项目包;
// 2. 全局包;


// 1. 项目包
// 那些被安装到项目的 node_modules 目录中的包, 都是项目包.
// 项目包又分为两大类, 分别是:
// 1. 开发依赖包 (被记录到 devDependencies 节点中的包, 只在开发期间会用到);
// 2. 核心依赖包 (被记录到 dependencies 节点中的包, 在开发期间和项目上线之后都会用到)
// npm i 包名 -D  # 开发依赖包 (会被记录到 devDependencies 节点下);
// npm i 包名     # 核心依赖包 (会被记录到 dependencies 节点下);


// 全局包
// 在执行 npm install 命令时, 如果使用了 -g 参数, 则会把包安装为全局包.
// 全举报会被安装到 C:\Users\pc\AppData\Roaming\npm\node_modules 目录下, npm root -g 命令即可查看.
// 注意:
// 1. 只有工具性质的包, 才有全局安装的必要性, 因为它们提供了好用的终端命令;
// 2. 判断某个包是否需要全局安装后才能使用, 可以参考官方提供的使用说明即可.


// i5ting_toc .html小工具:
// i5ting_toc 是一个可以把 md 文档转换为 html 页面的小工具, 使用步骤如下:
// # 将 i5ting_toc 安装为全局包
// npm install -g i5ting_toc
// # 调用 i5ting_toc, 轻松实现 .md 转 .html 的功能.
// i5ting_toc -f 要转换的.md文件路径 -o