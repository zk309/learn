/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-28 00:04:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-28 00:19:01
 * @FilePath: \22_微信小程序\68_内嵌WXS脚本.js
 */
// 内嵌 WXS 脚本:
// WXS 代码可以编写在 WXML 文件中的 <wxs></wxs> 标签内, 就像 JavaScript 代码可以编写在 html 文件中的 <script></script> 标签内一样.

// WXML 文件中的每个 <wxs></wxs> 标签, 必须提供 module 属性, 用来指定当前 wxs 的模板名称. 方便在 wxml 中访问模块中的成员.

/*
<view class="weight">{{ m1.toUpper(userName)  }}</view>

<wxs module="m1">
  将文本转化为大写
  module.exports.toUpper = function (str) {
    return str.toUpperCase();
  }
</wxs>
*/