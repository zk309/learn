/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 18:41:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 09:01:19
 * @FilePath: \20_Vue2.0\98_控制访问权限.js
 */
// 直接来代码:
// demo:
/*
router.beforeEach(function(to, from, next) {
  // console.log(to)
  // console.log(from)
  // next()
  if (to.path === '/Main') {
    // console.log(localStorage.getItem('token'))
    const token = localStorage.getItem('token')
    if (token) {
      next() // 访问的是后台主页, 且有 token 的值.
    } else {
      next('/Login') // 访问的是后台主页, 但是没有 token 的值.
    }
  } else {
    next() // 访问的不是主页, 直接放行.
  }
})
*/
