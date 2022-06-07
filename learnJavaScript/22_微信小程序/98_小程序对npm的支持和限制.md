<!--
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-04 10:40:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-04 10:45:27
 * @FilePath: \22_微信小程序\98_小程序对npm的支持和限制.md
-->
#### 小程序对 npm 的支持和限制
目前，小程序中已经支持使用 npm 安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用 npm 包有如下 3 个限制：
1. 不支持依赖于 Node.js 内置库的包；
2. 不支持依赖于浏览器内置对象的包；
3. 不支持依赖于 C++ 插件的包；

总结： 虽然 npm 的包千千万，但是能供小程序使用的包却 "为数不多".