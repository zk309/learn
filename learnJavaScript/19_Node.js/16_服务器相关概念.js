/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-16 11:02:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 09:38:07
 * @FilePath: \19_Node.js\16_服务器相关概念.js
 */

// IP 地址
// IP 地址就是互联网上每台计算机的唯一地址，因此 IP 地址具有唯一性。如果把"个人电脑"比作"一台电话"，那么"IP 地址"就相当于"电话号码", 
// 只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

// IP 地址的格式：通常用 "点分十进制" 表示成 (a.b.c.d) 的形式，其中，a.b.c.d 都是 0~255 之间的十进制整数。
// 例如: 用点分十进制表示的 IP 地址 (192.168.1.1)

// 注意：
// 1. 互联网中每台 Web 服务器，都有自己的 IP 地址，例如：大家可以在 Windows 的终端中运行 ping www.baidu.com 命令，即可查看百度服务器的 IP 地址；
// 2. 在开发期间，自己的电脑既是一台服务器，又是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址，就能把自己的电脑当作一台服务器进行访问了。



// 域名和域名服务器
// 尽管 IP 地址能够唯一的标识网络上的计算机，但 IP 地址是一串数字，不直观，而且不方便记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名 (Domain Name) 地址；

// IP 地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器 (DNS, Domain name server) 的电脑中，使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。
// 因此，域名服务器就是提供 IP 地址和域名之间的转换服务的服务器；

// 注意：
// 1. 单纯使用 IP 地址，互联网中的电脑也能够正常工作，但是有了域名的加持，能让互联网变得更加方便；
// 2. 在开发测试期间，127.0.0.1 对应的域名是 localhost, 它们都代表我们自己的这台电脑，在使用效果上没有任何区别；



// 端口号
// 计算机中的端口号，就好像是现实生活中的门牌号一样，通过门牌号码，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。

// 同样的道理，在一台电脑中，可以运行成百上千个 web 服务，每个 Web 服务都对应一个唯一的端口号，
// 客户端发送过来的网络请求，通过端口号，可以被准确的交给对应的 Web  服务进行处理。

// 注意：
// 1. 每个端口号不能被多个 Web 服务占用；
// 2. 在实际应用中， URL 中的 80 端口可以被忽略。
