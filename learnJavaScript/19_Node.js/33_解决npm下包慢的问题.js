/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-18 17:40:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-28 13:33:04
 * @FilePath: \19_Node.js\33_解决npm下包慢的问题.js
 */
// 为什么下包慢?
// 在使用 npm 下包的时候, 默认从国外的 https://registry.npmjs.org/ 服务器进行下载, 此时, 网路数据的传输需要经过漫长的海底光缆, 因此下包速度会很慢.
// 扩展阅读 - 海底光缆:
// https://baike.baidu.com/item/%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/4107830
// https://baike.baidu.com/item/%E4%B8%AD%E7%BE%8E%E6%B5%B7%E5%BA%95%E5%85%89%E7%BC%86/10520363
// https://baike.baidu.com/item/APG/23647721?fr=aladdin



// 淘宝 NPM 镜像服务器
// 淘宝在国内搭建了一个服务器, 专门把国外服务器上的包同步到国内的服务器, 然后在国内提供下包的服务, 从而极大地提高了下包的速度.
// 扩展: 镜像 (Mirroring) 是一种文件存储形式, 一个磁盘上的数据在另一个完全相同的副本即为镜像.



// 切换 npm 的下包镜像源
// 下包的镜像源, 指的就是下包的服务器地址
// # 查看当前的下包镜像源
// npm config get registry
// # 将下包的镜像源切换为淘宝镜像源
// npm config set registry=https://registry.npmmirror.com/
// # 检查镜像源是否下载成功
// npm config get registry



// nrm 
// 为了更方便的切换下包的镜像源, 我们可以安装 nrm 这个小工具, 利用 nrm 提供的终端命令, 可以快速查看和切换下包的镜像源.
// # 通过 npm 包管理器, 将 nrm 安装为全局可用的工具
// npm i nrm -g
// # 查看所有可用的镜像源
// nrm ls
// # 将下包的镜像源切换为 taobao 镜像
// nrm use taobao