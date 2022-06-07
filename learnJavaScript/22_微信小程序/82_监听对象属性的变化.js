/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 19:17:59
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 20:24:35
 * @FilePath: \22_微信小程序\82_监听对象属性的变化.js
 */
// 监听对象属性的变化
// 数据监听器支持监听对象中单个或多个属性的变化, 示例代码如下:
Component({
  observers: {
    '对象.属性A, 对象.属性B': function(属性A的新值, 属性B的新值) {
      // 触发此监听器的 3 种情况
      // [为属性 A 赋值]  使用 setData 设置 this.data.对象.属性 B 时触发
      // [为属性 B 赋值]  使用 setData 设置 this.data.对象.属性 B 时触发
      // [直接为对象赋值] 使用 setData 设置 this.data.对象 时触发
      // do something
    }
  }
})