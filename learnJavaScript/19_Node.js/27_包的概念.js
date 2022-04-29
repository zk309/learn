/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 14:45:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 15:12:49
 * @FilePath: \19_Node.js\27_包的概念.js
 */
// 什么是包?
// Node.js 中的第三方模块又叫做包.
// 就像电脑和计算机指的是相同的东西, 第三方模块和包指的是同一个概念, 只不过叫法不同.

// 包的来源?
// 不同于 Node.js 的内置模块与自定义模块, 包是由第三方个人或团队开发出来的, 免费供所有人使用.
// 注意: Node.js 中的包都是免费且开源的, 不需要付费即可免费下载使用.

// 为什么需要包
// 由于 Node.js 的内置模块仅提供了一些底层的 API, 导致在基于内置模块进行项目开发的时候, 效率很低.
// 包是基于内置模块封装出来的, 提供了更高级, 更方便的 API, 极大地提高了开发效率.
// 包和内置模块之间的关系, 类似于 jQuery 和浏览器内置 API 之间的关系.

// 从哪里下载包
// 国外有一家 IT 公司, 叫做 npm,Inc. 这家公司旗下有一个非常著名的网站: https://www.npmjs.com ,它是全球最大的包共享平台, 你可以从这个网站
// 搜索到任何你需要的包, 只要你有足够的耐心.
// 到目前为止, 全球约 1100 多万开发人员, 通过这个包共享平台, 开发并共享了超过 120 多万个包供我们使用.
// npm,Inc. 公司提供了一个地址为 https://registry.npmjs.org/ 的服务器, 来对外公向所有的包, 我们可以从这个服务器上下载自己所需的包.
// 注意:
// 1. 从 https://www.npmjs.com 网站上搜索自己所需的包;
// 2. 从 https://registry.npmjs.org/ 服务器上下载自己所需要的包;

// 如何下载包
// npm,Inc. 公司提供了一个包管理工具, 我们可以使用包管理工具, 从 https://registry.npmjs.org/ 服务器把需要的包下载到本地使用.
// 这个包管理工具的名字叫做 Node Package Manager (简称 npm 包管理工具),这个包管理工具随着 Node.js 的按转包一起被安装到了用户的电脑上.
// 大家可以在终端中执行 npm -v 命令, 来查看自己电脑上所安装的 npm 包管理工具的版本号.