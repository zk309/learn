/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-18 12:10:03
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-18 13:36:21
 * @FilePath: \19_Node.js\31_npm的其他注意点.js
 */
// 初次装包多了那些文件:
// 初次装包后, 在项目文件夹下多一个叫做 node_modules 的文件夹和 package-lock.json 的配置文件.
// 其中:
// node_modules 文件夹用来存放所有已安装到项目中的包. require() 导入第三方包时, 就是从这个目录中查找并加载包;
// package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息. 例如包的名字, 版本号, 下载地址等;
// 注意: 程序员不要手动修改 node_modules 或 package-lock.json 文件中的任何代码, npm 包管理工具会自动维护它们;



// 安装指定版本的包
// 默认情况下, 使用 npm install 命令安装包的时候, 会自动安装最新版本的包, 如果需要安装指定版本的包, 可以在包名之后,
// 通过 @ 符号制定具体的版本, 例如:
// npm i moment@2.22.2



// 包的语义化版本规范
// 包的版本号是以 "点分十进制" 形式进行定义的, 总共有三位数字, 例如 2.22.2
// 其中每一位数字所代表的含义如下:
// 第 1 位数字: 大版本;
// 第 2 位数字: 功能版本;
// 第 3 位数字: Bug修复版本;
// 版本号提升的规则: 只要前面的版本号增长了, 则后面的版本号归零.