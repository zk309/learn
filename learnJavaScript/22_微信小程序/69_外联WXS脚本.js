/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-28 17:33:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 02:23:29
 * @FilePath: \22_微信小程序\69_外联WXS脚本.js
 */
// 定义外联的 WXS 脚本以及注意:
// WXS 代码还可以编写在以 .wxs 为后缀名的文件内, 就像 JavaScript 代码可以编写在以 .js 为后缀名的文件中.
// 注意: 在 .wxs 文件向外导出的时候, 别名不能省略, 例如 module.exports = { toLower: toLower }

// 使用外联的 WXS 脚本步骤:
// 1. 新建 utils/toLower.wxs 文件.
// 2. 定义 <wxs></wxs> 标签, 必须有 module 和 src 属性; (module用来指定模板的名称, src用来指定脚本路径,必须是相对路径,以 '/' 开头)
// 3. 利用模板名称调用模板语法;

/****
 * toLower.wxs
 * 
  // 将文本转化为小写
  function toLower(str) {
    return str.toLowerCase();
  }

  module.exports = {
    toLower: toLower
  }
 */

/****
 * .wxml
 * <view class="weight">{{ m2.toLower(userName1) }}</view>
 * <wxs module="m2" src="/utils/toLower.wxs"></wxs>
 */

// -----------------------------------------------------------------

