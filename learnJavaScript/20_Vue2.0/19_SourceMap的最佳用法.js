/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 11:29:56
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 12:15:15
 * @FilePath: \20_Vue2.0\19_SourceMap的最佳用法.js
 */
// 指定为行数不暴露源码：
// 在生产环境下，如果只想定位报错的具体的行数，且不暴露源码。
// 此时可以将 devtool 的值设置为 nosources-source-map.

// bundle.js.map 存储着源码的位置信息.

// -------------------------------------------------------

// Source Map 的最佳实践：
// 1. 开发环境： 
//      1.1 建议把 devtool 的值设为 eval-source-map;
//      1.2 好处： 可以精确定位到具体的错误行;
// 2. 生产环境下：
//      2.1 建议关闭 Source Map 或将 devtool 的值设为 nosources-source-map;
//      2.2 好处：防止源码泄露，提高网站的安全性；