/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-25 19:51:20
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-25 19:53:26
 * @FilePath: \22_微信小程序\47_网络数据请求的限制.js
 */
// 小程序中网络数据请求的限制:
// 出于安全性方面的考虑, 小程序官方对数据接口的请求做出了如下两个限制:
// 1. 只能请求 HTTPS 类型的接口;
// 2. 必须将接口的域名添加到信任列表中;