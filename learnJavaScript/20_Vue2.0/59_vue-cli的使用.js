/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-06 09:17:22
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-06 18:25:24
 * @FilePath: \20_Vue2.0\59_vue-cli的使用.js
 */
// vue-cli 的使用:

// 1. 在终端下运行如下的命令, 创建指定名称的项目:
// vue create 项目名称

// 2. vue 项目中 src 目录的构成:
// assets 文件夹:  存放项目中用到的静态资源文件, 例如: css 样式表, 图片资源.
// components 文件夹:  程序员封装的, 可复用的组件, 都要放到 components 目录下.
// main.js  是项目的入口文件. 整个项目的运行, 都要先执行 main.js.
// APP.vue  是项目的根组件.

// --------------------------------------------------------------------------

// vue 项目的运行流程:
// 在工程化的项目中, vue 要做的是很单纯: 通过 main.js 把 App.vue 渲染到 index.html 的指定区域中.

// 其中:
// 1. App.vue  用来编写带渲染的模板结构;
// 2. index.html  中需要预留一个 el 区域;
// 3. main.js  把 App.vue 渲染到了 index.html 所预留的区域中;