/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-02 09:46:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-02 09:50:34
 * @FilePath: \22_微信小程序\83_监听对象中所有属性的变化.js
 */
// 监听对象中所有属性的变化
// 如果某个对象中需要被监听的属性太多, 为了方便, 可以使用通配符 ** 来监听对象中所有属性的变化.

// observer: {
  // 使用通配符 ** 监听对象上所有属性的变化
//   'rgb.**': function(obj) {
//     this.setDate({
//       fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
//     })
//   }
// }