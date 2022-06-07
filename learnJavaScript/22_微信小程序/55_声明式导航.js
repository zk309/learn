/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-26 15:51:16
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-26 18:45:50
 * @FilePath: \22_微信小程序\55_声明式导航.js
 */
// 导航到 tabBer 页面:
// tabBer 页面指的是被配置为  tabBer 的页面.
// 在使用 <navigation></navigation> 组件跳转到指定的 tabBer 页面时, 需要指定 url 属性和 open-type 属性,
// 注意: 1. url 表示要跳转的页面的地址, 必须以 / 开头;
//       2. open-type  表示跳转的方式, 必须为 switchTab;
/*
  demo:
<!-- 跳转到 tabBer 页面 -->
  <navigator url="/pages/home/home" open-type="switchTab">
    <button type="default">跳转到首页</button>
  </navigator>
*/



// 导航到非 tabBer 页面:
// 非 tabBar 页面指的是没有被配置为 tabBer 的页面.
// 在使用 <navigation></navigation> 组件跳转到普通的非 tabBer 页面时, 则需要指定 url 属性和 open-type 属性,
// 注意: 1. url 表示要跳转的页面的地址, 必须以 / 开头;
//       2. open-type  表示跳转的方式, 必须为 navigate;
//       3. 为了简便, 在导航到非 tabBer 页面时, open-type="navigate" 属性可以省略;
/*
  demo:
<!-- 跳转到非 tabBer 页面 -->
  <navigator url="/pages/logs/logs" open-type="navigate">
    <button type="default">跳转到 logo (非 tabBer 页面)</button>
  </navigator>
*/



// 后退导航:
// 如果要后退到上一页面或多级页面, 则需要指定 open-type 属性和 delta 属性.
// 注意:
// 1. open-type 的值必须是 navigateBack, 表示要进行后退导航;
// 2. delta 的值必须是数字, 表示要后退的层级;
// 3. 如果只是后退到上一页面, 则可以省略 delta 属性.
/**
 * demo:
 *<navigator open-type="navigateBack" delta="1">
     <button type="primary">返回上一页</button>
  </navigator>
 */