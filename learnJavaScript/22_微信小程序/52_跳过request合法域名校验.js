/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-25 20:56:13
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-25 21:04:29
 * @FilePath: \22_微信小程序\52_跳过request合法域名校验.js
 */
// 跳过request合法域名校验:
// 如果后端程序员仅仅提供了 http 协议的接口, 暂时没有提供 https 协议的接口.
// 此时, 为了不耽误开发的进度, 我们可以在微信开发者工具中, 临时开启 '开发环境不校验请求域名, TLS 版本及 HTTPS 证书' 选项, 跳过 request 合法域名的校验.

// 步骤:
// 微信开发者工具  -->  详情  -->  本地设置  -->  勾选 '不校验合法域名, web-view(业务域名), TLS 版本以及 HTTPS 证书'
// 注意: 这个选项仅限开发与调试阶段使用, 上传代码时, 要取消勾选.