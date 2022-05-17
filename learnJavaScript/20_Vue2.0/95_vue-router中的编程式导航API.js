/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 14:03:36
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-14 14:23:34
 * @FilePath: \20_Vue2.0\95_vue-router中的编程式导航API.js
 */
// vue-router 提供了许多编程式导航的 API, 其中最常见的导航 API 分别是:
// 1. this.$router.push('hash地址');
//    跳转到指定 hash 地址, 并增加一条历史记录.

// 2. this.$router.replace('hash 地址);
//    跳转到指定的 hash 地址, 并替换掉当前的历史记录.

// 3. this.router.go(数值 n).
// 在实际开发中, 一般只会前进和后退一层页面, 因此 vue-router 提供了如下两个便捷方法:
// $router.back()  在历史纪录中, 后退到上一个页面;
// $router.forward()  在历史纪录中, 前进到上一个页面;
